import { generateOGImage, ogSize, ogContentType } from "../../lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOGImage({
    badge: "Use Case",
    title: "Client Calls, Fully Documented",
    subtitle: "Every client conversation captured with requirements, feedback, and follow-ups.",
  });
}
