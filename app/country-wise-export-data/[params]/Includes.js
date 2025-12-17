"use client";
import React from "react";
import {
  Package,
  Globe,
  DollarSign,
  MapPin,
  Truck,
  BarChart,
} from "lucide-react";
import Image from "next/image";

const Includes = ({ country, desc1, desc2 }) => {
  const features = [
    { icon: Package, text: "HS Code Wise Data" },
    { icon: Globe, text: "Global Buyer Details" },
    { icon: DollarSign, text: "Value & Price Trends" },
    { icon: MapPin, text: "Port Information" },
    { icon: Truck, text: "Shipment Details" },
    { icon: BarChart, text: "Market Analysis" },
  ];

  return (
    <section className="py-16 bg-white">
      {/* Top Text */}
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="uppercase tracking-wide text-sm font-semibold">
          {country} Export Trade Data
        </p>
        <h2 className="text-3xl font-bold mt-2">
          What Does {country.replace(/^./, (s) => s.toUpperCase())} Export Data Include?
        </h2>

        {desc1 && (
          <p
            className="mt-4 text-base leading-relaxed text-black"
            dangerouslySetInnerHTML={{ __html: desc1 }}
          />
        )}

        {desc2 && (
          <p
            className="mt-4 text-base leading-relaxed text-black"
            dangerouslySetInnerHTML={{ __html: desc2 }}
          />
        )}
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto mt-12 px-4 grid lg:grid-cols-2 gap-10">
        {/* Left Icons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center p-4 bg-gradient-to-tr from-gray-100 to-gray-50 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="w-full h-40 relative mb-4 overflow-hidden">
                <img
                  src={`/countries/${item.text
                    .replace(/ /g, "-")
                    .toLowerCase()
                    .replace("&", "and")}.webp`}
                  alt={item.text}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-xl font-medium text-black text-center">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Right Table */}
        <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-200">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-gray-100 to-gray-200">
                <th className="p-3 font-semibold text-black border-r border-gray-300">
                  Field Name
                </th>
                <th className="p-3 font-semibold text-black">Detail</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Date", "Jan 31 2024"],
                ["HS Code", "84831099"],
                ["Product Details", `Sample Product from ${country}`],
                ["Quantity", "3111"],
                ["Quantity Unit", "Kilo"],
                ["Value ($)", "2190"],
                ["Country of Origin", country],
                ["Destination Country", "Multiple Countries"],
                ["Exporter", "Sample Exporter LLC"],
                ["Importer", "Verified Global Buyer"],
              ].map(([field, detail], idx) => (
                <tr
                  key={idx}
                  className={`hover:bg-gray-50 transition ${
                    idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <td className="p-3 font-medium text-black border-r border-gray-300">
                    {field}
                  </td>
                  <td className="p-3 text-black">{detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Includes;
