export const revalidate = 3600;
export const dynamic = "force-static";

import React from "react";
import Hero from "@/app/global-companies-list/Hero";
import CompaniesClient from "./CompaniesClient"; // NEW CSR COMPONENT

export async function generateMetadata(context) {
  const { country = "", page = "" } = context.params || {};
  const formatted = capitalize(country);

  const fullUrl = `https://eximtradedata.com/global-companies-list/${country}/${page}`;

  return {
    title: `${formatted} Import Export Trade Data, Buyers, Suppliers | Exim Trade Data`,
    description: `Get updated ${formatted} Import Export Trade Data on Exim Trade Data. Find trusted buyers and suppliers with verified shipment history.`,
    keywords: `${country} companies list, ${country} companies directory, company list ${country}, global companies ${country}, ${country} exporters, ${country} importers`,
    alternates: { canonical: fullUrl },
    openGraph: {
      title: `${formatted} Import Export Trade Data, Buyers, Suppliers`,
      description: `Get updated ${formatted} company directory with buyers and suppliers.`,
      url: fullUrl,
      images: [{ url: "https://eximtradedata.com/images/logo.svg" }],
    },
    twitter: {
      card: "summary",
      title: `${formatted} Import Export Trade Data`,
      description: `Explore ${formatted} companies list and shipment database.`,
      images: ["https://eximtradedata.com/images/logo.svg"],
    },
  };
}

export default async function Page({ params }) {
  const { country } = await params;
  params = await params;

  return (
    <main>
      <Hero
        heading={`${capitalizeWords(country)} Companies List | List of ${capitalizeWords(country)} Companies`}
        subHeading={`Explore verified ${capitalizeWords(country)} companies, buyers, suppliers, and import-export activity in our ${capitalizeWords(country)} company directory.`}
      />

      {/* Client side fetch */}
      <CompaniesClient params={params} />
    </main>
  );
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function capitalizeWords(str) {
  return str
    .replace(/_/g, " ")
    .split(" ")
    .map(capitalize)
    .join(" ");
}