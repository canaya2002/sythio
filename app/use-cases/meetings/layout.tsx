import { buildMetadata } from "../../lib/metadata";
import { BreadcrumbSchema } from "../../components/json-ld";

export const metadata = buildMetadata({
  title: "AI Meeting Notes — Summaries, Tasks & Action Items from Any Meeting",
  description:
    "Turn meetings into structured output. Sythio generates summaries, tasks, action plans, and follow-up messages from meeting recordings. Speaker detection identifies who said what.",
  path: "/use-cases/meetings",
  keywords: [
    "AI meeting notes",
    "meeting summary AI",
    "meeting action items",
    "automated meeting notes",
    "meeting transcription to tasks",
    "meeting follow-up AI",
  ],
});

export default function MeetingsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Use Cases", href: "/use-cases" },
          { name: "Meetings", href: "/use-cases/meetings" },
        ]}
      />
      {children}
    </>
  );
}
