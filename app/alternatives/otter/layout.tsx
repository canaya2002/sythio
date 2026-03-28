import { buildMetadata } from "../../lib/metadata";
import { BreadcrumbSchema, FAQSchema } from "../../components/json-ld";

export const metadata = buildMetadata({
  title: "Best Otter.ai Alternatives in 2026",
  description:
    "Compare the best Otter.ai alternatives in 2026: Sythio, Fireflies, tl;dv, Notta, and AudioPen. Find the right fit for your workflow.",
  path: "/alternatives/otter",
  keywords: [
    "Otter.ai alternatives",
    "best Otter.ai alternative",
    "Otter.ai alternative 2026",
    "apps like Otter.ai",
  ],
});

export default function OtterAlternativesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Alternatives", href: "/alternatives/otter" },
          { name: "Otter.ai Alternatives", href: "/alternatives/otter" },
        ]}
      />
      <FAQSchema items={[
        { question: "What is the best alternative to Otter.ai in 2026?", answer: "Sythio is a top Otter.ai alternative that goes beyond transcription. It transforms audio into 9 structured outputs including summaries, tasks, action plans, reports, and follow-up messages — all from a single recording." },
        { question: "Why are people switching from Otter.ai?", answer: "Many users find Otter.ai limited to transcription and basic summaries. Alternatives like Sythio offer more output formats, better speaker attribution, and structured outputs that are ready to act on — not just read." },
        { question: "Which Otter.ai alternatives offer speaker detection?", answer: "Sythio, Fireflies, and tl;dv all offer speaker detection. Sythio stands out by attributing tasks and decisions to specific speakers across all 9 output formats, not just in the transcript." },
      ]} />
      {children}
    </>
  );
}
