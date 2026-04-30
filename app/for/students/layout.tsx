import { seoMetadata } from "../../lib/metadata";
import { BreadcrumbSchema, FAQSchema } from "../../components/json-ld";

export const generateMetadata = seoMetadata({
  title: "AI for Students | Lecture & Study Notes",
  description:
    "Turn lectures into organized notes, key concepts, and summaries. Sythio helps students capture and review audio for better learning.",
  path: "/for/students",
  keywords: [
    "AI for students",
    "AI lecture notes",
    "student note taking AI",
    "study notes from audio",
    "AI study tool",
    "lecture summarizer for students",
  ],
});

export default function StudentsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "For Students", href: "/for/students" },
        ]}
      />
      <FAQSchema items={[
        { question: "Is Sythio free for students?", answer: "Sythio offers a free plan with 5 recordings per month, which many students find sufficient for key lectures. Premium at $15/month provides unlimited recordings and all output formats for heavy course loads." },
        { question: "Can Sythio record lectures and generate notes automatically?", answer: "Yes. Record lectures directly in Sythio on your phone or laptop. After class, you get organized study notes with key concepts, definitions, and takeaways — ready for review." },
        { question: "Does Sythio work for group study sessions?", answer: "Yes. Record group study sessions and Sythio will identify different speakers, capture all ideas discussed, and organize everything into structured notes. It works especially well for review sessions and study groups." },
      ]} />
      {children}
    </>
  );
}
