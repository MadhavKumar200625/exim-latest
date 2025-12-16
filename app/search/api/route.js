// /app/search/api/route.js
import { NextResponse } from "next/server";
import redis from "@/libs/redis";
import "@/libs/httpAgent";

/* -----------------------------------------
   Runtime & caching behavior
------------------------------------------ */
export const dynamic = "force-dynamic"; // ❗ NEVER static for POST
export const revalidate = 0;

/* -----------------------------------------
   Constants
------------------------------------------ */
const UPSTREAM = "http://103.30.72.94:8011/distinctCount";
const AUTH_HEADER = "Basic YWJjOmFiY0AxMjM=";
const CACHE_TTL = 1800;
const UPSTREAM_TIMEOUT = 8000;
const REDIS_TIMEOUT = 50;
const MAX_CONCURRENCY = 50;

/* -----------------------------------------
   In-flight request coalescing
------------------------------------------ */
const inFlight = global.inFlightSearch || new Map();
global.inFlightSearch = inFlight;

/* -----------------------------------------
   Simple concurrency limiter
------------------------------------------ */
let activeUpstream = 0;
async function withUpstreamLimit(fn) {
  if (activeUpstream >= MAX_CONCURRENCY) {
    throw new Error("Upstream overloaded");
  }
  activeUpstream++;
  try {
    return await fn();
  } finally {
    activeUpstream--;
  }
}

/* -----------------------------------------
   Safe JSON parsing
------------------------------------------ */
function safeJSON(text) {
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

/* -----------------------------------------
   Timed Redis GET
------------------------------------------ */
async function redisGetSafe(key) {
  try {
    return await Promise.race([
      redis.get(key),
      new Promise((r) => setTimeout(() => r(null), REDIS_TIMEOUT)),
    ]);
  } catch {
    return null;
  }
}

/* -----------------------------------------
   Timed fetch
------------------------------------------ */
async function fetchWithTimeout(url, options, timeoutMs) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);

  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(id);
  }
}

/* -----------------------------------------
   POST handler
------------------------------------------ */
export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const {
    type = "export",
    country = "",
    product = "",
    hscode = "",
    port = "",
    countryin = "",
  } = body;

  /* -----------------------------------------
     Build payload
  ------------------------------------------ */
  const customsCountries = new Set([
    "argentina","bangladesh","bolivia","botswana","burundi",
    "cameroon","chile","colombia","costa_rica","cote_d_ivoire",
    "dr_congo","ecuador",
  ]);

  const source = customsCountries.has(country.toLowerCase())
    ? country.toLowerCase()
    : "all";

  const payload = {
    source,
    type: "master",
    size: 10,
    filters: {},
    distinct_filters: [],
  };

  if (type === "export") {
    payload.filters.origin_country = country;
    if (product) payload.filters.Product_Description = product;
    if (hscode) payload.filters.hs_code = `${hscode}%`;
    if (countryin) payload.filters.destination_country = countryin;
    if (port) payload.filters.Port_of_loading = port;
    payload.distinct_filters = ["destination_country", "hs_code", "Port_of_loading"];
  } else {
    payload.filters.destination_country = country;
    if (product) payload.filters.Product_Description = product;
    if (hscode) payload.filters.hs_code = `${hscode}%`;
    if (countryin) payload.filters.origin_country = countryin;
    if (port) payload.filters.Port_of_Unloading = port;
    payload.distinct_filters = ["origin_country", "hs_code", "Port_of_Unloading"];
  }

  const cacheKey = `search:${JSON.stringify(payload)}`;

  /* -----------------------------------------
     1️⃣ Redis (non-blocking)
  ------------------------------------------ */
  const cached = await redisGetSafe(cacheKey);
  if (cached) {
    const parsed = safeJSON(cached);
    if (parsed) {
      return NextResponse.json(
        { success: true, data: parsed },
        { headers: { "X-Cache": "HIT", "Cache-Control": "public, max-age=1800" } }
      );
    }
  }

  /* -----------------------------------------
     2️⃣ Coalesce identical requests
  ------------------------------------------ */
  if (inFlight.has(cacheKey)) {
    return inFlight.get(cacheKey);
  }

  const upstreamPromise = (async () => {
    try {
      const res = await withUpstreamLimit(() =>
        fetchWithTimeout(
          UPSTREAM,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: AUTH_HEADER,
            },
            body: JSON.stringify(payload),
          },
          UPSTREAM_TIMEOUT
        )
      );

      if (!res.ok) {
        return NextResponse.json(
          { success: false, message: "Upstream unavailable" },
          { status: 502 }
        );
      }

      const text = await res.text();
      const json = safeJSON(text);

      if (!json || !Array.isArray(json.data)) {
        return NextResponse.json(
          { success: false, message: "Invalid upstream response" },
          { status: 502 }
        );
      }

      // Async Redis SET (never block response)
      redis.set(cacheKey, JSON.stringify(json), "EX", CACHE_TTL).catch(() => {});

      return NextResponse.json(
        { success: true, data: json },
        { headers: { "X-Cache": "MISS", "Cache-Control": "public, max-age=1800" } }
      );

    } catch (err) {
      return NextResponse.json(
        { success: false, message: "Service busy, retry shortly" },
        { status: 503 }
      );
    } finally {
      inFlight.delete(cacheKey);
    }
  })();

  inFlight.set(cacheKey, upstreamPromise);
  return upstreamPromise;
}