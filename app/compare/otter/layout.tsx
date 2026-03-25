import { buildMetadata } from "../../lib/metadata";
import { BreadcrumbSchema } from "../../components/json-ld";

export const metadata = buildMetadata({
  title: "Sythio vs Otter.ai — Multi-Output vs Transcription",
  description:
    "Compare Sythio and Otter.ai. Otter focuses on transcription. Sythio transforms audio into 9 structured outputs: summaries, tasks, action plans, reports, and more.",
  path: "/compare/otter",
  keywords: [
    "Sythio vs Otter",
    "Otter alternative",
    "Otter.ai vs Sythio",
    "better than Otter",
    "Otter.ai alternative 2026",
  ],
});

export default function OtterCompareLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Compare", href: "/compare" },
          { name: "vs Otter.ai", href: "/compare/otter" },
        ]}
      />
      {children}
    </>
  );
}
