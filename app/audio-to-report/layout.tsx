import { buildMetadata } from "../lib/metadata";
import { BreadcrumbSchema, FAQSchema } from "../components/json-ld";

export const metadata = buildMetadata({
  title: "Audio to Report | AI Executive Reports",
  description:
    "Transform any recording into a polished executive report with key findings, recommendations, and next steps. Try Sythio free — no credit card required.",
  path: "/audio-to-report",
  keywords: [
    "audio to report",
    "convert audio to report",
    "audio to executive report",
    "recording to report",
    "meeting report generator",
    "audio report generator",
    "voice recording to report",
  ],
});

export default function AudioToReportLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Audio to Report", href: "/audio-to-report" },
        ]}
      />
      <FAQSchema items={[
        { question: "What kind of reports does Sythio generate from audio?", answer: "Sythio generates executive-style reports with sections for key findings, decisions, discussion highlights, recommendations, and next steps. The format is professional and stakeholder-ready." },
        { question: "Can I generate a report from a meeting recording?", answer: "Yes. Upload or record any meeting, client call, or presentation and Sythio will produce a structured report you can share with leadership, clients, or your team." },
        { question: "Can I export Sythio reports as PDF?", answer: "Yes. Sythio lets you export generated reports as PDF or text files, making it easy to share via email, attach to project documentation, or archive for future reference." },
      ]} />
      {children}
    </>
  );
}
