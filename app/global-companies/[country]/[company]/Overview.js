"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Overview = ({ data }) => {
  return (
    <section className="w-full mt-10 px-20">
      <h1 className="text-black text-3xl text-center mb-5 font-semibold">{data.heading.toUpperCase()} - Overview</h1>
      <div className="">
        
        
        {/* Export Overview */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-10 flex flex-col">
          <h2 className="text-xl font-semibold mb-3">{data.exportOverview.heading}</h2>
          <p className="text-black text-lg mb-4">{data.exportOverview.text}</p>
          <ul className="list-disc list-inside space-y-2 text-black text-lg">
            {data.exportOverview.pointers.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>

        {/* Import Overview */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-10 flex flex-col">
          <p className="text-black text-lg mb-4">{data.importOverview.text}</p>
          <ul className="list-disc list-inside space-y-2 text-black text-lg">
            {data.importOverview.pointers.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>

        {/* Static Block */}
        <div className="bg-blue-50 rounded-2xl shadow-md p-6 flex flex-col">
          <p className="text-black text-lg mb-4">{data.staticOverview.text}</p>
          
          <Link
            href="/pricing"
            className="mt-auto inline-flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-xl text-lg font-medium shadow hover:bg-blue-700 transition"
          >
            Schedule Demo <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Overview;