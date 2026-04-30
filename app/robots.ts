import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  /* AI crawlers that should see the whole indexable surface for AI search. */
  const aiCrawlers = [
    "GPTBot",
    "Google-Extended",
    "CCBot",
    "ClaudeBot",
    "PerplexityBot",
    "Bytespider",
    "Applebot",
    "Applebot-Extended",
    "anthropic-ai",
    "cohere-ai",
    "Meta-ExternalAgent",
    "FacebookBot",
    "Amazonbot",
    "YouBot",
    "OAI-SearchBot",
    "DuckAssistBot",
    "MistralAI-User",
    "PanguBot",
    "Diffbot",
  ];

  /* Disallowed everywhere — internal infra and known thin/duplicate paths. */
  const baseDisallow = [
    "/api/",
    "/_next/",
    "/private/",
    /* Block tracking / referral parameter variants from being treated as
       distinct URLs. Googlebot honors `?` wildcards in disallow patterns. */
    "/*?utm_*",
    "/*?ref=*",
    "/*?gclid=*",
    "/*?fbclid=*",
  ];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: baseDisallow,
      },
      /* AI Crawlers — same as Googlebot scope */
      ...aiCrawlers.map((bot) => ({
        userAgent: bot,
        allow: "/",
        disallow: baseDisallow,
      })),
    ],
    sitemap: "https://sythio.com/sitemap.xml",
    host: "https://sythio.com",
  };
}
