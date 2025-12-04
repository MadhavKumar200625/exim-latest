import React from "react";

const Hero = ({heading}) => {
  return (
    <section className="pb-12 bg-gray-100  pt-32 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-black">
          GST HSN Code List
        </h2>
        <h3 className="text-3xl font-semibold mb-6 text-black">
          {heading  ?? "Find HSN Code List with GST Rates in India"}
        </h3>
        <p className="text-base leading-relaxed text-black">
          Get a detailed GST HSN Code List at our portal. Save your time and
          effort in finding GST rates for various goods and commodities. We make
          your search for GST rates in India for over various goods easy with
          our HSN Code List with GST rates 2024. Find complete product
          description, HS Code and GST rates.
        </p>
      </div>
    </section>
  );
};

export default Hero;
