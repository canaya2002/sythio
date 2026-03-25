import { buildMetadata } from "../../lib/metadata";
import { BreadcrumbSchema } from "../../components/json-ld";

export const metadata = buildMetadata({
  title: "Sythio for Students — AI Study Notes, Lecture Summaries & More",
  description:
    "Turn lectures and study sessions into organized notes, key concepts, and summaries. Sythio helps students capture, organize, and review audio content for better learning.",
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
      {children}
    </>
  );
}
