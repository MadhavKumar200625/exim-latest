// /app/global-companies/api/route.js

import { NextResponse } from "next/server";
import redis from "@/libs/redis";

export const dynamic = "force-static";
export const revalidate = 3600;

// ---------- SAME 7 ENDPOINTS (DO NOT CHANGE ORDER) ----------
const ENDPOINTS = [
  "valueCount",
  "uniqueBuyerSupplier",
  "topHSCode",
  "topOriginCountryDestinationCountry",
  "topPortOfLoadingUnloading",
  "topBuyerSupplier",
  "topExporterImporter",
];

const BASE_URL = "http://103.30.72.94:8011/companyReport/";

// ---------- Timeout Safe Fetch ----------
const fetchWithTimeout = async (url, options, timeout = 20000) => {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);

  try {
    const res = await fetch(url, { ...options, signal: controller.signal });
    clearTimeout(timer);
    return res;
  } catch (err) {
    clearTimeout(timer);
    throw new Error("Timeout/Error: " + err.message);
  }
};

// ---------- Safe JSON ----------
const safeJson = (text) => {
  if (!text || typeof text !== "string") return { data: [] };
  try {
    return JSON.parse(text);
  } catch {
    return { data: [] };
  }
};

export async function POST(req) {
  let body;

  // ---------- SAFE BODY PARSE ----------
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const { country, company } = body;

  if (!country || !company) {
    return NextResponse.json(
      { error: "country & company required" },
      { status: 400 }
    );
  }

  // ---------- EXACT OLD LOGIC: country formatting ----------
  const formattedCountry = country.toLowerCase().replace(/\s+/g, "_");

  // ---------- EXACT OLD LOGIC: company formatting ----------
  const formattedCompany = company.replaceAll("-", " ").toUpperCase();

  // ---------- EXACT OLD LOGIC: customs countries ----------
  const customsCountries =
    "argentina,bangladesh,bolivia,botswana,burundi,cameroon,chile,colombia,costa_rica,cote_d_ivoire,dr_congo,ecuador,ethiopia,fiji,ghana,guatemala,guyana,india,indonesia,kazakhstan,kenya,kosovo,lesotho,liberia,malawi,mexico,moldova,nicaragua,nigeria,pakistan,panama,paraguay,peru,philippines,russia,rwanda,sao_tome_and_principe,sierra_leone,singapore,sri_lanka,tanzania,turkey,uganda,ukraine,uruguay,uzbekistan,venezuela,vietnam,zambia,zimbabwe"
      .split(",");

  const source = customsCountries.includes(formattedCountry)
    ? formattedCountry
    : "all";

  // ---------- EXACT OLD LOGIC: FINAL PAYLOAD ----------
  const payload = {
    source,
    type: "master",
    country_name: formattedCountry,
    company_name: formattedCompany,
  };

  // ---------- CACHE KEY ----------
  const cacheKey = `company:${formattedCountry}:${formattedCompany}`;

  // ---------- TRY REDIS ----------
  try {
    const cached = await redis.get(cacheKey);
    if (cached) {
      return NextResponse.json(JSON.parse(cached), {
        headers: { "X-Cache": "HIT" },
      });
    }
  } catch (err) {
    console.error("REDIS GET ERROR:", err.message);
  }

  // ---------- FETCH ALL 7 ENDPOINTS PARALLEL ----------
  const results = await Promise.all(
    ENDPOINTS.map(async (ep) => {
      try {
        const res = await fetchWithTimeout(
          BASE_URL + ep,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Basic YWJjOmFiY0AxMjM=",
            },
            body: JSON.stringify(payload),
            cache: "no-store",
          },
          15000
        );

        const text = await res.text();
        const parsed = safeJson(text);

        // IMPORTANT: ALWAYS RETURN { data: [...] }
        return {
          data: Array.isArray(parsed.data) ? parsed.data : [],
        };
      } catch (err) {
        return { data: [] };
      }
    })
  );

  // ---------- SAVE TO REDIS ----------
  try {
    await redis.set(cacheKey, JSON.stringify(results), "EX", 3600);
  } catch (err) {
    console.error("REDIS SET ERROR:", err.message);
  }

  // ---------- RETURN EXACT OLD SHAPE ----------
  return NextResponse.json(results, {
    headers: { "X-Cache": "MISS" },
  });
}