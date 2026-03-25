import { buildMetadata } from "../../lib/metadata";
import { BreadcrumbSchema } from "../../components/json-ld";

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
      {children}
    </>
  );
}
