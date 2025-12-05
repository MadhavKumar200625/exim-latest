// /app/global-companies-list/api/route.js

import { NextResponse } from "next/server";
import redis from "@/libs/redis";
import "@/libs/httpAgent"; // Import to initialize global agents

export const revalidate = 3600;
export const dynamic = "force-static";

const API_URL = "http://103.30.72.94:8012/companyDistinctCount";

const fetchWithTimeout = async (url, options, timeout = 20000) => {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  try {
    // fetch() uses undici which has built-in connection pooling
    const res = await fetch(url, { 
      ...options, 
      signal: controller.signal
    });
    clearTimeout(id);
    return res;
  } catch (err) {
    clearTimeout(id);
    throw new Error(`Timeout/Error: ${err.message}`);
  }
};


const safeJson = (text) => {
  if (!text || typeof text !== "string")
    return { error: "Empty response" };

  try {
    return JSON.parse(text);
  } catch {
    return { error: "Invalid JSON", raw: text };
  }
};

export async function POST(req) {
  let body;

  // ----------------------------------------------------------
  // 🔥 Parse body safely
  // ----------------------------------------------------------
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const {
    country = "",
    page = "",
    from_ = "",
    to = "",
    company_start_from = "",
    source = "all",
    type = "master"
  } = body;


  const [letter, pageNum] = page.split("-");
  const payload = {
    source,
    type,
    country_name: country.toLowerCase(),
    company_start_from: company_start_from || letter?.toUpperCase() || "",
    from_: from_ || ((parseInt(pageNum) - 1) * 100 + 1),
    to: to || (parseInt(pageNum) * 100),
  };


  const cacheKey = `company-list:${country}:${page}`;


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

  try {
    const res = await fetchWithTimeout(
      API_URL,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic YWJjOmFiY0AxMjM=",
        },
        body: JSON.stringify(payload),
        cache: "no-store",
      },
      8000
    );

    const text = await res.text();
    const parsed = safeJson(text);

    const responseData = {
      defaultLetter: payload.company_start_from,
      totalValues: parsed?.data?.[0]?.["Total Count"] ?? 0,
      companies: parsed?.data?.[0]?.Company ?? [],
    };


    try {
      await redis.set(cacheKey, JSON.stringify(responseData), "EX", 3600);
    } catch (err) {
      console.error("REDIS SET ERROR:", err.message);
    }

    return NextResponse.json(responseData, {
      headers: {
        "X-Cache": "MISS",
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (err) {
    console.error("Directory API Error:", err.message);
    return NextResponse.json(
      { error: true, message: err.message },
      { status: 500 }
    );
  }
}