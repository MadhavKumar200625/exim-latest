// /app/search/api/route.js
import { NextResponse } from "next/server";
import redis from "@/libs/redis";

export const dynamic = "force-static";
export const revalidate = 1800; // server-side default

const UPSTREAM = "http://103.30.72.94:8011/distinctCount";
const AUTH_HEADER = "Basic YWJjOmFiY0AxMjM="; // same as your original

// helper to run fetch with timeout using AbortController
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
  } catch (err) {
    return NextResponse.json({ success: false, message: "Invalid JSON body" }, { status: 400 });
  }

  
  const type = (body.type || "export").toString();
  const country = body.country || "";
  const product = body.product || "";
  const hscode = body.hscode || "";
  const port = body.port || "";
  const countryin = body.countryin || "";
//
const customsCountries = [
  "argentina","bangladesh","bolivia","botswana","burundi",
  "cameroon","chile","colombia","costa_rica","cote_d_ivoire",
  "dr_congo","ecuador"
];

const source = customsCountries.includes(country.toLowerCase())
  ? country.toLowerCase()
  : "all";
//
  const payload = {
    source: source?.toLowerCase(),
    type: "master",
    size: 10,
    filters: {},
    distinct_filters: [],
  };

  if (type === "export") {
    payload.filters.origin_country = country;
    if (product) payload.filters.Product_Description = product;
    if (hscode) payload.filters.hs_code = hscode + "%";
    if (countryin) payload.filters.destination_country = countryin;
    if (port) payload.filters.Port_of_loading = port;
    payload.distinct_filters = ["destination_country", "hs_code", "Port_of_loading"];
  } else {
    payload.filters.destination_country = country;
    if (product) payload.filters.Product_Description = product;
    if (hscode) payload.filters.hs_code = hscode + "%";
    if (countryin) payload.filters.origin_country = countryin;
    if (port) payload.filters.Port_of_Unloading = port;
    payload.distinct_filters = ["origin_country", "hs_code", "Port_of_Unloading"];
  }

  const cacheKey = `search:${JSON.stringify(payload)}`;

  // 1) Try Redis GET
  try {
    const cached = await redis.get(cacheKey);
    if (cached) {
      const parsed = JSON.parse(cached);
      return NextResponse.json({ success: true, data: parsed }, {
        headers: { "X-Cache": "HIT", "Cache-Control": "public, max-age=1800" },
      });
    }
  } catch (err) {
    console.error("REDIS GET ERROR:", err && err.message ? err.message : err);
    // fallthrough to fetch upstream
  }

  // 2) Call upstream
  try {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: AUTH_HEADER,
      },
      body: JSON.stringify(payload),
    };

    const res = await fetchWithTimeout(UPSTREAM, requestOptions, 15000);

    if (!res.ok) {
      const txt = await res.text().catch(() => "");
      console.error("Upstream returned non-OK:", res.status, txt);
      return NextResponse.json({ success: false, message: `Upstream error: ${res.status}` }, { status: 502 });
    }

    const text = await res.text();
    const json = text ? JSON.parse(text) : { data: [], unique: [] };

    // 3) Store in Redis (EX = 1800 seconds)
    try {
      await redis.set(cacheKey, JSON.stringify(json), "EX", 1800);
    } catch (err) {
      console.error("REDIS SET ERROR:", err && err.message ? err.message : err);
    }

    return NextResponse.json({ success: true, data: json }, {
      headers: { "X-Cache": "MISS", "Cache-Control": "public, max-age=1800" },
    });

  } catch (err) {
    console.error("SEARCH API ERROR:", err && err.message ? err.message : err);
    return NextResponse.json({ success: false, message: err.message || "Server error" }, { status: 500 });
  }
}