// /app/global-hs-code/[...searchresult]/page.jsx
export const revalidate = 3600; 
export const dynamic = "force-static";

import React from "react";
import Search from "../Search";
import HSClient from "./HSClient"; 
import FAQSection from "../../components/FAQ";

export async function generateMetadata() {
  return {
    title: "HS Code Lookup - Exim Trade Data",
    description: "HS Code lookup",
  };
}

export default function Page({ params }) {
  
  const { searchresult } = params;

  return (
    <main>
      <Search />

      {/* client loads heavy data */}
      <HSClient searchresult={searchresult} />

      {/* FAQ stays static */}
      <FAQSection title="FAQs About Global HS Code List" faqs={HSCodeFAQ} />
    </main>
  );
}

const HSCodeFAQ = [
    {
      question: "What is HS Code/HSN Code?",
      answer: `
        <p class="mb-4">
          As we come across new product launches every day, there was a need to create a system to track the import and export of a nation. 
          A <strong>Harmonized System Code</strong> or <strong>Harmonized System of Nomenclature</strong> was developed by the 
          <strong>World Customs Organization (WCO)</strong> in 1988. 
          Since then, HS Codes have been reformed five times — in 1996, 2002, 2007, 2012, and 2017.
        </p>
        <p class="mb-4">
          The sole purpose of Global HS Codes is to identify different goods and products which assist authorities in charging 
          <strong>custom duties</strong>, <strong>surcharges</strong>, taxes, and monitoring import/export activities. 
          An HS Code list includes specific names and HS numbers to classify various goods and commodities.
        </p>
      `
    },
    {
      question: "Why are HS Codes important?",
      answer: `
        <p class="mb-4">
          HS Codes are essential in international trade as they cover over <strong>5000+</strong> commodities and 
          <strong>95% of global trade</strong>. Customs authorities use HS Codes to identify goods and commodities and apply tariffs and taxes.
        </p>
        <p class="mb-4">
          If you don’t include the correct HS Code on your commercial bill and shipment details, it can result in 
          incorrect tax charges and shipment delays.
        </p>
      `
    },
    {
      question: "General format of HS/HSN Code",
      answer: `
        <p class="mb-4">
          An HS Code can be <strong>6 to 10 digits</strong> long. The first six digits remain the same for all countries 
          as per WCO rules, while the last four digits may vary by country.
        </p>
        <p class="mb-4">
          Globally, the HS Code list includes <strong>21 sections</strong> and <strong>99 chapters</strong> 
          followed by <strong>1,244 headings</strong> and <strong>5,244 subheadings</strong>.
        </p>
        <p class="font-semibold mb-2">Example Structure:</p>
        <div class="overflow-x-auto mb-4">
          <table class="min-w-full border border-gray-300 text-sm">
            <thead class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <tr>
                <th class="px-4 py-2 border">Part</th>
                <th class="px-4 py-2 border">Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr class="odd:bg-white even:bg-gray-50">
                <td class="px-4 py-2 border">Chapter (88)</td>
                <td class="px-4 py-2 border">First two digits represent the chapter.</td>
              </tr>
              <tr class="odd:bg-white even:bg-gray-50">
                <td class="px-4 py-2 border">Heading (66)</td>
                <td class="px-4 py-2 border">Next two digits represent headings.</td>
              </tr>
              <tr class="odd:bg-white even:bg-gray-50">
                <td class="px-4 py-2 border">Subheading (44)</td>
                <td class="px-4 py-2 border">Further two digits represent subheadings.</td>
              </tr>
              <tr class="odd:bg-white even:bg-gray-50">
                <td class="px-4 py-2 border">Regional Tariff (22)</td>
                <td class="px-4 py-2 border">Last two digits represent regional tariff.</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      question: "How can you find the HS Code for your product?",
      answer: `
        <p class="mb-4">
          By using our <strong>HS Code Search</strong> option, you can find the HS Code of your desired goods and products. 
          Simply enter the product name, perform the search, and your HS Code will appear.
        </p>
        <p class="mb-2">Example Table:</p>
        <div class="overflow-x-auto">
          <table class="min-w-full border border-gray-300 text-sm">
            <thead class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <tr>
                <th class="px-4 py-2 border">Type</th>
                <th class="px-4 py-2 border">Product Category</th>
                <th class="px-4 py-2 border">HS Code</th>
              </tr>
            </thead>
            <tbody>
              <tr class="odd:bg-white even:bg-gray-50">
                <td class="px-4 py-2 border">Section</td>
                <td class="px-4 py-2 border">Textiles & Textile Articles</td>
                <td class="px-4 py-2 border">******</td>
              </tr>
              <tr class="odd:bg-white even:bg-gray-50">
                <td class="px-4 py-2 border">Chapter (88)</td>
                <td class="px-4 py-2 border">Knitted or crocheted fabrics</td>
                <td class="px-4 py-2 border">88</td>
              </tr>
              <tr class="odd:bg-white even:bg-gray-50">
                <td class="px-4 py-2 border">Heading (66)</td>
                <td class="px-4 py-2 border">Fabrics, knitted or crocheted, width 30cm</td>
                <td class="px-4 py-2 border">8866</td>
              </tr>
              <tr class="odd:bg-white even:bg-gray-50">
                <td class="px-4 py-2 border">Subheading (44)</td>
                <td class="px-4 py-2 border">Artificial filament fabrics, printed</td>
                <td class="px-4 py-2 border">886644</td>
              </tr>
              <tr class="odd:bg-white even:bg-gray-50">
                <td class="px-4 py-2 border">Regional Tariff (22)</td>
                <td class="px-4 py-2 border">********</td>
                <td class="px-4 py-2 border">88664422</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      question: "Does HS Code differ per country?",
      answer: `
        <p>
          Yes. HS Codes differ per country for classification of goods. 
          The first six digits remain fixed worldwide, while the remaining digits are defined by each country.
        </p>
      `
    },
    {
      question: "How are HS Codes categorized in India?",
      answer: `
        <p class="mb-2">In India, ITC HS Codes are divided into two schedules:</p>
        <ul class="list-disc list-inside space-y-1">
          <li><strong>Schedule I</strong> – Rules and procedures for import policies.</li>
          <li><strong>Schedule II</strong> – Rules and procedures for export operations.</li>
        </ul>
      `
    },
    {
      question: "What does HS/HSN Code list of India cover?",
      answer: `
        <p>
          The Indian HS/HSN Code list covers 21 sections, 99 chapters, 1244 headings, and 5222 subheadings. 
          Each section is classified into chapters, chapters into headings, and headings into subheadings.
        </p>
      `
    },
    {
      question: "How do I find the ITC-HS Code for my product?",
      answer: `
        <p class="mb-4">
          Example: Suppose you are looking for the ITC-HS Code of a painting. 
          After searching, you find that the code is <strong>970110</strong>.
        </p>
        <ul class="list-disc list-inside space-y-1">
          <li><strong>97</strong> – Chapter</li>
          <li><strong>01</strong> – Heading</li>
          <li><strong>10</strong> – Subheading</li>
        </ul>
      `
    },
    {
      question: "Why choose Exim Trade Data's Global HS Code List?",
      answer: `
        <p>
          Exim Trade Data offers HS code lists of over <strong>60+ countries</strong>. 
          You can search by product name and access sample global import/export trade data for insights into world trade, 
          risk avoidance, and business opportunities.
        </p>
      `
    },
    {
      question: "What is the HS Code system of India?",
      answer: `
        <p>
          In India, HS Codes are known as <strong>ITC HS Codes</strong> (Indian Trade Clarification / Indian Tariff Code). 
          These 8-digit codes classify goods for export-import operations. The first six digits follow WCO rules, 
          and the last two are assigned by the DGFT.
        </p>
      `
    }
  ]