import { buildMetadata } from "../lib/metadata";
import { BreadcrumbSchema } from "../components/json-ld";

export const metadata = buildMetadata({
  title: "Audio to Ideas — Convert Brainstorms and Recordings into Organized Ideas",
  description:
    "Turn any audio recording into organized, grouped ideas. Sythio captures every idea from brainstorming sessions, conversations, and voice notes — then structures them by theme and priority.",
  path: "/audio-to-ideas",
  keywords: [
    "audio to ideas",
    "convert audio to ideas",
    "brainstorm to organized ideas",
    "recording to ideas",
    "voice note to ideas",
    "audio idea organizer",
    "capture ideas from audio",
  ],
});

export default function AudioToIdeasLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Audio to Ideas", href: "/audio-to-ideas" },
        ]}
      />
      {children}
    </>
  );
}
