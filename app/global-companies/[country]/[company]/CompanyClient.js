"use client";

import React, { useEffect, useState } from "react";
import Overview from "./Overview";
import Stats from "./Stats";
import MarketIntel from "./MarketIntel";
import DetailedTable from "./DetailedTable";
import CtaImage from "./CtaImage";
import FAQSection from "@/app/components/FAQ";

export default function CompanyClient({ params }) {
  const { country, company } = params;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  const formattedCompany = company.replaceAll("-", " ").toUpperCase();

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      setLoading(true);
      setErr(null);

      try {
        const res = await fetch(`/global-companies/api`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            country,
            company,
          }),
          signal: controller.signal,
        });

        if (!res.ok) throw new Error(`API failed (${res.status})`);

        const raw = await res.json();

        if (!Array.isArray(raw)) {
          throw new Error("Invalid API response format");
        }

        // same extract logic
        const [
          valueCount = { data: [] },
          uniqueBuyerSupplier = { data: [] },
          topHSCode = { data: [] },
          topOriginCountryDestinationCountry = { data: [] },
          topPortOfLoadingUnloading = { data: [] },
          topBuyerSupplier = { data: [] },
          topExporterImporter = { data: [] },
        ] = raw;

        const safe = (obj) => (Array.isArray(obj.data) ? obj.data : []);

        const vc = safe(valueCount);
        const ubs = safe(uniqueBuyerSupplier);
        const hs = safe(topHSCode);
        const originDest = safe(topOriginCountryDestinationCountry);
        const port = safe(topPortOfLoadingUnloading);
        const buyers = safe(topBuyerSupplier);

        // Build pointers for Export Overview
        const exportMarkets = originDest
          .filter((d) => d && d["Top Export Country"])
          .map((d) => `${d["Top Export Country"].trim()} (${d["Total Value"] ?? 0} USD)`)
          .slice(0, 4);

        const exportProducts = hs
          .filter((d) => d && d["Top Export HS Code"])
          .map((d) => `HSN Code: ${d["Top Export HS Code"]} Total Shipment - ${d["Total Shipment"] ?? 0}`)
          .slice(0, 5);

        // Build pointers for Import Overview
        const importMarkets = originDest
          .filter((d) => d && d["Top Import Country"])
          .map((d) => `${d["Top Import Country"].trim()} (${d["Total Value"] ?? 0} USD)`)
          .slice(0, 4);

        const importProducts = hs
          .filter((d) => d && d["Top Import HS Code"])
          .map((d) => `HSN Code: ${d["Top Import HS Code"]} Total Shipment - ${d["Total Shipment"] ?? 0}`)
          .slice(0, 5);

        setData({
          companyName: formattedCompany,

          section2: {
            heading: formattedCompany,
            exportOverview: {
              heading: "Export Overview",
              text: `As per our global export database, ${formattedCompany} made total ${
                vc[0]?.["Total Export Shipment"] || 0
              } export shipments with a total export value of $${
                vc[0]?.["Total Value"] || 0
              }.`,
              pointers: [
                exportMarkets.length ? `Top Export Markets: ${exportMarkets.join(", ")}.` : "Top Export Markets: N/A.",
                exportProducts.length ? `Major Export Product Category along with HS Code: ${exportProducts.join(" | ")}` : "Major Export Product Category: N/A",
              ],
            },
            importOverview: {
              heading: "Import Overview",
              text: `As per our global import database, ${formattedCompany} made total ${
                vc[1]?.["Total Import Shipment"] || 0
              } import shipments with a total import value of $${
                vc[1]?.["Total Value"] || 0
              }.`,
              pointers: [
                importMarkets.length ? `Top Import Markets: ${importMarkets.join(", ")}.` : "Top Import Markets: N/A.",
                importProducts.length ? `Major Import Product Category along with HS Code: ${importProducts.join(" | ")}` : "Major Import Product Category: N/A",
              ],
            },
            staticOverview: {
              text:
                "Exim GTIS is the best cost-effective market research platform offering 200+ countries trade data reports by country, company, ports. The information is 100% verified and accurate based on direct customs authorities. Find emerging markets, top trends, demand, importers, exporters and monitor competition.",
            },
          },

          section3: {
            shipmentSent: vc[0]?.["Total Export Shipment"] || 0,
            buyers: ubs[0]?.["Buyers"] || 0,
            shipmentReceived: vc[1]?.["Total Import Shipment"] || 0,
            suppliers: ubs[1]?.["Suppliers"] || 0,
          },

          section4: {
            import: {
              hsCodes: hs
                .filter((d) => d && d["Top Import HS Code"])
                .map((d) => ({
                  code: d["Top Import HS Code"],
                  value: d["Total Shipment"] ?? 0,
                })),
              countries: originDest
                .filter((d) => d && d["Top Import Country"])
                .map((d) => ({
                  name: d["Top Import Country"],
                  qty: d["Total Shipment"] ?? 0,
                })),
              ports: port
                .filter((d) => d && d["Top Import Port"])
                .map((d) => ({
                  name: d["Top Import Port"],
                  qty: d["Total Shipment"] ?? 0,
                })),
              suppliers: buyers
                .filter((d) => d && d["Top Suppliers"])
                .map((d) => ({
                  name: d["Top Suppliers"],
                  qty: d["Total Shipment"] ?? 0,
                })),
            },

            export: {
              hsCodes: hs
                .filter((d) => d && d["Top Export HS Code"])
                .map((d) => ({
                  code: d["Top Export HS Code"],
                  value: d["Total Shipment"] ?? 0,
                })),
              countries: originDest
                .filter((d) => d && d["Top Export Country"])
                .map((d) => ({
                  name: d["Top Export Country"],
                  qty: d["Total Shipment"] ?? 0,
                })),
              ports: port
                .filter((d) => d && d["Top Export Port"])
                .map((d) => ({
                  name: d["Top Export Port"],
                  qty: d["Total Shipment"] ?? 0,
                })),
              buyers: buyers
                .filter((d) => d && d["Top Buyers"])
                .map((d) => ({
                  name: d["Top Buyers"],
                  qty: d["Total Shipment"] ?? 0,
                })),
            },
          },

          section7: {
            faqs: [
              {
                question: `How many import shipments were made at ${formattedCompany} port during FY 2024?`,
                answer: `In 2024, there were 0 shipments made at ${formattedCompany} port.`,
              },
              {
                question: `How many active buyers were at ${formattedCompany} port in 2024?`,
                answer: `There were around 0 active buyers at ${formattedCompany} port in 2024.`,
              },
            ],
          },
        });
      } catch (e) {
        setErr(e.message);
      } finally {
        setLoading(false);
      }
    }

    load();
    return () => controller.abort();
  }, [country, company]);

  if (loading)
    return <p className="p-10 text-center">Loading company data…</p>;

  if (err)
    return (
      <p className="p-10 text-center text-red-600">
        Failed to load company data: {err}
      </p>
    );

  if (!data) return <p className="p-10 text-center">No data found</p>;

  return (
    <>
      <Overview data={data.section2} />
      <Stats companyName={data.companyName} data={data.section3} />
      <MarketIntel
        companyName={data.companyName}
        importData={data.section4.import}
        exportData={data.section4.export}
      />
      <DetailedTable companyName={data.companyName} />
      <CtaImage />
      <FAQSection faqs={data.section7.faqs} />
    </>
  );
}