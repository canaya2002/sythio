import { buildMetadata } from "../lib/metadata";
import { BreadcrumbSchema } from "../components/json-ld";

export const metadata = buildMetadata({
  title: "AI Audio Features | Summaries, Tasks & More",
  description:
    "Explore Sythio's 9 AI output formats: summaries, tasks, action plans, reports, study notes, and more — all from a single recording. Try free.",
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
