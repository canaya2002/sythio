import { buildMetadata } from "../lib/metadata";
import { BreadcrumbSchema, FAQSchema, HowToSchema } from "../components/json-ld";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Audio to Transcript | Fast AI Speech to Text",
  description: "Convert audio to text with AI. Fast, accurate transcription with speaker detection. Then go beyond — get summaries, tasks, and more.",
  path: "/audio-to-transcript",
  keywords: ["speech to text", "audio to text", "transcribe audio", "voice to text", "audio transcription AI"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>
    <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Audio to Transcript", href: "/audio-to-transcript" }]} />
    <HowToSchema
      name="How to transcribe audio with Sythio"
      description="Convert any audio recording to accurate text with speaker detection in three steps."
      totalTime="PT1M"
      steps={[
        { name: "Record or upload audio", text: "Record a meeting, interview, or voice note in Sythio, or upload an existing file in MP3, WAV, M4A, or any common format." },
        { name: "AI transcribes with speaker detection", text: "Sythio processes the audio with advanced AI, identifies speakers, and produces an accurate transcript with speaker labels." },
        { name: "Get your transcript and more", text: "Receive your transcript with speaker attribution. Then go beyond — get summaries, tasks, action plans, and 6 more outputs from the same recording." },
      ]}
    />
    <FAQSchema items={[
      { question: "How accurate is Sythio's transcription?", answer: "Sythio uses advanced AI to deliver highly accurate transcription across accents, languages, and audio quality levels. Speaker detection identifies who said what throughout the recording." },
      { question: "What audio formats does Sythio support?", answer: "Sythio supports MP3, WAV, M4A, AAC, FLAC, OGG, and all common audio formats. Upload any recording and get a transcript in seconds." },
      { question: "Does Sythio do more than transcription?", answer: "Yes. Sythio goes beyond basic speech-to-text. From the same audio, you get transcripts plus summaries, tasks, action plans, key points, reports, messages, study notes, and ideas — 9 output formats total." },
    ]} />
    {children}
  </>;
}
