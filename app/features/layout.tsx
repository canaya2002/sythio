import { buildMetadata } from "../lib/metadata";
import { BreadcrumbSchema } from "../components/json-ld";

export const metadata = buildMetadata({
  title: "Features — AI Summaries, Tasks, Speaker Detection & More",
  description:
    "Explore all Sythio features: AI-powered summaries, task extraction, action plans, speaker detection, clean text, executive reports, study notes, messages, and ideas. 9 output formats from a single recording.",
  path: "/features",
  keywords: [
    "AI audio summarizer",
    "speaker detection transcription",
    "audio to tasks",
    "audio to action plan",
    "meeting notes AI features",
    "voice note organizer features",
    "audio to report",
    "AI study notes",
  ],
});

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Features", href: "/features" },
        ]}
      />
      {children}
    </>
  );
}
