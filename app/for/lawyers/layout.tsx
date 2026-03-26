import { buildMetadata } from "../../lib/metadata";
import { BreadcrumbSchema } from "../../components/json-ld";

export const metadata = buildMetadata({
  title: "Sythio for Legal Professionals — Case Notes, Key Points & Clean Records",
  description:
    "Stop spending billable hours transcribing consultations and depositions. Sythio turns legal conversations into structured case notes, key points, and clean records — automatically.",
  path: "/for/lawyers",
  keywords: [
    "AI for lawyers",
    "legal meeting notes AI",
    "deposition notes AI",
    "AI for legal professionals",
    "case notes from audio",
    "legal documentation tool",
    "AI client consultation notes",
    "law firm productivity AI",
  ],
});

export default function LawyersLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "For Lawyers", href: "/for/lawyers" },
        ]}
      />
      {children}
    </>
  );
}
