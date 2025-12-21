"use client";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, Search } from "lucide-react";
import { countries } from "@/app/data";
import { useRouter } from "next/navigation";

export default function SearchComponent({ heading , subHeading }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const [product, setProduct] = useState("");
const [hsCode, setHsCode] = useState("");
const [selectedType, setSelectedType] = useState("");
const [error, setError] = useState("");
const router = useRouter();

  const dropdownRef = useRef(null);
  const filteredCountries = Object.entries(countries).filter(([country]) =>
    country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section
      className={`w-full px-6 pt-8 ${
  heading && subHeading
    ? "pb-8"
    : heading

       ? "pb-16 bg-gradient-to-br from-sky-200 via-sky-50 to-sky-200"
    : "pb-8"
}`}
    ><h2
  
        className={`text-3xl md:text-3xl font-black  text-center  drop-shadow-sm tracking-wide ${subHeading?"text-black mb-4 x" : "mb-8 "}${
          heading && !subHeading? "block text-black" : "hidden"
        } `}
      >
        {heading}
      </h2>{" "}

        <h2
        className={` md:text-xl md:px-40 text-black text-center mb-8  tracking-wide ${
          subHeading ? "block" : "hidden"
        }`}
      >
        {subHeading}
      </h2>

      <div className="max-w-7xl mx-auto bg-white shadow-2xl  p-8 transition-all duration-500">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3 animate-fadeUp delay-100">
          <input
  type="text"
  placeholder="Enter Products"
  value={product}
  onChange={(e) => setProduct(e.target.value)}
  className="border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-400 outline-none shadow-sm"
/>

          <input
  type="text"
  placeholder="HS Code"
  value={hsCode}
  onChange={(e) => setHsCode(e.target.value)}
  className="border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-400 outline-none shadow-sm"
/>

          <div className="relative col-span-1 lg:col-span-2 " ref={dropdownRef}>
            <div className="relative w-full max-w-sm">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-left flex items-center justify-between shadow-sm hover:shadow-md focus:ring-2 focus:ring-indigo-400"
              >
                {selectedCountry || "Select Country"}
                <ChevronDown size={18} />
              </button>

              {showDropdown && (
                <div className="absolute mt-2 -left-1/2 z-10 bg-white rounded-xl shadow-xl p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-h-80 overflow-y-scroll transition-transform duration-300 origin-top-right animate-slide-in-rtl w-3xl">
                  {/* 🔍 Search box */}
                  <div className="col-span-full mb-2">
                    <input
                      type="text"
                      placeholder="Search countries..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 text-sm"
                    />
                  </div>

                  {filteredCountries.length > 0 ? (
                    filteredCountries.map(([country, flag], index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-indigo-100 transition-all"
                        onClick={() => {
                          setSelectedCountry(country);
                          setShowDropdown(false);
                        }}
                      >
                        <img
                          width={20}
                          height={20}
                          src={flag}
                          className="text-xl"
                          alt={flag}
                        ></img>
                        <span className="text-sm font-medium">{country}</span>
                      </div>
                    ))
                  ) : (
                    <div className="col-span-full text-center text-sm text-gray-500">
                      No countries found.
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          <select
  value={selectedType}
  onChange={(e) => setSelectedType(e.target.value)}
  className="border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-400 outline-none shadow-sm col-span-1 animate-fadeUp delay-150"
>
  <option value="">Select Type</option>
  <option value="import">Import</option>
  <option value="export">Export</option>
</select>

          <button
  className="relative cursor-pointer hover:scale-105 transition mx-auto justify-center overflow-hidden text-white px-10 py-3 bg-blue-600 rounded-full font-semibold shadow-md group flex items-center"
  onClick={() => {
    if (!selectedCountry || !selectedType) {
      setError("Country and Type are required!");
      return;
    }
    setError(""); // clear error if valid

    let url = `/search/type-${selectedType}/country-${selectedCountry.toLowerCase()}`;
    if (product) url += `/product-${product.replace(" ", "_")}`;
    if (hsCode) url += `/hscode-${hsCode}`;

    router.push(url);
  }}
>
  <span className="relative z-10 flex items-center gap-1">
    <Search className="w-4 h-4" />
    Search
  </span>
</button>
        </div>
        {error && <p className="text-red-500 text-center text-sm mt-2">{error}</p>}

      </div>
    </section>
  );
}