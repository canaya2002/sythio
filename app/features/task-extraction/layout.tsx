import { buildMetadata } from "../../lib/metadata";
import { BreadcrumbSchema, HowToSchema, FAQSchema } from "../../components/json-ld";

export const metadata = buildMetadata({
  title: "AI Task Extraction | Action Items",
  description:
    "Never lose an action item. Sythio extracts tasks with owners, deadlines, and context from any conversation. Audio to checklist in seconds.",
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
      <FAQSchema items={[
        { question: "How does Sythio extract tasks from conversations?", answer: "Sythio's AI listens for commitments, assignments, and deadlines in your audio. It identifies action items, assigns ownership based on speaker detection, and organizes them into a structured task list." },
        { question: "Can Sythio assign tasks to specific people?", answer: "Yes. With speaker detection, Sythio attributes tasks to the person who committed to them. Each task includes the owner, context from the conversation, and any mentioned deadlines." },
        { question: "Can I export tasks to my project management tool?", answer: "Yes. Sythio lets you export extracted tasks as text or PDF. You can copy structured task lists directly into tools like Notion, Asana, Trello, or any project management platform." },
      ]} />
      {children}
    </>
  );
}
