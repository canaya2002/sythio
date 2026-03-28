import { buildMetadata } from "../../lib/metadata";
import { BreadcrumbSchema, HowToSchema, FAQSchema } from "../../components/json-ld";

export const metadata = buildMetadata({
  title: "Idea Capture from Audio | AI Organizer",
  description:
    "Capture every idea from brainstorms and voice memos. Sythio groups ideas by theme, ranks by potential, and makes them actionable.",
  path: "/features/ideas",
  keywords: [
    "capture ideas from audio",
    "brainstorming AI organizer",
    "idea extraction from recording",
    "AI brainstorm capture",
    "voice memo idea organizer",
    "creative session capture AI",
  ],
});

export default function IdeasLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Features", href: "/features" },
          { name: "Ideas", href: "/features/ideas" },
        ]}
      />
      <HowToSchema name="How to Capture Ideas from Audio" description="Capture every idea from brainstorming sessions and organize them automatically." steps={[
        { name: "Record Your Session", text: "Hit record during your brainstorming session, creative meeting, or solo idea dump." },
        { name: "Sythio Extracts", text: "Every distinct idea is identified, described, and categorized. Related concepts are linked." },
        { name: "Get Organized Ideas", text: "Receive a structured collection of all ideas. Share with your team or use as input for planning." },
      ]} />
      <FAQSchema items={[
        { question: "How does Sythio capture ideas from brainstorming sessions?", answer: "Sythio listens to your recording and identifies every distinct idea mentioned. It extracts, describes, and groups related concepts by theme, giving you an organized collection instead of scattered notes." },
        { question: "Can Sythio organize ideas from a solo voice memo?", answer: "Yes. Record a stream-of-consciousness voice note and Sythio will extract individual ideas, group them by theme, and present them in a structured format — even if your thoughts jumped between topics." },
        { question: "Does Sythio rank ideas by importance?", answer: "Sythio groups ideas by theme and highlights which ones received the most discussion or emphasis. This helps you see which concepts your team gravitated toward and where to focus next." },
      ]} />
      {children}
    </>
  );
}
