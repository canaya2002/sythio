import { generateOGImage, ogSize, ogContentType } from "../../lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOGImage({
    badge: "Feature",
    title: "AI Study Notes from Audio",
    subtitle: "Organized notes from lectures with key concepts, definitions, and takeaways.",
  });
}
