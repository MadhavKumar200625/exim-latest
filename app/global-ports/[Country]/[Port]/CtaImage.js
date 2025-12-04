"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const CtaImage = ({ portName }) => {
  return (
    <section className="relative  text-black py-20 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('https://eximtradedata.com/images/port_shipmet_data.png')",
        }}
      ></div>


      <div className="relative container mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-black mb-8"
        >
          Get Detailed {portName} Port Shipment Data
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-black mb-8"
        >
          Find detailed {portName} Port Shipment data. Discover top traded goods by price, quantity, country, import export companies records through our market intelligence reports.
        </motion.p>


        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center"
        >
          <Link
            href="/pricing"
            className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-none shadow-md hover:scale-105 transition-transform"
          >
            Explore Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaImage;