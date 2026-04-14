import { buildMetadata } from "../lib/metadata";
import { BreadcrumbSchema, ItemListSchema } from "../components/json-ld";

export const metadata = buildMetadata({
  title: "Compare Sythio — Best Voice Notes AI vs Otter, Fireflies & More",
  description:
    "See how Sythio, the best voice notes AI app, compares to Otter, Fireflies, tl;dv, Audiopen, and Notta. 9 structured outputs vs basic transcription.",
  path: "/compare",
  keywords: [
    "Sythio vs Otter",
    "Sythio vs Fireflies",
    "voice notes AI comparison",
    "AI voice notes comparison",
    "best AI meeting notes tool",
    "audio intelligence comparison",
    "best voice notes AI app",
    "voice notes app comparison 2026",
  ],
});

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Compare", href: "/compare" },
        ]}
      />
      <ItemListSchema
        name="Compare Sythio vs Competitors"
        description="See how Sythio's 9-output voice notes AI compares to Otter.ai, Fireflies.ai, tl;dv, AudioPen, and Notta."
        items={[
          { name: "Sythio vs Otter.ai", url: "/compare/otter", position: 1 },
          { name: "Sythio vs Fireflies.ai", url: "/compare/fireflies", position: 2 },
          { name: "Sythio vs tl;dv", url: "/compare/tldv", position: 3 },
          { name: "Sythio vs AudioPen", url: "/compare/audiopen", position: 4 },
          { name: "Sythio vs Notta", url: "/compare/notta", position: 5 },
        ]}
      />
      {children}
    </>
  );
}
