import Link from "next/link";
import Image from "next/image";

export default function Hero({ country, hero }) {
    return (
      <section className="w-full bg-white text-black pb-14 pt-28 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row text-justify  justify-between gap-10">
  
          {/* Text Content */}
          <div className="flex-[2] flex flex-col items-start space-y-6">
            <h2 className="text-3xl md:text-4xl text-justify font-bold leading-tight">
              {hero?.title || `${country.replace(/^./, (s) => s.toUpperCase()) } Customs Data | ${country.replace(/^./, (s) => s.toUpperCase())} Trade Data 2024-25`}
            </h2>
  
            <p className="text-lg text-justify leading-relaxed">
              {hero?.description }
            </p>
  
            {/* <p className="italic text-center font-semibold text-black">
              {hero?.ctaText || `Get free sample on latest ${country} trade statistics or schedule a demo`}
            </p> */}
  
            <div className="flex justify-center gap-4 mb-12">
              <Link
                href={hero?.onlineDataLink || "/pricing"}
                className="bg-blue-600 text-lg text-white px-6 py-2 shadow hover:scale-105 transition"
              >
                {hero?.onlineDataText || "Online Data"}
              </Link>
              <Link
                href={hero?.offlineDataLink || "/contact"}
                className="bg-white border-blue-600 border text-lg text-black px-6 py-2 shadow hover:scale-105 transition"
              >
                {hero?.offlineDataText || "Offline Data"}
              </Link>
            </div>
          </div>
  
          {/* Image */}
          <div className="flex-[1] flex justify-center md:justify-end">
            <div className="w-full max-w-sm">
              <img
                src={`/homepage/${country}-import-export-data.webp`}
                alt={`${country}-map`}
                width={400}
                height={500}
                quality={100}
                className="object-contain border-none shadow-none"
              />
            </div>
          </div>
  
        </div>
      </section>
    );
  };