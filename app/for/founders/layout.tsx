import { seoMetadata } from "../../lib/metadata";
import { BreadcrumbSchema, FAQSchema } from "../../components/json-ld";

export const generateMetadata = seoMetadata({
  title: "Sythio for Founders — Capture Every Decision",
  description:
    "Founders move fast. Sythio turns meetings and voice notes into summaries, action plans, and tasks — so nothing falls through the cracks.",
  path: "/for/founders",
  keywords: [
    "AI for founders",
    "startup meeting notes",
    "founder productivity tool",
    "AI voice notes for founders",
    "capture decisions from meetings",
    "founder audio intelligence",
  ],
});

export default function FoundersLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "For Founders", href: "/for/founders" },
        ]}
      />
      <FAQSchema items={[
        { question: "How does Sythio help founders stay organized?", answer: "Founders have back-to-back meetings and calls. Sythio captures every decision, task, and commitment from recordings and turns them into structured summaries, action plans, and task lists — so nothing gets lost in the chaos." },
        { question: "Can Sythio replace a note-taker for startup meetings?", answer: "Yes. Sythio records and processes meetings automatically, producing summaries, tasks, and action plans. Founders can stay focused on the conversation instead of taking notes." },
        { question: "Is Sythio useful for investor meetings and pitch prep?", answer: "Absolutely. Record investor calls to get structured summaries of feedback and follow-up items. Use voice notes to brainstorm pitch ideas and let Sythio organize them into clear, actionable plans." },
      ]} />
      {children}
    </>
  );
}
