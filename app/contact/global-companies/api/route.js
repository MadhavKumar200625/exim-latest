import "@/libs/httpAgent"; // Import to initialize global agents

export const dynamic = "force-static";
export const revalidate = 3600; 
export async function GET(req) {
  const { searchParams } = new URL(req.url);

  const country = searchParams.get("country");
  const company = searchParams.get("company");

  if (!country || !company) {
    return Response.json({ error: "Missing params" }, { status: 400 });
  }

  // Build payload
  const formattedCountry = country.toLowerCase().replace(/\s+/g, "_");
  const payload = {
    source: formattedCountry,
    type: "master",
    country_name: formattedCountry,
    company_name: company.replaceAll("-", " ").toUpperCase(),
  };

  const endpoints = [
    "valueCount",
    "uniqueBuyerSupplier",
    "topHSCode",
    "topOriginCountryDestinationCountry",
    "topPortOfLoadingUnloading",
    "topBuyerSupplier",
    "topExporterImporter",
  ];

  try {
    const results = await Promise.all(
      endpoints.map(async (ep) => {
        // fetch() uses undici which has built-in connection pooling
        const r = await fetch(`http://103.30.72.94:8011/companyReport/${ep}`, {
          method: "POST",
          headers: {
            Authorization: "Basic YWJjOmFiY0AxMjM=",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        const txt = await r.text();
        return txt ? JSON.parse(txt) : { error: "Invalid response" };
      })
    );

    // Format data
    return Response.json({
      section2: results[0],
      section3: results[1],
      section4: {
        import: results[2],
        export: results[3],
      },
      section5: {},
    });

  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}