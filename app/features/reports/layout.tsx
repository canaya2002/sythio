import { buildMetadata } from "../../lib/metadata";
import { BreadcrumbSchema, HowToSchema, FAQSchema } from "../../components/json-ld";

export const metadata = buildMetadata({
  title: "Executive Reports from Audio | AI Reports",
  description:
    "Generate executive-ready reports from any recording. Sythio delivers structured reports with decisions, recommendations, and next steps.",
  path: "/features/reports",
  keywords: [
    "audio to executive report",
    "AI meeting report",
    "generate report from recording",
    "executive summary from audio",
    "professional meeting report AI",
    "audio report generator",
  ],
});

export default function ReportsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Features", href: "/features" },
          { name: "Executive Reports", href: "/features/reports" },
        ]}
      />
      <HowToSchema name="How to Generate Executive Reports from Audio" description="Create professional, stakeholder-ready reports from any recording with Sythio." steps={[
        { name: "Record or Upload", text: "Capture a meeting, call, or presentation directly in Sythio, or upload an existing recording." },
        { name: "Sythio Analyzes", text: "The recording is processed for context, speaker identification, and content hierarchy. Key decisions and open items are identified." },
        { name: "Get Your Report", text: "Receive a structured, professional report you can share with stakeholders. Export as PDF or text." },
      ]} />
      <FAQSchema items={[
        { question: "What does an AI-generated executive report include?", answer: "Sythio reports include an executive summary, key findings, decisions made, open items, recommendations, and next steps. The format is professional and ready to share with leadership or clients." },
        { question: "Can Sythio generate reports from client calls?", answer: "Yes. Record or upload any client call and Sythio will produce a structured report covering discussion points, client requirements, agreed actions, and follow-up items." },
        { question: "How is a Sythio report different from a summary?", answer: "A summary is a concise overview of what was discussed. A report is a formal, structured document with sections for findings, decisions, recommendations, and next steps — designed for stakeholders who were not in the room." },
      ]} />
      {children}
    </>
  );
}
