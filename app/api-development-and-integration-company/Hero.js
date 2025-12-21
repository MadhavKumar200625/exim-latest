
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 via-white to-blue-50 pb-8 pt-10 px-4 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-4">
            Best API Development Services
          </h2>
          <p className="text-xl text-black mb-8">
          Our API development services deliver fast, secure, and scalable solutions designed to power innovative and data-driven applications. At Exim Trade Data, we specialize in custom API development and integration for import–export businesses, ensuring smooth connectivity across global markets, suppliers, and logistics systems. With our advanced API solutions, you can easily track shipments in real time, manage inventory updates, and handle international trade documentation seamlessly. 
          </p>

          <div className="flex  gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-blue-600 text-white text-base font-medium hover:scale-105 transition-transform duration-200 cursor-pointer"
            >
                Consult Our Expert
            </Link>
            
          </div>
        </div>

        <div className="p-10">
<div className="w-">
<img
  src="/api-page/best-api-development-services.webp"
  alt="Best API development services"
  width={800} // ← Replace with actual width if known
  height={600} // ← Replace with actual height if known
  className="w-full rounded-lg h-full"
/>
        </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
