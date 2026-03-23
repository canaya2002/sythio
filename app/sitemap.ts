import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://sythio.com";
  const pages = [
    "",
    "/product",
    "/features",
    "/use-cases",
    "/pricing",
    "/faq",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/cookie-policy",
  ];

  const priorityMap: Record<string, number> = {
    "": 1.0,
    "/product": 0.9,
    "/features": 0.9,
    "/use-cases": 0.8,
    "/pricing": 0.8,
    "/faq": 0.7,
    "/about": 0.6,
    "/contact": 0.6,
    "/privacy-policy": 0.3,
    "/terms": 0.3,
    "/cookie-policy": 0.3,
  };

  const frequencyMap: Record<string, "weekly" | "monthly" | "yearly"> = {
    "": "weekly",
    "/product": "weekly",
    "/features": "weekly",
    "/use-cases": "weekly",
    "/pricing": "weekly",
    "/faq": "monthly",
    "/about": "monthly",
    "/contact": "monthly",
    "/privacy-policy": "yearly",
    "/terms": "yearly",
    "/cookie-policy": "yearly",
  };

  return pages.map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
    changeFrequency: frequencyMap[p] ?? "monthly",
    priority: priorityMap[p] ?? 0.5,
  }));
}
