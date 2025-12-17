export const dynamic = "force-static";

import React from 'react'

import Hero from './Hero';
import ShowFilters from './ShowFilters';
import MainSection from './MainSection';
import SearchGlobalData from './SearchGlobalData';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

function parseFilters(raw) {
  return raw.map((param) => {
    const [label, ...value] = param.split("-");
    return {
      label: label.replace(/_/g, " ").replace(/^./, (s) => s.toUpperCase()),
      value: value.join(" ").replace(/_/g, " ")
    };
  });
}

function extractQuery(filters) {
  return {
    type: filters.find(f => f.label === "Type")?.value?.toLowerCase() || "export",
    country: filters.find(f => f.label === "Country")?.value || "",
    product: filters.find(f => f.label === "Product")?.value || "",
    hscode: filters.find(f => f.label === "Hscode")?.value || "",
    countryin: filters.find(f => f.label === "Countryin")?.value || "",
    port: filters.find(f => f.label === "Port")?.value || ""
  };
}

export async function generateMetadata({ params }) {
  const raw = params.params || [];
  const applied = parseFilters(raw);
  const query = extractQuery(applied);

  const { type, country, product, hscode, countryin, port } = query;

  let title = `Search Global Trade Data by Country, HS Code & Product`;
  const lowerCountry = country.toLowerCase()?.replace(/-/g, ' ') || '';
  const tradeType = type?.toLowerCase();
  const product_a = product.replace('&', '&amp;');
  let description = `Explore global trade data by country, HS code, and product. Access detailed shipment records for market research.`;
  let keywords = ['global trade data', 'hs code', 'import export data', 'shipment records'];

  let hs_name = "HS Code";
  if (hscode.length == 2) hs_name = "Chapter";
//country type product
  if (country != "" && product != "" && hscode == "" && type != "" && countryin == "" && port == "") {
    title = `${lowerCountry.replace(/^./, s => s.toUpperCase())} ${type.replace(/^./, s => s.toUpperCase())} Data of ${product_a.replace(/^./, s => s.toUpperCase())} | Buyers & Suppliers – Exim Trade Data`;
    description = `Get the latest ${lowerCountry.replace(/^./, s => s.toUpperCase())} ${type.replace(/^./, s => s.toUpperCase())} data of ${product_a.replace(/^./, s => s.toUpperCase())} with detailed shipment records, ${type.replace(/^./, s => s.toUpperCase())}er names, and supplier information. Access verified ${lowerCountry.replace(/^./, s => s.toUpperCase())} trade statistics from Exim Trade Data to grow your ${product_a.replace(/^./, s => s.toUpperCase())} business.`;
    keywords = `${lowerCountry} ${type} data, ${lowerCountry} ${product_a} ${type}, ${lowerCountry} ${type}ers, ${lowerCountry} suppliers, ${product_a} trade data, verified ${lowerCountry} trade reports, Exim Trade Data, ${lowerCountry} ${type} statistics, ${lowerCountry} electronics ${type}, ${product_a} shipment data`;
  }
  //country hscode type

  if (country != "" && product == "" && hscode != "" && type != "" && countryin == "" && port == "") 
    {
      title = `${lowerCountry.replace(/^./, (s) => s.toUpperCase())} ${type.replace(/^./, (s) => s.toUpperCase())} Data 2025 – ${hs_name} ${hscode} | Verified Trade Reports`;
      description = `Get updated 2025 ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} import data with ${hs_name} ${hscode}, including verified shipment details, importer names, and supplier information. Access comprehensive trade statistics from Exim Trade Data to explore new business opportunities and grow your trade.`;
      keywords = `${lowerCountry.replace(/^./, (s) => s.toUpperCase())} import data ${hscode}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} importers, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} suppliers, trade reports ${lowerCountry.replace(/^./, (s) => s.toUpperCase())}, verified ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} trade data, ${hs_name} import statistics, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} import statistics, Exim Trade Data, shipment records ${lowerCountry.replace(/^./, (s) => s.toUpperCase())}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} trade insights`;
      
    }

    ///country type countryin
  

  if (country != "" && product == "" && hscode == "" && type != "" && countryin != "" && port == "") {
    if (tradeType == "import")
      {
        title = `${lowerCountry.replace(/^./, (s) => s.toUpperCase())} ${type.replace(/^./, (s) => s.toUpperCase())}s from ${countryin} | Global Trade Data`;
        description = `Access 2025 ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} import data for shipments into ${countryin}, including verified importer names, supplier details, and trade statistics. Explore comprehensive trade reports from Exim Trade Data to discover new business opportunities and grow your import-export network.`;
        keywords = `${lowerCountry.replace(/^./, (s) => s.toUpperCase())} import data to ${countryin}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} importers ${country}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} suppliers ${countryin}, verified ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} trade reports, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} shipment data ${countryin}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} trade statistics, Exim Trade Data, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} import-export data, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} trade insights ${countryin}, import records ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} to ${countryin}`;
      }  
      else
      {
        title = `${lowerCountry.replace(/^./, (s) => s.toUpperCase())} Exports to ${countryin} | Global Trade Data`;
        description = `Access 2025 ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} export data for shipments to ${countryin}, including verified exporter names, supplier details, and trade statistics. Explore detailed trade reports from Exim Trade Data to identify business opportunities and grow your export-import network.`;
        keywords = `${lowerCountry.replace(/^./, (s) => s.toUpperCase())} export data to ${countryin}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} exporters ${countryin}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} suppliers ${countryin}, verified ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} trade reports, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} shipment data ${countryin}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} trade statistics, Exim Trade Data, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} export-export data, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} trade insights ${countryin}, export records ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} to ${countryin}`;
        
      }
  }


  //country type port
  if (country != "" && product == "" && hscode == "" && type != "" && countryin == "" && port != "") {
    if (tradeType == "import")
      {
        title = `${lowerCountry.replace(/^./, (s) => s.toUpperCase())} ${type.replace(/^./, (s) => s.toUpperCase())} Data – Shipments via ${port} Port | Verified Trade Data`;
        description = `Access 2025 ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} import data for shipments through ${port} Port, including verified importer names, supplier details, and trade statistics. Explore detailed trade reports from Exim Trade Data to discover new business opportunities and grow your import network.`;
        keywords = `${lowerCountry.replace(/^./, (s) => s.toUpperCase())} import data ${port}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} importers ${port} port, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} suppliers ${port}, verified ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} trade reports, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} shipment data ${port}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} trade statistics, Exim Trade Data, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} import-export data, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} trade insights, import records ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} ${port}`;
      }
      else
      {
        title = `${lowerCountry.replace(/^./, (s) => s.toUpperCase())} Export Data – Shipments via ${port} Port | Verified Trade Data`;
        description = `Access 2025 ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} export data for shipments through ${port} Port, including verified exporter names, supplier details, and trade statistics. Explore detailed trade reports from Exim Trade Data to identify new business opportunities and grow your export network.`;
        keywords = `${lowerCountry.replace(/^./, (s) => s.toUpperCase())} export data ${port}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} exporters ${port} port, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} suppliers ${port}, verified ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} trade reports, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} shipment data ${port}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} trade statistics, Exim Trade Data, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} export-import data, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} trade insights, export records ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} ${port}`;
        
      }
  }


  //country product hscode type

  if (country != "" && product != "" && hscode != "" && type != "" && countryin == "" && port == "") {
    if (tradeType == "import")
      {
        title = `${lowerCountry.replace(/^./, (s) => s.toUpperCase())} ${type.replace(/^./, (s) => s.toUpperCase())}s – ${product_a  .replace(/^./, (s) => s.toUpperCase())} ( ${hs_name} ${hscode}) `;
        description = `Access 2025 ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} import data for ${product_a  .replace(/^./, (s) => s.toUpperCase())} ( ${hs_name} ${hscode}) with verified shipment details, importer names, and supplier information. Explore detailed trade reports from Exim Trade Data to discover new business opportunities and grow your import network.`;
        keywords = `${lowerCountry.replace(/^./, (s) => s.toUpperCase())} import data ${hscode}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} mobile phone import, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} importers, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} suppliers, verified ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} trade reports, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} shipment data, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} trade statistics, Exim Trade Data, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} electronics import, mobile phone shipment records`;
        
      }
      else
      {
        title = `${lowerCountry.replace(/^./, (s) => s.toUpperCase())} Exports – ${product_a  .replace(/^./, (s) => s.toUpperCase())} ( ${hs_name} ${hscode})`;
        description = `Access 2025 ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} export data for ${product_a  .replace(/^./, (s) => s.toUpperCase())} ( ${hs_name} ${hscode}) with verified shipment details, exporter names, and supplier information. Explore detailed trade reports from Exim Trade Data to find new business opportunities and grow your export network.`;
        keywords = `${lowerCountry.replace(/^./, (s) => s.toUpperCase())} export data ${hscode}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} mobile phone export, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} exporters, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} suppliers, verified ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} trade reports, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} shipment data, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} trade statistics, Exim Trade Data, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} electronics export, mobile phone shipment records`;
        
      }
  }

  // country product type countryin

  if (country != "" && product != "" && hscode == "" && type != "" && countryin != "" && port == "") {
    if (tradeType == "import")
      {
        title = `${lowerCountry.replace(/^./, (s) => s.toUpperCase())} ${product_a  .replace(/^./, (s) => s.toUpperCase())} ${type.replace(/^./, (s) => s.toUpperCase())}s from ${countryin} | Exim Trade Data`;
        description = `Access 2025 ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} import data for ${product_a  .replace(/^./, (s) => s.toUpperCase())} shipped from ${countryin}, including verified importer names, supplier details, and trade statistics. Explore detailed trade reports from Exim Trade Data to discover new business opportunities and grow your import network.`;
        keywords = `${lowerCountry.replace(/^./, (s) => s.toUpperCase())} import data to ${countryin}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())}  ${product_a} import ${countryin}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} importers ${countryin}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} suppliers ${countryin}, verified ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} trade reports, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} shipment data ${countryin}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} trade statistics, Exim Trade Data, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} import, ${product_a} shipment records ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} to ${countryin}`;
        
      }
      else
      {

        title = `${lowerCountry.replace(/^./, (s) => s.toUpperCase())} ${product_a  .replace(/^./, (s) => s.toUpperCase())} Exports to ${countryin} | Exim Trade Data`;
        description = `Access 2025 ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} export data for ${product_a  .replace(/^./, (s) => s.toUpperCase())} shipped to ${countryin}, including verified exporter names, supplier details, and trade statistics. Explore detailed trade reports from Exim Trade Data to find new business opportunities and expand your export network.`;
        keywords = `${lowerCountry.replace(/^./, (s) => s.toUpperCase())} export data to ${countryin}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} ${product_a} export ${countryin}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} exporters ${countryin}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} suppliers ${countryin}, verified ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} trade reports, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} shipment data ${countryin}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} trade statistics, Exim Trade Data, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())}  export, ${product_a} shipment records ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} to ${countryin}`;
        
      }
  }

  //country hscode type countryin

  if (country != "" && product == "" && hscode != "" && type != "" && countryin != "" && port == "") {
    if (tradeType == "import")
      {
        description = `Access 2025 ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} import data ( ${hs_name} ${hscode}) shipped from ${countryin}, including verified importer names, supplier details, shipment volumes, and trade statistics. Explore detailed trade reports from Exim Trade Data to uncover new business opportunities and grow your import network.`;
        title = `${lowerCountry.replace(/^./, (s) => s.toUpperCase())} ${type.replace(/^./, (s) => s.toUpperCase())}s –  ${hs_name} ${hscode} from ${countryin} | Exim Trade Data`;
        keywords = `${lowerCountry.replace(/^./, (s) => s.toUpperCase())} import data from ${countryin} ${hscode}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} importers ${countryin}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} suppliers ${countryin}, verified ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} import reports, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} shipment data to ${countryin}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} trade statistics ${hscode}, Exim Trade Data, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} trade insights, import records ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} to ${countryin}, verified trade data ${lowerCountry.replace(/^./, (s) => s.toUpperCase())}`;

      }
      else
      {
        description = `Access 2025 ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} export data ( ${hs_name} ${hscode}) shipped to ${countryin}, including verified exporter names, supplier details, shipment volumes, and trade statistics. Explore detailed trade reports from Exim Trade Data to uncover new business opportunities and grow your export network.`;
        title = `${lowerCountry.replace(/^./, (s) => s.toUpperCase())} Exports –  ${hs_name} ${hscode} to ${countryin} | Exim Trade Data`;
        keywords = `${lowerCountry.replace(/^./, (s) => s.toUpperCase())} export data to ${countryin} ${hscode}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} exporters ${countryin}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} suppliers ${countryin}, verified ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} export reports, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} shipment data to ${countryin}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} trade statistics ${hscode}, Exim Trade Data, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} trade insights, export records ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} to ${countryin}, verified trade data ${lowerCountry.replace(/^./, (s) => s.toUpperCase())}`;
        
        
      }
  }
  //country product hscode type countryin

  if (country != "" && product != "" && hscode != "" && type != "" && countryin != "" && port == "") {
    if (tradeType == "import")
      {
        description = `Access 2025 ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} import data for ${product_a  .replace(/^./, (s) => s.toUpperCase())} (${hs_name} ${hscode}) shipped from ${countryin}, including verified importer names, supplier details, shipment volumes, and trade statistics. Explore detailed trade reports from Exim Trade Data to discover new business opportunities and grow your import network.`;
        title = `${lowerCountry.replace(/^./, (s) => s.toUpperCase())} ${type.replace(/^./, (s) => s.toUpperCase())} Data – ${product_a  .replace(/^./, (s) => s.toUpperCase())} (${hs_name} ${hscode}) from ${countryin}`;
        keywords = `${lowerCountry.replace(/^./, (s) => s.toUpperCase())} import data from ${countryin} ${hscode}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} mobile phone import ${countryin}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} importers ${countryin}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} suppliers ${countryin}, verified ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} trade reports, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} shipment data to ${countryin}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} trade statistics, Exim Trade Data, ${product_a} import records ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} to ${countryin}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())}  import`;
        
      }
      else
      {
        description = `Access 2025 ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} export data for ${product_a  .replace(/^./, (s) => s.toUpperCase())} ( ${hs_name} ${hscode}) shipped to ${countryin}, including verified exporter names, supplier details, shipment volumes, and trade statistics. Explore detailed trade reports from Exim Trade Data to identify new business opportunities and expand your export network.`;
        title = `${lowerCountry.replace(/^./, (s) => s.toUpperCase())} Export Data – ${product_a  .replace(/^./, (s) => s.toUpperCase())} ( ${hs_name} ${hscode}) to ${countryin}`;
        keywords = `${lowerCountry.replace(/^./, (s) => s.toUpperCase())} export data to ${countryin} ${hscode}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} mobile phone export ${countryin}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} exporters ${countryin}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} suppliers ${countryin}, verified ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} trade reports, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} shipment data to ${countryin}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} trade statistics, Exim Trade Data, ${product_a} export records ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} to ${countryin}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} export`;
        
      }
  }

  // country type

  if (country != "" && product == "" && hscode == "" && type != "" && countryin == "" && port == "") {
    if (tradeType == "import") {
      title = `Search ${lowerCountry.replace(/^./, s => s.toUpperCase())} ${type.replace(/^./, s => s.toUpperCase())} Data - Exim Trade Data`;
    } else {
      title = `Search ${lowerCountry.replace(/^./, s => s.toUpperCase())} Export Data - Exim Trade Data`;
    }
  }

  const url = `${baseURL}/search/${raw.join("/")}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Exim Trade Data',
      type: 'website',
      images: [{ url: '/logo.png', alt: 'Exim Trade Data' }],
    },
    twitter: {
      card: 'summary',
      title,
      description,
      site: '@eximtradedata',
      creator: '@eximtradedata',
      images: ['/logo.png'],
    },
  };
}



const page = async ({ params }) => {
  const fetchTradeData = async (params) => {
    const { type, country, product, hscode, port, countryin } = params;
  
    let payload = {
      source: country?.toLowerCase(),
      type: "master",
      size: 10,
      filters: {},
      distinct_filters: []
    };
  
    if (type === "export") {
      payload.filters.origin_country = country;
      if (product) payload.filters.Product_Description = product;
      if (hscode) payload.filters.hs_code = hscode + "%";
      if (countryin) payload.filters.destination_country = countryin;
      if (port) payload.filters.Port_of_loading = port;
      payload.distinct_filters = ["destination_country", "hs_code", "Port_of_loading"];
    } else {
      payload.filters.destination_country = country;
      if (product) payload.filters.Product_Description = product;
      if (hscode) payload.filters.hs_code = hscode + "%";
      if (countryin) payload.filters.origin_country = countryin;
      if (port) payload.filters.Port_of_Unloading = port;
      payload.distinct_filters = ["origin_country", "hs_code", "Port_of_Unloading"];
    }
  
    const res = await fetch(`${baseURL}/search-data/api`, {
      next: { revalidate: 1800 },
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from("abc:abc@123").toString("base64")}`
      },
      body: JSON.stringify(payload)
    });
  
    if (!res.ok) throw new Error("Failed to fetch trade data");
  
    const api = await res.json();
  
    return {
      section4: {
        filters: {
          hsCodes: api.unique
            .filter((u) => u.startsWith("hs_code"))
            .map((u) => u.split(":")[1].split(",")[0].trim()),
          countries: api.unique
            .filter((u) =>
              u.startsWith(type === "export" ? "destination_country" : "origin_country")
            )
            .map((u) => u.split(":")[1].split(",")[0].trim()),
          ports: api.unique
            .filter((u) =>
              u.startsWith(type === "export" ? "Port_of_loading" : "Port_of_Unloading")
            )
            .map((u) => u.split(":")[1].split(",")[0].trim()),
        },
        table: {
          headers: [
            "DATE",
            "HS CODE",
            "PRODUCT DESCRIPTION",
            type === "export" ? "EXPORTER" : "IMPORTER",
            "QUANTITY",
            "UNIT",
            "TOTAL VALUE USD",
            type === "export" ? "DESTINATION COUNTRY" : "ORIGIN COUNTRY",
            type === "export" ? "PORT OF LOADING" : "PORT OF UNLOADING",
          ],
          rows: api.data.map((d) => ({
            date: d._source.date,
            hsCode: d._source.hs_code,
            product: d._source.Product_Description,
            exporter: type === "export" ? d._source.exporter : d._source.importer,
            qty: d._source.quantity,
            unit: d._source.unit,
            value: d._source.total_value_usd,
            origin:
              type === "export"
                ? d._source.destination_country
                : d._source.origin_country,
            port:
              type === "export"
                ? d._source.Port_of_Loading
                : d._source.Port_of_Unloading,
          })),
          pagination: {
            currentPage: 1,
            totalPages: Math.ceil(api.data.length / 10),
            nextPageUrl: "/pricing",
          },
        },
      },
    };
  };
