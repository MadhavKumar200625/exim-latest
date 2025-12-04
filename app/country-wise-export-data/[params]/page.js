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


import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  let slug = params.params;  
  let country = countriesData[slug +"_export_section"];
  console.log(country);

  if (!country) {
    return {
      title: `${slug.toUpperCase()} Export Data | ${slug.toUpperCase()} Customs Data - Exim Trade Data`,
      description: `Get verified ${slug} Export Data, ${slug} customs data and Cameroon shipment data including importers, exporters, trade patterns, HS codes and port information at Exim Trade Data.`,
      keywords:  [
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
        canonical: `https://eximtradedata.com/country-wise-${slug}-export-data`,
      },
      openGraph: {
        title:  country?.title,
        type: "website",
        url: `https://eximtradedata.com/country-wise-${slug}-export-data`,
        description:country?.description,
        siteName: "Exim Trade Data",
        images: [
          {
            url: "https://eximtradedata.com/images/logo.png",
            alt:  "Exim Trade Data Logo",
          },
        ],
      },
      twitter: {
        card: "summary",
        title:country?.title,
        description:  country?.description,
        site: "@eximtradedata",
        creator: "@eximtradedata",
        url:`https://eximtradedata.com/country-wise-${slug}-export-data`,
        images: ["https://eximtradedata.com/images/logo.png"],
      }
    };
  }

  return {
    title: country.meta?.title || ` ${slug.toUpperCase()} Export  Data | ${slug.toUpperCase()} Customs Data - Exim Trade Data`,
    description: country.meta?.description || `Get verified ${slug.toUpperCase()} Export Data,${slug.toUpperCase()} customs data and Cameroon shipment data including importers, exporters, trade patterns, HS codes and port information at Exim Trade Data.`,
    keywords: country.meta?.keywords || [
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
      canonical: country.meta?.canonical || `https://eximtradedata.com/country-wise-${slug}-export-data`,
    },
    openGraph: {
      title: country.openGraph?.title || country.meta?.title,
      type: "website",
      url: country.openGraph?.url ||`https://eximtradedata.com/country-wise-${slug}-export-data`,
      description: country.openGraph?.description || country.meta?.description,
      siteName: "Exim Trade Data",
      images: [
        {
          url: country.openGraph?.image || "https://eximtradedata.com/images/logo.png",
          alt: country.openGraph?.imageAlt || "Exim Trade Data Logo",
        },
      ],
    },
    twitter: {
      card: "summary",
      title: country.twitter?.title || country.meta?.title,
      description: country.twitter?.description || country.meta?.description,
      site: "@eximtradedata",
      creator: "@eximtradedata",
      url: country.twitter?.url || `https://eximtradedata.com/country-wise-${slug}-export-data`,
      images: [country.twitter?.image || "https://eximtradedata.com/images/logo.png"],
    }
  };
}

