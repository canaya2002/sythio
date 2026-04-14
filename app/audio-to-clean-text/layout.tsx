import { buildMetadata } from "../lib/metadata";
import { BreadcrumbSchema, FAQSchema, HowToSchema } from "../components/json-ld";

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
      <HowToSchema
        name="How to convert audio to clean text with Sythio"
        description="Turn any recording into polished, readable text without filler words in three steps."
        totalTime="PT1M"
        steps={[
          { name: "Record or upload audio", text: "Record a voice memo, interview, or meeting in Sythio, or upload an existing audio file in any format." },
          { name: "AI cleans your transcript", text: "Sythio transcribes the audio, removes filler words, corrects grammar, and restructures sentences into natural, readable prose." },
          { name: "Get your clean text", text: "Receive polished, publish-ready text that preserves the original meaning. Use it for emails, documents, blog posts, or reports." },
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
