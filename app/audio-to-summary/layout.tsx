import { seoMetadata } from "../lib/metadata";
import { BreadcrumbSchema, FAQSchema } from "../components/json-ld";

export const generateMetadata = seoMetadata({
  title: "Audio to Summary | AI Audio Summaries",
  description:
    "Turn any recording into a concise, structured summary. Sythio captures decisions, ideas, and next steps with AI. Try free — no credit card.",
  path: "/audio-to-summary",
  keywords: [
    "audio to summary",
    "convert audio to summary",
    "summarize audio recording",
    "audio summary generator",
    "recording to summary",
    "voice recording summary",
  ],
});

export default function AudioToSummaryLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Audio to Summary", href: "/audio-to-summary" },
        ]}
      />
      <FAQSchema items={[
        { question: "How does Sythio summarize audio recordings?", answer: "Sythio uses AI to analyze your recording for context, key topics, decisions, and action items. The result is a concise, structured summary — not a shortened transcript — that captures what actually matters." },
        { question: "How long does it take to get a summary from audio?", answer: "Sythio generates summaries in seconds after processing your audio. Even hour-long recordings produce a clear summary almost instantly." },
        { question: "What types of recordings can Sythio summarize?", answer: "Any audio: meetings, voice notes, lectures, interviews, client calls, brainstorming sessions, podcasts, and more. Record directly in Sythio or upload an existing file in any common audio format." },
      ]} />
      {children}
    </>
  );
}
