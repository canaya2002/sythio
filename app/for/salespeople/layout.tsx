import { buildMetadata } from "../../lib/metadata";
import { BreadcrumbSchema } from "../../components/json-ld";

export const metadata = buildMetadata({
  title: "Sythio for Sales Teams — Call Summaries, Follow-Ups & CRM Notes",
  description:
    "Stop losing deals to forgotten follow-ups. Sythio turns sales calls into structured summaries, action items, follow-up drafts, and key points — so your pipeline stays moving.",
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
      {children}
    </>
  );
}
