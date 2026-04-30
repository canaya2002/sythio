import { seoMetadata } from "../lib/metadata";
import { BreadcrumbSchema, FAQSchema } from "../components/json-ld";

export const generateMetadata = seoMetadata({
  title: "Audio to Tasks | Extract Action Items",
  description:
    "Convert recordings into actionable task lists. Sythio identifies commitments, assigns owners via speaker detection, and builds checklists. Try free.",
  path: "/audio-to-tasks",
  keywords: [
    "audio to tasks",
    "extract tasks from audio",
    "audio to action items",
    "convert recording to tasks",
    "meeting to task list",
    "audio task extraction",
  ],
});

export default function AudioToTasksLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Audio to Tasks", href: "/audio-to-tasks" },
        ]}
      />
      <FAQSchema items={[
        { question: "How does Sythio extract tasks from audio?", answer: "Sythio analyzes your recording for commitments, assignments, and action items. Every task is identified, described, and attributed to the right person when speaker detection is enabled." },
        { question: "Does Sythio assign tasks to specific people?", answer: "Yes, when speaker detection is on. Sythio identifies who volunteered for or was assigned each task and attributes it accordingly. You get a clear list of who owes what." },
        { question: "What types of recordings work for task extraction?", answer: "Any conversation where tasks or commitments are discussed: team meetings, project standups, one-on-ones, client calls, or planning sessions. Sythio identifies action items regardless of recording format." },
      ]} />
      {children}
    </>
  );
}
