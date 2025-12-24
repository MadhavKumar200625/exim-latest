// /app/search/[...params]/SearchClient.jsx
"use client";

import React, { useEffect, useState } from "react";
import Hero from "./Hero"; // optional: reused if needed
import ShowFilters from "./ShowFilters";
import MainSection from "./MainSection";
import SearchGlobalData from "./SearchGlobalData";

export default function SearchClient({ params }) {
  // params.params is an array like ['Type-export', 'Country-india', ...]
  const raw = params.params || [];

  // parseFilters & extractQuery — exact same logic as server
  const parseFilters = (raw) =>
    raw.map((param) => {
      const [label, ...value] = param.split("-");
      return {
        label: label.replace(/_/g, " ").replace(/^./, (s) => s.toUpperCase()),
        value: value.join(" ").replace(/_/g, " "),
      };
    });

  const extractQuery = (filters) => {
    return {
      type: filters.find((f) => f.label === "Type")?.value?.toLowerCase() || "export",
      country: filters.find((f) => f.label === "Country")?.value || "",
      product: filters.find((f) => f.label === "Product")?.value || "",
      hscode: filters.find((f) => f.label === "Hscode")?.value || "",
      countryin: filters.find((f) => f.label === "Countryin")?.value || "",
      port: filters.find((f) => f.label === "Port")?.value || "",
    };
  };

  const appliedFilters = parseFilters(raw);
  const queryParams = extractQuery(appliedFilters);

  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  const [data, setData] = useState({
    section1: { heading: "" },
    section3: { appliedFilters },
    section4: { filters: { hsCodes: [], countries: [], ports: [] }, table: { headers: [], rows: [], pagination: { currentPage: 1, totalPages: 1 } } },
    section5: { heading: "Search Global Export - Import Trade Data", content: "" },
  });

  // Helper formatting utilities (same as server)
  const formatText = (t) => t?.replace(/[_-]/g, " ").trim();
  const upper = (t) => (t ? t.toUpperCase() : "");

  useEffect(() => {
    let aborted = false;
    const controller = new AbortController();

    async function load() {
      setLoading(true);
      setErr(null);

      try {
        // Call internal API route which has Redis caching
        const res = await fetch("https://test.eximtradedata.com/search/api", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(queryParams),
  signal: controller.signal,
});

// 1️⃣ Network / HTTP failure
if (!res.ok) {
  throw new Error(`Service unavailable (${res.status})`);
}

// 2️⃣ Content-Type guard
const contentType = res.headers.get("content-type") || "";
if (!contentType.includes("application/json")) {
  throw new Error("Invalid server response");
}

// 3️⃣ SAFE JSON parse (NEVER throws)
let json;
try {
  const text = await res.text();
  json = JSON.parse(text);
} catch {
  throw new Error("Malformed server response");
}

// 4️⃣ Shape validation
if (!json || json.success !== true || typeof json.data !== "object") {
  throw new Error(json?.message || "Service temporarily unavailable");
}

        const api = {
  data: Array.isArray(json.data?.data) ? json.data.data : [],
  unique: Array.isArray(json.data?.unique) ? json.data.unique : [],
};

        // replicate server-side conversion exactly:
        const safeUnique = api.unique.filter((u) => typeof u === "string");

const filters = {
  hsCodes: safeUnique
    .filter((u) => u.startsWith("hs_code:"))
    .map((u) => u.split(":")[1]?.split(",")[0]?.trim())
    .filter(Boolean),

  countries: safeUnique
    .filter((u) =>
      u.startsWith(
        queryParams.type === "export"
          ? "destination_country:"
          : "origin_country:"
      )
    )
    .map((u) => u.split(":")[1]?.split(",")[0]?.trim())
    .filter(Boolean),

  ports: safeUnique
    .filter((u) =>
      u.startsWith(
        queryParams.type === "export"
          ? "Port_of_loading:"
          : "Port_of_Unloading:"
      )
    )
    .map((u) => u.split(":")[1]?.split(",")[0]?.trim())
    .filter(Boolean),
};

       const rows = api.data
  .filter((d) => d && typeof d === "object")
  .map((d) => {
    const s = d._source || {};
    return {
      date: s.date || "-",
      hsCode: s.hs_code || "-",
      product: s.Product_Description || "-",
      exporter:
        queryParams.type === "export" ? s.exporter || "-" : s.importer || "-",
      qty: s.quantity || "-",
      unit: s.unit || "-",
      value: s.total_value_usd || "-",
      origin:
        queryParams.type === "export"
          ? s.destination_country || "-"
          : s.origin_country || "-",
      port:
        queryParams.type === "export"
          ? s.Port_of_Loading || "-"
          : s.Port_of_Unloading || "-",
    };
  });

        const sec1Heading = `Latest ${formatText(queryParams.country).replace(/^./, (s) => s.toUpperCase())} ${queryParams.type.replace(/^./, (s) => s.toUpperCase())} Data` + (queryParams.product ? ` of ${formatText(queryParams.product).replace(/^./, (s) => s.toUpperCase())}` : "") + (queryParams.hscode ? ` Under HS Code ${queryParams.hscode}` : "") + (queryParams.countryin ? ` to ${formatText(queryParams.countryin)}` : "");

        const sec1Subheading = `Complete Detailed Competitor Analysis through our latest ${upper(queryParams.type)} Data of ${formatText(queryParams.country).replace(/^./, s => s.toUpperCase())}` + (queryParams.product ? ` Find detailed ${formatText(queryParams.country)} ${upper(queryParams.type)} Data statistics consisting of the name of ${queryParams.product} importer in ${formatText(queryParams.country)} with Date, HS code, Product Details, quantity, Unit, Total Value in USD, Country, port Loading & unloading, buyer and more shipping information details below.` : "");

        const sec5Content = `Exim Trade Data provides 100% genuine and the latest ${upper(queryParams.type)} Data${queryParams.product ? ` of ${formatText(queryParams.product)}` : ""}${queryParams.hscode ? ` under HS Code ${queryParams.hscode}` : ""} of ${formatText(queryParams.country)}${queryParams.countryin ? ` to ${formatText(queryParams.countryin)}` : ""}${queryParams.year ? ` in ${queryParams.year}` : ""}. We collect ${upper(queryParams.type)} Data${queryParams.product ? ` of ${formatText(queryParams.product)}` : ""}${queryParams.hscode ? ` under HS Code ${queryParams.hscode}` : ""} of ${formatText(queryParams.country)}${queryParams.countryin ? ` to ${formatText(queryParams.countryin)}` : ""} with product and date. ${upper(queryParams.type)} Data helps to analyze ${upper(queryParams.type)} price, company name, port, ${queryParams.type.replace(/^./, s => s.toUpperCase())}er and exporter, product description, quantity, market trends, and many other data points. International Trade data of a country helps the global exporters and importers to do analysis and market research to find local suppliers and buyers in that country.`;

        if (!aborted) {
          setData({
            section1: { heading: sec1Heading, subheading: sec1Subheading },
            section3: { appliedFilters },
            section4: { filters, table: { headers: [
              "DATE", "HS CODE", "PRODUCT DESCRIPTION", queryParams.type === "export" ? "EXPORTER" : "IMPORTER", "QUANTITY", "UNIT", "TOTAL VALUE USD", queryParams.type === "export" ? "DESTINATION COUNTRY" : "ORIGIN COUNTRY", queryParams.type === "export" ? "PORT OF LOADING" : "PORT OF UNLOADING"
            ], rows, pagination: { currentPage: 1, totalPages: Math.ceil((api.data || []).length / 10) } } },
            section5: { heading: "Search Global Export - Import Trade Data", content: sec5Content, pointers: [] },
          });
        }
      } catch (err) {
        if (!aborted) setErr(err.message || "Failed to load");
      } finally {
        if (!aborted) setLoading(false);
      }
    }

    load();
    return () => {
      aborted = true;
      controller.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [raw.join("|")]);

  if (loading) return <p className="p-10 text-center text-lg">Loading search results…</p>;
if (err) {
  return (
    <div className="p-10 text-center">
      <p className="text-red-600 text-lg font-semibold">
        We&apos;re experiencing heavy traffic
      </p>
      <p className="text-gray-500 mt-2">
        Please refresh or try again in a moment.
      </p>
    </div>
  );
}

  return (
    <main>
        <Hero data={data.section1}/>
      <ShowFilters appliedFilters={data.section3.appliedFilters} />
      <MainSection data={data.section4} appliedFilters={data.section3.appliedFilters} />
      <SearchGlobalData data={data.section5} />
      <section className="w-full p-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col items-center p-6 rounded-2xl shadow-md bg-white hover:shadow-xl transition">
            <img src="/search-data-results/expand-your-business-network.webp" alt="Expand Your Business Network" className="w-16 h-16 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 text-center">Expand Your Business Network</h3>
          </div>

          <div className="flex flex-col items-center p-6 rounded-2xl shadow-md bg-white hover:shadow-xl transition">
            <img src="/search-data-results/risk-free-market-entry-strategy.webp" alt="Risk Free Market Entry Strategy" className="w-16 h-16 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 text-center">Risk Free Market Entry Strategy</h3>
          </div>

          <div className="flex flex-col items-center p-6 rounded-2xl shadow-md bg-white hover:shadow-xl transition">
            <img src="/search-data-results/authentic-export-import-trade-data.webp" alt="Authentic Export-import Trade Data" className="w-16 h-16 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 text-center">Authentic Export-import Trade Data</h3>
          </div>

          <div className="flex flex-col items-center p-6 rounded-2xl shadow-md bg-white hover:shadow-xl transition">
            <img src="/search-data-results/import-export-trade-data.webp" alt="import-Export Trade Data" className="w-16 h-16 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 text-center">import-Export Trade Data</h3>
          </div>
        </div>
      </section>
    </main>
  );
}