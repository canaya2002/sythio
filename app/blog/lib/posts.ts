export type BlogCategory = {
  name: string;
  slug: string;
  color: string;
};

export const categories: BlogCategory[] = [
  { name: "Tools & Reviews", slug: "tools-reviews", color: "#6366f1" },
  { name: "Productivity", slug: "productivity", color: "#059669" },
  { name: "Audio Intelligence", slug: "audio-intelligence", color: "#8b5cf6" },
  { name: "Technology", slug: "technology", color: "#0ea5e9" },
  { name: "Education", slug: "education", color: "#f97316" },
];

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readingTime: string;
  keywords: string[];
  featured?: boolean;
};

export const posts: BlogPost[] = [
  {
    slug: "best-ai-voice-notes-apps",
    title: "Best AI Voice Notes Apps in 2026",
    description:
      "A comprehensive comparison of the top AI-powered voice notes apps — from multi-output transformation to simple transcription.",
    category: "Tools & Reviews",
    date: "2026-03-20",
    readingTime: "8 min read",
    keywords: [
      "best AI voice notes apps",
      "voice recorder AI",
      "AI note taking app",
      "voice notes app comparison",
    ],
    featured: true,
  },
  {
    slug: "meeting-notes-ai",
    title: "How to Take Better Meeting Notes with AI",
    description:
      "Manual meeting notes fail. Here is how AI changes the game — and how to build a workflow that turns every meeting into structured, actionable output.",
    category: "Productivity",
    date: "2026-03-18",
    readingTime: "6 min read",
    keywords: [
      "meeting notes AI",
      "better meeting notes",
      "AI meeting assistant",
      "automatic meeting minutes",
    ],
  },
  {
    slug: "beyond-transcription",
    title: "Beyond Transcription: Why Your Audio Deserves More Than Text",
    description:
      "Transcription turns speech into text. But text alone misses the point. The future of audio processing is transformation — structured, actionable, multi-format output.",
    category: "Audio Intelligence",
    date: "2026-03-15",
    readingTime: "7 min read",
    keywords: [
      "audio transcription",
      "AI audio processing",
      "audio intelligence",
      "beyond transcription",
    ],
  },
  {
    slug: "voice-notes-vs-typed-notes",
    title: "Voice Notes vs Typed Notes: The Productivity Comparison",
    description:
      "Which is faster, more accurate, and more useful — voice notes or typed notes? We break down speed, context retention, and real-world productivity.",
    category: "Productivity",
    date: "2026-03-12",
    readingTime: "5 min read",
    keywords: [
      "voice notes productivity",
      "typing vs voice notes",
      "voice memo productivity",
      "best way to take notes",
    ],
  },
  {
    slug: "guide-audio-intelligence",
    title: "The Complete Guide to Audio Intelligence in 2026",
    description:
      "Audio intelligence goes beyond transcription. Learn what it is, how it works, and why it is reshaping how professionals work with spoken content.",
    category: "Audio Intelligence",
    date: "2026-03-10",
    readingTime: "9 min read",
    keywords: [
      "audio intelligence",
      "AI audio analysis",
      "audio AI tools",
      "speech analytics",
    ],
  },
  {
    slug: "speaker-detection-explained",
    title: "How Speaker Detection AI Actually Works",
    description:
      "Speaker detection identifies who said what in a recording. Here is how the technology works, why it matters, and what to expect from modern AI diarization.",
    category: "Technology",
    date: "2026-03-08",
    readingTime: "6 min read",
    keywords: [
      "speaker detection AI",
      "speaker diarization",
      "multi-speaker transcription",
      "voice identification",
    ],
  },
  {
    slug: "audio-to-action-plan",
    title: "Audio to Action Plan: The Missing Productivity Layer",
    description:
      "Most recordings end as forgotten files. Audio-to-action-plan workflows close the gap between capturing ideas and executing them.",
    category: "Productivity",
    date: "2026-03-05",
    readingTime: "5 min read",
    keywords: [
      "audio to action plan",
      "voice to action items",
      "meeting action items",
      "audio productivity",
    ],
  },
  {
    slug: "ai-lecture-notes-students",
    title: "How to Study Smarter with AI-Powered Lecture Notes",
    description:
      "Stop choosing between listening and writing. AI lecture notes let students stay present and still get structured, review-ready study material.",
    category: "Education",
    date: "2026-03-03",
    readingTime: "6 min read",
    keywords: [
      "AI lecture notes",
      "study with AI",
      "AI study tools",
      "student note taking app",
    ],
  },
  {
    slug: "meeting-recordings-unlistened",
    title: "Why Most Meeting Recordings Go Unlistened",
    description:
      "Your team records every call but nobody replays them. The problem is not the recording — it is what happens after. Here is how to rescue your audio archive.",
    category: "Productivity",
    date: "2026-02-28",
    readingTime: "5 min read",
    keywords: [
      "meeting recordings",
      "unlistened audio",
      "meeting productivity",
      "audio processing",
    ],
  },
  {
    slug: "otter-vs-fireflies",
    title: "Otter.ai vs Fireflies.ai: Complete Comparison for 2026",
    description:
      "Two of the most popular AI meeting tools go head-to-head. Features, pricing, strengths, and weaknesses — plus alternatives worth considering.",
    category: "Tools & Reviews",
    date: "2026-02-25",
    readingTime: "7 min read",
    keywords: [
      "Otter vs Fireflies",
      "AI meeting tools comparison",
      "best transcription app",
      "meeting notes software",
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return posts.map((p) => p.slug);
}

export function getCategoryColor(categoryName: string): string {
  return categories.find((c) => c.name === categoryName)?.color ?? "#6366f1";
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = getPost(slug);
  if (!current) return [];
  return posts
    .filter((p) => p.slug !== slug)
    .sort((a, b) => {
      const aMatch = a.category === current.category ? 2 : 0;
      const bMatch = b.category === current.category ? 2 : 0;
      return bMatch - aMatch;
    })
    .slice(0, limit);
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
