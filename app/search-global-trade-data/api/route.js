// /app/search/api/route.js
export const dynamic = "force-static";
export const revalidate = 1800; // 1 hour cache

export async function POST(req) {
  try {
    const body = await req.json();

    const res = await fetch("http://103.30.72.94:8011/distinctCount", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic YWJjOmFiY0AxMjM=",
      },
      body: JSON.stringify(body),
      next: { revalidate: 1800 },
      signal: AbortSignal.timeout(15000),
    });

    if (!res.ok) {
      return Response.json(
        { error: true, message: `Upstream API error: ${res.status}` },
        { status: 500 }
      );
    }

    const data = await res.json();

    return Response.json({ success: true, data });

  } catch (err) {
    console.error("API Route Error:", err);
    return Response.json(
      { error: true, message: err.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}