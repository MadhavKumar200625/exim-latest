import React from "react";
import Hero from "./Hero";
import CountryLinksSection from "./CountryLinksSection";
import Includes from "./Includes";
import What from "./What";
import Who from "./Who";
import Suppliers from "./Suppliers";
import ClientsSection from "../../components/ClientsSection";
import GlobalImpact from "./GlobalImpact";
import ImportantLinks from "./ImportantLinks";
import FindWhat from "./FindWhat";
import GetTradeData from "./GetTradeData";

import { countriesData } from "../../data/countries_exp";

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
            country?.openGraph?.image ||
            "/logo.png",
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
        country?.twitter?.image ||
          "/logo.png",
      ],
    },
  };
}

/* ---------- page ---------- */
export default function Page({ params }) {
  const slug = normalizeSlug(params.params);

  let countryData = countriesData[`${slug}_export_section`];

  /* ---------- DEFAULT FALLBACK (UNCHANGED LOGIC) ---------- */
  const defaultData = {
    title: `${slug.replace(/^./, (s) => s.toUpperCase())} Export Customs Shipment Trade Data`,
    description: `Gain comprehensive insights into the ${slug.replace(/^./, (s) =>
      s.toUpperCase())}'s export landscape with the most up-to-date customs shipment data.`,
    what_included: {
      title: "What’s Included in Our Export Data?",
      desc_1: `Our ${slug.replace(/^./, (s) =>
        s.toUpperCase())} Export Shipment Data provides detailed and verified information sourced from customs records.`,
    },
    top_export_products: {
      title: `Top Export Products from ${slug}`,
      description: `As per ${slug} Export Statistics, the country’s top exports are listed below.`,
      data: [],
    },
    export_destinations: {
      title: `Export Destinations for ${slug}`,
      description: `Top export destinations for ${slug}.`,
      data: [],
    },
    trusted_clients: {
      title: "Trusted by Industry Leaders",
      description:
        "Join the list of prestigious clients who trust our comprehensive export data.",
      data: [],
    },
    grow_with_intelligence: {
      title: "Grow Your Export Potential with Global Trade Intelligence",
      benefits: [
        "Explore 200+ global markets",
        "Track market trends and competitors",
        "Locate verified buyers and suppliers",
        "Enhance your market entry strategy",
        "Get actionable insights to boost ROI",
      ],
    },
  };

  /* ---------- USE DEFAULT IF DATA MISSING ---------- */
  if (!countryData) {
    countryData = defaultData;
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