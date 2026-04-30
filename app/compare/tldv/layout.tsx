import { seoMetadata } from "../../lib/metadata";
import { BreadcrumbSchema, FAQSchema } from "../../components/json-ld";

export const generateMetadata = seoMetadata({
  title: "Sythio vs tl;dv — 9 Outputs vs Video Recorder",
  description:
    "tl;dv records and summarizes video meetings. Sythio transforms any audio into 9 structured outputs. Compare features and pricing.",
  path: "/compare/tldv",
  keywords: [
    "Sythio vs tldv",
    "tl;dv alternative",
    "tl;dv vs Sythio",
    "better than tl;dv",
    "tl;dv alternative 2026",
  ],
});

export default function TldvCompareLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Compare", href: "/compare" },
          { name: "vs tl;dv", href: "/compare/tldv" },
        ]}
      />
      <FAQSchema items={[
        { question: "How is Sythio different from tl;dv?", answer: "tl;dv is a video meeting recorder that creates clips and summaries from Zoom and Teams calls. Sythio works with any audio source and generates 9 structured outputs: summaries, tasks, action plans, reports, key points, clean text, ideas, study notes, and messages." },
        { question: "Does Sythio work outside of video meetings like tl;dv?", answer: "Yes. Unlike tl;dv which focuses on video meetings, Sythio processes any audio: voice notes, phone calls, in-person meetings, lectures, podcasts, and more. Record directly or upload a file." },
        { question: "Is Sythio more affordable than tl;dv?", answer: "Sythio offers a free tier with 5 recordings per month and Premium at $15/month for unlimited recordings with all 9 output formats. tl;dv's paid plans start higher and focus primarily on meeting recording and transcription." },
      ]} />
      {children}
    </>
  );
}
