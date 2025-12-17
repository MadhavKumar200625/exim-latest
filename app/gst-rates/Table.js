"use client";

import Link from "next/link";

const chapters = [
  { chapter: "01", description: "LIVE ANIMALS" },
  { chapter: "02", description: "MEAT AND EDIBLE MEAT OFFAL" },
  { chapter: "03", description: "FISH AND CRUSTCEANS, MOLLUSCS AND OTHER AQUATIC INVERTEBRATES" },
  { chapter: "04", description: "DAIRY PRODUCE; BIRDS EGGS; NATURAL HONEY; EDIBLE PRODUCTS OF ANIMAL ORIGIN, NOT ELSEWHERE SPECIFIED OR INCLUDED" },
  { chapter: "05", description: "PRODUCTS OF ANIMAL ORIGIN, NOT ELSEWHERE SPECIFIED OR INCLUDED" },
  { chapter: "06", description: "LIVE TREES AND OTHER PLANTS; BULBS, ROOTS AND THE LIKE; CUT FLOWERS AND ORNAMENTAL FOLIAGE" },
  { chapter: "07", description: "Edible vegetables and certain roots and tubers" },
  { chapter: "08", description: "Edible fruit and nuts; peel of citrus fruit or melons" },
  { chapter: "09", description: "Coffee, tea, mate and spices" },
  { chapter: "10", description: "Cereals" },
  { chapter: "11", description: "Products of the milling industry; malt; starches; inulin; wheat gluten" },
  { chapter: "12", description: "Oil seeds and oleaginous fruits, miscellaneous grains, seeds and fruit; industrial or medicinal plants; straw and fodder" },
  { chapter: "13", description: "Lac; gums, resins and other vegetable saps and extracts" },
  { chapter: "14", description: "Vegetable plaiting materials; vegetable products not elsewhere specified or included" },
  { chapter: "15", description: "Animal or vegitable fats and oil and their cleavage products; prepared ediable fats; Animal or vegitable waxes." },
  { chapter: "16", description: "Preparations of meat, of fish or of crustaceans, molluscs or other aquatic invertebrates" },
  { chapter: "17", description: "Sugars and sugar confectionery" },
  { chapter: "18", description: "Cocoa and cocoa preparations" },
  { chapter: "19", description: "Preparations of cereals, flour, starch or milk; pastrycooks products" },
  { chapter: "20", description: "Preparations of vegetables, fruit, nuts or other parts of plants" },
  { chapter: "21", description: "Miscellaneous edible preparations" },
  { chapter: "22", description: "Beverages, spirits and vinegar" },
  { chapter: "23", description: "Residues and waste from the food industries; prepared animal fodder" },
  { chapter: "24", description: "Tobacco and manufactured tobacco substitutes" },
  { chapter: "25", description: "Salt; sulphur; earths and stone; plastering materials, lime and cement" },
  { chapter: "26", description: "Ores, slag and ash" },
  { chapter: "27", description: "Mineral fuels, mineral oils and products of their distillation; bituminous substances; mineral waxes" },
  { chapter: "28", description: "Inorganic chemicals; organic or inorganic compounds of precious metals, of rare-earth metals, or radioactive elements or of isotopes" },
  { chapter: "29", description: "Organic chemicals" },
  { chapter: "30", description: "Pharmaceuticals products" },
  { chapter: "31", description: "Fertilisers" },
  { chapter: "32", description: "Tanning or dyeing extracts; tannins and their derivatives; dyes, pigments and other colouring matter; paints and varnishes; putty and other mastics; inks" },
  { chapter: "33", description: "Essential oils and resinoids; perfumery, cosmetic or toilet preparations" },
  { chapter: "34", description: "Soap, organic surface-active agents, washing preparations, lubricating preparations, artificial waxes, prepared waxes, polishing or scouring preparations, candles and similar articles, modeling paste, \"dental waxes\" and dental preparations with a basis of plaster" },
  { chapter: "35", description: "Albuminoidal substances; modified starches; glues; enzymes." },
  { chapter: "36", description: "Explosives; pyrotechnic products; matches; pyrophoric alloys; certain combustible preparations." },
  { chapter: "37", description: "Photographic or cinematographic goods." },
  { chapter: "38", description: "Miscellaneous chemical products" },
  { chapter: "39", description: "Plastics and articles thereof." },
  { chapter: "40", description: "Rubber and articles thereof." },
  { chapter: "41", description: "Raw hides and skins ( other than furskins ) and leather." },
  { chapter: "42", description: "Articles of leather, saddlery and harness; travel goods, handbags and similar container articles of animal gut ( other than silk-worm gut )." },
  { chapter: "44", description: "Wood and articles of wood; wood charcoal" },
  { chapter: "45", description: "Cork and articles of cork" },
  { chapter: "46", description: "Manufactures of straw, of esparto or of other plaiting materials; basketware and wickerwork" },
  { chapter: "47", description: "Pulp of wood or of other fibrous cellulosic material; waste and scrap of paper or paperboard" },
  { chapter: "48", description: "Paper and paperboard; articles of paper pulp, of paper or of paperboard" },
  { chapter: "49", description: "Printed books, newspapers, pictures and other products of the printing industry; manuscripts, typescripts and plans" },
  { chapter: "50", description: "Silk" },
  { chapter: "51", description: "Wool, fine or coarse animal hair; horsehair yarn and woven fabric" },
  { chapter: "52", description: "Cotton" },
  { chapter: "53", description: "Other vegetable textile fibres; paper yarn and woven fabrics of paper yarn" },
  { chapter: "54", description: "Man-made filaments" },
  { chapter: "55", description: "Man-made staple fibres" },
  { chapter: "56", description: "Wadding, felt and non-wovens; special yarns; twine, cordage, ropes and cables and articles thereof" },
  { chapter: "57", description: "Carpets and other textiles floor coverings" },
  { chapter: "58", description: "Special woven fabrics; tufted textile fabrics; lace; tapestries; trimmings; embroidery" },
  { chapter: "59", description: "Impregnated, coated, covered or laminated textile fabrics; textile articles of a kind suitable for industrial use" },
  { chapter: "60", description: "Knitted or crocheted fabrics" },
  { chapter: "61", description: "Articles of apparel and clothing accessories, knitted or crocheted" },
  { chapter: "62", description: "Articles of apparel and clothing accessories, not knitted or crocheted" },
  { chapter: "63", description: "Other made up textile articles; sets; worn clothing and worn textile articles; rags" },
  { chapter: "64", description: "Footwear, gaiters and the like; parts of such articles" },
  { chapter: "65", description: "Headgear and parts thereof" },
  { chapter: "66", description: "Umbrellas, sun umbrellas, walking-sticks, seat-sticks, whips, riding-crops and parts thereof" },
  { chapter: "67", description: "Prepared feathers and down and articles made of feathers or of down; artificial flowers; articles of human hair" },
  { chapter: "68", description: "Articles of stone, plaster, cement, asbestos, mica or similar materials" },
  { chapter: "69", description: "Ceramic products" },
  { chapter: "70", description: "Glass and glassware" },
  { chapter: "71", description: "Natural or cultured pearls, precious or semi-precious stones, precious metals, metals clad with precious metal, and articles thereof; imitation jewellery; coin" },
  { chapter: "72", description: "Iron and steel" },
  { chapter: "73", description: "Articles of iron or steel." },
  { chapter: "74", description: "Copper and articles thereof" },
  { chapter: "75", description: "Nickel and articles thereof" },
  { chapter: "76", description: "Aluminium and articles thereof" },
  { chapter: "78", description: "Lead and articles thereof." },
  { chapter: "79", description: "Zinc and articles thereof." },
  { chapter: "80", description: "Tin and articles thereof." },
  { chapter: "81", description: "Other base metals; cermets; articles thereof." },
  { chapter: "82", description: "Tools, implements, cutlery, spoons and forks, of base metal; parts thereof of base metal." },
  { chapter: "83", description: "Miscellaneous articles of base metal" },
  { chapter: "84", description: "Nuclear reactors, boilers, machinery and mechanical appliances; parts thereof" },
  { chapter: "85", description: "Electrical machinery and equipment and parts thereof; sound recorders and reproducers, television image and sound recorders and reproducers, and parts and accessories of such articles" },
  { chapter: "86", description: "Railway or tramway locomotives, rolling-stock and parts thereof; railway or tramway track fixtures and fittings and parts thereof; mechanical ( including electro-mechanical ) traffic signaling equipment of all kinds" },
  { chapter: "87", description: "Vehicles other than railway or tramway rolling-stock, and parts and accessories thereof" },
  { chapter: "88", description: "Aircraft, spacecraft, and parts thereof" },
  { chapter: "89", description: "Ships, boats and floating structures" },
  { chapter: "90", description: "Optical, photographic, cinematographic, measuring, checking, precision, medical or surgical instruments and apparatus; parts and accessories thereof" },
  { chapter: "91", description: "Clocks and watches and parts thereof" },
  { chapter: "92", description: "Musical instruments; parts and accessories of such articles" },
  { chapter: "93", description: "Arms and ammunition; parts and accessories thereof" },
  { chapter: "94", description: "Furniture; bedding, mattresses, mattress supports, cushions and similar stuffed furnishings; lamps and lighting fittings, not elsewhere specified or included; illuminated signs, illuminated name-plates and the like; prefabricated buildings." },
  { chapter: "95", description: "Toys, games and sports requisites; parts and accessories thereof" },
  { chapter: "96", description: "Miscellaneous manufactured articles" },
  { chapter: "97", description: "Works of art, collectors’ pieces and antiques" },
  { chapter: "98", description: "Project Goods; some special uses" },
  { chapter: "99", description: "Miscellaneous goods" }
];

