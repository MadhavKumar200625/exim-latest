// /app/global-ports/api/route.js

import { NextResponse } from "next/server";
import redis from "@/libs/redis";
import "@/libs/httpAgent";

export const dynamic = "force-dynamic";
export const revalidate = 0;

/* -----------------------------------------
   Constants
------------------------------------------ */
const URLS = [
  "http://103.30.72.94:8012/import/portReport/topHSCode",
  "http://103.30.72.94:8012/import/portReport/topOriginCountryDestinationCountry",
  "http://103.30.72.94:8012/import/portReport/topBuyerSupplier",
  "http://103.30.72.94:8012/import/portReport/uniqueBuyerSupplier",
  "http://103.30.72.94:8012/export/portReport/topHSCode",
  "http://103.30.72.94:8012/export/portReport/topOriginCountryDestinationCountry",
  "http://103.30.72.94:8012/export/portReport/topBuyerSupplier",
  "http://103.30.72.94:8012/export/portReport/uniqueBuyerSupplier",
  "http://103.30.72.94:8012/portReport/forTotal",
];

const AUTH = "Basic YWJjOmFiY0AxMjM=";
const CACHE_TTL = 3600;
const UPSTREAM_TIMEOUT = 12000;
const MAX_CONCURRENCY = 50;

/* -----------------------------------------
   In-flight + concurrency
------------------------------------------ */
const inFlight = global.portInFlight || new Map();
global.portInFlight = inFlight;

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

const fetchWithTimeout = async (url, payload) => {
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
};

/* -----------------------------------------
   POST
------------------------------------------ */
export async function POST(req) {
  let body;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json(null, { status: 200 });
  }

  const { country = "", port = "" } = body;
  if (!country || !port) {
    return NextResponse.json(null, { status: 200 });
  }

  const formattedPort = port.replace(/-/g, " ").toUpperCase();
  const cacheKey = `port:${country}:${port}`;

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
      const customsCountries = [
  "argentina","bangladesh","bolivia","botswana","burundi",
  "cameroon","chile","colombia","costa_rica","cote_d_ivoire",
  "dr_congo","ecuador"
];

const source = customsCountries.includes(country.toLowerCase())
  ? country.toLowerCase()
  : "all";

const payload = {
  source,
  type: "master",
  country_name: country,
  port_name: port,
};

      const results = await Promise.all(
        URLS.map(async (url) => {
          try {
            const res = await withLimit(() =>
              fetchWithTimeout(url, payload)
            );
            const text = await res.text();
            return safeJson(text);
          } catch {
            return { data: [] };
          }
        })
      );

      const safe = (o) => (Array.isArray(o?.data) ? o.data : []);

      const finalResponse = {
        portName: formattedPort,
        section2: {
          shipments: safe(results[8])[0]?.["Total Importer"] || 0,
          buyers: safe(results[8])[0]?.["distinct Importer"] || 0,
          suppliers: safe(results[8])[0]?.["distinct Exporter"] || 0,
        },
        section3: {
          shipmentSent: safe(results[8])[0]?.["Total Importer"] || 0,
          buyers: safe(results[8])[0]?.["distinct Importer"] || 0,
          shipmentReceived: safe(results[8])[0]?.["Total Exporter"] || 0,
          suppliers: safe(results[8])[0]?.["distinct Exporter"] || 0,
        },
        section4: {
          import: {
            hsCodes: safe(results[0]).map(d => ({ code: d["Top Import HS Code"], value: d["Total Shipment"] })),
            countries: safe(results[1]).map(d => ({ name: d["Top Import Country"], qty: d["Total Shipment"] })),
            buyers: safe(results[2]).map(d => ({ name: d["Top Buyers"], qty: d["Total Shipment"] })),
            suppliers: safe(results[3]).map(d => ({ name: d["Buyers"], qty: d["Total Shipment"] })),
          },
          export: {
            hsCodes: safe(results[4]).map(d => ({ code: d["Top Export HS Code"], value: d["Total Shipment"] })),
            countries: safe(results[5]).map(d => ({ name: d["Top Export Country"], qty: d["Total Shipment"] })),
            buyers: safe(results[6]).map(d => ({ name: d["Top Suppliers"], qty: d["Total Shipment"] })),
            suppliers: safe(results[7]).map(d => ({ name: d["Suppliers"], qty: d["Total Shipment"] })),
          },
        },
        section6: { portName: formattedPort, importData: [], exportData: [] },
        section7: { faqs: [] },
      };

      redis.set(cacheKey, JSON.stringify(finalResponse), "EX", CACHE_TTL).catch(() => {});
      return NextResponse.json(finalResponse);

    } catch {
      return NextResponse.json(null, { status: 200 });
    } finally {
      inFlight.delete(cacheKey);
    }
  })();

  inFlight.set(cacheKey, promise);
  return promise;
}