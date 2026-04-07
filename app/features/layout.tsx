import { buildMetadata } from "../lib/metadata";
import { BreadcrumbSchema } from "../components/json-ld";

export const metadata = buildMetadata({
  title: "Voice Notes AI Features | 9 Output Formats from Audio",
  description:
    "Explore all Sythio voice notes AI features: summaries, tasks, action plans, speaker detection, reports, study notes, key points, ideas, and clean text from one recording.",
  path: "/features",
  keywords: [
    "voice notes AI features",
    "AI audio summarizer",
    "speaker detection transcription",
    "audio to tasks",
    "audio to action plan",
    "meeting notes AI features",
    "voice note organizer features",
    "audio to report",
    "AI study notes",
    "voice notes AI app features",
    "audio intelligence features",
    "AI key points extraction",
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
