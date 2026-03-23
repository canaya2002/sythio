import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Use Cases",
  description:
    "Discover how professionals, students, and teams use Sythio for AI meeting notes, client call transcription, brainstorming audio capture, voice notes for studying, follow-up tracking, and more. See real-world scenarios where Sythio turns audio into structured outcomes.",
  keywords: [
    "AI meeting notes",
    "voice notes for students",
    "client call transcription",
    "brainstorming audio app",
    "voice notes for professionals",
  ],
  openGraph: {
    title: "Use Cases | Sythio",
    description:
      "Discover how Sythio works for meetings, voice notes, brainstorming, client calls, studying, follow-ups, and more.",
    url: "https://sythio.com/use-cases",
    siteName: "Sythio",
    type: "website",
  },
};

export default function UseCasesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
