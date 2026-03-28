import { buildMetadata } from "../../lib/metadata";
import { BreadcrumbSchema, HowToSchema, FAQSchema } from "../../components/json-ld";

export const metadata = buildMetadata({
  title: "AI Speaker Detection | Who Said What",
  description:
    "Sythio automatically identifies speakers in your recordings. See who said what, assign tasks, and create speaker-aware summaries.",
  path: "/features/speaker-detection",
  keywords: [
    "speaker detection AI",
    "who said what audio",
    "multi-speaker transcription",
    "speaker identification",
    "speaker diarization",
    "identify speakers recording",
  ],
});

export default function SpeakerDetectionLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Features", href: "/features" },
          { name: "Speaker Detection", href: "/features/speaker-detection" },
        ]}
      />
      <HowToSchema name="How Speaker Detection Works in Sythio" description="Automatically identify who said what in any multi-speaker recording." steps={[
        { name: "Record a Conversation", text: "Record a meeting, call, or any multi-speaker audio directly in Sythio or upload an existing recording." },
        { name: "Automatic Detection", text: "Sythio identifies different speakers automatically — no setup required. Each voice is separated and labeled." },
        { name: "Speaker-Aware Output", text: "Get summaries, tasks, and reports organized by speaker. Rename speakers with real names for clearer attribution." },
      ]} />
      <FAQSchema items={[
        { question: "How many speakers can Sythio detect?", answer: "Sythio automatically detects and separates multiple speakers in a recording. It works with meetings, calls, and group conversations without any prior setup or speaker enrollment." },
        { question: "Do I need to train Sythio to recognize speakers?", answer: "No. Sythio's speaker detection works automatically — no training, enrollment, or labeling required. You can rename detected speakers with real names after processing for clearer attribution." },
        { question: "Does speaker detection work with uploaded recordings?", answer: "Yes. Speaker detection works with both live recordings made in Sythio and uploaded audio files. The AI analyzes voice patterns to separate and label different speakers." },
      ]} />
      {children}
    </>
  );
}
