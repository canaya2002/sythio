import { generateOGImage, ogSize, ogContentType } from "../../lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOGImage({
    badge: "Use Case",
    title: "Turn Meetings into Action",
    subtitle: "Summaries, tasks, and decisions from every meeting. No more lost notes.",
  });
}
