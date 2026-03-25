import { buildMetadata } from "../../lib/metadata";
import { BreadcrumbSchema } from "../../components/json-ld";

export const metadata = buildMetadata({
  title: "Executive Reports from Audio — Professional Summaries for Stakeholders",
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
      {children}
    </>
  );
}
