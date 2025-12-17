export const dynamic = "force-static";
export const revalidate = 3600;

import Hero from "./Hero";
import CompanyClient from "./CompanyClient";

export async function generateMetadata(context) {
  const { country = "", company = "" } = context.params || {};

  const formattedCountry =
    country.charAt(0).toUpperCase() + country.slice(1).toLowerCase();

  const formattedCompanyName = company
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  const fullUrl = `https://eximtradedata.com/global-companies/${country}/${company}`;

  return {
    title: `${formattedCompanyName} - Import Export Trade Data, Buyers, Suppliers | Exim Trade Data`,
    description: `Discover key import export data for ${formattedCompanyName}. Get insights into global trade activity, shipment records, and company details at Exim Trade Data.`,
    keywords: `${formattedCompanyName}, ${formattedCompanyName} import data, ${formattedCompanyName} export records, ${formattedCompanyName} shipment data`,
    alternates: { canonical: fullUrl },
    openGraph: {
      title: `${formattedCompanyName} - Import Export Trade Data`,
      description: `Discover key import export data for ${formattedCompanyName}.`,
      url: fullUrl,
      images: [{ url: "/logo.png" }],
    },
    twitter: {
      card: "summary",
      title: `${formattedCompanyName} - Import Export Data`,
      description: `Discover key import export data for ${formattedCompanyName}.`,
      images: ["/logo.png"],
    },
  };
}

export default async function Page({ params }) {
  params = await params
  return (
    <main>
      <Hero />
      <CompanyClient params={params} />
    </main>
  );
}