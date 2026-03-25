import { buildMetadata } from "../../lib/metadata";
import { BreadcrumbSchema } from "../../components/json-ld";

export const metadata = buildMetadata({
  title: "AI Study Notes from Audio — Organized Notes from Lectures & Recordings",
  description:
    "Turn lectures, classes, and study recordings into organized notes with key concepts, definitions, and takeaways. Sythio creates study-ready notes that help you learn faster.",
  path: "/features/study-notes",
  keywords: [
    "AI study notes",
    "lecture notes from audio",
    "study notes generator",
    "AI lecture summarizer",
    "audio to study notes",
    "automatic class notes",
  ],
});

export default function StudyNotesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Features", href: "/features" },
          { name: "Study Notes", href: "/features/study-notes" },
        ]}
      />
      {children}
    </>
  );
}
