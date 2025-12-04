
import CountryLinksSection from "./CountryLinksSection";
import Stats from "./Stats";
import SearchComponent from "../../components/SearchComponent";
import GlobalImpact from "./GlobalImpact";
import DetailedTable from "./DetailedTable";
import ImportantLinks from "./ImportantLinks";
import MarketIntel from "./MarketIntel";
import CtaImage from "./CtaImage";
import FAQSection from "../../components/FAQ";
import Link from "next/link";
import Image from "next/image";
import { countriesData } from "../../data/countries";
import { notFound } from "next/navigation";
import { Hero } from "./Hero";

export async function generateMetadata({ params }) {
  const slug = params.params;  // ✅ FIXED
  const country = countriesData[slug];
  //const country = Object.values(industries).find((item) => item.link === slug);
  if (!country) {
    return {
      title: ` ${slug.toUpperCase()} Import Export  Data | ${slug.toUpperCase()} Customs Data - Exim Trade Data`,
      description: "Access up-to-date Turkey Import Export Data, Turkey customs data and Turkey shipment data to analyse trade by HS codes, countries, suppliers and ports at Exim Trade Data.",
      keywords:  [
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
        canonical: `https://eximtradedata.com/country-wise-${slug}-import-data`,
      },
      openGraph: {
        title:  country?.title,
        type: "website",
        url: `https://eximtradedata.com/country-wise-${slug}-import-data`,
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
        url:`https://eximtradedata.com/country-wise-${slug}-import-data`,
        images: ["https://eximtradedata.com/images/logo.png"],
      }
    };
  }

  return {
    title: country.meta?.title || ` ${slug.toUpperCase()} Import Export  Data | ${slug.toUpperCase()} Customs Data - Exim Trade Data`,
    description: country.meta?.description ||  "Access up-to-date Turkey Import Export Data, Turkey customs data and Turkey shipment data to analyse trade by HS codes, countries, suppliers and ports at Exim Trade Data.",
    keywords: country.meta?.keywords || [
      `${slug} Import Export Data`,
      `${slug} Customs Data`,
      `${slug} Shipment Data`,
      `${slug} Trade Statistics`,
      `${slug} Exporters`,
      `${slug} Importers`,
      `${slug} Trade Data`,
      `${slug} Market Analysis`,
    ],
    alternates: {
      canonical: country.meta?.canonical || `https://eximtradedata.com/country-wise-${slug}-import-export-data`,
    },
    openGraph: {
      title: country.openGraph?.title || country.meta?.title,
      type: "website",
      url: country.openGraph?.url ||`https://eximtradedata.com/country-wise-${slug}-import-export-data`,
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
      url: country.twitter?.url || `https://eximtradedata.com/country-wise-${slug}-import-export-data`,
      images: [country.twitter?.image || "https://eximtradedata.com/images/logo.png"],
    }
  };
}


