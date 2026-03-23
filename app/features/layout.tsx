import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore Sythio's complete audio intelligence platform. From AI-powered summaries and task extraction to speaker detection transcription, action plans, clean text, executive reports, and voice memo organization — discover every feature that makes Sythio the smartest way to process audio.",
  keywords: [
    "AI audio features",
    "voice note summarizer features",
    "speaker detection transcription",
    "audio to tasks",
    "audio to action plan",
    "meeting notes AI",
    "voice memo organizer",
  ],
  openGraph: {
    title: "Features | Sythio",
    description:
      "Explore Sythio's complete audio intelligence platform. Summaries, tasks, action plans, speaker detection, clean text, executive reports, and more.",
    url: "https://sythio.com/features",
    siteName: "Sythio",
    type: "website",
  },
};

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
