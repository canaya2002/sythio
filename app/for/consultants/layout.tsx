import { buildMetadata } from "../../lib/metadata";
import { BreadcrumbSchema } from "../../components/json-ld";

export const metadata = buildMetadata({
  title: "Sythio for Consultants — Meeting Reports, Action Plans & Documentation",
  description:
    "Stop spending billable hours on documentation. Sythio turns client meetings, workshops, and strategy sessions into executive reports, action plans, and clean documentation — automatically.",
  path: "/for/consultants",
  keywords: [
    "AI for consultants",
    "consulting meeting notes AI",
    "client meeting documentation",
    "AI meeting reports",
    "consultant productivity tool",
    "automated meeting documentation",
    "AI for consulting firms",
    "client session notes AI",
  ],
});

export default function ConsultantsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "For Consultants", href: "/for/consultants" },
        ]}
      />
      {children}
    </>
  );
}
