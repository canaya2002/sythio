import { seoMetadata } from "../lib/metadata";
import { BreadcrumbSchema, FAQSchema } from "../components/json-ld";

export const generateMetadata = seoMetadata({
  title: "Integrations — Connect Sythio to Your Workflow",
  description: "Export Sythio outputs to Notion, Slack, Google Docs, and more. Connect your audio intelligence to the tools you already use.",
  path: "/integrations",
  keywords: ["voice notes integration", "AI transcription Slack", "audio to Notion", "meeting notes Google Docs", "Zapier voice notes"],
});

export default function IntegrationsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Integrations", href: "/integrations" }]} />
      <FAQSchema items={[
        { question: "What tools does Sythio integrate with?", answer: "Sythio exports outputs to Notion, Slack, Google Docs, and more. You can copy structured outputs directly or use export options to send summaries, tasks, and reports to the tools your team already uses." },
        { question: "Does Sythio have an API for custom integrations?", answer: "Yes. Sythio offers API access on the Enterprise plan, allowing teams to build custom workflows and connect Sythio's audio intelligence directly into their existing systems and automation pipelines." },
        { question: "Can I send Sythio outputs to Slack or Notion automatically?", answer: "Yes. Sythio supports direct export to Slack and Notion. After processing a recording, you can push summaries, task lists, or action plans to your preferred workspace with one click." },
      ]} />
      {children}
    </>
  );
}
