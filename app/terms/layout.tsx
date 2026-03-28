import { buildMetadata } from "../lib/metadata";
import { BreadcrumbSchema } from "../components/json-ld";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description:
    "Read the terms and conditions governing your use of Sythio. Covers subscriptions, acceptable use, AI-generated outputs, intellectual property, and more.",
  path: "/terms",
  noIndex: true,
});

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Terms of Service", href: "/terms" },
        ]}
      />
      {children}
    </>
  );
}
