import { buildMetadata } from "../../lib/metadata";
import { BreadcrumbSchema, FAQSchema } from "../../components/json-ld";

export const metadata = buildMetadata({
  title: "AI for Sales | Call Summaries & Follow-Ups",
  description:
    "Stop losing deals to forgotten follow-ups. Sythio turns sales calls into summaries, action items, and follow-up drafts automatically.",
  path: "/for/salespeople",
  keywords: [
    "AI for sales teams",
    "sales call summary AI",
    "AI follow-up email after call",
    "CRM notes from calls",
    "sales meeting notes AI",
    "AI for salespeople",
    "call recording for sales",
    "sales productivity tool",
  ],
});

export default function SalespeopleLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "For Sales Teams", href: "/for/salespeople" },
        ]}
      />
      <FAQSchema items={[
        { question: "How does Sythio help sales teams close more deals?", answer: "Sythio turns every sales call into a structured summary, task list, and ready-to-send follow-up message. Reps never forget a commitment, and follow-ups go out while the conversation is still fresh." },
        { question: "Can Sythio generate follow-up emails after sales calls?", answer: "Yes. Sythio drafts professional follow-up messages that recap what was discussed, list next steps, and reference specific commitments. Just review, personalize if needed, and send." },
        { question: "Does Sythio help with CRM documentation?", answer: "Yes. Sythio's call summaries and task lists can be copied directly into your CRM. Speaker detection attributes key statements to the prospect, giving you accurate records without manual data entry." },
      ]} />
      {children}
    </>
  );
}
