"use client";
import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
  XAxis,
  YAxis,
} from "recharts";




const Who = ({country,description,data}) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">

        <div className="bg-white border rounded-xl shadow-lg p-4">
          <ResponsiveContainer width="100%" height={400}>
            <RadarChart data={data}>
              <PolarGrid />

              <Radar
                name="Value in Billion"
                dataKey="value"
                stroke="#0ea5e9"
                fill="#0ea5e9"
                fillOpacity={0.5}
              />

              {/* Categories - acts like X-axis */}
              <PolarAngleAxis
                dataKey="country"
                tick={{ fill: "#000", fontSize: 12 }}
                tickMargin={20} // pushes labels away from chart
              />

              {/* Numeric values - acts like Y-axis */}
              <PolarRadiusAxis
                angle={90}
                domain={[0, 4]}
                ticks={[0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4]}
                tick={{ fill: "#000", fontSize: 12 }}
                tickFormatter={(v) => v.toFixed(1)}
              />

              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </div>


        <div>
          <p className="text-sm font-semibold text-black uppercase tracking-wider mb-2">
            {country}  &apos;s Top 10 Export Partners
          </p>
          <h2 className="text-3xl font-bold text-black mb-4">
          Where Does {country} Export To?
          </h2>
          <p className="text-gray-700 mb-4">
            {description}
         
          </p>
          {/* <p className="text-gray-700 mb-6">
            {description2}
         





</p> */}
          {/* CTA Button Placeholder */}
        <div className="mt-6">
            <div className="flex justify-center ">
            <a href="/contact" target="_blank" rel="noopener noreferrer">
              <button
                className="bg-blue-600 text-lg text-white px-6 py-2 flex items-center justify-center shadow cursor-pointer hover:scale-105 transition"
              >
                Get Country Wise Data
              </button>
              </a>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Who;
