import { NextResponse } from "next/server";
import redis from "@/libs/redis";
import "@/libs/httpAgent";

export const dynamic = "force-dynamic";
export const revalidate = 0;

/* ---------------- constants ---------------- */
const UPSTREAM = "http://103.30.72.94:8001/globalPortLoading";
const AUTH = "Basic YWJjOmFiY0AxMjM=";
const CACHE_TTL = 3600;
const UPSTREAM_TIMEOUT = 12000;
const MAX_CONCURRENCY = 50;

/* ---------------- inflight + limit ---------------- */
const inFlight = global.portsInFlight || new Map();
global.portsInFlight = inFlight;

let active = 0;
async function withLimit(fn) {
  if (active >= MAX_CONCURRENCY) throw new Error("BUSY");
  active++;
  try {
    return await fn();
  } finally {
    active--;
  }
}

/* ---------------- helpers ---------------- */
const fetchWithTimeout = async (payload) => {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), UPSTREAM_TIMEOUT);

  try {
    return await fetch(UPSTREAM, {
      method: "POST",
      headers: {
        Authorization: AUTH,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
  } finally {
    clearTimeout(id);
  }
};

/* ---------------- POST ---------------- */
export async function POST(req) {
  let body;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ data: [], total_values: 0 });
  }

  const cacheKey = `ports:${JSON.stringify(body)}`;

  /* ---- Redis ---- */
  try {
    const cached = await redis.get(cacheKey);
    if (cached) {
      return NextResponse.json(JSON.parse(cached), {
        headers: { "X-Cache": "HIT" },
      });
    }
  } catch {}

  /* ---- Deduplicate ---- */
  if (inFlight.has(cacheKey)) {
    return inFlight.get(cacheKey);
  }

  const promise = (async () => {
    try {
      const res = await withLimit(() => fetchWithTimeout(body));
      const json = await res.json();

      const response = {
        data: Array.isArray(json?.data) ? json.data : [],
        total_values: json?.total_values ?? 0,
      };

      redis.set(cacheKey, JSON.stringify(response), "EX", CACHE_TTL).catch(() => {});
      return NextResponse.json(response);

    } catch {
      // graceful degradation – NO browser error
      return NextResponse.json({ data: [], total_values: 0 });
    } finally {
      inFlight.delete(cacheKey);
    }
  })();

  inFlight.set(cacheKey, promise);
  return promise;
}