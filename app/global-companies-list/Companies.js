"use client";
import { useState } from "react";
import React from "react";

import { ChevronDown } from "lucide-react";

const countries = {
   "Bangladesh": "https://flagcdn.com/w20/bd.png" ,
   "Brazil": "https://flagcdn.com/w20/br.png" ,
   "Indonesia": "https://flagcdn.com/w20/id.png" ,
   "Pakistan": "https://flagcdn.com/w20/pk.png" ,
   "Philippines": "https://flagcdn.com/w20/ph.png" ,
   "Russia": "https://flagcdn.com/w20/ru.png" ,
   "Sri Lanka": "https://flagcdn.com/w20/lkng" ,
   "Tanzania": "https://flagcdn.com/w20/tz.png" ,
   "Vietnam": "https://flagcdn.com/w20/vn.png" ,
   "Argentina": "https://flagcdn.com/w20/ar.png" ,
   "Bolivia": "https://flagcdn.com/w20/bo.png" ,
   "Botswana": "https://flagcdn.com/w20/bw.png" ,
   "Chile": "https://flagcdn.com/w20/cl.png" ,
   "Nigeria": "https://flagcdn.com/w20/ng.png" ,
   "Colombia": "https://flagcdn.com/w20/co.png" ,
   "Costa Rica": "https://flagcdn.com/w20/crng" ,
   "DR Congo": "https://flagcdn.com/w20/cdng" ,
   "Kazakhstan": "https://flagcdn.com/w20/kz.png" ,
   "Kenya": "https://flagcdn.com/w20/ke.png" ,
   "Moldova": "https://flagcdn.com/w20/md.png" ,
   "Uganda": "https://flagcdn.com/w20/ug.png" ,
   "Ukraine": "https://flagcdn.com/w20/ua.png" ,
   "Uzbekistan": "https://flagcdn.com/w20/uz.png" ,
   "Australia": "https://flagcdn.com/w20/au.png" ,
   "Spain": "https://flagcdn.com/w20/es.png" ,
   "United Kingdom": "https://flagcdn.com/w20/gbng" ,
   "Netherland": "https://flagcdn.com/w20/nl.png" ,
   "Germany": "https://flagcdn.com/w20/de.png" ,
   "United Arab Emirates": "https://flagcdn.com/w20/.png",
   "Saudi Arabia": "https://flagcdn.com/w20/sang" ,
   "Oman": "https://flagcdn.com/w20/om.png" ,
   "Singapore": "https://flagcdn.com/w20/sg.png" ,
   "Canada": "https://flagcdn.com/w20/ca.png" ,
   "China": "https://flagcdn.com/w20/cn.png" ,
   "USA": "https://flagcdn.com/w20/us.png" ,
   "Afghanistan": "https://flagcdn.com/w20/af.png" ,
   "Algeria": "https://flagcdn.com/w20/dz.png" ,
   "Angola": "https://flagcdn.com/w20/ao.png" ,
   "Armenia": "https://flagcdn.com/w20/am.png" ,
   "Austria": "https://flagcdn.com/w20/at.png" ,
   "Azerbaijan": "https://flagcdn.com/w20/az.png" ,
   "Bahrain": "https://flagcdn.com/w20/bh.png" ,
   "Barbados": "https://flagcdn.com/w20/bb.png" ,
   "Belgium": "https://flagcdn.com/w20/be.png" ,
   "Belarus": "https://flagcdn.com/w20/by.png" ,
   "Benin": "https://flagcdn.com/w20/bj.png" ,
   "Bermuda": "https://flagcdn.com/w20/bm.png" ,
   "Bhutan": "https://flagcdn.com/w20/bt.png" ,
   "Bulgaria": "https://flagcdn.com/w20/bg.png" ,
   "Burundi": "https://flagcdn.com/w20/bi.png" ,
   "Cambodia": "https://flagcdn.com/w20/kh.png" ,
   "Cameroon": "https://flagcdn.com/w20/cm.png" ,
   "Chad": "https://flagcdn.com/w20/td.png" ,
   "Cote d ivoire": "https://flagcdn.com/w20/.png",
   "Croatia": "https://flagcdn.com/w20/hr.png" ,
   "Cyprus": "https://flagcdn.com/w20/cy.png" ,
   "Czech Republic": "https://flagcdn.com/w20/czng" ,
   "Denmark": "https://flagcdn.com/w20/dk.png" ,
   "Dominican Republic": "https://flagcdn.com/w20/dong" ,
   "Ecuador": "https://flagcdn.com/w20/ec.png" ,
   "Egypt": "https://flagcdn.com/w20/eg.png" ,
   "Estonia": "https://flagcdn.com/w20/ee.png" ,
   "Ethiopia": "https://flagcdn.com/w20/et.png" ,
   "El Salvador": "https://flagcdn.com/w20/svng" ,
   "Fiji": "https://flagcdn.com/w20/fj.png" ,
   "Finland": "https://flagcdn.com/w20/fi.png" ,
   "France": "https://flagcdn.com/w20/fr.png" ,
   "Gabon": "https://flagcdn.com/w20/ga.png" ,
   "Georgia": "https://flagcdn.com/w20/ge.png" ,
   "Ghana": "https://flagcdn.com/w20/gh.png" ,
   "Greece": "https://flagcdn.com/w20/gr.png" ,
   "Guatemala": "https://flagcdn.com/w20/gt.png" ,
   "Guinea": "https://flagcdn.com/w20/gn.png" ,
   "Guyana": "https://flagcdn.com/w20/gy.png" ,
   "Hungary": "https://flagcdn.com/w20/hu.png" ,
   "Honduras": "https://flagcdn.com/w20/hn.png" ,
   "Iran": "https://flagcdn.com/w20/ir.png" ,
   "Iraq": "https://flagcdn.com/w20/iq.png" ,
   "Ireland": "https://flagcdn.com/w20/ie.png" ,
   "Israel": "https://flagcdn.com/w20/il.png" ,
   "Italy": "https://flagcdn.com/w20/it.png" ,
   "Jamaica": "https://flagcdn.com/w20/jm.png" ,
   "Japan": "https://flagcdn.com/w20/jp.png" ,
   "Jordan": "https://flagcdn.com/w20/jo.png" ,
   "Kosovo": "https://flagcdn.com/w20/xk.png" ,
   "Kuwait": "https://flagcdn.com/w20/kw.png" ,
   "Kyrgyzstan": "https://flagcdn.com/w20/kg.png" ,
   "Latvia": "https://flagcdn.com/w20/lv.png" ,
   "Lesotho": "https://flagcdn.com/w20/ls.png" ,
   "Liberia": "https://flagcdn.com/w20/lr.png" ,
   "Libya": "https://flagcdn.com/w20/ly.png" ,
   "Lithuania": "https://flagcdn.com/w20/lt.png" ,
   "Luxembourg": "https://flagcdn.com/w20/lu.png" ,
   "Malawi": "https://flagcdn.com/w20/mw.png" ,
   "Malaysia": "https://flagcdn.com/w20/my.png",
};