export default function Page({ params }) {
  const slug = params.params;
  console.log(slug);

  // GET COUNTRY EXPORT JSON
  let countryData = countriesData[slug + "_export_section"];


  
    // Fallback data to use if country data does not exist
    const defaultData = {
      title: `${slug.replace(/^./, (s) => s.toUpperCase())} Export Customs Shipment Trade Data`,
      "description": `Gain comprehensive insights into the ${slug.replace(/^./, (s) => s.toUpperCase())} 's import landscape with the most up-to-date customs shipment data. In 2025, the ${slug.replace(/^./, (s) => s.toUpperCase())}  ’s total imports were valued at approximately $533 billion, reflecting a slight decline from previous years. Top import sources included Germany and Belgium, while the most in-demand products were mineral fuels, nuclear reactors, vehicles, and electrical machinery. ${slug.replace(/^./, (s) => s.toUpperCase())}   remains a strategic import hub and niche market for global suppliers. With the right trade intelligence, international importers can connect with verified ${slug.replace(/^./, (s) => s.toUpperCase())}   buyers and expand their market share.`,
      what_included: {
        title: "What’s Included in Our Export Data?",
        "desc_1": `Our ${slug.replace(/^./, (s) => s.toUpperCase())}   Export Shipment Data provides detailed and verified information sourced from customs records, invoices, bills of lading, and shipping manifests. You’ll get data fields such as HS Code, Product Description, Exporter and Importer Name, Unit and Quantity, Value (USD), Port of Loading-Unloading, Country of Destination, and Shipment Date. You can also download a free ${slug.replace(/^./, (s) => s.toUpperCase())}   Export Data Sample for reference.`,
      },
      top_export_products: {
        title: "Top Export Products from " + slug,
        description: `As per ${slug.replace(/^./, (s) => s.toUpperCase())}   Export Statistics, the country’s top 5 exports include Uganda - $967.0 M, United States - $592.0 M, Netherlands - $143.6 M, Pakistan - $125.7 M, United Kingdom - $120.1 M. Together, these exports accounted for nearly 59% of ${slug.replace(/^./, (s) => s.toUpperCase())}  ’s total export value in FY 2024–25. You will find more detailed statistics of ${slug.replace(/^./, (s) => s.toUpperCase())}  's major exports by HS Code, Total Export Value, and Total Export Share in the chart given below.`,
        data: [
          { product: "Fineness of Gold", value: "$10.78M" },
          { product: "Electrical Cables", value: "$9.26M" },
          { product: "Gold", value: "$8.47M" },
          { product: "Gold Bars", value: "$6.17M" },
          { product: "Fresh Boneless Meat", value: "$4.78M" }
        ]
      },
      export_destinations: {
        title: `Export Destinations for ${slug.replace(/^./, (s) => s.toUpperCase())}`,
        description: `${slug.replace(/^./, (s) => s.toUpperCase())}   Customs Shipment Data suggests that Uganda is the largest exporter of goods from ${slug.replace(/^./, (s) => s.toUpperCase())}  . In terms of total export share, ${slug.replace(/^./, (s) => s.toUpperCase())}  ’s Top export Trading Partners in 2024 were DR Congo - $2813.4 M, United Arab Emirates - $2273.7 M, China- $1231.6 M, India - $594.1 M, Oman- $539.2 M. In the chart mentioned below, we have provided a detailed analysis of ${slug.replace(/^./, (s) => s.toUpperCase())}  ’s top 10 trading partners based on total export value and total export share.`,
        data: [
          { country: "USA", value: "$66.48M" },
          { country: "China", value: "$41.38M" },
          { country: "Honduras", value: "$25.91M" },
          { country: "Mexico", value: "$24.31M" },
          { country: "Guatemala", value: "$22.44M" }
        ]
      },
      trusted_clients: {
        title: "Trusted by Industry Leaders",
        description: `Join the list of prestigious clients who trust our comprehensive export data to grow their businesses.`,
        data: [
          "PUMA ENERGY SUPPLY & TRADING PTE. LTD.",
          "PACIFICA PETROLEUM",
          "Gildan Mayan Textiles S. de RL",
          "BELLA + CANVAS LLC"
        ]
      },
      grow_with_intelligence: {
        title: "Grow Your Export Potential with Global Trade Intelligence",
        benefits: [
          "Explore 200+ global markets",
          "Track market trends and competitors",
          "Locate verified buyers and suppliers",
          "Enhance your market entry strategy",
          "Get actionable insights to boost ROI"
        ]
      }
    };
  
    // If country data does not exist, use default data
    if (!countryData) {
      countryData = defaultData;
    }
  
  return (
    <main>

      {/* HERO */}
      <Hero
        country={slug}
        hero={{
          title: countryData.title,
          description: countryData.description
        }}
      />

      {/* LINKS */}
      <CountryLinksSection  />

      <Includes
  country={slug}
  desc1={countryData.what_included.desc_1}
  desc2={countryData.what_included.desc_2}
/>

      {/* TOP EXPORT PRODUCTS */}
      <What
        title={countryData.top_export_products.title}
        description={countryData.top_export_products.description}
        data={countryData.top_export_products.data}
      />

      {/* EXPORT DESTINATIONS */}
      <Who
        title={countryData.export_destinations.title}
        description={countryData.export_destinations.description}
        data={countryData.export_destinations.data}
        
      />

      {/* TRUSTED CLIENTS */}
      <Suppliers
        title={countryData.trusted_clients.title}
        description={countryData.trusted_clients.description}
        data={countryData.trusted_clients.data}
      />

      {/* CLIENTS LOGO SECTION */}
      <ClientsSection />

      {/* GROW WITH INTELLIGENCE */}
      <GlobalImpact
        
        points={countryData.grow_with_intelligence.benefits}
        
      />

      {/* IMPORTANT LINKS */}
      <ImportantLinks country={slug} />

      {/* FIND WHAT YOU NEED */}
      <FindWhat country={slug} />

      {/* CTA SECTION */}
      <GetTradeData />

    </main>
  );
}
