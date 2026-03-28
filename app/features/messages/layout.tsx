import { buildMetadata } from "../../lib/metadata";
import { BreadcrumbSchema, HowToSchema, FAQSchema } from "../../components/json-ld";

export const metadata = buildMetadata({
  title: "Auto-Draft Messages | AI Follow-Ups",
  description:
    "Turn any conversation into a ready-to-send follow-up email. Sythio drafts professional recaps and action summaries from recordings.",
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
      <FAQSchema items={[
        { question: "What kind of follow-up messages does Sythio draft?", answer: "Sythio drafts professional follow-up emails and messages that recap key decisions, list action items with owners, and outline next steps. The tone is business-appropriate and ready to send or customize." },
        { question: "Can I customize the message before sending?", answer: "Yes. Sythio gives you a polished draft you can edit, adjust tone, add personal touches, or copy directly. It is a starting point that saves you the hardest part — writing from scratch." },
        { question: "Does Sythio include action items in follow-up messages?", answer: "Yes. When speaker detection is enabled, Sythio attributes tasks to specific people and includes them in the follow-up. Recipients see exactly what they committed to and what comes next." },
      ]} />
      {children}
    </>
  );
}
