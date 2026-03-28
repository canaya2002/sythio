import { buildMetadata } from "../../lib/metadata";
import { BreadcrumbSchema, FAQSchema } from "../../components/json-ld";

export const metadata = buildMetadata({
  title: "AI for PMs | Meeting Notes & Action Items",
  description:
    "PMs live in meetings. Sythio turns every conversation into structured notes, task lists, and action plans — automatically.",
  path: "/for/project-managers",
  keywords: [
    "AI for project managers",
    "meeting notes for PMs",
    "project manager productivity",
    "AI action items from meetings",
    "PM meeting tool",
    "automated meeting follow-ups",
  ],
});

export default function ProjectManagersLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "For Project Managers", href: "/for/project-managers" },
        ]}
      />
      <FAQSchema items={[
        { question: "How does Sythio help project managers with meeting follow-ups?", answer: "Sythio automatically generates task lists, action plans, and follow-up messages from meeting recordings. PMs get structured outputs with owners and next steps — no manual note-taking required." },
        { question: "Can Sythio extract action items with owners from standups?", answer: "Yes. With speaker detection enabled, Sythio identifies who committed to each task and generates attributed task lists. This is ideal for daily standups, sprint planning, and retrospectives." },
        { question: "Does Sythio integrate with project management tools?", answer: "Sythio outputs can be exported and shared with tools like Notion, Slack, and Google Docs. Copy task lists directly into your PM tool or use exports to keep your project documentation up to date." },
      ]} />
      {children}
    </>
  );
}
