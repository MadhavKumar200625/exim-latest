import React from 'react'
import Hero from './Hero'
import IndustriesSection from './IndustriesSection'

export const metadata = {
  title: "Search | Import Export Records | Exim Trade Data",
  description:
    "Search detailed global trade data by product, HS code, country, or company. Access real-time import-export records and shipment insights worldwide.",
  keywords: [
    "search global trade data",
    "import export records",
    "hs code search",
    "shipment data",
    "trade analytics",
    "international trade data",
    "exim search tool"
  ],
  alternates: {
    canonical: "https://eximtradedata.com/search"
  },
  openGraph: {
    title: "Search Global Trade Data by Country, HS Code & Product",
    type: "website",
    url: "https://eximtradedata.com/search",
    description: "Get unlimited access to our online global trade data portal. Perform free search on global trade data by country, HS Code and product.",
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
    title: "Search Global Trade Data by Country, HS Code & Product",
    description: "Get unlimited access to our online global trade data portal. Perform free search on global trade data by country, HS Code and product.",
    site: "@eximtradedata",
    creator: "@eximtradedata",
    url: "https://eximtradedata.com/search",
    images: ["https://eximtradedata.com/images/logo.png"],
  }
  
};



const page = () => {
  return (
    <main>
      <Hero></Hero>
      {/* <IndustriesSection></IndustriesSection> */}
    </main>
  )
}

export default page