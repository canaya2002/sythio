import { buildMetadata } from "../lib/metadata";
import { BreadcrumbSchema } from "../components/json-ld";

export const metadata = buildMetadata({
  title: "Audio to Messages — Convert Recordings into Follow-Up Messages",
  description:
    "Turn any audio recording into ready-to-send follow-up messages. Sythio drafts professional emails and messages based on your conversation — with context, action items, and the right tone.",
  path: "/audio-to-messages",
  keywords: [
    "audio to messages",
    "convert audio to follow-up",
    "audio to email",
    "recording to follow-up message",
    "meeting follow-up generator",
    "audio to follow-up email",
    "voice recording to message",
  ],
});

export default function AudioToMessagesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Audio to Messages", href: "/audio-to-messages" },
        ]}
      />
      {children}
    </>
  );
}
