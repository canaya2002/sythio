import { buildMetadata } from "../../lib/metadata";
import { BreadcrumbSchema, FAQSchema } from "../../components/json-ld";

export const metadata = buildMetadata({
  title: "AI Meeting Notes | Tasks & Action Items",
  description:
    "Turn meetings into structured output. Sythio generates summaries, tasks, and action plans from recordings with speaker detection. Try free.",
  path: "/use-cases/meetings",
  keywords: [
    "AI meeting notes",
    "meeting summary AI",
    "meeting action items",
    "automated meeting notes",
    "meeting transcription to tasks",
    "meeting follow-up AI",
  ],
});

export default function MeetingsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Use Cases", href: "/use-cases" },
          { name: "Meetings", href: "/use-cases/meetings" },
        ]}
      />
      <FAQSchema items={[
        { question: "How does Sythio generate meeting notes?", answer: "Sythio records or accepts uploaded meeting audio, then uses AI to analyze context, detect speakers, and generate structured outputs including summaries, tasks, action plans, and follow-up messages." },
        { question: "Can Sythio detect who said what in meetings?", answer: "Yes. Sythio's speaker detection automatically identifies different speakers and attributes statements, decisions, and action items to specific people." },
        { question: "Is Sythio free for meeting notes?", answer: "Yes. Sythio offers a free plan with 5 recordings per month. Premium ($15/month) includes unlimited recordings and all 9 output formats." },
      ]} />
      {children}
    </>
  );
}
