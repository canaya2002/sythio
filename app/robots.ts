import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "GPTBot",
        allow: ["/blog/", "/features/", "/use-cases/", "/compare/", "/for/", "/glossary/"],
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "Google-Extended",
        allow: ["/blog/", "/features/", "/use-cases/", "/compare/", "/for/", "/glossary/"],
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: "https://sythio.com/sitemap.xml",
    host: "https://sythio.com",
  };
}