const rowColors = ["bg-white", "bg-slate-50", "bg-slate-100"];

const Table = () => {
  return (
    <section className="py-12 px-4 text-center bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-black mb-4">
          GST HSN Code List with GST rates 2024
        </h2>

        <div className=" mt-10 border border-gray-300  shadow-md">
          <table className="min-w-full text-left text-black border-collapse">
<thead className="sticky top-16 z-10">
              <tr className="bg-gray-200">
                <th className="px-6 py-4 text-base font-semibold border-b border-gray-300 w-40">
                  Chapter
                </th>
                <th className="px-6 py-4 text-base font-semibold border-b border-gray-300 border-l">
                  Chapter Description
                </th>
              </tr>
            </thead>
            <tbody>
              {chapters.map(({ chapter, description }, idx) => (
                <tr
                  key={chapter}
                  className={`${rowColors[idx % 3]} hover:bg-gray-100 transition`}
                >
                  <td className="px-6 py-4 text-blue-600 font-semibold border-b border-gray-200">
                    <a href={`/gst-rates/chapter-${chapter}`} className="block w-full">
                      Chapter {chapter}
                    </a>
                  </td>
                  <td className="px-6  py-4 border-b border-gray-200 border-l">
                    <a href={`/gst-rates/chapter-${chapter}`} className="block w-full">
                      {description}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Table;