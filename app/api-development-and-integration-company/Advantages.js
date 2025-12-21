;
import React from 'react'


const advantagesData = [
  {
    title: "User Friendly",
    desc: "Our developers are expert at creating simple and easy to use API’s that assist you in building an impactful tool for market research.",
    image: "",
  },
  {
    title: "Fast & Secure",
    desc: "Get really fast and seamless API solutions with added security. We provide proper API keys or bearer tokens to block unwanted requests.",
    image: "",
  },
  {
    title: "Testing Environment",
    desc: "Our team of quality assurance and testing engineers apply advanced API testing tools and practises to ensure smooth functionality & performance.",
    image: "",
  },
  {
    title: "Documentation",
    desc: "We provide our clients with detailed API documentation (user manual) that helps developers to easily understand functionality & integrate applications.",
    image: "",
  },
  {
    title: "Competitive Pricing",
    desc: "With over years of expertise in delivering successful API solutions, we provide high quality API solutions at best price and expert support throughout.",
    image: "",
  },
];

const Advantages = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-12">
    {/* Heading */}
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-black">
        Advantages of executing your algorithmic trading through the Flattrade API
      </h2>
      <div className="mt-4 w-24 h-1 bg-blue-600 mx-auto "></div>
    </div>

    {/* Cards Grid */}
    <div className="flex flex-wrap justify-center gap-8">
  {advantagesData.map(({ title, desc, image }, index) => (
    <div
      key={index}
      className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition max-w-sm w-full sm:w-[48%] lg:w-[30%]"
    >
      {/* Icon placeholder */}
        <div className="h-30 w-[45%] mx-auto relative   overflow-hidden">
        <img
            src={`/api-page/${title.toLowerCase().replace(/ /g,"-").replace("&","and")}.webp`}
            fill
          className=" "
          alt= " "
        >
        </img>
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-black mb-2">{title}</h3>

      {/* Description */}
      <p className="text-black leading-relaxed">{desc}</p>
    </div>
  ))}
</div>
  </div>
</section>
  )
}

export default Advantages