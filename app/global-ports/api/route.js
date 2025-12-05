// /app/global-ports/api/route.js

import { NextResponse } from "next/server";
import redis from "@/libs/redis";
import "@/libs/httpAgent"; // Import to initialize global agents

export const dynamic = "force-static";
export const revalidate = 3600;

const urls = [
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

const fetchWithTimeout = async (url, options, timeout = 15000) => {
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
  if (!text) return { data: [] };
  try {
    return JSON.parse(text);
  } catch {
    return { data: [] };
  }
};

export async function POST(req) {
  let body = {};

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { country, port } = body;

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

  const cacheKey = `port:${country}:${port}`;

  try {
    const cached = await redis.get(cacheKey);
    if (cached) {
      return NextResponse.json(JSON.parse(cached), {
        headers: { "X-Cache": "HIT", "Cache-Control": "public, max-age=3600" },
      });
    }
  } catch {}

  let results = [];

  try {
    results = await Promise.all(
      urls.map(async (url) => {
        try {
          const res = await fetchWithTimeout(
            url,
            {
              method: "POST",
              headers: {
                Authorization: "Basic YWJjOmFiY0AxMjM=",
                "Content-Type": "application/json",
              },
              body: JSON.stringify(payload),
              cache: "no-store",
            },
            15000
          );

          const txt = await res.text();
          return safeJson(txt);
        } catch (err) {
          return { data: [] };
        }
      })
    );
  } catch (err) {
    return NextResponse.json(
      { error: true, message: err.message },
      { status: 500 }
    );
  }

  // -------------------------------------------------------
  // 🔥 TRANSFORM RESULT EXACTLY LIKE OLD PAGE.JS DID
  // -------------------------------------------------------

  const safe = (obj) => (Array.isArray(obj?.data) ? obj.data : []);

  const importHS = safe(results[0]);
  const importCountries = safe(results[1]);
  const importBuyers = safe(results[2]);
  const importSuppliers = safe(results[3]);

  const exportHS = safe(results[4]);
  const exportCountries = safe(results[5]);
  const exportBuyers = safe(results[6]);
  const exportSuppliers = safe(results[7]);

  const totals = safe(results[8])[0] || {};

  const formattedPort = port.replace(/-/g, " ").toUpperCase();

  const finalResponse = {
    portName: formattedPort,

    section2: {
      shipments: totals["Total Importer"] || 0,
      buyers: totals["distinct Importer"] || 0,
      suppliers: totals["distinct Exporter"] || 0,
    },

    section3: {
      shipmentSent: totals["Total Importer"] || 0,
      buyers: totals["distinct Importer"] || 0,
      shipmentReceived: totals["Total Exporter"] || 0,
      suppliers: totals["distinct Exporter"] || 0,
    },

    section4: {
      import: {
        hsCodes: importHS.map(d => ({
          code: d["Top Import HS Code"],
          value: d["Total Shipment"],
        })),
        countries: importCountries.map(d => ({
          name: d["Top Import Country"],
          qty: d["Total Shipment"],
        })),
        buyers: importBuyers.map(d => ({
          name: d["Top Buyers"],
          qty: d["Total Shipment"],
        })),
        suppliers: importSuppliers.map(d => ({
          name: d["Buyers"],
          qty: d["Total Shipment"],
        })),
      },
      export: {
        hsCodes: exportHS.map(d => ({
          code: d["Top Export HS Code"],
          value: d["Total Shipment"],
        })),
        countries: exportCountries.map(d => ({
          name: d["Top Export Country"],
          qty: d["Total Shipment"],
        })),
        buyers: exportBuyers.map(d => ({
          name: d["Top Suppliers"],
          qty: d["Total Shipment"],
        })),
        suppliers: exportSuppliers.map(d => ({
          name: d["Suppliers"],
          qty: d["Total Shipment"],
        })),
      },
    },

    section6: {
      portName: formattedPort,
      importData: [],
      exportData: [],
    },

    section7: {
      faqs: [],
    },
  };

  try {
    await redis.set(cacheKey, JSON.stringify(finalResponse), "EX", 3600);
  } catch {}

  return NextResponse.json(finalResponse, {
    headers: { "X-Cache": "MISS", "Cache-Control": "public, max-age=3600" },
  });
}