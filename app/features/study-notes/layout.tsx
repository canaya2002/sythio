import { seoMetadata } from "../../lib/metadata";
import { BreadcrumbSchema, HowToSchema, FAQSchema } from "../../components/json-ld";

export const generateMetadata = seoMetadata({
  title: "AI Study Notes from Lectures & Audio",
  description:
    "Turn lectures and recordings into organized notes with key concepts, definitions, and takeaways. Sythio helps you learn faster. Try free.",
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
      <FAQSchema items={[
        { question: "Can Sythio take notes from a recorded lecture?", answer: "Yes. Record your lecture directly in Sythio or upload a recording afterward. Sythio identifies key concepts, definitions, examples, and conclusions, then organizes everything into structured study notes." },
        { question: "Are Sythio study notes good for exam preparation?", answer: "Yes. Sythio extracts key concepts, terms, and takeaways in a format designed for review. Students use them as a study guide, a revision checklist, or a supplement to their own handwritten notes." },
        { question: "Does Sythio work with any subject or language?", answer: "Sythio supports lectures in multiple languages including English, Spanish, French, Portuguese, and Italian. It works across any subject — from STEM to humanities — as long as the content is spoken audio." },
      ]} />
      {children}
    </>
  );
}
