import { buildMetadata } from "../lib/metadata";
import { BreadcrumbSchema } from "../components/json-ld";

export const metadata = buildMetadata({
  title: "Use Cases — AI Notes for Meetings, Voice Memos, Lectures & More",
  description:
    "Discover how Sythio transforms audio into structured output for meetings, voice notes, brainstorming, client calls, lectures, and follow-ups. Real use cases with real outputs.",
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
