import { buildMetadata } from "../../lib/metadata";
import { BreadcrumbSchema, FAQSchema } from "../../components/json-ld";

export const metadata = buildMetadata({
  title: "Sythio vs Otter.ai | Full Comparison",
  description:
    "Compare Sythio and Otter.ai. Otter focuses on transcription. Sythio transforms audio into 9 structured outputs: summaries, tasks, action plans, reports, and more.",
  path: "/compare/otter",
  keywords: [
    "Sythio vs Otter",
    "Otter alternative",
    "Otter.ai vs Sythio",
    "better than Otter",
    "Otter.ai alternative 2026",
  ],
});

export default function OtterCompareLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Compare", href: "/compare" },
          { name: "vs Otter.ai", href: "/compare/otter" },
        ]}
      />
      <FAQSchema items={[
        { question: "How is Sythio different from Otter.ai?", answer: "Otter.ai focuses primarily on transcription and basic summaries. Sythio goes further by transforming audio into 9 structured outputs: summaries, tasks, action plans, reports, key points, clean text, ideas, study notes, and follow-up messages." },
        { question: "Is Sythio cheaper than Otter.ai?", answer: "Sythio offers a free plan with 5 recordings per month and a Premium plan at $12/month for unlimited recordings with all 9 output formats. Otter's Pro plan starts at $16.99/month with fewer output options." },
        { question: "Does Sythio have speaker detection like Otter?", answer: "Yes. Sythio includes speaker detection that identifies who said what and attributes tasks, decisions, and commitments to specific speakers across all output formats." },
      ]} />
      {children}
    </>
  );
}
