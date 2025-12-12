// /app/ports-data/[country]/[code]/PortsClient.jsx
"use client";

import React, { useEffect, useState } from "react";
import MainSection from "./MainSection";

const allCountries = "afghanistan,algeria,angola,argentina,armenia,australia,austria,azerbaijan,bahrain,bangladesh,barbados,belarus,belgium,benin,bermuda,bhutan,bolivia,botswana,brazil,bulgaria,burundi,cambodia,cameroon,canada,chad,chile,china,colombia,costa_rica,cote_d_ivoire,croatia,cyprus,czech_republic,denmark,dominican_republic,dr_congo,ecuador,egypt,estonia,ethiopia,fiji,finland,france,gabon,georgia,germany,ghana,greece,guatemala,guinea,guyana,hungary,india,indonesia,iran,iraq,ireland,israel,italy,jamaica,japan,jordan,kazakhstan,kenya,kosovo,kuwait,kyrgyzstan,latvia,lesotho,liberia,libya,lithuania,luxembourg,malawi,malaysia,maldives,mauritius,mexico,moldova,morocco,mozambique,nepal,netherland,new_zealand,nicaragua,niger,nigeria,norway,oman,pakistan,palestine,panama,papua_new_guinea,paraguay,peru,philippines,poland,portugal,qatar,romania,russia,rwanda,sao_tome_and_principe,saudi_arabia,senegal,serbia,seychelles,sierra_leone,singapore,slovakia,slovenia,somalia,south_africa,south_korea,spain,sri_lanka,sudan,sweden,switzerland,syria,taiwan,tajikistan,tanzania,thailand,togo,trinidad_and_tobago,tunisia,turkey,turkmenistan,uganda,ukraine,united_arab_emirates,united_kingdom,uruguay,usa,uzbekistan,venezuela,vietnam,yemen,zambia,zimbabwe".split(",");

const customsCountries =
  "argentina,bangladesh,bolivia,botswana,burundi,cameroon,chile,colombia,costa_rica,cote_d_ivoire,dr_congo,ecuador,ethiopia,fiji,ghana,guatemala,guyana,india,indonesia,kazakhstan,kenya,kosovo,lesotho,liberia,malawi,mexico,moldova,nicaragua,nigeria,pakistan,panama,paraguay,peru,philippines,russia,rwanda,sao_tome_and_principe,sierra_leone,singapore,sri_lanka,tanzania,turkey,uganda,ukraine,uruguay,uzbekistan,venezuela,vietnam,zambia,zimbabwe".split(",");

export default function PortsClient({ country, code }) {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  // parse code (example: A-1 → letter=A, pageNum=1)
  const [letter, pageStr] = code.split("-");
  const pageNum = parseInt(pageStr, 10) || 1;

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      setLoading(true);

      const perPage = 8;
      const from_ = (pageNum - 1) * perPage + 1;
      const to = pageNum * perPage;

      const source = customsCountries.includes(country.toLowerCase())
        ? country.toLowerCase()
        : "all";

      const payload = {
        source,
        type: "master",
        country_name: country,
        from_: String(from_),
        to: String(to),
      };

      try {
        const res = await fetch("https://test.eximtradedata.com/ports-data/api", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          signal: controller.signal,
        });

        if (!res.ok) throw new Error("Failed to fetch port data");

        const json = await res.json();
        setData(json.data || []);
        setTotal(json.total_values || 0);
      } catch (err) {
        console.error("Port Data Error:", err.message);
        setData([]);
        setTotal(0);
      } finally {
        setLoading(false);
      }
    }

    load();
    return () => controller.abort();
  }, [country, code]);

  if (loading) return <p className="p-8 text-center">Loading ports…</p>;

  return (
    <MainSection
      heading={country}
      subheading={country}
      data={data}
      totalValues={total}
      letter={letter}
      pg={pageNum}
    />
  );
}