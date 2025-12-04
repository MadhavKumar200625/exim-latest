// /app/ports-data/[country]/[code]/page.jsx
export const dynamic = "force-static";
export const revalidate = 3600;

import Hero from "./Hero";
import PortsClient from "./PortsClient";

export default function Page({ params }) {
  const { country, code } = params;

  return (
    <main>
      <Hero countryName={country} />
      <PortsClient country={country} code={code} />
    </main>
  );
}