import type { MetadataRoute } from "next";

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

    /* ─── Outcome / Transformation Pages ─── */
    { path: "/audio-to-summary", priority: 0.7, frequency: "weekly" },
    { path: "/audio-to-tasks", priority: 0.7, frequency: "weekly" },
    { path: "/audio-to-action-plan", priority: 0.7, frequency: "weekly" },

    /* ─── Comparison Pages ─── */
    { path: "/compare", priority: 0.7, frequency: "monthly" },
    { path: "/compare/otter", priority: 0.7, frequency: "monthly" },
    { path: "/compare/fireflies", priority: 0.7, frequency: "monthly" },
    { path: "/compare/tldv", priority: 0.7, frequency: "monthly" },

    /* ─── Audience Pages ─── */
    { path: "/for/students", priority: 0.7, frequency: "monthly" },
    { path: "/for/founders", priority: 0.7, frequency: "monthly" },
    { path: "/for/project-managers", priority: 0.7, frequency: "monthly" },

    /* ─── Info Pages ─── */
    { path: "/faq", priority: 0.7, frequency: "monthly" },
    { path: "/about", priority: 0.6, frequency: "monthly" },
    { path: "/contact", priority: 0.6, frequency: "monthly" },

    /* ─── Legal Pages ─── */
    { path: "/privacy-policy", priority: 0.3, frequency: "yearly" },
    { path: "/terms", priority: 0.3, frequency: "yearly" },
    { path: "/cookie-policy", priority: 0.3, frequency: "yearly" },
  ];

  const locales = ["es", "fr", "pt", "it"] as const;

  return pages.map((p) => ({
    url: `${base}${p.path}`,
    lastModified: new Date("2026-03-25"),
    changeFrequency: p.frequency,
    priority: p.priority,
    alternates: {
      languages: Object.fromEntries([
        ["en", `${base}${p.path}`],
        ...locales.map((l) => [l, `${base}/${l}${p.path}`]),
        ["x-default", `${base}${p.path}`],
      ]),
    },
  }));
}
