import { buildMetadata } from "../../lib/metadata";
import { BreadcrumbSchema, HowToSchema, FAQSchema } from "../../components/json-ld";

export const metadata = buildMetadata({
  title: "Clean Text from Audio | Polished Output",
  description:
    "Turn messy audio into polished, readable text. Sythio removes filler words, corrects grammar, and delivers text you can publish or share.",
  path: "/features/clean-text",
  keywords: [
    "audio to clean text",
    "polish transcription",
    "clean text from voice",
    "remove filler words audio",
    "audio to readable text",
    "voice to polished text",
  ],
});

export default function CleanTextLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Features", href: "/features" },
          { name: "Clean Text", href: "/features/clean-text" },
        ]}
      />
      <HowToSchema name="How to Get Clean Text from Audio" description="Turn messy spoken audio into polished, readable text with Sythio." steps={[
        { name: "Record or Upload", text: "Capture your thoughts, dictate a memo, record a conversation, or upload any existing audio file." },
        { name: "Sythio Processes", text: "The audio is transcribed, then refined. Filler is removed, grammar is corrected, and the text is reorganized into a clean format." },
        { name: "Get Clean Text", text: "Receive polished text you can copy, export, or share. Use it as-is or as a starting point for longer documents." },
      ]} />
      <FAQSchema items={[
        { question: "Does Sythio remove filler words from audio?", answer: "Yes. Sythio removes ums, uhs, likes, repeated words, and false starts. The output is polished, grammatically correct text that preserves the original meaning without the verbal clutter." },
        { question: "Is clean text the same as a transcript?", answer: "No. A transcript is a verbatim record. Clean text is an edited, polished version that reads like written prose. Grammar is corrected, filler is removed, and the structure is improved for readability." },
        { question: "What can I do with Sythio's clean text output?", answer: "Use it as a starting draft for blog posts, emails, documentation, reports, or social media content. Many users dictate ideas and let Sythio turn them into publishable text." },
      ]} />
      {children}
    </>
  );
}
