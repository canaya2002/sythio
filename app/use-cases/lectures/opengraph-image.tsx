export const dynamic = "force-dynamic";
import { generateOGImage, ogSize, ogContentType } from "../../lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOGImage({
    badge: "Use Case",
    title: "Lectures to Study Notes",
    subtitle: "Record lectures. Get organized notes with key concepts and takeaways.",
  });
}
