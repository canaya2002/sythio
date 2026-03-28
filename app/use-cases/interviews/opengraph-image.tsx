export const dynamic = "force-dynamic";
import { generateOGImage, ogSize, ogContentType } from "../../lib/og-image";
export const size = ogSize;
export const contentType = ogContentType;
export default function Image() {
  return generateOGImage({
    badge: "Use Case",
    title: "AI Interview Transcription & Analysis",
    subtitle: "Transcribe interviews with speaker detection and key insights.",
  });
}
