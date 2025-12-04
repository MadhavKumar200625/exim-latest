import React from 'react'
import Hero from '../components/OurClients/Hero'
import Sectors from '../components/OurClients/Sectors'
import TestimonialsSection from '../components/TestimonialsSection'
import Reputation from '../components/OurClients/Reputation'


 export const metadata = {
  title: "Clients - Trusted by Global Importers & Exporters | Global Trade Data of 200+ Countries",
  description:
    "Discover the global companies and businesses that trust Exim Trade Data for accurate import-export data solutions. Join our growing list of satisfied clients worldwide.",
  keywords: [
    "Exim Trade Data clients",
    "import export clients",
    "global trade data customers",
    "international trade partners",
    "trade data services",
    "client testimonials",
    "trusted by exporters",
    "importers clients list"
  ],
  alternates: {
    canonical: "https://eximtradedata.com/our-client"
  },
  openGraph: {
    title: "Our Clients | Exim Trade Data",
    type: "website",
    url: "https://eximtradedata.com/our-client",
    description: "At Exim Trade Data, we believe in growing along with our customers. Customer Satisfaction is our utmost priority.",
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
    title: "Our Clients | Exim Trade Data",
    description: "At Exim Trade Data, we believe in growing along with our customers. Customer Satisfaction is our utmost priority.",
    site: "@eximtradedata",
    creator: "@eximtradedata",
    url: "https://eximtradedata.com/our-client",
    images: ["https://eximtradedata.com/images/logo.png"],
  }
  
};

const page = () => {
  return (
    <main>
        <Hero></Hero>
        <Sectors></Sectors>
        <Reputation></Reputation>
        <TestimonialsSection></TestimonialsSection>
    </main>
  )
}

export default page