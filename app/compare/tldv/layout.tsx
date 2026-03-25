import { buildMetadata } from "../../lib/metadata";
import { BreadcrumbSchema } from "../../components/json-ld";

export const metadata = buildMetadata({
  title: "Sythio vs tl;dv — Multi-Output Audio vs Video Meeting Recorder",
  description:
    "Compare Sythio and tl;dv. tl;dv records and summarizes video meetings. Sythio transforms any audio into 9 structured outputs — summaries, tasks, action plans, reports, and more.",
  path: "/compare/tldv",
  keywords: [
    "Sythio vs tldv",
    "tl;dv alternative",
    "tl;dv vs Sythio",
    "better than tl;dv",
    "tl;dv alternative 2026",
  ],
});

export default function TldvCompareLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Compare", href: "/compare" },
          { name: "vs tl;dv", href: "/compare/tldv" },
        ]}
      />
      {children}
    </>
  );
}
