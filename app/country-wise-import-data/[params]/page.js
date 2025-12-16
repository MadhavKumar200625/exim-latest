import React from "react";
import Hero from "./Hero";
import CountryLinksSection from "./CountryLinksSection";
import Includes from "./Includes";
import What from "./What";
import Who from "./Who";
import Suppliers from "./Buyers";
import ClientsSection from "../../components/ClientsSection";
import GlobalImpact from "./GlobalImpact";
import ImportantLinks from "./ImportantLinks";
import FindWhat from "./FindWhat";
import GetTradeData from "./GetTradeData";

import { countriesData } from "../../data/countries_imp";
import { notFound } from "next/navigation";

/* ---------------- HELPERS ---------------- */
const normalizeSlug = (slug = "") =>
  slug.toLowerCase().replace(/\s+/g, "-");

/* ---------------- METADATA ---------------- */
export async function generateMetadata({ params }) {
  const slug = normalizeSlug(params.params);
  const country = countriesData[`${slug}_import_section`];

  const title =
    country?.meta?.title ||
    `${slug.toUpperCase()} Import Data | ${slug.toUpperCase()} Customs Data - Exim Trade Data`;

  const description =
    country?.meta?.description ||
    `Get verified ${slug} Import Data, ${slug} customs data and shipment data including importers, exporters, trade patterns, HS codes and port information at Exim Trade Data.`;

  return {
    title,
    description,
    keywords:
      country?.meta?.keywords || [
        `${slug} Import Data`,
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
        `https://eximtradedata.com/country-wise-${slug}-import-data`,
    },
    openGraph: {
      title,
      type: "website",
      url:
        country?.openGraph?.url ||
        `https://eximtradedata.com/country-wise-${slug}-import-data`,
      description,
      siteName: "Exim Trade Data",
      images: [
        {
          url:
            country?.openGraph?.image ||
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
        `https://eximtradedata.com/country-wise-${slug}-import-data`,
      images: [
        country?.twitter?.image ||
          "https://eximtradedata.com/images/logo.png",
      ],
    },
  };
}

/* ---------------- PAGE ---------------- */
export default function Page({ params }) {
  const slug = normalizeSlug(params.params);

  /* ---------- OLD FALLBACK (UNCHANGED CONTENT) ---------- */
  const defaultData = {
    title: `${slug.replace(/^./, (s) => s.toUpperCase())} Import Customs Shipment Trade Data`,
    description: `Gain comprehensive insights into the ${slug.replace(/^./, (s) => s.toUpperCase())}'s import landscape with the most up-to-date customs shipment data.`,
    what_included: {
      desc_1: `Our ${slug.replace(/^./, (s) => s.toUpperCase())} Import Shipment Data provides detailed and verified information sourced from customs records.`,
      desc_2: "",
    },
    top_import_products: {
      description: "",
      data: [],
    },
    import_sources: {
      description: "",
      data: [],
    },
    trusted_clients: {
      description: "",
      companies: [],
    },
    grow_with_intelligence: {
      benefits: [],
    },
  };

  let countryData =
    countriesData[`${slug}_import_section`] || defaultData;

  return (
    <main>
      {/* HERO */}
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
        country={slug}
        description={countryData.top_import_products?.description || ""}
        data={countryData.top_import_products?.data || []}
      />

      <Who
        country={slug}
        description={countryData.import_sources?.description || ""}
        data={countryData.import_sources?.data || []}
      />

      <Suppliers
        description={countryData.trusted_clients?.description || ""}
        data={countryData.trusted_clients?.companies || []}
      />

      <ClientsSection />

      <GlobalImpact
        points={countryData.grow_with_intelligence?.benefits || []}
      />

      <ImportantLinks country={slug} />
      <FindWhat country={slug} />
      <GetTradeData />
    </main>
  );
}