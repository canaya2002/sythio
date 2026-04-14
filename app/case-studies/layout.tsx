import { buildMetadata } from "../lib/metadata";
import { BreadcrumbSchema, FAQSchema } from "../components/json-ld";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Case Studies | AI Audio in Action",
  description: "See how founders, consultants, sales teams, and students use Sythio to save hours and never lose important audio. Real results.",
  path: "/case-studies",
  keywords: ["AI voice notes case study", "Sythio reviews", "meeting notes success story", "audio AI results", "voice notes productivity"],
});

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Case Studies", href: "/case-studies" }]} />
      <FAQSchema items={[
        { question: "What types of professionals use Sythio?", answer: "Sythio is used by founders, project managers, students, salespeople, consultants, lawyers, and anyone who records meetings, voice notes, lectures, or calls. Each professional extracts different outputs depending on their needs." },
        { question: "How much time does Sythio save per week?", answer: "Users report saving 3-5 hours per week by eliminating manual note-taking, meeting summarization, and follow-up drafting. Sythio automates all of these from a single recording." },
        { question: "Can Sythio handle different types of audio?", answer: "Yes. Sythio works with meetings, voice notes, lectures, client calls, interviews, brainstorming sessions, and podcasts. It adapts its output to the type of content detected in the recording." },
      ]} />
      {children}
    </>
  );
}
