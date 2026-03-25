import { buildMetadata } from "../../lib/metadata";
import { BreadcrumbSchema, HowToSchema } from "../../components/json-ld";

export const metadata = buildMetadata({
  title: "AI Speaker Detection — Know Who Said What in Every Recording",
  description:
    "Sythio automatically identifies speakers in your recordings. See who said what, assign tasks to the right person, and create speaker-aware summaries and follow-ups.",
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
      {children}
    </>
  );
}
