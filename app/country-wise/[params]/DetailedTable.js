'use client'
import React from "react";
import { motion } from "framer-motion";

import Link from "next/link";



const DetailedTable = ({country  }) => {

  const sampleImportData = {
    "Date": "🔒 Locked ",
    "HS Code": "🔒 Locked ",
    "Product Details": "🔒 Locked",
    "Quantity": "🔒 Locked ",
    "Quantity Unit": "🔒 Locked ",
    "Value($)": "🔒 Locked",
    "Country of Origin": "India",
    "Country of Destination":country,
    "Importer": "🔒 Locked ",
    "Exporter": "🔒 Locked"
  };
  
  const sampleExportData = {
    "Date": "🔒 Locked ",
    "HS Code": "🔒 Locked ",
    "Product Details": "🔒 Locked ",
    "Quantity": "🔒 Locked ",
    "Quantity Unit": "🔒 Locked ",
    "Value($)": "🔒 Locked ",
    "Country of Origin": country,
    "Country of Destination": "India",
    "Importer": "🔒 Locked ",
    "Exporter": "🔒 Locked "
  };
  const renderTable = (data) => (
    <div className="overflow-x-auto mt-6">
    <table className="w-full border border-gray-300 text-left text-black">
      <thead className="bg-gray-100 border-b">
        <tr>
          <th className="px-4 py-2 border-r w-1/3">Field Name</th>
          <th className="px-4 py-2">Detail</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(data).map(([field, value], idx) => (
          <tr
            key={idx}
            className="border-b last:border-0 hover:bg-gray-50 transition"
          >
            <td className="px-4 py-2 border-r font-medium">{field}</td>
            <td className="px-4 py-2">{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );

  return (
    <section className="bg-white py-16 relative">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-black text-center mb-10"
        >
{country.replace(/^./, (s) => s.toUpperCase())} Export Import Data Sample
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl  text-black text-center mb-10"
        >
Get a complete sample on US export import data with all crucial fields such as HS code, product description, country of origin/destination, loading/unloading port, quantity, port container volume, importer and exporter information. Also, we provide customized US trade statistics on a quarterly, monthly and yearly basis to meet your requirements.
</motion.p>
        

        {/* Tabs */}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {renderTable(sampleImportData)}
          {renderTable(sampleExportData)}
        </div>

        {/* Table */}
        {/* {activeTab === "import" ? renderTable(importData) : renderTable(exportData)} */}
  <div className="mt-12 text-center">
  <Link
    href="/contact"
    className="inline-block bg-sky-600 text-white font-semibold px-6 py-3 rounded hover:bg-sky-700 transition"
  >
    Unlock Data
  </Link>
</div>
        
      </div>
    </section>
  );
};

export default DetailedTable;