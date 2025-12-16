// /app/global-companies/api/route.js

import { NextResponse } from "next/server";
import redis from "@/libs/redis";
import "@/libs/httpAgent";

export const dynamic = "force-dynamic";
export const revalidate = 0;

/* -----------------------------------------
   Constants
------------------------------------------ */
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
const AUTH = "Basic YWJjOmFiY0AxMjM=";
const CACHE_TTL = 3600;
const UPSTREAM_TIMEOUT = 12000;
const MAX_CONCURRENCY = 50;

/* -----------------------------------------
   Global concurrency + dedupe
------------------------------------------ */
const inFlight = global.companyInFlight || new Map();
global.companyInFlight = inFlight;

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
const safeJson = (t) => {
  try {
    return JSON.parse(t);
  } catch {
    return { data: [] };
  }
};

const fetchWithTimeout = async (url, body) => {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), UPSTREAM_TIMEOUT);

  try {
    return await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: AUTH,
      },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
  } finally {
    clearTimeout(id);
  }
};

/* -----------------------------------------
   POST handler
------------------------------------------ */
export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json([], { status: 400 });
  }

  const { country, company } = body;
  if (!country || !company) {
    return NextResponse.json([], { status: 400 });
  }

  const formattedCountry = country.toLowerCase().replace(/\s+/g, "_");
  const formattedCompany = company.replaceAll("-", " ").toUpperCase();
  const cacheKey = `company:${formattedCountry}:${formattedCompany}`;

  /* ---------- Redis ---------- */
  try {
    const cached = await redis.get(cacheKey);
    if (cached) {
      return NextResponse.json(JSON.parse(cached), {
        headers: { "X-Cache": "HIT" },
      });
    }
  } catch {}

  /* ---------- Deduplicate ---------- */
  if (inFlight.has(cacheKey)) {
    return inFlight.get(cacheKey);
  }

  const promise = (async () => {
    try {
      const payload = {
        source: formattedCountry,
        type: "master",
        country_name: formattedCountry,
        company_name: formattedCompany,
      };

      const results = await Promise.all(
        ENDPOINTS.map(async (ep) => {
          try {
            const res = await withLimit(() =>
              fetchWithTimeout(BASE_URL + ep, payload)
            );
            const text = await res.text();
            const json = safeJson(text);
            return { data: Array.isArray(json.data) ? json.data : [] };
          } catch {
            return { data: [] };
          }
        })
      );

      redis.set(cacheKey, JSON.stringify(results), "EX", CACHE_TTL).catch(() => {});
      return NextResponse.json(results);

    } catch {
      // graceful degradation (NO crash)
      return NextResponse.json(
        ENDPOINTS.map(() => ({ data: [] })),
        { status: 200 }
      );
    } finally {
      inFlight.delete(cacheKey);
    }
  })();

  inFlight.set(cacheKey, promise);
  return promise;
}