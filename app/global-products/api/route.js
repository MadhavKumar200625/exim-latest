import { NextResponse } from "next/server";
import redis from "@/libs/redis";

export const dynamic = "force-static";
export const revalidate = 3600;

export async function POST(req) {
  let payload = {};

  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid JSON" }, { status: 400 });
  }

  const cacheKey = `global-products:${payload.filters}:${payload.columns}:${payload.size}`;

  // Redis GET
  try {
    const cached = await redis.get(cacheKey);
    if (cached) {
      return NextResponse.json(JSON.parse(cached), {
        headers: {
          "X-Cache": "HIT",
          "Cache-Control": "public, max-age=3600",
        },
      });
    }
  } catch (err) {
    console.error("REDIS GET ERROR:", err.message);
  }

  let response;

  try {
    const res = await fetch("http://103.30.72.94:8001/countriesProductList", {
      method: "POST",
      headers: {
        Authorization: "Basic YWJjOmFiY0AxMjM=",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    const json = await res.json();

    response = { success: true, data: json };
  } catch (err) {
    response = { success: false, error: err.message };
  }

  // Redis SET
  try {
    await redis.set(cacheKey, JSON.stringify(response), "EX", 3600);
  } catch (err) {
    console.error("REDIS SET ERROR:", err.message);
  }

  return NextResponse.json(response, {
    headers: {
      "X-Cache": "MISS",
      "Cache-Control": "public, max-age=3600",
    },
  });
}