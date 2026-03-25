import { buildMetadata } from "../../lib/metadata";
import { BreadcrumbSchema, HowToSchema } from "../../components/json-ld";

export const metadata = buildMetadata({
  title: "Idea Capture from Audio — AI Brainstorm Organizer",
  description:
    "Capture every idea from brainstorming sessions, voice memos, and creative conversations. Sythio groups ideas by theme, ranks them by potential, and makes them actionable.",
  path: "/features/ideas",
  keywords: [
    "capture ideas from audio",
    "brainstorming AI organizer",
    "idea extraction from recording",
    "AI brainstorm capture",
    "voice memo idea organizer",
    "creative session capture AI",
  ],
});

export default function IdeasLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Features", href: "/features" },
          { name: "Ideas", href: "/features/ideas" },
        ]}
      />
      <HowToSchema name="How to Capture Ideas from Audio" description="Capture every idea from brainstorming sessions and organize them automatically." steps={[
        { name: "Record Your Session", text: "Hit record during your brainstorming session, creative meeting, or solo idea dump." },
        { name: "Sythio Extracts", text: "Every distinct idea is identified, described, and categorized. Related concepts are linked." },
        { name: "Get Organized Ideas", text: "Receive a structured collection of all ideas. Share with your team or use as input for planning." },
      ]} />
      {children}
    </>
  );
}
