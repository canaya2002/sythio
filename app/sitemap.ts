import type { MetadataRoute } from "next";
import { posts } from "./blog/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://sythio.com";

  const pages: {
    path: string;
    priority: number;
    frequency: "weekly" | "monthly" | "yearly";
  }[] = [
    /* ─── Core Pages ─── */
    { path: "", priority: 1.0, frequency: "weekly" },
    { path: "/product", priority: 0.9, frequency: "weekly" },
    { path: "/features", priority: 0.9, frequency: "weekly" },
    { path: "/pricing", priority: 0.8, frequency: "weekly" },
    { path: "/use-cases", priority: 0.8, frequency: "weekly" },

    /* ─── Feature Pages ─── */
    { path: "/features/ai-summaries", priority: 0.8, frequency: "weekly" },
    { path: "/features/speaker-detection", priority: 0.8, frequency: "weekly" },
    { path: "/features/task-extraction", priority: 0.8, frequency: "weekly" },
    { path: "/features/action-plans", priority: 0.8, frequency: "weekly" },
    { path: "/features/clean-text", priority: 0.8, frequency: "weekly" },
    { path: "/features/reports", priority: 0.8, frequency: "weekly" },
    { path: "/features/study-notes", priority: 0.8, frequency: "weekly" },
    { path: "/features/key-points", priority: 0.8, frequency: "weekly" },
    { path: "/features/ideas", priority: 0.8, frequency: "weekly" },
    { path: "/features/messages", priority: 0.8, frequency: "weekly" },

    /* ─── Use Case Pages ─── */
    { path: "/use-cases/meetings", priority: 0.8, frequency: "weekly" },
    { path: "/use-cases/voice-notes", priority: 0.8, frequency: "weekly" },
    { path: "/use-cases/brainstorming", priority: 0.8, frequency: "weekly" },
    { path: "/use-cases/lectures", priority: 0.8, frequency: "weekly" },
    { path: "/use-cases/client-calls", priority: 0.8, frequency: "weekly" },
    { path: "/use-cases/podcasts", priority: 0.8, frequency: "weekly" },
    { path: "/use-cases/interviews", priority: 0.8, frequency: "weekly" },

    /* ─── Outcome / Transformation Pages ─── */
    { path: "/audio-to-summary", priority: 0.7, frequency: "weekly" },
    { path: "/audio-to-tasks", priority: 0.7, frequency: "weekly" },
    { path: "/audio-to-action-plan", priority: 0.7, frequency: "weekly" },
    { path: "/audio-to-report", priority: 0.7, frequency: "weekly" },
    { path: "/audio-to-study-notes", priority: 0.7, frequency: "weekly" },
    { path: "/audio-to-clean-text", priority: 0.7, frequency: "weekly" },
    { path: "/audio-to-key-points", priority: 0.7, frequency: "weekly" },
    { path: "/audio-to-ideas", priority: 0.7, frequency: "weekly" },
    { path: "/audio-to-messages", priority: 0.7, frequency: "weekly" },
    { path: "/audio-to-transcript", priority: 0.8, frequency: "weekly" },

    /* ─── Comparison Pages ─── */
    { path: "/compare", priority: 0.7, frequency: "monthly" },
    { path: "/compare/otter", priority: 0.7, frequency: "monthly" },
    { path: "/compare/fireflies", priority: 0.7, frequency: "monthly" },
    { path: "/compare/tldv", priority: 0.7, frequency: "monthly" },
    { path: "/compare/audiopen", priority: 0.7, frequency: "monthly" },
    { path: "/compare/notta", priority: 0.7, frequency: "monthly" },

    /* ─── Audience Pages ─── */
    { path: "/for/students", priority: 0.7, frequency: "monthly" },
    { path: "/for/founders", priority: 0.7, frequency: "monthly" },
    { path: "/for/project-managers", priority: 0.7, frequency: "monthly" },
    { path: "/for/salespeople", priority: 0.7, frequency: "monthly" },
    { path: "/for/consultants", priority: 0.7, frequency: "monthly" },
    { path: "/for/lawyers", priority: 0.7, frequency: "monthly" },

    /* ─── Alternatives Pages ─── */
    { path: "/alternatives/otter", priority: 0.7, frequency: "monthly" },
    { path: "/alternatives/fireflies", priority: 0.7, frequency: "monthly" },
    { path: "/alternatives/tldv", priority: 0.7, frequency: "monthly" },

    /* ─── Glossary ─── */
    { path: "/glossary", priority: 0.6, frequency: "monthly" },

    /* ─── Info Pages ─── */
    { path: "/faq", priority: 0.7, frequency: "monthly" },
    { path: "/about", priority: 0.6, frequency: "monthly" },
    { path: "/contact", priority: 0.6, frequency: "monthly" },
    { path: "/security", priority: 0.7, frequency: "monthly" },
    { path: "/integrations", priority: 0.7, frequency: "monthly" },
    { path: "/enterprise", priority: 0.8, frequency: "monthly" },
    { path: "/case-studies", priority: 0.7, frequency: "monthly" },

    /* ─── Blog ─── */
    { path: "/blog", priority: 0.8, frequency: "weekly" },

    /* ─── Legal Pages ─── */
    { path: "/privacy-policy", priority: 0.3, frequency: "yearly" },
    { path: "/terms", priority: 0.3, frequency: "yearly" },
    { path: "/cookie-policy", priority: 0.3, frequency: "yearly" },
  ];

  /* ─── Blog Posts (dynamic) ─── */
  const blogPages = posts.map((post) => ({
    path: `/blog/${post.slug}`,
    priority: 0.7 as const,
    frequency: "monthly" as const,
  }));

  const allPages = [...pages, ...blogPages];

  /* Build a lookup of blog post dates for accurate lastModified */
  const blogDateMap = new Map(posts.map((post) => [`/blog/${post.slug}`, post.date]));

  /* Stagger lastModified dates by category so Google sees varied freshness */
  const categoryDates: Record<string, string> = {
    "/product": "2026-04-08",
    "/features": "2026-04-07",
    "/pricing": "2026-04-06",
    "/use-cases": "2026-04-07",
    "/compare": "2026-04-04",
    "/for/": "2026-04-05",
    "/audio-to-": "2026-04-06",
    "/alternatives": "2026-04-03",
    "/blog": "2026-04-08",
    "/faq": "2026-04-05",
    "/about": "2026-03-28",
    "/contact": "2026-03-28",
    "/glossary": "2026-04-01",
    "/security": "2026-04-02",
    "/integrations": "2026-04-05",
    "/enterprise": "2026-04-05",
    "/case-studies": "2026-04-03",
  };

  function getLastModified(path: string): Date {
    /* Blog posts use their published date */
    const blogDate = blogDateMap.get(path);
    if (blogDate) return new Date(blogDate);
    /* Homepage gets the freshest date */
    if (path === "") return new Date("2026-04-08");
    /* Match category prefix */
    for (const [prefix, date] of Object.entries(categoryDates)) {
      if (path.startsWith(prefix)) return new Date(date);
    }
    /* Fallback for legal/misc pages */
    return new Date("2026-03-28");
  }

  return allPages.map((p) => ({
    url: `${base}${p.path}`,
    lastModified: getLastModified(p.path),
    changeFrequency: p.frequency,
    priority: p.priority,
    alternates: {
      languages: {
        "en": `${base}${p.path}`,
        "es": `${base}/es${p.path}`,
        "fr": `${base}/fr${p.path}`,
        "pt": `${base}/pt${p.path}`,
        "it": `${base}/it${p.path}`,
        "x-default": `${base}${p.path}`,
      },
    },
  }));
}
