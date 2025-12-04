"use client";
import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const What = ({ country, description, data }) => {
  // Transform JSON data to a format suitable for recharts
  const chartData = data?.map(item => ({
    name: item.product,
    value: parseFloat(item.value.replace(/\$| B/g, "")) // converts "$284 B" → 284
  }));

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    
        {/* Left Content */}
        <div>
        <p className="uppercase tracking-wide font-semibold mb-2 text-black">
            {country.toUpperCase()} Top 10 Major Imports
          </p>
          <h2 className="text-3xl font-bold mb-4 text-black">
            What Does  {country.toUpperCase()} Import?
          </h2>

          <p
            className="text-lg mb-4 text-black"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>

        {/* Right Chart */}
        {chartData && chartData.length > 0 && (
          <div className="bg-white border rounded-xl shadow-lg p-4">
            <h3 className="text-xl font-semibold text-black mb-4">Value in Billion USD</h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="name" 
                  interval={0} 
                  tick={{ fontSize: 12 }}
                  angle={-45} 
                  textAnchor="end"
                />
                <YAxis tickFormatter={(v) => `${v}B`} />
                <Tooltip formatter={(v) => `${v} Billion USD`} />
                <Bar dataKey="value" fill="#0067b8" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </section>
  );
};

export default What;
