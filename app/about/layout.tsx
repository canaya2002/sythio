import { seoMetadata } from "../lib/metadata";
import { BreadcrumbSchema, FAQSchema } from "../components/json-ld";

export const generateMetadata = seoMetadata({
  title: "About Us | Beyond Transcription",
  description:
    "Audio deserves transformation, not just transcription. Learn how Sythio turns every spoken word into clarity, structure, and action.",
  path: "/about",
  keywords: [
    "about Sythio",
    "AI audio company",
    "voice notes startup",
    "audio intelligence company",
    "AI audio intelligence company",
    "voice to structure mission",
    "audio transformation platform",
  ],
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
      />
      <FAQSchema items={[
        { question: "What is Sythio?", answer: "Sythio is an AI-powered audio intelligence platform that transforms recordings into structured outputs. From a single audio file, you get summaries, tasks, action plans, reports, key points, clean text, ideas, study notes, and follow-up messages." },
        { question: "Who is Sythio designed for?", answer: "Sythio is built for anyone who works with spoken information: founders, consultants, project managers, salespeople, lawyers, students, and teams. If you have meetings, calls, or voice notes, Sythio turns them into action." },
        { question: "How is Sythio different from a transcription app?", answer: "Transcription apps give you a word-for-word record. Sythio transforms audio into 9 structured outputs that are ready to use — summaries, task lists, action plans, reports, and more. It is audio intelligence, not just transcription." },
      ]} />
      {children}
    </>
  );
}
