import { buildMetadata } from "../../lib/metadata";
import { BreadcrumbSchema } from "../../components/json-ld";

export const metadata = buildMetadata({
  title: "AI Voice Notes — Turn Voice Memos into Structured, Usable Output",
  description:
    "Stop losing ideas to unplayed recordings. Sythio transforms voice notes into summaries, clean text, tasks, and organized ideas. Record once, get structured output.",
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
      {children}
    </>
  );
}
