export const dynamic = "force-dynamic";
import { generateOGImage, ogSize, ogContentType } from "../../lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOGImage({
    badge: "For Students",
    title: "Sythio for Students",
    subtitle: "Turn lectures into study notes, key points, and organized material automatically.",
  });
}
