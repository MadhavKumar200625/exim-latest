'use client'

import React, { useState } from "react";
import { motion } from "framer-motion";

const MarketIntel = ({ country, desc, data }) => {
  const [activeTab, setActiveTab] = useState("import");
  


  const renderTable = (data, type) => (
    <div className="grid gap-8 md:grid-cols-3">
      {/* Top Countries */}
      <div className="bg-white shadow-md border border-gray-200 p-6 rounded-xl">
        <h3 className="text-lg font-semibold">
          {type === "import" ? `Top Imports of ${country.replace(/^./, (s) => s.toUpperCase())} by Country` : `Top Exports of ${country.replace(/^./, (s) => s.toUpperCase())} by Country`}
        </h3>
        <table className="w-full text-left text-black mt-4">
          <thead className="border-b">
            <tr>
              <th className="py-2">{type === "import" ? "Country" : "Country"}</th>
              <th className="py-2">Value</th>
            </tr>
          </thead>
          <tbody>
            {type === "import"
              ? data.top_import_countries.data.map((item, idx) => (
                  <tr key={idx} className="border-b last:border-0">
                    <td className="py-2">{item.country}</td>
                    <td className="py-2">{item.value}</td>
                  </tr>
                ))
              : data.top_export_countries.data.map((item, idx) => (
                  <tr key={idx} className="border-b last:border-0">
                    <td className="py-2">{item.country}</td>
                    <td className="py-2">{item.value}</td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>

      {/* Top Products */}
      <div className="bg-white shadow-md border border-gray-200 p-6 rounded-xl">
        <h3 className="text-lg font-semibold">
          {type === "import" ? `Top Imports of ${country.replace(/^./, (s) => s.toUpperCase()) } by Product` : `Top Exports of ${country} by Product`}
        </h3>
        <table className="w-full text-left text-black mt-4">
          <thead className="border-b">
            <tr>
              <th className="py-2">{type === "import" ? "Product" : "Product"}</th>
              <th className="py-2">Value</th>
            </tr>
          </thead>
          <tbody>
            {type === "import"
              ? data.top_import_products.data.map((item, idx) => (
                  <tr key={idx} className="border-b last:border-0">
                    <td className="py-2">{item.product}</td>
                    <td className="py-2">{item.value}</td>
                  </tr>
                ))
              : data.top_export_products.data.map((item, idx) => (
                  <tr key={idx} className="border-b last:border-0">
                    <td className="py-2">{item.product}</td>
                    <td className="py-2">{item.value}</td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>

      {/* Buyers / Suppliers */}
      {/* <div className="bg-white shadow-md border border-gray-200 p-6 rounded-xl">
        <h3 className="text-lg font-semibold">
          {type === "import" ? `${country.replace(/^./, (s) => s.toUpperCase()) } Buyers List` : `${country.replace(/^./, (s) => s.toUpperCase()) } Suppliers List`}
        </h3>
        <table className="w-full text-left text-black mt-4">
          <tbody>
            {(type === "import" ? data.uae_buyers_list.companies : data.uae_suppliers_list.companies).map(
              (item, idx) => (
                <tr key={idx} className="border-b last:border-0">
                  <td className="py-2">{item}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div> */}
      <div className="bg-white shadow-md border border-gray-200 p-6 rounded-xl">
  <h3 className="text-lg font-semibold">
    {type === "import"
      ? `${country.replace(/^./, (s) => s.toUpperCase())} Buyers List`
      : `${country.replace(/^./, (s) => s.toUpperCase())} Suppliers List`}
  </h3>

  <table className="w-full text-left text-black mt-4">
    <tbody>
      {(
        type === "import"
          ? data[`${country}_buyers_list`]?.companies
          : data[`${country}_suppliers_list`]?.companies
      )?.map((item, idx) => (
        <tr key={idx} className="border-b last:border-0">
          <td className="py-2">{item}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

    </div>
  );

  return (
    <section className="bg-gray-50 py-16 relative">
      <div className="container mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-black text-center mb-4"
        >
          {country.replace(/^./, (s) => s.toUpperCase()) } Import Export Data 2024-25
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg md:text-xl text-black text-center mb-10"
        >
          {desc}
        </motion.p>

        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={() => setActiveTab("import")}
            className={`px-6 py-2 font-medium rounded-lg border ${
              activeTab === "import"
                ? "bg-black text-white border-black"
                : "bg-white text-black border-gray-300 hover:bg-gray-100"
            }`}
          >
            Import
          </button>
          <button
            onClick={() => setActiveTab("export")}
            className={`px-6 py-2 font-medium rounded-lg border ${
              activeTab === "export"
                ? "bg-black text-white border-black"
                : "bg-white text-black border-gray-300 hover:bg-gray-100"
            }`}
          >
            Export
          </button>
        </div>

        {activeTab === "import" ? renderTable(data, "import") : renderTable(data, "export")}
      </div>
    </section>
  );
};

export default MarketIntel;
