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

  return allPages.map((p) => ({
    url: `${base}${p.path}`,
    lastModified: new Date("2026-03-26"),
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
