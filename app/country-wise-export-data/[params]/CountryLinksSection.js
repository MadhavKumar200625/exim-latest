"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const continents = {
  ASIA: [
    { name: "India", flag: "https://flagcdn.com/w40/in.png" },
    { name: "China", flag: "https://flagcdn.com/w40/cn.png" },
    { name: "Japan", flag: "https://flagcdn.com/w40/jp.png" },
    { name: "Turkey", flag: "https://flagcdn.com/w40/tr.png" },
    { name: "South Korea", flag: "https://flagcdn.com/w40/kr.png" },
  ],
  AFRICA: [
    { name: "Chad", flag: "https://flagcdn.com/w40/td.png" },
    { name: "Ghana", flag: "https://flagcdn.com/w40/gh.png" },
    { name: "Kenya", flag: "https://flagcdn.com/w40/ke.png" },
    { name: "Tanzania", flag: "https://flagcdn.com/w40/tz.png" },
    { name: "South Africa", flag: "https://flagcdn.com/w40/za.png" },
  ],
  EUROPE: [
    { name: "UK", flag: "https://flagcdn.com/w40/gb.png" },
    { name: "Spain", flag: "https://flagcdn.com/w40/es.png" },
    { name: "Yemen", flag: "https://flagcdn.com/w40/ru.png" },
    { name: "Netherlands", flag: "https://flagcdn.com/w40/nl.png" },
    { name: "Germany", flag: "https://flagcdn.com/w40/de.png" },
  ],
  AMERICA: [
    { name: "US", flag: "https://flagcdn.com/w40/us.png" },
    { name: "Mexico", flag: "https://flagcdn.com/w40/mx.png" },
    { name: "Argentina", flag: "https://flagcdn.com/w40/ar.png" },
    { name: "Canada", flag: "https://flagcdn.com/w40/ca.png" },
    { name: "Brazil", flag: "https://flagcdn.com/w40/br.png" },
  ],
  OCEANIA: [
    { name: "Fiji", flag: "https://flagcdn.com/w40/fj.png" },
    { name: "Australia", flag: "https://flagcdn.com/w40/au.png" },
    { name: "New Zealand", flag: "https://flagcdn.com/w40/nz.png" },
  ],
};

export default function CountrySection() {
  return (
    <section className="w-full bg-white text-black pt-6 pb-14 px-16 ">
      <div className="max-w-7xl bg-gradient-to-b from-blue-50 via-sky-50 to-sky-50 mx-auto space-y-8 rounded-md py-10 px-20 shadow-2xl">
        {/* Heading */}
        <h2 className="text-3xl text-center md:text-4xl font-bold">
          Data available for 200+ other countries
        </h2>

        {/* Country Columns */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 border-t border-gray-200 pt-8">
          {Object.entries(continents).map(([continent, countries]) => (
            <div
              key={continent}
              className="  shadow-xl p-5 rounded-xl text-center bg-blue-100 last:border-r-0 border-gray-200 "
            >
              <h3 className="font-semibold text-lg mb-4">{continent}</h3>
              <ul className="  space-y-3">
                {countries.map((c) => (
                  <li
                    key={c.name}
                    className="flex items-center gap-3 hover:translate-x-1 transition-transform"
                  >
                    <img
                      src={c.flag}
                      alt={c.name}
                      className="w-6 h-4 object-cover rounded-sm"
                    />
                    <span>{c.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="flex justify-center mt-10">
          <Link href="/pricing" className="bg-blue-600 text-lg text-white px-6 py-2 flex items-center justify-center shadow cursor-pointer hover:scale-105 transition">
          Enquire Now <ArrowRight size={20} className="ml-2 mt-0.5 text-sm"></ArrowRight>
        </Link>
        </div>
      </div>
    </section>
  );
}