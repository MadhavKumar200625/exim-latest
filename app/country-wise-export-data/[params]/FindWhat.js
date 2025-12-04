import React from 'react'

const FindWhat = ({country}) => {
  return (
    <section className="py-12 bg-gray-100">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
      Find What  {country.toUpperCase()} Exports to Other Countries?
    </h2>
    <div className="flex flex-wrap justify-center gap-4">
    {["Bangladesh", "China", "Russia", "Australia", "Tanzania"].map((country) => (
        <a
          key={country}
          href={`./${country.toLowerCase()}-export-data`}
          className="bg-blue-600 text-white px-6 py-3 text-lg font-semibold transition-transform duration-300 transform hover:scale-105"
        >
          {country}
        </a>
      ))}
    </div>
  </div>
</section>
  )
}

export default FindWhat