// api call ends

  const raw = params.params || [];
  const appliedFilters = parseFilters(raw);
  const queryParams = extractQuery(appliedFilters);

  const { type, country, product, hscode, countryin, year } = queryParams;

  const formatText = (t) => t?.replace(/[_-]/g, " ").trim();
  const upper = (t) => t?.toUpperCase();

  let sec1Heading = `Latest ${formatText(country).replace(/^./, s => s.toUpperCase())} ${type.replace(/^./, s => s.toUpperCase())} Data`;
  if (product) sec1Heading += ` of ${formatText(product).replace(/^./, s => s.toUpperCase())}`;
  if (hscode) sec1Heading += ` Under HS Code ${hscode}`;
  if (countryin) sec1Heading += ` to ${formatText(countryin)}`;

  let sec1Subheading = `Complete Detailed Competitor Analysis through our latest ${upper(type)} Data of ${formatText(country).replace(/^./, s => s.toUpperCase())}${year ? " " + year : ""}.`;
  if (product)
    sec1Subheading += ` Find detailed ${formatText(country)} ${upper(type)} Data statistics consisting of the name of ${product} importer in ${formatText(country)} with Date, HS code, Product Details, quantity, Unit, Total Value in USD, Country, port Loading & unloading, buyer and more shipping information details below.`;

  let sec5Content = `Exim Trade Data provides 100% genuine and the latest ${upper(type)} Data`;
  if (product) sec5Content += ` of ${formatText(product)}`;
  if (hscode) sec5Content += ` under HS Code ${hscode}`;
  sec5Content += ` of ${formatText(country)}`;
  if (countryin) sec5Content += ` to ${formatText(countryin)}`;
  if (year) sec5Content += ` in ${year}`;
  sec5Content += `. We collect ${upper(type)} Data`;
  if (product) sec5Content += ` of ${formatText(product)}`;
  if (hscode) sec5Content += ` under HS Code ${hscode}`;
  sec5Content += ` of ${formatText(country)}`;
  if (countryin) sec5Content += ` to ${formatText(countryin)} with product and date.`;
  sec5Content += ` ${upper(type)} Data helps to analyze ${upper(type)} price, company name, port, ${type.replace(/^./, s => s.toUpperCase())}er and exporter, product description, quantity, market trends, and many other data points. International Trade data of a country helps the global exporters and importers to do analysis and market research to find local suppliers and buyers in that country.`;

  let data = {
    section1: {
      heading: sec1Heading,
      subheading: sec1Subheading,
    },
    section3: {
      appliedFilters,
    },
    section4: {
      filters: { hsCodes: [], countries: [], ports: [] },
      table: { headers: [], rows: [], pagination: { currentPage: 1, totalPages: 1 } },
    },
    section5: {
      heading: "Search Global Export - Import Trade Data",
      content: sec5Content,
      pointers: [],
    },
  };

  try {
    const tradeData = await fetchTradeData(queryParams);
    data.section4 = tradeData.section4;
  } catch {}

  return (
    <main>
      <Hero data={data.section1} />
      <ShowFilters appliedFilters={data.section3.appliedFilters} />
      <MainSection data={data.section4} appliedFilters={data.section3.appliedFilters} />
      <SearchGlobalData data={data.section5} />

      <section className="w-full p-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col items-center p-6 rounded-2xl shadow-md bg-white hover:shadow-xl transition">
            <img src="/search-data-results/expand-your-business-network.webp" alt="Expand Your Business Network" className="w-16 h-16 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 text-center">Expand Your Business Network</h3>
          </div>

          <div className="flex flex-col items-center p-6 rounded-2xl shadow-md bg-white hover:shadow-xl transition">
            <img src="/search-data-results/risk-free-market-entry-strategy.webp" alt="Risk Free Market Entry Strategy" className="w-16 h-16 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 text-center">Risk Free Market Entry Strategy</h3>
          </div>

          <div className="flex flex-col items-center p-6 rounded-2xl shadow-md bg-white hover:shadow-xl transition">
            <img src="/search-data-results/authentic-export-import-trade-data.webp" alt="Authentic Export-import Trade Data" className="w-16 h-16 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 text-center">Authentic Export-import Trade Data</h3>
          </div>

          <div className="flex flex-col items-center p-6 rounded-2xl shadow-md bg-white hover:shadow-xl transition">
            <img src="/search-data-results/import-export-trade-data.webp" alt="import-Export Trade Data" className="w-16 h-16 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 text-center">import-Export Trade Data</h3>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;