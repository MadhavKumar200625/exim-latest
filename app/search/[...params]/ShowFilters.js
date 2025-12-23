// /app/search/[...params]/page.jsx

export const dynamic = "force-dynamic";
export const revalidate = 0;

import React from "react";
import CompanyClient from "./SearchClient";

/* ================= HELPERS ================= */

function parseFilters(raw = []) {
  return raw.map((param) => {
    const [label, ...value] = param.split("-");
    return {
      label: label.replace(/_/g, " ").replace(/^./, (s) => s.toUpperCase()),
      value: value.join(" ").replace(/_/g, " "),
    };
  });
}

function extractQuery(filters) {
  return {
    type:
      filters.find((f) => f.label === "Type")?.value?.toLowerCase() ||
      "export",
    country: filters.find((f) => f.label === "Country")?.value || "",
    product: filters.find((f) => f.label === "Product")?.value || "",
    hscode: filters.find((f) => f.label === "Hscode")?.value || "",
    countryin: filters.find((f) => f.label === "Countryin")?.value || "",
    port: filters.find((f) => f.label === "Port")?.value || "",
  };
}

/* ================= METADATA ================= */

export async function generateMetadata({ params }) {
  const raw = params?.params || [];
  const applied = parseFilters(raw);
  const query = extractQuery(applied);

  const { type, country } = query;

  // 🔒 Prevent indexing infinite combinations
  if (!country || !type) {
    return {
      title: "Search Global Trade Data | Exim Trade Data",
      description:
        "Search global import export trade data by country, HS code and product.",
      robots: { index: false, follow: true },
    };
  }

  const url = `/search/${raw.join("/")}`;

  return {
    title: `Search ${country} ${type} Data | Exim Trade Data`,
    description: `Explore ${country} ${type} shipment data with verified buyers, suppliers and ports.`,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      title: `Search ${country} ${type} Data`,
      description: `Verified ${country} ${type} trade data and shipment records.`,
      url,
      siteName: "Exim Trade Data",
      type: "website",
      images: [{ url: "/logo.png", alt: "Exim Trade Data" }],
    },
    twitter: {
      card: "summary",
      title: `Search ${country} ${type} Data`,
      description: `Verified ${country} ${type} trade data.`,
      images: ["/logo.png"],
    },
  };
}

/* ================= PAGE ================= */

export default function Page({ params }) {
  return (
    <main>
      {/* Static shell only – ALL heavy work is client-side */}
      <CompanyClient params={params} />
    </main>
  );
}