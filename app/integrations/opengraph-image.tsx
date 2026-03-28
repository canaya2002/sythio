export const dynamic = "force-dynamic";
import { generateOGImage, ogSize, ogContentType } from "../lib/og-image";
export const size = ogSize;
export const contentType = ogContentType;
export default function Image() {
  return generateOGImage({
    badge: "Integrations",
    title: "Connect Sythio to Your Workflow",
    subtitle: "Notion, Slack, Google Docs, Zapier, API, and more.",
  });
}
