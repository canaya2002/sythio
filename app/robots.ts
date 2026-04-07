import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const contentPaths = ["/blog/", "/features/", "/use-cases/", "/compare/", "/for/", "/glossary/", "/audio-to-", "/alternatives/"];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      /* ─── AI Crawlers — allow content pages for AI search visibility ─── */
      {
        userAgent: "GPTBot",
        allow: contentPaths,
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "Google-Extended",
        allow: contentPaths,
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "CCBot",
        allow: contentPaths,
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "ClaudeBot",
        allow: contentPaths,
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "PerplexityBot",
        allow: contentPaths,
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "Bytespider",
        allow: contentPaths,
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "Applebot",
        allow: contentPaths,
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: "https://sythio.com/sitemap.xml",
    host: "https://sythio.com",
  };
}
