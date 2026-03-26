import { buildMetadata } from "../../lib/metadata";
import { BreadcrumbSchema } from "../../components/json-ld";

export const metadata = buildMetadata({
  title: "Best tl;dv Alternatives in 2026",
  description:
    "Looking for a tl;dv alternative? Compare the top 5 alternatives to tl;dv in 2026, including Sythio, Otter.ai, Fireflies, Notta, and AudioPen. Find the best fit for your workflow.",
  path: "/alternatives/tldv",
  keywords: [
    "tl;dv alternatives",
    "best tl;dv alternative",
    "tl;dv alternative 2026",
    "apps like tl;dv",
  ],
});

export default function TldvAlternativesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Alternatives", href: "/alternatives/tldv" },
          { name: "tl;dv Alternatives", href: "/alternatives/tldv" },
        ]}
      />
      {children}
    </>
  );
}
