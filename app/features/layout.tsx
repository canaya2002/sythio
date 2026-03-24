import { buildMetadata } from "../lib/metadata";

export const metadata = buildMetadata({
  title: "Features — AI Audio Summarizer & Speaker Detection",
  description:
    "Explore Sythio's features: AI-powered summaries, task extraction, action plans, speaker detection, clean text, executive reports, study notes, and more.",
  path: "/features",
  keywords: [
    "AI audio features",
    "voice note summarizer features",
    "speaker detection transcription",
    "audio to tasks",
    "audio to action plan",
    "meeting notes AI",
    "voice memo organizer",
  ],
});

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
