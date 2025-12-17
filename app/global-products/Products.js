"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import React from "react";

const Products = ({
  defaultLetter = "a",
  countries = [
  
  "Bangladesh",
  "Brazil",
  "Indonesia",
  "Mexico",
  "Pakistan",
  "Philippines",
  "Russia",
  "Sri Lanka",
  "Tanzania",
  "Vietnam"
],
  types = ["Import", "Export"],
  products = [],
  totalValues = 0,
  defaultTradeType = "Import",
  defaultCountry = "India"
}) => {
  const [letter, setLetter] = useState(defaultLetter);
  const [country, setCountry] = useState(defaultCountry);
  const [tradeType, setTradeType] = useState(defaultTradeType);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalValues / 100);

  const countryFlags = {
    "India":"https://flagcdn.com/w640/in.png",
  "Bangladesh":"https://flagcdn.com/w640/bd.png", // Bangladesh
  "Brazil":"https://flagcdn.com/w640/br.png", // Brazil
  "Indonesia":"https://flagcdn.com/w640/id.png", // Indonesia
  "Mexico":"https://flagcdn.com/w640/mx.png", // Mexico
  "Pakistan":"https://flagcdn.com/w640/pk.png", // Pakistan
  "Philippines":"https://flagcdn.com/w640/ph.png", // Philippines
  "Russia":"https://flagcdn.com/w640/ru.png", // Russia
  "Sri Lanka":"https://flagcdn.com/w640/lk.png", // Sri Lanka
  "Tanzania":"https://flagcdn.com/w640/tz.png", // Tanzania
  "Vietnam":"https://flagcdn.com/w640/vn.png", // Vietnam
};

  // Generate page numbers for pagination UI (show 5 max)
  const pageNumbers = (() => {
  const pages = [];
  if (totalPages <= 5) {
    // Show all pages if less than or equal to 5
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    if (currentPage <= 3) {
      pages.push(1, 2, 3, 4, "...", totalPages);
    } 
    else if (currentPage >= totalPages - 2) {
      pages.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
    } 
    else {
      pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
    }
  }
  return pages;
})();

  const buildUrl = (page) => {
    return `/global-products/product-${letter.toLowerCase()}/country-${country.replace(/\s+/g, "_").toLowerCase()}/type-${tradeType.toLowerCase()}/pg-${page}`;
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Search Bar */}
        <div className="bg-blue-50 p-6 rounded shadow-sm mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Alphabet */}
            <div className="text-4xl flex items-center px-5 w-full text-black">
                {letter.toUpperCase()}
            </div>
            {/* Country Select */}
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="border border-gray-300 p-2 w-full text-black"
            >
              {countries.map((c, idx) => (
                <option key={idx} value={c}>{c}</option>
              ))}
            </select>
            {/* Type Select */}
            <select
              value={tradeType}
              onChange={(e) => setTradeType(e.target.value)}
              className="border border-gray-300 p-2 w-full text-black"
            >
              {types.map((t, idx) => (
                <option key={idx} value={t}>{t}</option>
              ))}
            </select>
            {/* Search Button */}
            <a
              href={buildUrl(1)}
              className="bg-blue-600 text-white px-4 py-2 shadow hover:scale-105 transition-transform text-center"
            >
              Search
            </a>
          </div>
        </div>

        {/* Product List */}
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
  {products.slice(0, 100).map((item, idx) => (
    <div
      key={idx}
      className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 
                 hover:shadow-lg hover:border-blue-200 transition-all duration-300 
                 cursor-pointer group"
    >
      <p className="text-gray-800 font-medium group-hover:text-blue-600 transition-colors">
      <a href={`/search/country-${country.replace(/\s+/g, "_").toLowerCase()}/type-${tradeType.toLowerCase()}/product-${item.product.replace(/\s+/g, "-").toLowerCase()}`}>
        {item.product}
        </a>
      </p>
    </div>
  ))}
</div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mb-10">
  {currentPage > 1 && (
    <a href={buildUrl(currentPage - 1)} className="px-3 py-1 text-blue-600 border border-blue-600">
      &lt;&lt;
    </a>
  )}

  {pageNumbers.map((page, idx) => 
    page === "..." ? (
      <span key={idx} className="pt-2 text-blue-600 text-3xl">...</span>
    ) : (
      <a
        key={idx}
        href={buildUrl(page).toLowerCase()}
        className={`px-3 py-1 border ${
          page === currentPage
            ? "bg-blue-600 text-white border-blue-600"
            : "text-blue-600 border-blue-600"
        }`}
      >
        {page}
      </a>
    )
  )}

  {currentPage < totalPages && (
    <a href={buildUrl(currentPage + 1)} className="px-3 py-1 text-blue-600 border border-blue-600">
      &gt;&gt;
    </a>
  )}
</div>

        {/* Browse by Products */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-black mb-4">Browse by Products</h3>
          <div className="flex flex-wrap gap-2">
            {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((char) => (
              <a
                key={char}
                href={buildUrl(1).replace(/product-[A-Z]/, `product-${char.toLowerCase()}`)}
                className="px-3 py-1 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition"
              >
                {char}
              </a>
            ))}
          </div>
        </div>

        {/* Browse by Country */}
        <div>
          <h3 className="text-xl font-bold text-black mb-4">Browse by Country</h3>
          <div className="flex gap-6 grid-cols-3  ">
            {Object.entries(countryFlags).map(([countryName, flagUrl], idx) => (
  <a
    key={idx}
    href={`/global-products/product-${letter.toUpperCase()}/country-${countryName.toLowerCase()}/type-${tradeType.toLowerCase()}/pg-${currentPage}`}
    className="flex items-center justify-center border border-gray-100 shadow-lg p-0"
  >
    <img alt={countryName} src={flagUrl} className="w-24 p-2" />
  </a>
))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
