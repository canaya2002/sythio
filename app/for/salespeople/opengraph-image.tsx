export const dynamic = "force-dynamic";
import { generateOGImage, ogSize, ogContentType } from "../../lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOGImage({
    badge: "For Sales",
    title: "Sythio for Sales Teams",
    subtitle: "Capture every deal detail from calls automatically.",
  });
}
