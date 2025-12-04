"use client";

import React from "react";
import { motion } from "framer-motion";

const Overview = ({ portName,stats }) => {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16">
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-black mb-12"
        >
          {portName} Port Overview
        </motion.h2>

        {/* 3 pointers */}
        <div className="grid gap-8 md:grid-cols-3">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200"
          >
            <h3 className="text-lg font-semibold text-black mb-2">Shipments</h3>
            <p className="text-black">
              As per <span className="font-semibold">{portName}</span> port data, 
              around <span className="font-bold text-blue-600">{stats.shipments}</span> 
              shipments were made during FY 2023-24.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200"
          >
            <h3 className="text-lg font-semibold text-black mb-2">Buyers</h3>
            <p className="text-black">
              There were around{" "}
              <span className="font-bold text-green-600">{stats.buyers}</span> active buyers 
              to <span className="font-semibold">{portName}</span> port.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200"
          >
            <h3 className="text-lg font-semibold text-black mb-2">Suppliers</h3>
            <p className="text-black">
              There were{" "}
              <span className="font-bold text-purple-600">{stats.suppliers}</span> active suppliers 
              from <span className="font-semibold">{portName}</span> port.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Overview;