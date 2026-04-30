import { seoMetadata } from "../../lib/metadata";
import { BreadcrumbSchema, FAQSchema } from "../../components/json-ld";

export const generateMetadata = seoMetadata({
  title: "Sythio vs Notta.ai — Outputs vs Transcription",
  description:
    "Sythio delivers 9 outputs from one recording; Notta stops at transcription. Compare features, pricing, and results. Try Sythio free.",
  path: "/compare/notta",
  keywords: [
    "Sythio vs Notta",
    "Notta alternative",
    "Notta.ai vs Sythio",
    "better than Notta",
    "Notta.ai alternative 2026",
  ],
});

export default function NottaCompareLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Compare", href: "/compare" },
          { name: "vs Notta.ai", href: "/compare/notta" },
        ]}
      />
      <FAQSchema items={[
        { question: "How does Sythio compare to Notta?", answer: "Notta focuses on transcription and basic summaries. Sythio delivers 9 structured outputs from a single recording: summaries, tasks, action plans, reports, key points, clean text, ideas, study notes, and follow-up messages." },
        { question: "Does Sythio offer more output formats than Notta?", answer: "Yes. Notta primarily produces transcripts and summaries. Sythio generates 9 distinct output formats from the same recording, including task lists with speaker attribution, structured action plans, and executive reports." },
        { question: "Can I switch from Notta to Sythio easily?", answer: "Yes. Sythio accepts uploaded audio files in any common format. If you have existing recordings, you can upload them to Sythio and get structured outputs immediately — no migration process needed." },
      ]} />
      {children}
    </>
  );
}
