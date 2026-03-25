import { buildMetadata } from "../../lib/metadata";
import { BreadcrumbSchema, HowToSchema } from "../../components/json-ld";

export const metadata = buildMetadata({
  title: "Clean Text from Audio — Polished, Readable Output from Voice",
  description:
    "Turn messy audio into polished, readable text. Sythio removes filler words, corrects grammar, adds structure, and delivers clean text you can publish, share, or archive.",
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
      {children}
    </>
  );
}
