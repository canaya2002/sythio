import { buildMetadata } from "../../lib/metadata";
import { BreadcrumbSchema } from "../../components/json-ld";

export const metadata = buildMetadata({
  title: "Key Points Extraction from Audio — Essential Takeaways in Seconds",
  description:
    "Extract the most important points from any recording. Sythio identifies key decisions, insights, and takeaways so you never miss what matters most.",
  path: "/features/key-points",
  keywords: [
    "key points from audio",
    "extract key points AI",
    "audio key takeaways",
    "meeting key points",
    "AI highlight extraction",
    "important points from recording",
  ],
});

export default function KeyPointsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Features", href: "/features" },
          { name: "Key Points", href: "/features/key-points" },
        ]}
      />
      {children}
    </>
  );
}
