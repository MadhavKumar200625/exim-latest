// /app/global-companies-list/api/route.js

import { NextResponse } from "next/server";
import redis from "@/libs/redis";
import "@/libs/httpAgent";

export const dynamic = "force-dynamic";
export const revalidate = 0;

/* -----------------------------------------
   Constants
------------------------------------------ */
const API_URL = "http://103.30.72.94:8012/companyDistinctCount";
const AUTH = "Basic YWJjOmFiY0AxMjM=";

const CACHE_TTL = 3600;
const UPSTREAM_TIMEOUT = 8000;
const MAX_CONCURRENCY = 50;

/* -----------------------------------------
   In-flight deduplication
------------------------------------------ */
const inFlight = global.companyListInFlight || new Map();
global.companyListInFlight = inFlight;

/* -----------------------------------------
   Concurrency limiter (IIS-like)
------------------------------------------ */
let activeUpstream = 0;

async function withLimit(fn) {
  if (activeUpstream >= MAX_CONCURRENCY) {
    throw new Error("BUSY");
  }
  activeUpstream++;
  try {
    return await fn();
  } finally {
    activeUpstream--;
  }
}

/* -----------------------------------------
   Helpers
------------------------------------------ */
function safeJson(text) {
  try {
    return JSON.parse(text);
  } catch {
    return { data: [] };
  }
}

async function fetchWithTimeout(url, payload) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), UPSTREAM_TIMEOUT);

  try {
    return await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: AUTH,
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
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
      { defaultLetter: "", totalValues: 0, companies: [] },
      { status: 200 }
    );
  }

  const {
    country = "",
    page = "",
    from_ = "",
    to = "",
    company_start_from = "",
    source = "all",
    type = "master",
  } = body;

  if (!country || !page) {
    return NextResponse.json(
      { defaultLetter: "", totalValues: 0, companies: [] },
      { status: 200 }
    );
  }

  const [letter, pageNum] = page.split("-");
  const startLetter = company_start_from || letter?.toUpperCase() || "";

  const payload = {
    source,
    type,
    country_name: country.toLowerCase(),
    company_start_from: startLetter,
    from_: from_ || ((parseInt(pageNum) - 1) * 100 + 1),
    to: to || (parseInt(pageNum) * 100),
  };

  const cacheKey = `company-list:${country}:${page}`;

  /* ---------- Redis ---------- */
  try {
    const cached = await redis.get(cacheKey);
    if (cached) {
      return NextResponse.json(JSON.parse(cached), {
        headers: { "X-Cache": "HIT", "Cache-Control": "public, max-age=3600" },
      });
    }
  } catch {}

  /* ---------- Deduplicate identical requests ---------- */
  if (inFlight.has(cacheKey)) {
    return inFlight.get(cacheKey);
  }

  const promise = (async () => {
    try {
      const res = await withLimit(() =>
        fetchWithTimeout(API_URL, payload)
      );

      const text = await res.text();
      const parsed = safeJson(text);

      const responseData = {
        defaultLetter: startLetter,
        totalValues: parsed?.data?.[0]?.["Total Count"] ?? 0,
        companies: Array.isArray(parsed?.data?.[0]?.Company)
          ? parsed.data[0].Company
          : [],
      };

      redis.set(cacheKey, JSON.stringify(responseData), "EX", CACHE_TTL).catch(
        () => {}
      );

      return NextResponse.json(responseData, {
        headers: { "X-Cache": "MISS", "Cache-Control": "public, max-age=3600" },
      });
    } catch {
      // graceful degradation (never break frontend)
      return NextResponse.json(
        {
          defaultLetter: startLetter,
          totalValues: 0,
          companies: [],
        },
        { status: 200 }
      );
    } finally {
      inFlight.delete(cacheKey);
    }
  })();

  inFlight.set(cacheKey, promise);
  return promise;
}