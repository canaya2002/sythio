import { buildMetadata } from "../../lib/metadata";
import { BreadcrumbSchema, FAQSchema } from "../../components/json-ld";

export const metadata = buildMetadata({
  title: "AI for Consultants | Reports & Plans",
  description:
    "Stop spending billable hours on documentation. Sythio turns client meetings into executive reports and action plans automatically.",
  path: "/for/consultants",
  keywords: [
    "AI for consultants",
    "consulting meeting notes AI",
    "client meeting documentation",
    "AI meeting reports",
    "consultant productivity tool",
    "automated meeting documentation",
    "AI for consulting firms",
    "client session notes AI",
  ],
});

export default function ConsultantsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "For Consultants", href: "/for/consultants" },
        ]}
      />
      <FAQSchema items={[
        { question: "How does Sythio help consultants save time on documentation?", answer: "Sythio automatically turns client meetings into executive reports, action plans, and follow-up messages. Consultants spend less time writing deliverables and more time on billable, high-value work." },
        { question: "Can Sythio generate client-ready reports from meetings?", answer: "Yes. Sythio produces structured executive reports with key findings, decisions, recommendations, and next steps. The output is professional and ready to share with clients or internal stakeholders." },
        { question: "Does Sythio work for in-person consulting sessions?", answer: "Yes. Record the session directly in Sythio on your phone or laptop. It processes any audio — in-person, over the phone, or virtual — and generates the same structured outputs." },
      ]} />
      {children}
    </>
  );
}
