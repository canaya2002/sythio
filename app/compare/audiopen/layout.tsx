import { buildMetadata } from "../../lib/metadata";
import { BreadcrumbSchema } from "../../components/json-ld";

export const metadata = buildMetadata({
  title: "Sythio vs AudioPen — Multi-Output Transformation vs Voice-to-Text",
  description:
    "Compare Sythio and AudioPen. AudioPen converts voice to simple text notes. Sythio transforms audio into 9 structured outputs: summaries, tasks, action plans, reports, and more.",
  path: "/compare/audiopen",
  keywords: [
    "Sythio vs AudioPen",
    "AudioPen alternative",
    "AudioPen vs Sythio",
    "better than AudioPen",
    "AudioPen alternative 2026",
  ],
});

export default function AudioPenCompareLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Compare", href: "/compare" },
          { name: "vs AudioPen", href: "/compare/audiopen" },
        ]}
      />
      {children}
    </>
  );
}
