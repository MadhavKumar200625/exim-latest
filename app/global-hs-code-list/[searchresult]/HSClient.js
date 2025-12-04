"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function HSClient({ searchresult }) {
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  const [data, setData] = useState({ recordset: [], heading: "Not Found", tc1Heading: null });

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      setLoading(true);
      setErr(null);

      try {
        // send the raw searchresult string to API
        const res = await fetch("/global-hs-code/api", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ searchresult }),
          signal: controller.signal,
        });

        if (!res.ok) throw new Error(`API failed (${res.status})`);

        const json = await res.json();

        // Response shape: { recordset: [], heading: "...", tc1Heading: null }
        if (!json || !Array.isArray(json.recordset)) {
          throw new Error("Invalid API response format");
        }

        setData({
          recordset: json.recordset,
          heading: json.heading ?? "Not Found",
          tc1Heading: json.tc1Heading ?? null,
        });
      } catch (e) {
        setErr(e.message);
      } finally {
        setLoading(false);
      }
    }

    load();
    return () => controller.abort();
  }, [searchresult]);

  const rowColors = ["bg-white", "bg-slate-50", "bg-slate-100"];

  if (loading) return <p className="p-8 text-center">Loading…</p>;
  if (err) return <p className="p-8 text-center text-red-600">Failed to load: {err}</p>;

  const { recordset, heading, tc1Heading } = data;

  return (
    <>
      {/* Heading Section */}
      <section className="px-4 py-12 text-center bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-4">
            {/* Try to replicate original title logic: searchresult like "hs-123" */}
            {(() => {
              const parts = (searchresult || "").split("-");
              const type = parts[0];
              const value = parts.slice(1).join("-");
              if (type === "hs") return `HS Code of ${value} - ${heading}`;
              if (type === "chapter") return `${heading} Import Export HS Code Data`;
              if (type === "heading") return `HS Code Heading of ${value} - ${heading}`;
              return `HS Code Lookup`;
            })()}
          </h2>

          <h3 className="text-2xl text-black mb-6">
            Explore 5000+ Global HS Codes by Chapter, Heading & Subheading.
          </h3>

          {/* Result Table */}
          <div className="mt-10 border border-gray-300 shadow-md">
            <table className="min-w-full text-left text-black border-collapse">
              <thead className="sticky top-16 z-10">
                <tr className="bg-gray-200">
                  <th className="px-6 py-4 text-base font-semibold border-b w-40">
                    {tc1Heading ?? "HS Code"}
                  </th>
                  <th className="px-6 py-4 text-base font-semibold border-b border-l w-[55%]">
                    {heading}
                  </th>
                  <th className="px-6 py-4 text-base font-semibold border-b border-l">
                    Import Data
                  </th>
                  <th className="px-6 py-4 text-base font-semibold border-b border-l">
                    Export Data
                  </th>
                </tr>
              </thead>

              <tbody>
                {recordset.length === 0 && (
                  <tr>
                    <td colSpan={4} className="p-6 text-center text-gray-500">
                      No HS Code records found.
                    </td>
                  </tr>
                )}

                {recordset.map((row, idx) => (
                  <tr key={idx} className={`${rowColors[idx % 3]} hover:bg-gray-100`}>
                    <td className="px-6 py-4 border-b font-semibold">
                      <Link href={`/global-hs-code-list/hs-code-${row.hs_code}`}>
                        {row.hs_code}
                      </Link>
                    </td>

                    <td className="px-6 py-4 border-b border-l">
                      <Link href={`/global-hs-code-list/hs-code-${row.hs_code}`}>
                        {row.item_description}
                      </Link>
                    </td>

                    <td className="px-4 py-4 border-b border-l">
                      <Link
                        href={`/search/country-vietnam/type-import/hscode-${row.hs_code}`}
                        className="block text-center bg-blue-600 text-white px-3 py-2"
                      >
                        View Import
                      </Link>
                    </td>

                    <td className="px-4 py-4 border-b border-l">
                      <Link
                        href={`/search/country-vietnam/type-export/hscode-${row.hs_code}`}
                        className="block text-center bg-gray-600 text-white px-3 py-2"
                      >
                        View Export
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}