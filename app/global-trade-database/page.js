export const dynamic = "force-static"; 
export const revalidate = 86400; // 1 day cached

import React from 'react'
import Hero from './Hero'
import CountryLinksSection from './CountryLinksSection'
import ExclusiveFeatures from './ExclusiveFeatures'
import Stats from './Stats'
import FeaturesSection from './FeaturesSection'
import PricingSection from './PricingSection'
import ClientsSection from '../components/ClientsSection'
import TestimonialsSection from '../components/TestimonialsSection'
import FAQSection from '../components/FAQ'


export const metadata = {
  title: "Global Trade Database | Verified Import Export Data at Exim Trade Data",
  description:
    "Access real-time global trade database with detailed import-export records, HS codes, and shipment data. Trusted by businesses worldwide for market insights.",
  keywords: [
    "global trade database",
    "import export data",
    "trade data platform",
    "shipment data",
    "hs code data",
    "international trade statistics",
    "global trade data"
  ],
  alternates: {
    canonical: "https://eximtradedata.com/global-trade-database"
  },
  openGraph: {
    title: "Global Trade Database – import export market intelligence",
    type: "website",
    url: "https://eximtradedata.com/global-trade-database",
    description: "Find high ROI sales through our Global trade database of 200+ countries. Search top product trends, countries, ports, buyers, and suppliers by HS Code.",
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
    title: "Global Trade Database – import export market intelligence",
    description: "Find high ROI sales through our Global trade database of 200+ countries. Search top product trends, countries, ports, buyers, and suppliers by HS Code.",
    site: "@eximtradedata",
    creator: "@eximtradedata",
    url: "https://eximtradedata.com/global-trade-database",
    images: ["/logo.png"],
  }
  
};




const page = () => {
  const faq = [
    {
      question: "1. What is the Exim Global Trade Information System? How can it help my business?",
      answer: `
        Exim Global Trade Information System is the leading trade intelligence platform helping businesses thrive in the global market.<br /><br/>
        We provide expert market intelligence reports of <b>200+ countries</b> that highlight the latest market trends, product lists, port shipment records, and importer/exporter lists.<br /><br/>
        Through our platform, you can mitigate financial risk by connecting with genuine buyers and suppliers worldwide — helping you generate higher ROI and establish a strong global brand presence.
      `,
    },
    {
      question: "2. How many countries are covered in your global trade database? What types of data do you provide?",
      answer: `
        Our global trade database covers <b>200+ countries</b>, including exclusive data for Turkey, Bangladesh, Thailand, Ghana, Chad, Mexico, Tanzania, and more.<br /><br/>
        We provide detailed trade statistics reports based on shipment transactions, invoices, bills, port shipments, and customs data.<br /><br/>
        <b>Our database contains 4 types of data:</b><br/>
        <ul class="list-disc ml-6">
          <li><b>Statistical Data:</b> Identifies market trends, demand, and evaluates product pricing. Includes date of shipment, product quantity, price, country of origin/destination, etc.</li>
          <li><b>Customs Data:</b> Official customs data with HS Code, product description, country, buyer, supplier name, and port of loading/unloading.</li>
          <li><b>Mirror Data:</b> Data for countries with limited coverage, extracted from their trading partners’ records.</li>
          <li><b>Bill of Lading Data:</b> Shipping details excluding pricing, based on company shipment records.</li>
        </ul>
      `,
    },
    {
      question: "3. What's the difference between the plans? How do I decide which plan is best for me?",
      answer: `
        We offer 5 plans — <b>Starter</b>, <b>Basic</b>, <b>Plus</b>, <b>Pro</b>, and <b>Premium</b> — each with different search limits, download credits, and user licenses.<br /><br/>
        You can compare plans on our pricing page and choose one that fits your requirements and budget. We also offer fully customized plans.
      `,
    },
    {
      question: "4. How can I subscribe to Exim GTIS? How does your point system work?",
      answer: `
        To subscribe, visit our pricing page, compare plans, and click <b>Buy Now</b>. After payment, you will receive an activation email, and your account will be activated post verification.<br /><br/>
        <b>Point System:</b><br/>
        <ul class="list-disc ml-6">
          <li>Points & credits are based on searches and downloads in your plan.</li>
          <li>Example: 1 point for downloading 1 shipment of Indonesia or Vietnam trade data.</li>
          <li>Example: 10 points for downloading 1 shipment of Turkey Direct Export data.</li>
        </ul>
        Once activated, you can access the complete database for all countries under your plan.
      `,
    },
    {
      question: "5. How much time will it take for my account to be activated?",
      answer: `
        Your account will be activated after payment verification. You will receive an activation email shortly after completing your purchase.
      `,
    },
    {
      question: "6. How can I create a customized data plan as per my requirement and budget?",
      answer: `
        We offer fully customized plans tailored to your needs and budget.<br /><br/>
        Simply email us at <a href="mailto:info@eximtradedata.com" class="text-blue-600">info@eximtradedata.com</a> with your requirements, and our team will get back to you.
      `,
    },
    {
      question: "7. How do I get customer support?",
      answer: `
        Our expert team is available <b>24×7</b> to assist you.<br /><br/>
        You can contact us anytime at <a href="tel:+919625812393" class="text-blue-600">+91-9625812393</a> or email <a href="mailto:info@eximtradedata.com" class="text-blue-600">info@eximtradedata.com</a> for help or training.
      `,
    }
  ]

  return (
    <main>
        <Hero></Hero>
        <CountryLinksSection></CountryLinksSection>
        <ExclusiveFeatures></ExclusiveFeatures>
        <Stats></Stats>
        <FeaturesSection></FeaturesSection>
        <PricingSection></PricingSection>
        <ClientsSection></ClientsSection>
        <TestimonialsSection></TestimonialsSection>
        <FAQSection faqs={faq} ></FAQSection>
    </main>
  )
}

export default page