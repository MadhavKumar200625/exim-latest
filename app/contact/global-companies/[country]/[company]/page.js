import Hero from './Hero';
import React from "react";
import Overview from "./Overview";
import Stats from "./Stats";
import MarketIntel from "./MarketIntel";
import DetailedTable from "./DetailedTable";
import CtaImage from "./CtaImage";
import FAQSection from "@/app/components/FAQ";

export const revalidate = 3600; 
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;


// ---------------------------
// Metadata
// ---------------------------
export async function generateMetadata({ params }) {
  const { country, company } = params;

  const formattedCompanyName = company
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  const fullUrl = `https://eximtradedata.com/global-companies/${country}/${company}`;

  return {
    title: `${formattedCompanyName} - Import Export Trade Data, Buyers, Suppliers | Exim Trade Data`,
    description: `Discover key import export data for ${formattedCompanyName}.`,
    alternates: { canonical: fullUrl },
    openGraph: {
      title: `${formattedCompanyName} Trade Data`,
      url: fullUrl,
      images: ["https://eximtradedata.com/images/logo.svg"],
    },
    twitter: {
      card: "summary",
      title: `${formattedCompanyName} Trade Data`,
      images: ["https://eximtradedata.com/images/logo.svg"],
    },
  };
}


// ---------------------------
// UNIVERSAL DATA FETCHER
// ---------------------------
async function fetchCompanyData(country, company) {
  const res = await fetch(
    `${baseURL}/global-companies/api?country=${country}&company=${company}`,
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) return null;

  return await res.json();
}


// ---------------------------
// MAIN PAGE
// ---------------------------
export default async function Page({ params }) {
  const { country, company } = await params;
const companyName = company.replaceAll("-", " ").toUpperCase();
  // Fetch cached API data (ISR + Route Cache + CDN)
  const apiData = await fetchCompanyData(country, company);

  const data = {
    companyName: company.replaceAll("-", " ").toUpperCase(),
    section2: apiData.section2,
    section3: apiData.section3,
    section4: apiData.section4,
    section5: apiData.section5,
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
  };

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