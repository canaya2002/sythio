import { buildMetadata } from "../../lib/metadata";
import { BreadcrumbSchema, HowToSchema } from "../../components/json-ld";

export const metadata = buildMetadata({
  title: "Auto-Draft Messages from Audio — AI Follow-Ups",
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
      <HowToSchema name="How to Auto-Draft Messages from Audio" description="Turn any conversation into a ready-to-send follow-up email or message." steps={[
        { name: "Record or Upload", text: "Record your meeting, client call, or conversation directly in Sythio, or upload an existing recording." },
        { name: "Sythio Drafts", text: "The conversation is analyzed for key outcomes, decisions, and next steps. A professional follow-up is drafted." },
        { name: "Review and Send", text: "Review the drafted message, make any personal adjustments, and send. Copy to clipboard or export to email." },
      ]} />
      {children}
    </>
  );
}
