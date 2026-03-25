import { buildMetadata } from "../../lib/metadata";
import { BreadcrumbSchema } from "../../components/json-ld";

export const metadata = buildMetadata({
  title: "AI Audio Summaries — Clear Overviews from Any Recording",
  description:
    "Get concise, structured summaries from audio recordings. Sythio understands context, identifies key topics, and creates summaries you can actually use — not just shortened transcripts.",
  path: "/features/ai-summaries",
  keywords: [
    "AI audio summary",
    "meeting summary AI",
    "audio summarizer",
    "voice note summary",
    "automatic audio summary",
    "AI summarize recording",
  ],
});

export default function AISummariesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Features", href: "/features" },
          { name: "AI Summaries", href: "/features/ai-summaries" },
        ]}
      />
      {children}
    </>
  );
}