// Main Page

 
const Page = ({ params }) => {
  const slug = params.params; // Get the country slug from URL params
  
  // Check if country data exists for the slug
  const country = countriesData[slug];

  // Default data to return if country does not exist
  const defaultData = {
    hero_section: {
      description: `Discover business opportunities in ${slug.replace(/^./, (s) => s.toUpperCase())} through reliable and up-to-date import-export data. Our platform offers historical and current ${slug} Import Data, customs data 2025, allowing you to explore trade patterns, find verified buyers and suppliers, and develop strategic marketing plans. Get accurate and verified information based on ${slug} customs data. Identify year-wise ${slug} imports and exports by HS code, country, product, and access ${slug} buyers list, ${slug} suppliers list, and ports volume reports. You can also access a trade API to integrate this data into your workflows.`
    },
    overview: {
      title: `${slug.replace(/^./, (s) => s.toUpperCase())} Import-Export Data Overview (2024–2025)`,
      total_imports: "$305.81 million",
      total_exports: "$227.80 million"
    },
    search_section: {
      title: `Search Trade Data and ${slug.replace(/^./, (s) => s.toUpperCase())} Import and Export Data by Country-wise, or Product`,
      description: `Use our search tool to dive into ${slug.replace(/^./, (s) => s.toUpperCase())}’s trade data by HS code, product, or partner country. Each report includes Product & HS code descriptions, Quantities and units, Price and total value, Origin & destination countries, Importer & exporter names, Port of loading-unloading, and shipping details.`
    },
    benefits_section: {
      title: "Grow Your Global Reach with Global Trade Intelligence",
      points: [
        "Explore 200+ global markets",
        "Track real-time trends, prices & risks",
        "Monitor competitor shipments",
        `Locate verified ${slug.replace(/^./, (s) => s.toUpperCase())} buyers & suppliers`,
        "Improve conversion using quality trade leads"
      ]
    },
    section3: {
      description: `Gain a clear understanding of ${slug.replace(/^./, (s) => s.toUpperCase())}’s trade performance with detailed import and export data for the fiscal year 2024–25. Our verified shipment records provide insights into market demand, trade partners, top-performing sectors, and key companies involved in international trade. Whether you’re planning to enter the ${slug} market or expand your global reach, this data helps you make informed, strategic decisions backed by real-time intelligence`
    },
    section4: {
      top_import_countries: {
        data: [
          { country: "USA", value: "$100.36M" },
          { country: "Mexico", value: "$24.16M" },
          { country: slug, value: "$21.98M" },
          { country: "Canada", value: "$15.16M" },
          { country: "El Salvador", value: "$12.65M" }
        ]
      },
      top_import_products: {
        data: [
          { product: "Crude Oil", value: "$9.81M" },
          { product: "Medicine for Human Use", value: "$5.60M" },
          { product: "Cut Fabric for T-Shirts", value: "$3.59M" },
          { product: "Fuel Oil", value: "$3.28M" },
          { product: "Raw Oil", value: "$3.26M" }
        ]
      },
      buyers_list: {
        companies: [
          "ASAHI REFINING CANADA LTD",
          `YAZAKI DE ${slug.replace(/^./, (s) => s.toUpperCase())} SA (WAREHOUSE)`,
          "Gildan NDC (EDEN, NC DC/50)",
          "TARGET",
          "BANK OF AMERICA"
        ]
      },
      top_export_countries: {
        data: [
          { country: "USA", value: "$66.48M" },
          { country: "China", value: "$41.38M" },
          { country: "Honduras", value: "$25.91M" },
          { country: "Mexico", value: "$24.31M" },
          { country: "Guatemala", value: "$22.44M" }
        ]
      },
      top_export_products: {
        data: [
          { product: "Fineness of Gold", value: "$10.78M" },
          { product: "Electrical Cables", value: "$9.26M" },
          { product: "Gold", value: "$8.47M" },
          { product: "Gold Bars", value: "$6.17M" },
          { product: "Fresh Boneless Meat", value: "$4.78M" }
        ]
      },
      suppliers_list: {
        companies: [
          "PUMA ENERGY SUPPLY & TRADING PTE. LTD.",
          "PACIFICA PETROLEUM",
          "Gildan Mayan Textiles S. de RL",
          "PUMA ENERGY SUPPLY & TRADING PTE. LTD., -",
          "BELLA + CANVAS LLC"
        ]
      }
    },
    sample_data_section: {
      title: `${slug.replace(/^./, (s) => s.toUpperCase())} Export Import Trade Data Sample`,
      description1: `Before committing to full access to the ${slug.replace(/^./, (s) => s.toUpperCase())} trade data, you can request a sample report on the ${slug} export data and the ${slug} import data. The sample will include key data fields such as HS code, product details, origin-destination countries, unit, quantity, ports, and verified exporter and importer shipment records. You can also customize the ${slug} trade statistics based on monthly, quarterly, or yearly data.`,
      description2: `You'll receive essential data fields, including: HS code and product description, Origin and destination countries, Quantity, unit, and value, Port and shipment details, Verified importer and exporter records. You can also customize your data by month, quarter, or full year, depending on your needs.`
    },
    leads_section: {
      title: "Get High-Quality Leads with Exim GTIS",
      description: `Our regularly updated ${slug.replace(/^./, (s) => s.toUpperCase())} trade database helps you identify genuine and verified business leads, enabling you to increase sales and boost revenue.`
    },
    faq_section: {
      title: `${slug} Import-Export FAQs`,
      faqs: [
        {
          question: `What are ${slug.replace(/^./, (s) => s.toUpperCase())}'s main exports?`,
          answer: "Fineness of Gold, Electrical Cables, Gold, Gold Bars, Fresh Boneless Meat, Cigars"
        },
        {
          question: `What are ${slug.replace(/^./, (s) => s.toUpperCase())}'s main imports?`,
          answer: "Crude Oil, Medicine for Human Use, Cut Fabric for T-Shirts, Fuel Oil, Raw Oil"
        },
        {
          question: `Who are ${slug.replace(/^./, (s) => s.toUpperCase()) }'s main trading partners?`,
          answer: "USA, Honduras, China, Guatemala, Mexico"
        },
        {
          question: `What is the ${slug.replace(/^./, (s) => s.toUpperCase())} trade balance?`,
          answer: "Trade deficit, imports exceed exports"
        },
        {
          question: `What industries drive ${slug.replace(/^./, (s) => s.toUpperCase())} exports?`,
          answer: "Light Manufacturing, Aquaculture, Agriculture, Livestock"
        }
      ]
    }
  };

  // If country data is not found, use the default fallback data
  const countryData = country || defaultData;

  return (
    <main>
      {/* Hero Section */}
      <Hero hero={countryData.hero_section} country={slug} />

      {/* Country Links Section */}
      <CountryLinksSection />

      {/* Overview Section (Import/Export Stats) */}
      <Stats
        country={slug}
        imports={countryData.overview.total_imports}
        exports={countryData.overview.total_exports}
      />

      {/* Search Section */}
      <SearchComponent
        country={slug}
        heading={countryData.search_section.title}
        subHeading={countryData.search_section.description}
      />

      {/* Benefits Section */}
      <GlobalImpact country={slug} points={countryData.benefits_section.points} />

      {/* Market Intel Section */}
      <MarketIntel
        country={slug}
        desc={countryData.section3.description}
        data={countryData.section4}
      />

      {/* Detailed Info Section */}
      {countryData.detailed_info && (
        <DetailedTable country={slug} description={countryData.detailed_info.description} />
      )}

      {/* Leads Section */}
      <CtaImage country={slug} description={countryData.leads_section.description} />

      {/* Important Links Section */}
      <ImportantLinks country={slug} />

      {/* FAQ Section */}
      {countryData.faq_section && <FAQSection faqs={countryData.faq_section.faqs} />}
    </main>
  );
};
export default Page;

