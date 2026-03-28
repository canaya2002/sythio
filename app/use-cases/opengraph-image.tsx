export const dynamic = "force-dynamic";
import { generateOGImage, ogSize, ogContentType } from "../lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOGImage({
    badge: "Use Cases",
    title: "Works the Way You Work",
    subtitle: "From boardrooms to classrooms. Sythio transforms any audio into actionable output.",
  });
}
