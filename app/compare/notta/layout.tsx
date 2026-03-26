import { buildMetadata } from "../../lib/metadata";
import { BreadcrumbSchema } from "../../components/json-ld";

export const metadata = buildMetadata({
  title: "Sythio vs Notta.ai — Multi-Output Transformation vs Multilingual Transcription",
  description:
    "Compare Sythio and Notta.ai. Notta focuses on multilingual transcription. Sythio transforms audio into 9 structured outputs: summaries, tasks, action plans, reports, and more.",
  path: "/compare/notta",
  keywords: [
    "Sythio vs Notta",
    "Notta alternative",
    "Notta.ai vs Sythio",
    "better than Notta",
    "Notta.ai alternative 2026",
  ],
});

export default function NottaCompareLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Compare", href: "/compare" },
          { name: "vs Notta.ai", href: "/compare/notta" },
        ]}
      />
      {children}
    </>
  );
}
