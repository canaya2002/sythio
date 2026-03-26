import { buildMetadata } from "../../lib/metadata";
import { BreadcrumbSchema } from "../../components/json-ld";

export const metadata = buildMetadata({
  title: "Best Fireflies.ai Alternatives in 2026",
  description:
    "Looking for a Fireflies.ai alternative? Compare the top 5 alternatives to Fireflies.ai in 2026, including Sythio, Otter.ai, tl;dv, Notta, and AudioPen. Find the best fit for your workflow.",
  path: "/alternatives/fireflies",
  keywords: [
    "Fireflies.ai alternatives",
    "best Fireflies.ai alternative",
    "Fireflies.ai alternative 2026",
    "apps like Fireflies.ai",
  ],
});

export default function FirefliesAlternativesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Alternatives", href: "/alternatives/fireflies" },
          { name: "Fireflies.ai Alternatives", href: "/alternatives/fireflies" },
        ]}
      />
      {children}
    </>
  );
}
