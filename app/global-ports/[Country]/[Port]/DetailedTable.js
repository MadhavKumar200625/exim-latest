"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";



const DetailedTable = ({ portName, importData, exportData }) => {
  const [activeTab, setActiveTab] = useState("import");

  const renderTable = (data) => (
    <div className="overflow-x-auto mt-6">
      <table className="w-full border border-gray-300 text-left text-black">
        <thead className="bg-gray-100 border-b">
          <tr>
            <th className="px-4 py-2 border-r">HS Code</th>
            <th className="px-4 py-2 border-r">Product Description</th>
            <th className="px-4 py-2 border-r">Qty</th>
            <th className="px-4 py-2 border-r">Origin</th>
            <th className="px-4 py-2 border-r">Destination</th>
            <th className="px-4 py-2 border-r">Importer</th>
            <th className="px-4 py-2">Exporter</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr
              key={idx}
              className="border-b last:border-0 hover:bg-gray-50 transition"
            >
              <td className="px-4 py-2 border-r">{item.hsCode}</td>
              <td className="px-4 py-2 border-r">{item.description}</td>
              <td className="px-4 py-2 border-r">{item.qty}</td>
              <td className="px-4 py-2 border-r">{item.origin}</td>
              <td className="px-4 py-2 border-r">{item.destination}</td>
              <td className="px-4 py-2 border-r">*****</td>
              <td className="px-4 py-2">*****</td>
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
          Get Detailed {portName} Port Shipment Data
        </motion.h2>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8">
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

        {/* Table */}
        {activeTab === "import" ? renderTable(importData) : renderTable(exportData)}

        {/* CTA */}
        <div className="flex justify-center mt-8">
          <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-none shadow-md hover:scale-105 transition-transform">
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default DetailedTable;