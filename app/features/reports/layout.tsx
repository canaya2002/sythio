import { buildMetadata } from "../../lib/metadata";
import { BreadcrumbSchema, HowToSchema } from "../../components/json-ld";

export const metadata = buildMetadata({
  title: "Executive Reports from Audio — AI Meeting Reports",
  description:
    "Generate executive-ready reports from any recording. Sythio transforms meetings, calls, and conversations into structured reports with decisions, risks, recommendations, and next steps.",
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
      {children}
    </>
  );
}
