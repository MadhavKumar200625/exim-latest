"use client";

import React, { useEffect, useState } from "react";
import Overview from "./Overview";
import Stats from "./Stats";
import MarketIntel from "./MarketIntel";
import CtaImage from "./CtaImage";
import DetailedTable from "./DetailedTable";
import FAQSection from "@/app/components/FAQ";

export default function PortClient({ country, port }) {
  const [data, setData] = useState(null);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      setLoading(true);
      setErr(null);

      try {
        const res = await fetch(`https://test.eximtradedata.com/global-ports/api`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ country, port }),
          signal: controller.signal,
        });

        if (!res.ok) throw new Error(`API failed (${res.status})`);

        const json = await res.json();
        setData(json);
      } catch (e) {
        setErr(e.message);
      } finally {
        setLoading(false);
      }
    }

    load();
    return () => controller.abort();
  }, [country, port]);

  if (loading)
    return <p className="p-8 text-center text-lg">Loading port data…</p>;

  if (err)
    return (
      <p className="p-8 text-center text-red-600">
        Failed to load: {err}
      </p>
    );

  if (!data)
    return <p className="p-8 text-center">No data available</p>;

  if (!data?.section4) {
  return <p className="p-8 text-center">Data temporarily unavailable</p>;
}

  return (
    <>
      <Overview portName={data.portName} stats={data.section2} />
      <Stats portName={data.portName} data={data.section3} />
      <MarketIntel
        portName={data.portName}
        importData={data.section4.import}
        exportData={data.section4.export}
      />
      <CtaImage portName={data.portName} />
      <DetailedTable
        portName={data.section6.portName}
        importData={data.section6.importData}
        exportData={data.section6.exportData}
      />
      <FAQSection faqs={data.section7.faqs} />
    </>
  );
}