import { buildMetadata } from "../lib/metadata";
import { BreadcrumbSchema } from "../components/json-ld";

export const metadata = buildMetadata({
  title: "Compare Sythio vs Otter, Fireflies & More",
  description:
    "See how Sythio compares to Otter, Fireflies, tl;dv, and other tools. Sythio turns audio into 9 structured outputs — not just transcription.",
  path: "/compare",
  keywords: [
    "Sythio vs Otter",
    "Sythio vs Fireflies",
    "AI voice notes comparison",
    "best AI meeting notes tool",
    "audio intelligence comparison",
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
      {children}
    </>
  );
}
