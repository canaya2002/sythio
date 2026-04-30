import { seoMetadata } from "../lib/metadata";
import { BreadcrumbSchema } from "../components/json-ld";

export const generateMetadata = seoMetadata({
  title: "Use Cases | AI Notes for Meetings & More",
  description:
    "See how Sythio transforms audio into structured output for meetings, voice notes, client calls, and lectures. Real use cases, real outputs.",
  path: "/use-cases",
  keywords: [
    "AI meeting notes use cases",
    "voice notes for professionals",
    "client call transcription AI",
    "brainstorming audio capture",
    "lecture notes AI",
    "audio to action items",
  ],
});

export default function UseCasesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Use Cases", href: "/use-cases" },
        ]}
      />
      {children}
    </>
  );
}
