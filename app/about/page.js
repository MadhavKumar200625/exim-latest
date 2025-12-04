import React from 'react'
import HeroSection from '../components/About/HeroSection'
import BenifitsSection from '../components/About/BenifitsSection'
import ClientsSection from '../components/ClientsSection'
import CodeOfConductSection from '../components/About/CodeOfConductSection'
import TestimonialsSection from '../components/TestimonialsSection'
import ContactUs from '../components/ContactUs'



 export const metadata = {
  title: 'Global Trade Data | About Exim Trade Data',
  description:
    'Exim Trade Data is the best global import export trade data provider, providind global trade data for 200+ countries.',
  keywords: [
    'Global Import Export Trade Data',
    'Import Export Data',
    'Export Import Data',
    'Global Import Export Data Provider',
    'Global Import Export Database',
    'Import Data',
    'Export Data',
    'Shipments Data',
    'Customs Data',
    'Import Trade Data',
    'Export Trade Data',
    'Importers',
    'Exporters',
    'Buyers',
    'Suppliers',
  ],
  alternates: {
    canonical: 'https://eximtradedata.com/about',
  },
  openGraph: {
    title: "Exim Trade Data - Most trusted data providing company",
    type: "website",
    url: "https://eximtradedata.com/about",
    description: "Exim trade data helps you to provide accurate and custom-made data solutions and resolve all your export-import business operations.",
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
    title: "Exim Trade Data - Most trusted data providing company",
    description: "Exim trade data helps you to provide accurate and custom-made data solutions and resolve all your export-import business operations.",
    site: "@eximtradedata",
    creator: "@eximtradedata",
    url: "https://eximtradedata.com/about",
    images: ["https://eximtradedata.com/images/logo.png"],
  }
  
};

const page = () => {
  return (
    <main>
    <HeroSection></HeroSection>
    <BenifitsSection></BenifitsSection>
    <CodeOfConductSection></CodeOfConductSection>
    <ClientsSection></ClientsSection>
    <TestimonialsSection></TestimonialsSection>
    <ContactUs></ContactUs>
    </main>
  )
}

export default page