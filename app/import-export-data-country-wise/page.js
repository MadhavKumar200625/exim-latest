import React from 'react'
import Hero from './Hero'
import Countries from './Countries'
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Unlock Global Trade Insights Across 200+ Countries | Import Export Data Country-wise",
  description:
    "Access detailed import-export data for 200+ countries. Find verified trade information, including shipment records, market trends, and top trading partners worldwide.",
  keywords: [
    "import export data",
    "import export database",
    "importers exporters directory",
    "import export data by country",
    "country wise import export data",
    "import export trade data",
    "import export customs data",
    "import export data with importer name"
  ],
  alternates: {
    canonical: "https://eximtradedata.com/import-export-data-country-wise"
  },
  openGraph: {
    title: "Import Export Data of 200+ Countries, Importer Exporters",
    type: "website",
    url: "https://eximtradedata.com/import-export-data-country-wise",
    description: "Grow your business globally with country wise import export data. Discover 200+ markets, and get high ROI leads from importers exporters directory.",
    siteName: "Exim Trade Data",
    images: [
      {
        url: "https://eximtradedata.com/images/logo.png",
        alt: "Exim Trade Data Logo",
      },
    ],
  },
  
  twitter: {
    card: "summary",
    title: "Import Export Data of 200+ Countries, Importer Exporters",
    description: "Grow your business globally with country wise import export data. Discover 200+ markets, and get high ROI leads from importers exporters directory.",
    site: "@eximtradedata",
    creator: "@eximtradedata",
    url: "https://eximtradedata.com/import-export-data-country-wise",
    images: ["https://eximtradedata.com/images/logo.png"],
  }
  
};




const page = () => {
  return (
    <main>
        <Hero></Hero>
        <Countries></Countries>
        <section className="w-full bg-gradient-to-r from-blue-200 to-blue-50 text-black py-8 px-6">
      <div className="w-full  flex flex-col md:flex-row items-center justify-between px-32">
        
        {/* Left Content */}
          <h2 className="text-3xl max-w-2xl   font-bold leading-tight">
            GET GLOBAL TRADE DATA ONLINE AT YOUR FINGERTIPS!
          </h2>

          {/* CTA Button */}
          <Link href="/contact" className="flex items-center gap-3 bg-blue-600 text-white text-xl px-6 py-3 cursor-pointer font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200">
            Schedule a Demo
            <ArrowRight size={20} />
          </Link>

      </div>
    </section>
    </main>
  )
}

export default page