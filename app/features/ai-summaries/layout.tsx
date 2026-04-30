import { seoMetadata } from "../../lib/metadata";
import { BreadcrumbSchema, HowToSchema, FAQSchema } from "../../components/json-ld";

export const generateMetadata = seoMetadata({
  title: "AI Audio Summaries | Any Recording",
  description:
    "Get concise, structured AI summaries from any audio recording. Sythio identifies key topics and context — not just shortened transcripts. Try free.",
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
      <FAQSchema items={[
        { question: "How accurate are Sythio's AI summaries?", answer: "Sythio's AI understands context, identifies key topics, and separates important information from filler. The result is a structured summary that captures decisions, action items, and key points — not just a shortened transcript." },
        { question: "What types of audio can Sythio summarize?", answer: "Sythio summarizes any audio: meetings, voice notes, lectures, client calls, brainstorming sessions, and more. Just record directly or upload an existing file." },
        { question: "How long does it take to get a summary?", answer: "Sythio generates summaries in seconds after processing your audio. Even long recordings are analyzed quickly so you can get back to work with structured output right away." },
      ]} />
      {children}
    </>
  );
}
