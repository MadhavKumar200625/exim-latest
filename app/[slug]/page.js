import React from "react";
import Hero from "./Hero";
import TabsSection from "./TabsSection";
import Points from "./Points";
import Section4 from "./Section4";
import Section5 from "./Section5";
import { industries } from "./data";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  //const param_temp = await params;
  const { slug } = await params;
  const industry = industries[slug];
  //const industry = Object.values(industries).find((item) => item.link === slug);

  // ✅ Prevent crash if wrong slug
  if (!industry) {
    return {
      title: "Industry Not Found - Exim Trade Data",
      description: "The requested industry page does not exist.",
    };
  }

  return {
    title: industry.meta?.title || `${slug} Industry Trade Data`,
    description: industry.meta?.description || `Explore import export data for the ${slug} industry.`,
    keywords: industry.meta?.keywords || [],
    alternates: {
      canonical: industry.meta?.canonical || `https://eximtradedata.com/industries/${slug}`,
    },
    openGraph: {
      title: industry.openGraph?.title || industry.meta?.title,
      type: "website",
      url: industry.openGraph?.url || `https://eximtradedata.com/industries/${slug}`,
      description: industry.openGraph?.description || industry.meta?.description,
      siteName: "Exim Trade Data",
      images: [
        {
          url: industry.openGraph?.image || "https://eximtradedata.com/images/logo.png",
          alt: industry.openGraph?.imageAlt || "Exim Trade Data Logo",
        },
      ],
    },
    twitter: {
      card: "summary",
      title: industry.twitter?.title || industry.meta?.title,
      description: industry.twitter?.description || industry.meta?.description,
      site: "@eximtradedata",
      creator: "@eximtradedata",
      url: industry.twitter?.url || `https://eximtradedata.com/industries/${slug}`,
      images: [industry.twitter?.image || "https://eximtradedata.com/images/logo.png"],
    }
  };
}

const Page = async ({ params }) => {
  const { slug } =  params;
  //const param_temp = await params;
  //const { slug } =  param_temp;
  const industry = industries[slug];
  //const industry = Object.values(industries).find((item) => item.link === slug);

  // ✅ 404 if slug doesn't exist
  if (!industry) {
    notFound();
  }

  return (
    <main>
    <Hero {...industry.section1} image={slug} />
    {industry.section2 &&
    <TabsSection
      heading={industry.section2.heading}
      points={industry.section2.points}
    />
    }
    
    {industry.section3 &&
          <Points {...industry.section3} peviousSection={industries.section2? true:false} />
    }
    <Section4 {...industry.section4} />
    <Section5 industries={industry.section5.industries}/>
  </main>
  );
};

export default Page;
