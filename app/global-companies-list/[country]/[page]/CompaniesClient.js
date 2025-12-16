"use client";

import { useEffect, useState } from "react";
import Companies from "@/app/global-companies-list/Companies";

export default function CompaniesClient({ params }) {
  const { country, page } = params;

  const [data, setData] = useState({
    defaultLetter: "",
    totalValues: 0,
    companies: [],
  });

  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
  const controller = new AbortController();

  const load = async () => {
    setLoading(true);
    setErr(null);

    try {
      const res = await fetch(
        "https://test.eximtradedata.com/global-companies-list/api",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          signal: controller.signal,
          body: JSON.stringify({ country, page }),
        }
      );

      if (!res.ok) {
        throw new Error(`API failed (${res.status})`);
      }

      const json = await res.json();

      setData({
        defaultLetter: json?.defaultLetter ?? "",
        totalValues: json?.totalValues ?? 0,
        companies: Array.isArray(json?.companies) ? json.companies : [],
      });
    } catch (e) {
      if (e.name !== "AbortError") {
        setErr("Failed to load companies list");
        setData({
          defaultLetter: "",
          totalValues: 0,
          companies: [],
        });
      }
    } finally {
      setLoading(false);
    }
  };

  load();
  return () => controller.abort();
}, [country, page]);

  if (loading) return <p className="text-center p-10">Loading…</p>;
  if (err) return <p className="text-center text-red-500 p-10">{err}</p>;

  return <Companies {...data} />;
}