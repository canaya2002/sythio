import { seoMetadata } from "../../lib/metadata";
import { BreadcrumbSchema, FAQSchema } from "../../components/json-ld";

export const generateMetadata = seoMetadata({
  title: "AI Client Call Notes & Follow-Ups",
  description:
    "Never lose client context. Sythio turns client calls into structured summaries, action items, and follow-up messages. Try free.",
  path: "/use-cases/client-calls",
  keywords: [
    "client call notes AI",
    "client call summary",
    "client meeting follow-up",
    "AI for client calls",
    "call notes automation",
    "client call transcription",
  ],
});

export default function ClientCallsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Use Cases", href: "/use-cases" },
          { name: "Client Calls", href: "/use-cases/client-calls" },
        ]}
      />
      <FAQSchema items={[
        { question: "How does Sythio help with client call follow-ups?", answer: "Sythio automatically generates follow-up messages, action items, and summaries from client call recordings. Speaker detection attributes decisions and commitments to specific participants." },
        { question: "Can Sythio identify who said what on a client call?", answer: "Yes. Sythio's speaker detection identifies different speakers and attributes statements, decisions, and action items to the correct person — no manual labeling required." },
        { question: "Is my client call data secure with Sythio?", answer: "Yes. Sythio processes audio securely and does not share your recordings or outputs with third parties. Your client conversations remain private and confidential." },
        { question: "What formats can I export client call notes in?", answer: "Sythio generates 9 output formats including summaries, tasks, action plans, reports, and follow-up messages. All outputs can be exported as PDF or text for sharing with your team or clients." },
      ]} />
      {children}
    </>
  );
}
