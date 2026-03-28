export const dynamic = "force-dynamic";
import { generateOGImage, ogSize, ogContentType } from "../lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOGImage({
    badge: "Glossary",
    title: "AI Audio & Voice Notes Glossary",
    subtitle: "Key terms in transcription, voice AI, and audio intelligence.",
  });
}
