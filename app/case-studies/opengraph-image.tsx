export const dynamic = "force-dynamic";
import { generateOGImage, ogSize, ogContentType } from "../lib/og-image";
export const size = ogSize;
export const contentType = ogContentType;
export default function Image() {
  return generateOGImage({
    badge: "Case Studies",
    title: "How Teams Use Sythio — Real Results",
    subtitle: "Founders, consultants, sales teams, and students share their results.",
  });
}
