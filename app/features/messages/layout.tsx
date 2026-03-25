import { buildMetadata } from "../../lib/metadata";
import { BreadcrumbSchema } from "../../components/json-ld";

export const metadata = buildMetadata({
  title: "Auto-Draft Messages from Audio — Follow-Up Emails & Recaps from Conversations",
  description:
    "Turn any conversation into a ready-to-send follow-up email or message. Sythio drafts professional recaps, thank-you notes, and action summaries directly from your recordings.",
  path: "/features/messages",
  keywords: [
    "auto draft email from meeting",
    "AI follow-up message",
    "meeting recap email generator",
    "audio to email draft",
    "AI message from conversation",
    "automatic follow-up from recording",
  ],
});

export default function MessagesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Features", href: "/features" },
          { name: "Messages", href: "/features/messages" },
        ]}
      />
      {children}
    </>
  );
}
