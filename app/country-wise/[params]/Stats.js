'use client'

import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import Link from 'next/link';

// Stats component
const Stats = ({ country, imports, exports }) => {
  // Remove $ and commas, convert to number for animation
  const parseValue = (val) => {
    if (!val) return 0;
    return Number(val.replace(/[$,]/g, "").split(" ")[0]); // take only the numeric part
  };

  const importValue = parseValue(imports);
  const exportValue = parseValue(exports);

  const stats = [
    { value: importValue, label: "Total Import Value", title: `${country.toUpperCase() } Import Data` },
    { value: exportValue, label: "Total Export Value", title: `${country.toUpperCase()} Export Data` },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 2000; // Total animation time in ms
    const frameRate = 10; // Update frequency
    stats.forEach((stat, i) => {
      let current = 0;
      const increment = stat.value / (duration / frameRate);
      const interval = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(interval);
        }
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[i] = Math.floor(current);
          return newCounts;
        });
      }, frameRate);
    });
  }, [importValue, exportValue]);

  return (
    <section className="bg-slate-100 py-12 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-12">
      <h1 className="text-black pb-8 text-xl sm:text-2xl md:text-3xl font-bold text-center">
        {country.replace(/^./, (s) => s.toUpperCase()) } Import-Export Data Overview (2024–2025)
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-full sm:max-w-5xl md:max-w-6xl">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="p-6 rounded-2xl shadow-lg bg-white border flex flex-col justify-center items-center w-full"
          >
            <Link
              //href={`/country-wise-${country.toLowerCase()}/${stat.label.replace(/\s+/g, "-").toLowerCase()}`}
              href={`/pricing`}
              className="text-black border transition hover:bg-slate-100 border-black px-3 py-2 mb-4 text-sm sm:text-base"
            >
              {stat.title}
            </Link>
            <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black my-4">
              ${counts[i].toLocaleString()}M
            </p>
            <p className="text-md sm:text-lg font-medium text-black">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;