export const dynamic = "force-static";
export const revalidate = 3600;

import React from "react";
import Hero from "./Hero";
import PortClient from "./PortClient";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export async function generateMetadata({ params }) {
  const country = params?.country ?? "";
  const port = params?.port ?? "";

  const readableCountry =
    country.charAt(0).toUpperCase() + country.slice(1).toLowerCase();
  const readablePort =
    port.charAt(0).toUpperCase() + port.slice(1).toLowerCase();

  const title = `${readablePort} Port - ${readableCountry} Port Data | Exim Trade Data`;
  const description = `View detailed import/export activity of ${readablePort} port in ${readableCountry}.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${baseURL}/global-ports/${country}/${port}`,
    },
    openGraph: {
      title,
      description,
      url: `${baseURL}/global-ports/${country}/${port}`,
      images: [{ url: "/logo.png" }],
    },
    twitter: {
      card: "summary",
      images: ["/logo.png"],
    },
  };
}

export default async function Page({ params }) {
  const { Country, Port } = await params;

  return (
    <main>
      <Hero heading={`${Port.replace(/-/g, " ").toUpperCase()} Port Data`} />

      {/* CLIENT SIDE FETCHING */}
      <PortClient country={Country} port={Port} />
    </main>
  );
}