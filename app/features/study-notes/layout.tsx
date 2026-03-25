import { buildMetadata } from "../../lib/metadata";
import { BreadcrumbSchema, HowToSchema } from "../../components/json-ld";

export const metadata = buildMetadata({
  title: "AI Study Notes from Audio — Notes from Lectures",
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
      <HowToSchema name="How to Get Study Notes from Audio" description="Turn lectures and study recordings into organized notes with Sythio." steps={[
        { name: "Record Your Lecture", text: "Record directly in Sythio during class, or upload a recording afterward. Works with any lecture or study session." },
        { name: "Sythio Understands", text: "The audio is analyzed for educational content. Topics are identified, concepts are extracted, and material is organized." },
        { name: "Get Your Notes", text: "Receive organized study notes you can review immediately. Export them or combine with your own notes." },
      ]} />
      {children}
    </>
  );
}
