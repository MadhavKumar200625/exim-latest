"use client";
import Image from "next/image";
import Link from "next/link";

const Section5 = ({ industries }) => {
  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-14">
          Explore More Industries
        </h2>

        <div className="grid lg:grid-cols-2 gap-10">
          {industries.map((industry, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row items-center bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-gray-200 p-5 group hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative w-full sm:w-40 md:w-48 lg:w-60 aspect-[4/3] border border-gray-200 bg-gray-50 flex-shrink-0">
                <img
                  src={`/solutions/${industry.title.toLowerCase().replace(/ /g, "-").replace("&","and")}.webp`}
                  alt={industry.title}
                  fill
                  className="object-cover "
                />
              </div>

              {/* Text Content */}
              <div className="mt-4 sm:mt-0 sm:ml-4 flex flex-col justify-between text-center sm:text-left">
                <h4 className="text-md uppercase tracking-wide text-black font-semibold">
                  {industry.title}
                </h4>
                <h3 className="text-lg md:text-xl font-semibold text-black mt-1">
                  {industry.heading}
                </h3>
                <p className="text-black text-sm mt-2 line-clamp-3 leading-relaxed">
                  {industry.description}
                </p>
                <a
                  href={industry.link || "/industries-covered"}
                  className="mt-3 inline-block text-sm font-medium text-blue-600 transition"
                >
                  Learn more →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/industries-covered"
            className="inline-block bg-blue-600 text-white font-semibold text-lg px-7 py-3 hover:scale-105 shadow-md transition-all duration-300"
          >
            Explore More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Section5;