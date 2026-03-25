import { buildMetadata } from "../lib/metadata";
import { BreadcrumbSchema } from "../components/json-ld";

export const metadata = buildMetadata({
  title: "Audio to Tasks — Extract Action Items from Any Recording",
  description:
    "Convert audio recordings into actionable task lists. Sythio identifies commitments, assigns owners via speaker detection, and creates ready-to-use checklists from conversations.",
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
      {children}
    </>
  );
}
