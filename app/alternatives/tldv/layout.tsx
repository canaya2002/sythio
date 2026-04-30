import { seoMetadata } from "../../lib/metadata";
import { BreadcrumbSchema, FAQSchema } from "../../components/json-ld";

export const generateMetadata = seoMetadata({
  title: "Best tl;dv Alternatives in 2026",
  description:
    "Compare the best tl;dv alternatives in 2026: Sythio, Otter.ai, Fireflies, Notta, and AudioPen. Find the right fit for your workflow.",
  path: "/alternatives/tldv",
  keywords: [
    "tl;dv alternatives",
    "best tl;dv alternative",
    "tl;dv alternative 2026",
    "apps like tl;dv",
  ],
});

export default function TldvAlternativesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Alternatives", href: "/alternatives/tldv" },
          { name: "tl;dv Alternatives", href: "/alternatives/tldv" },
        ]}
      />
      <FAQSchema items={[
        { question: "What is the best alternative to tl;dv in 2026?", answer: "Sythio is a top tl;dv alternative that works with any audio — not just video meetings. It generates 9 structured outputs from one recording, including action plans, task lists, and executive reports." },
        { question: "Which tl;dv alternatives work with audio beyond video calls?", answer: "Sythio processes any audio source: voice notes, phone calls, in-person meetings, lectures, and podcasts. Unlike tl;dv, which is focused on Zoom and Teams recordings, Sythio handles any audio format." },
        { question: "Do any tl;dv alternatives offer more output formats?", answer: "Yes. Sythio offers 9 output formats from a single recording: summaries, tasks, action plans, reports, key points, clean text, ideas, study notes, and follow-up messages. tl;dv primarily offers transcripts, summaries, and clips." },
      ]} />
      {children}
    </>
  );
}
