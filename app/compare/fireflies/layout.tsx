import { buildMetadata } from "../../lib/metadata";
import { BreadcrumbSchema, FAQSchema } from "../../components/json-ld";

export const metadata = buildMetadata({
  title: "Sythio vs Fireflies.ai | Full Comparison",
  description:
    "Fireflies records and transcribes meetings. Sythio transforms audio into 9 structured outputs. Compare features and pricing.",
  path: "/compare/fireflies",
  keywords: [
    "Sythio vs Fireflies",
    "Fireflies alternative",
    "Fireflies.ai vs Sythio",
    "better than Fireflies",
    "Fireflies.ai alternative 2026",
  ],
});

export default function FirefliesCompareLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Compare", href: "/compare" },
          { name: "vs Fireflies.ai", href: "/compare/fireflies" },
        ]}
      />
      <FAQSchema items={[
        { question: "How does Sythio compare to Fireflies.ai?", answer: "Fireflies.ai is a meeting bot that records and transcribes meetings. Sythio works with any audio source and delivers 9 structured outputs — not just transcripts. You get summaries, tasks, action plans, reports, and more from a single recording." },
        { question: "Does Sythio require a meeting bot like Fireflies?", answer: "No. Sythio does not join meetings as a bot. You record directly in the app or upload audio files. This means it works with any audio — not just Zoom or Teams meetings." },
        { question: "Can Sythio replace Fireflies for meeting notes?", answer: "Yes. Sythio generates meeting summaries, task lists, action plans, and follow-up messages from meeting recordings. It offers more output formats than Fireflies at a lower price point." },
      ]} />
      {children}
    </>
  );
}