const countryFlags = {
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

const Companies = ({
  defaultLetter = "A",

  companies = [],
  totalValues = 0,
  defaultCountry = "Vietnam",
}) => {
  const [letter, setLetter] = useState(defaultLetter);
  const [country, setCountry] = useState(defaultCountry);
  const [currentPage, setCurrentPage] = useState(1);

  const [showDropdown, setShowDropdown] = useState(false);

  const totalPages = Math.ceil(totalValues / 100);

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
      } else if (currentPage >= totalPages - 2) {
        pages.push(
          1,
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }
    return pages;
  })();


  const buildUrl = (page) => {
    return `/global-companies-list/${country
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")}/${letter.toLowerCase()}-${page}`;
  };
  

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Search Bar */}
        <div className="bg-blue-50 p-6 rounded shadow-sm mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Alphabet */}
            <div className="text-4xl flex items-center px-5 w-full text-black">
              {letter}
            </div>

            <div>
              
              <div className="relative">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setShowDropdown(!showDropdown);
                  }}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 flex items-center justify-between text-black bg-white focus:ring-2 focus:ring-[#0067b8]"
                >
                  {country || "Select Country"}
                  <ChevronDown size={18} />
                </button>

                {showDropdown && (
                  <div className="absolute z-10 -right-20  mt-2 w-[150%] max-h-60 overflow-y-scroll border border-gray-200 bg-white shadow-lg rounded-md grid grid-cols-2 md:grid-cols-3 gap-2 p-3">
                    {Object.entries(countries).map(([country, flag], index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 p-2 rounded cursor-pointer hover:bg-gray-100 text-sm"
                        onClick={() => {
                          setCountry(country);
                          setShowDropdown(false);
                        }}
                      >
                        <img
                          src={flag}
                          height={10}
                          width={10}
                          alt={country}
                        ></img>
                        <span>{country}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            {/* Type Select */}

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
          {companies.slice(0, 100).map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 
                 hover:shadow-lg hover:border-blue-200 transition-all duration-300 
                 cursor-pointer group"
            >
              <p className="text-gray-800 font-medium group-hover:text-blue-600 transition-colors">
               <a
               href={`/global-companies/${country.replace(/\s+/g, "-").toLowerCase()}/${item.Name.trim().replace(/\s+/g, "-").toLowerCase()}`}> {item.Name}</a>
              </p>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mb-10">
          {currentPage > 1 && (
            <a
              href={buildUrl(currentPage - 1)}
              className="px-3 py-1 text-blue-600 border border-blue-600"
            >
              &lt;&lt;
            </a>
          )}

          {pageNumbers.map((page, idx) =>
            page === "..." ? (
              <span key={idx} className="pt-2 text-blue-600 text-3xl">
                ...
              </span>
            ) : (
              <a
                key={idx}
                href={buildUrl(page)}
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
            <a
              href={buildUrl(currentPage + 1)}
              className="px-3 py-1 text-blue-600 border border-blue-600"
            >
              &gt;&gt;
            </a>
          )}
        </div>

        {/* Browse by Products */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-black mb-4">
            Browse by Products
          </h3>
          <div className="flex flex-wrap gap-2">
            {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((char) => (
              <a
                key={char}
                href={`/global-companies-list/${country.replace(" ","_").toLowerCase()}/${char.toLowerCase()}-${currentPage}`}
                className="px-3 py-1 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition"
              >
                {char}
              </a>
            ))}
          </div>
        </div>

        {/* Browse by Country */}
        <div>
          <h3 className="text-xl font-bold text-black mb-4">
            Browse by Country
          </h3>
          <div className="flex gap-6 grid-cols-3  ">
            {Object.entries(countryFlags).map(([countryName, flagUrl], idx) => (
  <a
    key={idx}
    href={`/global-companies-list/${countryName.toLowerCase()}/${letter.toLowerCase()}-${currentPage}`}
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

export default Companies;
