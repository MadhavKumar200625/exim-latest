// /app/global-hs-code/api/route.js
import { NextResponse } from "next/server";
import redis from "@/libs/redis";
import { getConnection } from "@/libs/db";

export const dynamic = "force-dynamic"; // DB-driven
export const revalidate = 3600;

const fetchTimeout = (ms) =>
  new Promise((_, rej) => setTimeout(() => rej(new Error("Timeout")), ms));

export async function POST(req) {
  let body = {};
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { searchresult } = body;

  if (!searchresult || typeof searchresult !== "string") {
    return NextResponse.json({ error: "Missing searchresult" }, { status: 400 });
  }

  const cacheKey = `hs:${searchresult}`;

  // Try redis GET
  try {
    const cached = await redis.get(cacheKey);
    if (cached) {
      const parsed = JSON.parse(cached);
      return NextResponse.json(parsed, {
        headers: { "X-Cache": "HIT", "Cache-Control": "public, max-age=3600" },
      });
    }
  } catch (err) {
    console.error("REDIS GET ERROR:", err.message || err);
    // continue to run DB logic if redis fails
  }

  // Parse params as original page did
  const [type, ...rest] = searchresult.split("-");
  const value = rest.join("-");

  let db = null;
  let result = { recordset: [] };
  let heading = "Not Found";
  let tc1Heading = null;

  try {
    db = await getConnection();

    switch (type) {
      case "hs":
        result = await db.query`
          SELECT hs_code, hs_code_description AS item_description
          FROM hscode_list
          WHERE hs_code LIKE ${value + "%"}
          ORDER BY hs_code
        `;
        break;

      case "product":
        result = await db.query`
          SELECT hs_code, hs_code_description AS item_description
          FROM hscode_list
          WHERE hs_code_description LIKE ${"%" + value + "%"}
          ORDER BY hs_code
        `;
        break;

      case "chapter":
        tc1Heading = `Chapter - ${value}`;
        result = await db.query`
          SELECT hs_code, hs_code_description AS item_description
          FROM hscode_list
          WHERE hs_code LIKE ${value + "%"} AND LEN(hs_code) = 4
          ORDER BY hs_code
        `;
        break;

      case "heading":
        tc1Heading = `Heading - ${value}`;
        result = await db.query`
          SELECT hs_code, hs_code_description AS item_description
          FROM hscode_list
          WHERE hs_code LIKE ${value + "%"} AND LEN(hs_code) >= 6
          ORDER BY hs_code
        `;
        break;

      default:
        return NextResponse.json({ error: "Invalid search type." }, { status: 400 });
    }

    // Get Title Heading (same logic)
    if (result.recordset.length > 0) {
      if (type === "product") {
        heading = "Harmonize system code of " + value;
      } else {
        const headingDetails = await db.query`
          SELECT TOP 1 hs_code_description AS item_description
          FROM hscode_list
          WHERE hs_code = ${value}
        `;
        heading = headingDetails.recordset[0]?.item_description ?? heading;
      }
    }

    const responsePayload = {
      recordset: result.recordset || [],
      heading,
      tc1Heading,
    };

    // Store in Redis (1 hour)
    try {
      await redis.set(cacheKey, JSON.stringify(responsePayload), "EX", 3600);
    } catch (err) {
      console.error("REDIS SET ERROR:", err.message || err);
    }

    return NextResponse.json(responsePayload, {
      headers: { "X-Cache": "MISS", "Cache-Control": "public, max-age=3600" },
    });
  } catch (e) {
    console.error("HS Code SQL Error:", e);
    return NextResponse.json({ error: true, message: "Database Unavailable" }, { status: 500 });
  }
}