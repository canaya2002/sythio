import { buildMetadata } from "../../lib/metadata";
import { BreadcrumbSchema } from "../../components/json-ld";

export const metadata = buildMetadata({
  title: "AI Task Extraction — Action Items Automatically from Conversations",
  description:
    "Never lose an action item again. Sythio listens to conversations and extracts tasks with owners, deadlines, and context. From audio to checklist in seconds.",
  path: "/features/task-extraction",
  keywords: [
    "extract tasks from audio",
    "meeting action items AI",
    "automatic task extraction",
    "audio to task list",
    "conversation to tasks",
    "AI action items",
  ],
});

export default function TaskExtractionLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Features", href: "/features" },
          { name: "Task Extraction", href: "/features/task-extraction" },
        ]}
      />
      {children}
    </>
  );
}
