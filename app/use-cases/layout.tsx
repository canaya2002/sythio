import { buildMetadata } from "../lib/metadata";
import { BreadcrumbSchema, ItemListSchema } from "../components/json-ld";

export const metadata = buildMetadata({
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
      <ItemListSchema
        name="Sythio Use Cases"
        description="How professionals use Sythio to transform meetings, voice notes, lectures, and calls into structured output."
        items={[
          { name: "Meeting Notes", url: "/use-cases/meetings", position: 1 },
          { name: "Voice Notes", url: "/use-cases/voice-notes", position: 2 },
          { name: "Brainstorming Sessions", url: "/use-cases/brainstorming", position: 3 },
          { name: "Lectures", url: "/use-cases/lectures", position: 4 },
          { name: "Client Calls", url: "/use-cases/client-calls", position: 5 },
          { name: "Podcasts", url: "/use-cases/podcasts", position: 6 },
          { name: "Interviews", url: "/use-cases/interviews", position: 7 },
        ]}
      />
      {children}
    </>
  );
}
