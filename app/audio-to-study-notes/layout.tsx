import { buildMetadata } from "../lib/metadata";
import { BreadcrumbSchema } from "../components/json-ld";

export const metadata = buildMetadata({
  title: "Audio to Study Notes — Convert Lectures and Recordings into Study Notes",
  description:
    "Turn any audio recording into organized study notes. Sythio analyzes lectures, workshops, and educational content, then delivers structured notes with key concepts, definitions, and takeaways.",
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
      {children}
    </>
  );
}
