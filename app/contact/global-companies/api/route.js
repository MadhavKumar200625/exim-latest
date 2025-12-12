"use client";

import React, { useEffect, useState } from "react";

import Hero from "./Hero";
import Overview from "./Overview";
import Stats from "./Stats";
import MarketIntel from "./MarketIntel";
import DetailedTable from "./DetailedTable";
import CtaImage from "./CtaImage";
import FAQSection from "@/app/components/FAQ";

export default function Page({ params }) {
  const { country, company } = params;

  const [data, setData] = useState(null);

  const companyName = company.replaceAll("-", " ").toUpperCase();

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(
          `https://test.eximtradedata.com//global-companies/api?country=${country}&company=${company}`
        );
        const apiData = await res.json();

        setData({
          companyName,
          section2: apiData.section2,
          section3: apiData.section3,
          section4: apiData.section4,
          section7: {
            faqs: [
              {
                question: `How many import shipments were made at ${companyName} port during 2024?`,
                answer: `In 2024, there were 0 shipments made at ${companyName} port.`,
              },
              {
                question: `How many active buyers were at ${companyName} port in 2024?`,
                answer: `There were around 0 active buyers at ${companyName} port in 2024.`,
              },
              {
                question: `Who was the leading buyer to ${companyName} port in 2024?`,
                answer: `N/A was the leading buyer to ${companyName} port in 2024.`,
              },
              {
                question: `How many active suppliers were at ${companyName} port in 2024?`,
                answer: `There were around 0 suppliers at ${companyName} port in 2024.`,
              },
              {
                question: `Who was the leading exporter from ${companyName} port in 2024?`,
                answer: `N/A was the leading exporter from ${companyName} port in 2024.`,
              },
              {
                question: `How can I access the yearwise ${companyName} port data?`,
                answer: `You can access port-level data through Exim GTIS platform.`,
              },
            ],
          },
        });
      } catch (e) {
        console.error(e);
      }
    }

    load();
  }, [country, company]);

  if (!data) return <div>Loading…</div>;

  return (
    <main>
      <Hero />
      <Overview data={data.section2} />
      <Stats companyName={companyName} data={data.section3} />
      <MarketIntel
        companyName={companyName}
        importData={data.section4.import}
        exportData={data.section4.export}
      />
      <DetailedTable companyName={companyName} />
      <CtaImage />
      <FAQSection faqs={data.section7.faqs} />
    </main>
  );
}