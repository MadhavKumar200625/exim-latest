import React from 'react'
import Hero from '../components/Services/Hero'
import Benifits from '../components/Services/Benifits'
import Features from '../components/Services/Features'
import BenefitsSection from '../components/Services/BenefitsSection'
import ImportExportSection from '../components/Services/ImportExportSection'
import ContactUs from '../components/ContactUs'


 export const metadata = {
  title: "Exim Trade Data - Services | Global Import Export Trade Data Provider Company",
  description:
    "Explore Exim Trade Data's comprehensive import-export trade data services. Get access to more than 200 countries Import and Export Trade Data.",
  keywords: [
    "Global Import Export Trade Data",
    "Import Export Data",
    "Export Import Data",
    "Global Import Export Data Provider",
    "Global Import Export Database",
    "Import Export Data Provider",
    "export import data provider",
    "Import Data provider",
    "export data provider",
    "Free Import Export Data",
    "Import Export Report"
  ],
  alternates: {
    canonical: "https://eximtradedata.com/services"
  },
  openGraph: {
    title: "Import Export Data Provider Company - Exim Trade Data",
    type: "website",
    url: "https://eximtradedata.com/services",
    description: "Enhance your market research with world's leading import export data provider company, Exim Trade Data. Discover Business leads from over 200+ countries.",
    siteName: "Exim Trade Data",
    images: [
      {
        url: "/logo.png",
        alt: "Exim Trade Data Logo",
      },
    ],
  },
  
  twitter: {
    card: "summary",
    title: "Import Export Data Provider Company - Exim Trade Data",
    description: "Enhance your market research with world's leading import export data provider company, Exim Trade Data. Discover Business leads from over 200+ countries.",
    site: "@eximtradedata",
    creator: "@eximtradedata",
    url: "https://eximtradedata.com/services",
    images: ["/logo.png"],
  }
  
};




const page = () => {
  return (
    <main>
        <Hero></Hero>
        <Benifits></Benifits>
        <Features></Features>
        <BenefitsSection></BenefitsSection>
        <ImportExportSection></ImportExportSection>
        <ContactUs></ContactUs>
    </main>
  )
}

export default page