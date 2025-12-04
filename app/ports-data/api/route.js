// /app/ports-data/api/route.js
import { NextResponse } from "next/server";
import redis from "@/libs/redis";

export const dynamic = "force-static";
export const revalidate = 3600;

const UPSTREAM = "http://103.30.72.94:8001/globalPortLoading";
const AUTH_HEADER = "Basic YWJjOmFiY0AxMjM=";

// timeout helper
async function fetchWithTimeout(url, options = {}, timeoutMs = 15000) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(url, { ...options, signal: controller.signal });
    clearTimeout(id);
    return res;
  } catch (err) {
    clearTimeout(id);
    throw err;
  }
}

export async function POST(req) {
  let body = {};

  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const cacheKey = `ports:${JSON.stringify(body)}`;

  // 1) Check Redis
  try {
    const cached = await redis.get(cacheKey);
    if (cached) {
      return NextResponse.json(JSON.parse(cached), {
        headers: { "X-Cache": "HIT", "Cache-Control": "public, max-age=3600" },
      });
    }
  } catch (err) {
    console.error("REDIS GET ERROR:", err.message);
  }

  // 2) Upstream request
  try {
    const res = await fetchWithTimeout(
      UPSTREAM,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: AUTH_HEADER,
        },
        body: JSON.stringify(body),
      },
      15000
    );

    if (!res.ok) {
      return NextResponse.json(
        { success: false, error: `API error: ${res.status}` },
        { status: 500 }
      );
    }

    const data = await res.json();

    // 3) Save in Redis
    try {
      await redis.set(cacheKey, JSON.stringify(data), "EX", 3600);
    } catch (e) {
      console.error("REDIS SET ERROR:", e.message);
    }

    return NextResponse.json(data, {
      headers: { "X-Cache": "MISS", "Cache-Control": "public, max-age=3600" },
    });
  } catch (err) {
    console.error("ports-data/api error:", err.message);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}