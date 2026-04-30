import { seoMetadata } from "../lib/metadata";
import { BreadcrumbSchema } from "../components/json-ld";

export const generateMetadata = seoMetadata({
  title: "Case Studies | AI Audio in Action",
  description: "See how founders, consultants, sales teams, and students use Sythio to save hours and never lose important audio. Real results.",
  path: "/case-studies",
  keywords: ["AI voice notes case study", "Sythio reviews", "meeting notes success story", "audio AI results", "voice notes productivity"],
});

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Case Studies", href: "/case-studies" }]} />
      {children}
    </>
  );
}
