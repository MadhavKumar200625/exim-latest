import React from 'react'

const Questions = () => {
  return (
    <section className="bg-slate-50 text-black py-20 px-4">
  <div className="max-w-5xl mx-auto space-y-10 text-center">
    <h2 className="text-4xl font-bold">GST & HSN Code Explained</h2>

    <div className="space-y-8 text-left">
      <div>
        <p className="font-extrabold text-2xl mb-2">What is GST?</p>
        <p>
          Goods and Services Tax (GST) is a Single Tax Structure System introduced in 2017. GST works on One Nation, One Tax system. Earlier, there was a diverse tax system in India. There were various indirect taxes such as Value Added Tax (VAT), sale tax, purchase tax, service tax, surcharges, Excise duty, etc. Under the GST System, all the central and state taxes are merged into a single tax.
        </p>
      </div>

      <div>
        <p className="font-extrabold text-2xl mb-2">What are GST Rates for Goods & Services?</p>
        <p>
          GST has refined the taxation sector in India. It helps in unifying all taxes for various goods and services. There are a large number of goods, commodities and services in India. So, they are put under 5 different slabs of GST rates:
        </p>
        <ul className="mt-2 space-y-1">
          <li className='bg-white border p-1 border-black px-3 my-3 shadow-md text-lg '><strong>NIL:</strong> Under this slab 0% tax is charged on the goods or services.</li>
          <li className='bg-white border p-1 border-black px-3 my-3 shadow-md text-lg '><strong>5%:</strong> Under this slab 5% tax is charged on the goods and services.</li>
          <li className='bg-white border p-1 border-black px-3 my-3 shadow-md text-lg '><strong>12%:</strong> Under this slab 12% tax is charged on the goods and services.</li>
          <li className='bg-white border p-1 border-black px-3 my-3 shadow-md text-lg '><strong>18%:</strong> Under this slab 18% tax is charged on the goods and services.</li>
          <li className='bg-white border p-1 border-black px-3 my-3 shadow-md text-lg '><strong>28%:</strong> Under this slab 28% tax is charged on the goods and services.</li>
        </ul>
        <p className="mt-2"><strong className='text-blue-600'>Important Note:</strong> Gold and other precious metals are excluded and put under 3% tax slab.</p>
      </div>

      <div>
        <p className="font-extrabold text-2xl mb-2">What is an HSN Code?</p>
        <p>
          HSN Code stands for Harmonized System of Nomenclature. An HSN Code is a unique 6 to 10 digit number developed for the identification of goods and products. This system was established in 1988 by the World Customs Organization. The HSN Code system is operational in all parts of the world. It covers almost 90% of the goods traded globally. It is accepted by customs authorities for determining taxes on goods.
        </p>
      </div>

      <div>
        <p className="font-extrabold text-2xl mb-2">How does the HSN Code System in India Function?</p>
        <p>
          HSN Codes held great significance in Import-Export Procedures of India. In India, it is called ITC (Indian Trade Clarification)-HS Code. An ITC HS Code is recognized from its Chapter, Heading, Subheading and Regional Tariff. It consists of 8 digits.
        </p>
        <p className="mt-2">Let&apos;s take an example: Suppose we are given an HS Code- <strong>6006840000</strong></p>
        <ul className=" mt-2 space-y-1">
          <li className='bg-white border p-1 border-black px-3 my-3 shadow-md text-lg '><strong>Chapter:</strong> The first two digits (60) denote chapter</li>
          <li className='bg-white border p-1 border-black px-3 my-3 shadow-md text-lg '><strong>Heading:</strong> Next two digits (06) denote heading</li>
          <li className='bg-white border p-1 border-black px-3 my-3 shadow-md text-lg '><strong>Subheading:</strong> Next two digits (84) denote subheading</li>
          <li className='bg-white border p-1 border-black px-3 my-3 shadow-md text-lg '><strong>Regional Tariff:</strong> Second last two digits (00) denote regional tariff</li>
          <li className='bg-white border p-1 border-black px-3 my-3 shadow-md text-lg '><strong>National Tariff:</strong> Last two digits (00) indicate national tariff</li>
        </ul>
      </div>
    </div>

    {/* Placeholder image block */}
    <div className="mt-14">
      <img
        src="https://old-net.eximtradedata.comimages/structure-of-hsn-code.png" // Change this path accordingly
        alt="HSN Code Explanation"
        className="mx-auto  max-w-full h-auto"
      />
    </div>

    <div className="space-y-8 text-left mt-12">
      <div>
        <p className="font-extrabold text-2xl mb-2">How many sections, chapters, headings and subheadings does HS Code system cover?</p>
        <p>
          There are around 21 sections, 99 chapters, 5,222 headings and 1,244 subheadings in the Harmonised System of Nomenclature.
        </p>
      </div>

      <div>
        <p className="font-extrabold text-2xl mb-2">What is the use of HSN Code in GST?</p>
        <p>
          Ever since the arrival of GST, it is mandatory to mention HSN Code for your product. HSN Codes are needed to be mentioned on invoices, bills or while filing GST returns. HSN Code helps taxpayers to evaluate GST rates of various products. An incorrect HSN Code can create a big hurdle in the customs clearance process.
        </p>
      </div>

      <div>
        <p className="font-extrabold text-2xl mb-2">How can I find HSN Code List with GST Rates?</p>
        <p>
          You can find a complete HSN Code List with GST rates at the Exim Trade Data portal.
        </p>
      </div>
    </div>
  </div>
</section>
  )
}

export default Questions