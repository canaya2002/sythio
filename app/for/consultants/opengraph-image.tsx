export const dynamic = "force-dynamic";
import { generateOGImage, ogSize, ogContentType } from "../../lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOGImage({
    badge: "For Consultants",
    title: "Sythio for Consultants",
    subtitle: "Turn client conversations into structured deliverables.",
  });
}
