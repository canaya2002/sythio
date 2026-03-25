import { generateOGImage, ogSize, ogContentType } from "../../lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOGImage({
    badge: "Feature",
    title: "Executive Reports from Audio",
    subtitle: "Professional, stakeholder-ready reports with decisions, risks, and recommendations.",
  });
}
