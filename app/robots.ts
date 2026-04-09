import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const contentPaths = ["/blog/", "/features/", "/use-cases/", "/compare/", "/for/", "/glossary/", "/audio-to-", "/alternatives/"];

  /* AI crawlers that should see content pages for AI search visibility */
  const aiCrawlers = [
    "GPTBot",
    "Google-Extended",
    "CCBot",
    "ClaudeBot",
    "PerplexityBot",
    "Bytespider",
    "Applebot",
    "anthropic-ai",
    "cohere-ai",
    "Meta-ExternalAgent",
    "FacebookBot",
    "Amazonbot",
    "YouBot",
    "OAI-SearchBot",
  ];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/private/"],
      },
      /* AI Crawlers — allow content pages for AI search visibility */
      ...aiCrawlers.map((bot) => ({
        userAgent: bot,
        allow: contentPaths,
        disallow: ["/api/", "/_next/", "/private/"],
      })),
    ],
    sitemap: "https://sythio.com/sitemap.xml",
    host: "https://sythio.com",
  };
}
