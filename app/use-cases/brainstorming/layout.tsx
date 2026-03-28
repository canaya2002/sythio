import { buildMetadata } from "../../lib/metadata";
import { BreadcrumbSchema, FAQSchema } from "../../components/json-ld";

export const metadata = buildMetadata({
  title: "AI Brainstorming Capture | Organize Ideas",
  description:
    "Brainstorm freely, get organized output. Sythio captures brainstorming sessions and transforms them into categorized ideas, action plans, and clear next steps.",
  path: "/use-cases/brainstorming",
  keywords: [
    "brainstorming capture tool",
    "AI brainstorming app",
    "brainstorm to action plan",
    "organize brainstorming ideas",
    "idea capture AI",
  ],
});

export default function BrainstormingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Use Cases", href: "/use-cases" },
          { name: "Brainstorming", href: "/use-cases/brainstorming" },
        ]}
      />
      <FAQSchema items={[
        { question: "How does Sythio capture brainstorming sessions?", answer: "Record your brainstorming session directly in Sythio or upload existing audio. Sythio's AI analyzes the conversation and organizes ideas into structured categories, action plans, and next steps." },
        { question: "Can Sythio organize ideas from a group brainstorm?", answer: "Yes. Sythio uses speaker detection to identify who contributed each idea, then categorizes and structures all ideas into clear, actionable output including summaries, tasks, and action plans." },
        { question: "What output formats does Sythio generate from brainstorming?", answer: "Sythio can generate summaries, key points, ideas lists, action plans, tasks, clean text, reports, study notes, and follow-up messages from a single brainstorming recording." },
      ]} />
      {children}
    </>
  );
}
