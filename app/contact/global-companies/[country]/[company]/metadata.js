export async function generateMetadata({ params }) {
  const { country, company } = params;

  const formattedCompanyName = company
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  const fullUrl = `https://eximtradedata.com/global-companies/${country}/${company}`;

  return {
    title: `${formattedCompanyName} - Import Export Trade Data, Buyers, Suppliers | Exim Trade Data`,
    description: `Discover key import export data for ${formattedCompanyName}.`,
    alternates: { canonical: fullUrl },
    openGraph: {
      title: `${formattedCompanyName} Trade Data`,
      url: fullUrl,
      images: ["/logo.png"],
    },
    twitter: {
      card: "summary",
      title: `${formattedCompanyName} Trade Data`,
      images: ["/logo.png"],
    },
  };
}