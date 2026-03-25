import { buildMetadata } from "../../lib/metadata";
import { BreadcrumbSchema, HowToSchema } from "../../components/json-ld";

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
      <HowToSchema name="How to Get AI Summaries from Audio" description="Get concise, structured summaries from any audio recording with Sythio." steps={[
        { name: "Record or Upload", text: "Capture audio directly in Sythio or upload an existing recording. Meetings, voice notes, lectures — any audio works." },
        { name: "Sythio Analyzes", text: "The audio is processed in seconds. Sythio identifies speakers, understands context, separates topics, and determines what is most important." },
        { name: "Get Your Summary", text: "Receive a structured summary with key points, decisions, and context. Share it, export it, or use it as a starting point for action items." },
      ]} />
      {children}
    </>
  );
}
