import { buildMetadata } from "../lib/metadata";
import { BreadcrumbSchema, FAQSchema } from "../components/json-ld";

export const metadata = buildMetadata({
  title: "Audio to Messages | AI Follow-Up Drafts",
  description:
    "Turn recordings into ready-to-send follow-up emails and messages with AI. Sythio drafts professional messages with context and action items. Try free.",
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
      <FAQSchema items={[
        { question: "What kind of messages does Sythio draft from audio?", answer: "Sythio generates professional follow-up emails and messages that include key decisions, action items, and next steps from your recording. The tone is polished and ready to send or customize." },
        { question: "Can Sythio draft follow-up emails from a meeting recording?", answer: "Yes. Record or upload your meeting and Sythio will draft a follow-up message summarizing what was discussed, who is responsible for what, and what happens next. Just review and send." },
        { question: "Does Sythio include action items in the drafted messages?", answer: "Yes. Sythio identifies commitments and tasks from the conversation and includes them in the follow-up draft, attributed to the right person when speaker detection is enabled." },
      ]} />
      {children}
    </>
  );
}
