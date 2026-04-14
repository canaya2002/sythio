import { buildMetadata } from "../lib/metadata";
import { BreadcrumbSchema, FAQSchema, HowToSchema } from "../components/json-ld";

export const metadata = buildMetadata({
  title: "Audio to Study Notes | AI Lecture Notes",
  description:
    "Turn lectures and recordings into structured study notes with key concepts and takeaways. Sythio delivers organized notes instantly. Try free.",
  path: "/audio-to-study-notes",
  keywords: [
    "audio to study notes",
    "convert lecture to notes",
    "audio to notes",
    "lecture notes generator",
    "recording to study notes",
    "voice recording to notes",
    "audio study notes AI",
  ],
});

export default function AudioToStudyNotesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Audio to Study Notes", href: "/audio-to-study-notes" },
        ]}
      />
      <HowToSchema
        name="How to create study notes from audio with Sythio"
        description="Turn lectures and recordings into structured study notes in three steps."
        totalTime="PT1M"
        steps={[
          { name: "Record or upload your lecture", text: "Record a lecture, seminar, or study session directly in Sythio, or upload an existing recording in any audio format." },
          { name: "AI organizes your notes", text: "Sythio identifies key concepts, definitions, examples, and takeaways, then organizes them by topic into structured study material." },
          { name: "Get your study notes", text: "Receive organized, review-ready study notes with highlighted key terms. Export to combine with your own notes or share with classmates." },
        ]}
      />
      <FAQSchema items={[
        { question: "Can Sythio create study notes from a recorded lecture?", answer: "Yes. Record your lecture directly in Sythio or upload an existing recording. Sythio identifies key concepts, definitions, examples, and takeaways, then organizes them into structured study notes." },
        { question: "How are Sythio study notes organized?", answer: "Study notes are organized by topic and concept, with key terms highlighted and supporting details grouped logically. The structure follows the flow of the lecture while making review efficient." },
        { question: "Can I combine Sythio notes with my own handwritten notes?", answer: "Yes. Export your Sythio study notes as text and merge them with your own notes. Many students use Sythio as a backup to fill in gaps they missed during class." },
      ]} />
      {children}
    </>
  );
}
