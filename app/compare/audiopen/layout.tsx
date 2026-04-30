import { seoMetadata } from "../../lib/metadata";
import { BreadcrumbSchema, FAQSchema } from "../../components/json-ld";

export const generateMetadata = seoMetadata({
  title: "Sythio vs AudioPen | Full Comparison",
  description:
    "AudioPen converts voice to text notes. Sythio delivers 9 structured outputs from one recording. Compare features and pricing.",
  path: "/compare/audiopen",
  keywords: [
    "Sythio vs AudioPen",
    "AudioPen alternative",
    "AudioPen vs Sythio",
    "better than AudioPen",
    "AudioPen alternative 2026",
  ],
});

export default function AudioPenCompareLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Compare", href: "/compare" },
          { name: "vs AudioPen", href: "/compare/audiopen" },
        ]}
      />
      <FAQSchema items={[
        { question: "How is Sythio different from AudioPen?", answer: "AudioPen converts voice notes into written text. Sythio goes beyond text by generating 9 structured outputs from one recording: summaries, tasks, action plans, reports, key points, clean text, ideas, study notes, and follow-up messages." },
        { question: "Does Sythio have speaker detection unlike AudioPen?", answer: "Yes. Sythio includes speaker detection that identifies who said what and attributes tasks and decisions to specific people. AudioPen is designed for single-speaker voice notes and does not offer speaker identification." },
        { question: "Can Sythio handle meetings and calls unlike AudioPen?", answer: "Yes. While AudioPen is optimized for solo voice notes, Sythio handles multi-speaker audio including meetings, client calls, interviews, and group discussions with full speaker attribution." },
      ]} />
      {children}
    </>
  );
}
