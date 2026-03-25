import { buildMetadata } from "../../lib/metadata";
import { BreadcrumbSchema } from "../../components/json-ld";

export const metadata = buildMetadata({
  title: "Sythio vs Fireflies.ai — Audio Intelligence vs Meeting Bot",
  description:
    "Compare Sythio and Fireflies.ai. Fireflies records and transcribes meetings. Sythio transforms any audio into 9 structured outputs — summaries, tasks, action plans, and more.",
  path: "/compare/fireflies",
  keywords: [
    "Sythio vs Fireflies",
    "Fireflies alternative",
    "Fireflies.ai vs Sythio",
    "better than Fireflies",
    "Fireflies.ai alternative 2026",
  ],
});

export default function FirefliesCompareLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Compare", href: "/compare" },
          { name: "vs Fireflies.ai", href: "/compare/fireflies" },
        ]}
      />
      {children}
    </>
  );
}
