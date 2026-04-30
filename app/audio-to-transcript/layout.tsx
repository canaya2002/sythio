import { seoMetadata } from "../lib/metadata";
import { BreadcrumbSchema, FAQSchema } from "../components/json-ld";

export const generateMetadata = seoMetadata({
  title: "Audio to Transcript | Fast AI Speech to Text",
  description: "Convert audio to text with AI. Fast, accurate transcription with speaker detection. Then go beyond — get summaries, tasks, and more.",
  path: "/audio-to-transcript",
  keywords: ["speech to text", "audio to text", "transcribe audio", "voice to text", "audio transcription AI"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>
    <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Audio to Transcript", href: "/audio-to-transcript" }]} />
    <FAQSchema items={[
      { question: "How accurate is Sythio's transcription?", answer: "Sythio uses advanced AI to deliver highly accurate transcription across accents, languages, and audio quality levels. Speaker detection identifies who said what throughout the recording." },
      { question: "What audio formats does Sythio support?", answer: "Sythio supports MP3, WAV, M4A, AAC, FLAC, OGG, and all common audio formats. Upload any recording and get a transcript in seconds." },
      { question: "Does Sythio do more than transcription?", answer: "Yes. Sythio goes beyond basic speech-to-text. From the same audio, you get transcripts plus summaries, tasks, action plans, key points, reports, messages, study notes, and ideas — 9 output formats total." },
    ]} />
    {children}
  </>;
}
