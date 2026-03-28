import { buildMetadata } from "../../lib/metadata";
import { BreadcrumbSchema, FAQSchema } from "../../components/json-ld";

export const metadata = buildMetadata({
  title: "AI Voice Notes | Output from Voice Memos",
  description:
    "Stop losing ideas to unplayed recordings. Sythio transforms voice notes into summaries, clean text, and tasks. Try free.",
  path: "/use-cases/voice-notes",
  keywords: [
    "AI voice notes",
    "smart voice memo app",
    "voice notes to text AI",
    "organize voice memos",
    "voice note summarizer",
    "voice to structured output",
  ],
});

export default function VoiceNotesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Use Cases", href: "/use-cases" },
          { name: "Voice Notes", href: "/use-cases/voice-notes" },
        ]}
      />
      <FAQSchema items={[
        { question: "How does Sythio turn voice notes into structured output?", answer: "Sythio processes your voice recordings with AI to produce summaries, clean text, tasks, ideas, and more. Just record or upload, and Sythio delivers organized output in seconds." },
        { question: "Can I use Sythio as a voice memo app?", answer: "Yes. Sythio works as a smart voice memo app that not only records but also transforms your memos into usable formats like summaries, action plans, and clean text." },
        { question: "Does Sythio work with voice notes in multiple languages?", answer: "Yes. Sythio supports English, Spanish, French, Portuguese, and Italian for voice note processing and structured output generation." },
      ]} />
      {children}
    </>
  );
}
