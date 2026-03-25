import { buildMetadata } from "../../lib/metadata";
import { BreadcrumbSchema } from "../../components/json-ld";

export const metadata = buildMetadata({
  title: "AI Lecture Notes — Turn Lectures into Study Notes & Key Concepts",
  description:
    "Never miss a concept again. Sythio transforms lecture recordings into organized study notes, key points, summaries, and clean text. Built for students and lifelong learners.",
  path: "/use-cases/lectures",
  keywords: [
    "AI lecture notes",
    "lecture summary AI",
    "AI notes for students",
    "lecture to study notes",
    "automated lecture notes",
    "AI study tool",
  ],
});

export default function LecturesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Use Cases", href: "/use-cases" },
          { name: "Lectures", href: "/use-cases/lectures" },
        ]}
      />
      {children}
    </>
  );
}
