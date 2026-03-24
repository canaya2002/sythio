import { buildMetadata } from "../lib/metadata";

export const metadata = buildMetadata({
  title: "Use Cases — Meetings, Voice Notes, Study & More",
  description:
    "Discover how professionals use Sythio for meeting notes, voice memos, brainstorming, client calls, study sessions, and follow-ups. Turn any audio into structured output.",
  path: "/use-cases",
  keywords: [
    "AI meeting notes",
    "voice notes for students",
    "client call transcription",
    "brainstorming audio app",
    "voice notes for professionals",
  ],
});

export default function UseCasesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
