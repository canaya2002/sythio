import { buildMetadata } from "../../lib/metadata";
import { BreadcrumbSchema, HowToSchema } from "../../components/json-ld";

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
      <HowToSchema name="How to Extract Tasks from Audio" description="Automatically pull action items with owners and deadlines from conversations." steps={[
        { name: "Record or Upload", text: "Capture any conversation — meeting, call, brainstorm — or upload an existing recording." },
        { name: "Sythio Identifies Tasks", text: "The audio is analyzed for commitments, assignments, and deadlines. Every action item is identified with its owner." },
        { name: "Get Your Task List", text: "Receive a structured task list with clear ownership and timelines. Export to your project management tool or share with your team." },
      ]} />
      {children}
    </>
  );
}
