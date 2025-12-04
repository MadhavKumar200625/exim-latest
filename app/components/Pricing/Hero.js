"use client";
import { useState } from "react";
import Link from "next/link";
import AppointmentForm from "../AppointmentForm";

export default function Hero() {
  const [currency, setCurrency] = useState("INR");
      const [isOpen, setIsOpen] = useState(false);


  const plans = [
    {
      name: "Starter",
      description:
        "Highly Recommended for Beginners. For Better Analysis & Market Research.",
      inr: 4999,
      usd: 70,
      downloads: "5,000",
      validity: "6 Months",
      gradient: "bg-gradient-to-r from-orange-400 to-yellow-400",
      icon: "🌐",
    },
    {
      name: "Basic",
      description:
        "More Searches, More Downloads, & More Control With the Basic Plan.",
      inr: 9999,
      usd: 140,
      downloads: "10,000",
      validity: "12 Months",
      gradient: "bg-gradient-to-r from-red-500 to-orange-400",
      icon: "💼",
    },
    {
      name: "Plus",
      description:
        "Explore Emerging Markets, Trends, & Get More Download Credits.",
      inr: 19999,
      usd: 300,
      downloads: "30,000",
      validity: "24 Months",
      gradient: "bg-gradient-to-r from-purple-500 to-indigo-500",
      icon: "🏆",
    },
    {
      name: "Premium",
      description: "Access Detailed Trade Info by Product, Country, & Ports.",
      inr: 29999,
      usd: 350,
      downloads: "50,000",
      validity: "30 Months",
      gradient: "bg-gradient-to-r from-cyan-400 to-blue-500",
      icon: "💎",
    },
  ];

  return (
    <section
      id="pricing_section"
      className="pt-28 pb-24 bg-gradient-to-t from-white to-blue-50 text-black"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Welcome to the World&apos;s Largest <br />
            <span className="text-blue-600 drop-shadow-lg">
              Global Trade Analysis
            </span>
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-black mb-4 tracking-wide">
          Import Export Trade Analysis
          </h3>
          <p className="text-lg max-w-3xl mx-auto font-medium">With the latest updated import export trade analysis, expand your reach to the most diverse markets <br />
            Drive{" "}
            <span className="text-blue-600 font-semibold">
              high-quality ROI
            </span>{" "}
            leads from all over the globe.

          </p>
        </div>

        {/* Currency Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex border-2 border-blue-600 cursor-pointer rounded-full overflow-hidden shadow-lg">
            <button
              onClick={() => setCurrency("INR")}
              className={`px-6 py-2 font-semibold transition  cursor-pointer ${
                currency === "INR"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-black hover:bg-blue-100"
              }`}
            >
              INR
            </button>
            <button
              onClick={() => setCurrency("USD")}
              className={`px-6 py-2 font-semibold transition  cursor-pointer ${
                currency === "USD"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-black hover:bg-blue-100"
              }`}
            >
              USD
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className="rounded-2xl shadow-lg overflow-hidden">
  
  {/* Header + Circle Container */}
  <div className="relative">
    {/* Gradient header with angled cut */}
    <div
      className={`${plan.gradient} text-white font-bold text-center pt-4 pb-22 text-xl`}
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 65%, 0% 100%)",
      }}
    >
      {plan.name.toUpperCase()}
    </div>

    {/* Price Circle */}
    <div className="absolute left-1/2 -translate-x-1/2 bottom-[-2rem] z-10">
      <div className="bg-gray-900 text-white rounded-full border-4 border-white w-28 h-28 flex items-center justify-center text-2xl font-bold shadow-lg">
        {currency === "INR" ? `₹${plan.inr}` : `$${plan.usd}`}
      </div>
    </div>
  </div>

  {/* Description */}
  <div className="px-6 text-center mt-14 h-14 text-sm text-black">
    {plan.description}
  </div>

  {/* Features */}
  <div className="px-6 py-4 text-sm">
    <ul className="space-y-2">
      <li><span className={`bg-clip-text text-transparent mr-2 ${plan.gradient}`}>✔️</span>Full Data Search</li>
      <li><span className={`bg-clip-text text-transparent mr-2 ${plan.gradient}`}>✔️</span>{plan.downloads} Download Credits</li>
      <li><span className={`bg-clip-text text-transparent mr-2 ${plan.gradient}`}>✔️</span>{plan.validity} Validity</li>
    </ul>
  </div>

  {/* Button */}
  <div className="px-6 pb-6">
    <button
      onClick={()=>{setIsOpen(true)}}
      className={`block text-center py-2 w-full cursor-pointer rounded-lg ${plan.gradient} text-white font-semibold hover:scale-105 transition`}
    >
      Explore More →
    </button>
  </div>
</div>
          ))}
        </div>
      </div>
      <AppointmentForm isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
}
