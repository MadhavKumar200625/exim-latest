import React from "react";
import Hero from "./Hero";
import CountryLinksSection from "./CountryLinksSection";
import Includes from "./Includes";
import What from "./What";
import Who from "./Who";
import ClientsSection from "../../components/ClientsSection";
import GlobalImpact from "./GlobalImpact";
import ImportantLinks from "./ImportantLinks";
import FindWhat from "./FindWhat";
import GetTradeData from "./GetTradeData";

import { countriesData } from "../../data/countries_exp";
import { notFound } from "next/navigation";
import Suppliers from "./Suppliers";

/* ---------- helpers ---------- */
const normalizeSlug = (slug = "") =>
  slug.toLowerCase().replace(/\s+/g, "-");

/* ---------- metadata ---------- */
export async function generateMetadata({ params }) {
  const slug = normalizeSlug(params.params);
  const country = countriesData[`${slug}_export_section`];

  const title =
    country?.meta?.title ||
    `${slug.toUpperCase()} Export Data | ${slug.toUpperCase()} Customs Data - Exim Trade Data`;

  const description =
    country?.meta?.description ||
    `Get verified ${slug} Export Data, ${slug} customs data and shipment data including exporters, buyers, trade patterns, HS codes and port information at Exim Trade Data.`;

  return {
    title,
    description,
    keywords:
      country?.meta?.keywords || [
        `${slug} Export Data`,
        `${slug} Customs Data`,
        `${slug} Shipment Data`,
        `${slug} Trade Statistics`,
        `${slug} Exporters`,
        `${slug} Importers`,
        `${slug} Trade Data`,
        `${slug} Market Analysis`,
      ],
    alternates: {
      canonical:
        country?.meta?.canonical ||
        `https://eximtradedata.com/country-wise-${slug}-export-data`,
    },
    openGraph: {
      title,
      type: "website",
      url:
        country?.openGraph?.url ||
        `https://eximtradedata.com/country-wise-${slug}-export-data`,
      description,
      siteName: "Exim Trade Data",
      images: [
        {
          url:
            country?.openGraph?.images?.[0] ||
            "https://eximtradedata.com/images/logo.png",
          alt: "Exim Trade Data Logo",
        },
      ],
    },
    twitter: {
      card: "summary",
      title,
      description,
      site: "@eximtradedata",
      creator: "@eximtradedata",
      url:
        country?.twitter?.url ||
        `https://eximtradedata.com/country-wise-${slug}-export-data`,
      images: [
        country?.twitter?.images?.[0] ||
          "https://eximtradedata.com/images/logo.png",
      ],
    },
  };
}

/* ---------- page ---------- */
export default function Page({ params }) {
  const slug = normalizeSlug(params.params);

  let countryData = countriesData[`${slug}_export_section`];

  // ❌ Invalid country → 404 (important for SEO)
  if (!countryData) {
    notFound();
  }

  return (
    <main>
      <Hero
        country={slug}
        hero={{
          title: countryData.title,
          description: countryData.description,
        }}
      />

      <CountryLinksSection />

      <Includes
        country={slug}
        desc1={countryData.what_included?.desc_1 || ""}
        desc2={countryData.what_included?.desc_2 || ""}
      />

      <What
        title={countryData.top_export_products.title}
        description={countryData.top_export_products.description}
        data={countryData.top_export_products.data}
      />

      <Who
        title={countryData.export_destinations.title}
        description={countryData.export_destinations.description}
        data={countryData.export_destinations.data}
      />

      <Suppliers
        title={countryData.trusted_clients.title}
        description={countryData.trusted_clients.description}
        data={countryData.trusted_clients.data}
      />

      <ClientsSection />

      <GlobalImpact
        points={countryData.grow_with_intelligence.benefits}
      />

      <ImportantLinks country={slug} />

      <FindWhat country={slug} />

      <GetTradeData />
    </main>
  );
}