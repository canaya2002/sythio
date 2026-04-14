import { buildMetadata } from "../lib/metadata";
import { BreadcrumbSchema, ItemListSchema } from "../components/json-ld";

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
      <ItemListSchema
        name="Sythio Voice Notes AI Features"
        description="All 10 AI-powered features that transform audio recordings into structured, actionable output."
        items={[
          { name: "AI Summaries", url: "/features/ai-summaries", position: 1 },
          { name: "Speaker Detection", url: "/features/speaker-detection", position: 2 },
          { name: "Task Extraction", url: "/features/task-extraction", position: 3 },
          { name: "Action Plans", url: "/features/action-plans", position: 4 },
          { name: "Clean Text", url: "/features/clean-text", position: 5 },
          { name: "Executive Reports", url: "/features/reports", position: 6 },
          { name: "Study Notes", url: "/features/study-notes", position: 7 },
          { name: "Key Points", url: "/features/key-points", position: 8 },
          { name: "Ideas", url: "/features/ideas", position: 9 },
          { name: "Follow-up Messages", url: "/features/messages", position: 10 },
        ]}
      />
      {children}
    </>
  );
}
