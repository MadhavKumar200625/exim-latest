export const dynamic = "force-static";
export const revalidate = 3600;

import React from "react";
import Hero from "@/app/global-products/Hero";
import ProductsClient from "./ProductsClient";

function capitalizeWords(str = "") {
  return str
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
}

// -------------------------
// Metadata — already correct
// -------------------------
export async function generateMetadata({ params }) {
  params = await params; // IMPORTANT FIX

  const { product, country, type, page } = params;

  const readableProduct = decodeURIComponent(product)
    .replace(/-/g, " ")
    .toUpperCase();

  const readableCountry = decodeURIComponent(country)
    .replace("country-", "")
    .replace(/-/g, " ");

  const readableType = decodeURIComponent(type)
    .replace("type-", "")
    .toLowerCase();

  const startLetter = readableProduct[0];

  const fullUrl = `https://eximtradedata.com/global-products/${product}/${country}/${type}/${page}`;

  return {
    title: `${readableCountry} Directory of ${readableType === "import" ? "Import" : "Export"} Products starting with ${startLetter}`,
    description: `Explore ${readableCountry}'s global ${readableType} product directory starting with ${startLetter}.`,
    alternates: { canonical: fullUrl },
    openGraph: {
      title: `Global ${readableType} product directory`,
      description: "Explore global trade product listings A-Z.",
      url: fullUrl,
      images: [{ url: "https://eximtradedata.com/images/logo.svg" }],
    },
    twitter: {
      card: "summary",
      images: ["https://eximtradedata.com/images/logo.svg"],
    },
  };
}

// -------------------------
// PAGE — FIXED (params unwrap)
// -------------------------
export default async function Page({ params }) {
  params = await params; // IMPORTANT FIX

  const { products, country, type } = params;

  const heading = `Directory of ${country
    .replace(/^country-/, "")
    .replace(/_/g, " ")} ${type.replace(/^type-/, "")} Products starting with ${products.replace(
    /^product-/,
    ""
  )}`;

  return (
    <main>
      <Hero heading={capitalizeWords(heading)} />
      <ProductsClient params={params} />
    </main>
  );
}