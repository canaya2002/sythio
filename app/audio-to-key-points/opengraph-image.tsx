export const dynamic = "force-dynamic";
import { generateOGImage, ogSize, ogContentType } from "../lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOGImage({
    badge: "Audio to Key Points",
    title: "Audio to Key Points",
    subtitle: "Extract the most important takeaways from any recording.",
  });
}
