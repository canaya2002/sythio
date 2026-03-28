import { buildMetadata } from "../lib/metadata";
import { BreadcrumbSchema, FAQSchema } from "../components/json-ld";

export const metadata = buildMetadata({
  title: "Audio to Clean Text | AI Transcription",
  description:
    "Turn any recording into clean, readable text. Sythio removes filler words, corrects grammar, and delivers polished prose. Try free.",
  path: "/audio-to-clean-text",
  keywords: [
    "audio to clean text",
    "convert audio to text",
    "audio to polished text",
    "clean up audio transcript",
    "recording to readable text",
    "voice recording to text",
    "audio transcription clean",
    "remove filler words audio",
  ],
});

export default function AudioToCleanTextLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Audio to Clean Text", href: "/audio-to-clean-text" },
        ]}
      />
      <FAQSchema items={[
        { question: "What does 'clean text' mean in Sythio?", answer: "Clean text removes filler words (um, uh, like), fixes grammar, and restructures spoken audio into polished, readable prose. It is not a raw transcript — it is text you can publish, share, or use in documents." },
        { question: "How is clean text different from a transcript?", answer: "A transcript is a word-for-word record of what was said, including hesitations and errors. Clean text is an edited, polished version that reads naturally while preserving the original meaning and key details." },
        { question: "Can I use Sythio's clean text for blog posts or reports?", answer: "Yes. Many users record voice memos and let Sythio convert them into clean text as a starting draft for articles, emails, reports, or documentation. The output is ready to edit or publish." },
      ]} />
      {children}
    </>
  );
}
