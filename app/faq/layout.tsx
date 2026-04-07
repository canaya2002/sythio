import { buildMetadata } from "../lib/metadata";
import { BreadcrumbSchema, FAQSchema } from "../components/json-ld";

export const metadata = buildMetadata({
  title: "FAQ | AI Voice Notes Questions Answered",
  description:
    "Answers to common questions about Sythio: how it works, speaker detection, output formats, audio privacy, pricing, supported formats, and more.",
  path: "/faq",
  keywords: [
    "Sythio FAQ",
    "AI voice notes questions",
    "speaker detection FAQ",
    "audio summarizer help",
    "voice notes app questions",
  ],
});

const faqItems = [
  {
    question: "What exactly is Sythio?",
    answer:
      "Sythio is an audio intelligence platform that transforms your recordings into structured, actionable output. Unlike simple transcription tools, Sythio understands context, detects speakers, and generates multiple output formats from a single recording — summaries, tasks, action plans, reports, messages, study notes, and more.",
  },
  {
    question: "How does speaker detection work?",
    answer:
      "Sythio automatically identifies when different people are speaking in a recording. It separates voices, attributes statements to the correct speaker, and uses that context to create smarter outputs — like assigning tasks to the person who volunteered, or noting who made a specific decision.",
  },
  {
    question: "What output modes are available?",
    answer:
      "Sythio offers 9 output modes: Summary, Key Points, Tasks, Action Plan, Clean Text, Executive Report, Ready-to-Send Message, Study Notes, and Ideas. You can generate any or all of these from the same recording.",
  },
  {
    question: "How is Sythio different from transcription services?",
    answer:
      "Transcription gives you a wall of text. Sythio goes far beyond that. It understands the meaning of conversations and transforms them into useful formats. Instead of reading through 45 minutes of transcript, you get a structured summary, a task list, and a follow-up message — all from the same audio.",
  },
  {
    question: "Is my audio data private and secure?",
    answer:
      "Absolutely. Your audio is processed to help you, never to train models or share with third parties. Audio data is encrypted in transit and at rest. You maintain full ownership of everything you record and generate.",
  },
  {
    question: "What audio formats does Sythio support?",
    answer:
      "Sythio supports all common audio formats including MP3, WAV, M4A, AAC, OGG, FLAC, and WebM. You can also record directly within the app.",
  },
  {
    question: "Can Sythio handle long recordings?",
    answer:
      "Yes. Sythio handles recordings from 30-second voice memos to multi-hour meetings. Premium and Enterprise plans include priority processing for faster results on longer files.",
  },
  {
    question: "What are the best use cases for Sythio?",
    answer:
      "Team meetings, client calls, brainstorming sessions, lectures and workshops, voice memos, and any situation where spoken information needs to become structured, shareable output.",
  },
  {
    question: "Can I export and share my outputs?",
    answer:
      "Yes. All outputs can be copied, exported as text, PDF, or Markdown, and shared directly. Premium and Enterprise plans unlock all export formats.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Sythio offers three plans: Free ($0/month) with 5 recordings and 3 output formats, Premium ($12/month) with unlimited recordings and all 9 output formats, and Enterprise with custom pricing for teams including API access and dedicated support. Start free with no credit card required.",
  },
];

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "FAQ", href: "/faq" },
        ]}
      />
      <FAQSchema items={faqItems} />
      {children}
    </>
  );
}
