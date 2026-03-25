import { buildMetadata } from "../../lib/metadata";
import { BreadcrumbSchema } from "../../components/json-ld";

export const metadata = buildMetadata({
  title: "Idea Capture from Audio — Organize Brainstorming Sessions Automatically",
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
      {children}
    </>
  );
}
