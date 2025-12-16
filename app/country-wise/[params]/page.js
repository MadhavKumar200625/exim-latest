import CountryLinksSection from "./CountryLinksSection";
import Stats from "./Stats";
import SearchComponent from "../../components/SearchComponent";
import GlobalImpact from "./GlobalImpact";
import DetailedTable from "./DetailedTable";
import ImportantLinks from "./ImportantLinks";
import MarketIntel from "./MarketIntel";
import CtaImage from "./CtaImage";
import FAQSection from "../../components/FAQ";
import { Hero } from "./Hero";
import { countriesData } from "../../data/countries";
import { notFound } from "next/navigation";

/* ---------------- HELPERS ---------------- */

const normalizeSlug = (slug = "") =>
  slug.toLowerCase().replace(/\s+/g, "-");

const safeArray = (arr) => (Array.isArray(arr) ? arr : []);

const pickBuyers = (section4 = {}, slug) =>
  section4.buyers_list ||
  section4[`${slug}_buyers_list`] ||
  { companies: [] };

const pickSuppliers = (section4 = {}, slug) =>
  section4.suppliers_list ||
  section4[`${slug}_suppliers_list`] ||
  { companies: [] };

const normalizeCountryData = (raw, slug) => {
  const cap = slug.replace(/(^\w)/, (m) => m.toUpperCase());

  return {
    hero_section: raw.hero_section ?? {
      description: `Discover import export data for ${cap}.`,
    },

    overview: raw.overview ?? {
      total_imports: "N/A",
      total_exports: "N/A",
    },

    search_section: raw.search_section ?? {
      title: `Search ${cap} Trade Data`,
      description: "",
    },

    benefits_section: raw.benefits_section ?? { points: [] },

    section3: raw.section3 ?? { description: "" },

    section4: {
      ...raw.section4,
      buyers: pickBuyers(raw.section4, slug),
      suppliers: pickSuppliers(raw.section4, slug),
    },

    detailed_info: raw.detailed_info,
    leads_section: raw.leads_section ?? { description: "" },
    faq_section: raw.faq_section ?? { faqs: [] },

    meta: raw.meta ?? {},
    meta_title: raw.meta_title,
    openGraph: raw.openGraph ?? {},
    twitter: raw.twitter ?? {},
  };
};

/* ---------------- METADATA ---------------- */

export async function generateMetadata({ params }) {
  const slug = normalizeSlug(params.params);
  const country = countriesData[slug];

  const title =
    country?.meta?.title ||
    country?.meta_title ||
    `${slug.toUpperCase()} Import Export Data | Exim Trade Data`;

  const description =
    country?.meta?.description ||
    `Access ${slug} import export customs data, shipment data, buyers and suppliers.`;

  return {
    title,
    description,
    alternates: {
      canonical:
        country?.meta?.canonical ||
        `https://eximtradedata.com/${slug}-import-export-data`,
    },
    openGraph: {
      title,
      description,
      url:
        country?.openGraph?.url ||
        `https://eximtradedata.com/${slug}-import-export-data`,
      images: [
        {
          url:
            country?.openGraph?.images?.[0] ||
            "https://eximtradedata.com/images/logo.png",
        },
      ],
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: [
        country?.twitter?.images?.[0] ||
          "https://eximtradedata.com/images/logo.png",
      ],
    },
  };
}

/* ---------------- PAGE ---------------- */

export default function Page({ params }) {
  const slug = normalizeSlug(params.params);
  const rawCountry = countriesData[slug];

  if (!rawCountry) notFound();

  const country = normalizeCountryData(rawCountry, slug);

  return (
    <main>
      <Hero hero={country.hero_section} country={slug} />

      <CountryLinksSection />

      <Stats
        country={slug}
        imports={country.overview.total_imports}
        exports={country.overview.total_exports}
      />

      <SearchComponent
        country={slug}
        heading={country.search_section.title}
        subHeading={country.search_section.description}
      />

      <GlobalImpact
        country={slug}
        points={safeArray(country.benefits_section.points)}
      />

      <MarketIntel
        country={slug}
        desc={country.section3.description}
        data={country.section4}
      />

      {country.detailed_info && (
        <DetailedTable
          country={slug}
          description={country.detailed_info.description}
        />
      )}

      <CtaImage
        country={slug}
        description={country.leads_section.description}
      />

      <ImportantLinks country={slug} />

      {country.faq_section?.faqs?.length > 0 && (
        <FAQSection faqs={country.faq_section.faqs} />
      )}
    </main>
  );
}