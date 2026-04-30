import { seoMetadata } from "../lib/metadata";
import { BreadcrumbSchema } from "../components/json-ld";

export const generateMetadata = seoMetadata({
  title: "Contact Us | Support & Partnerships",
  description:
    "Contact the Sythio team for support, partnerships, or press inquiries. We typically respond within 24 hours.",
  path: "/contact",
  keywords: [
    "contact Sythio",
    "Sythio support",
    "audio app support",
    "Sythio partnerships",
    "AI voice notes help",
    "Sythio help center",
    "audio intelligence support",
  ],
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ]}
      />
      {children}
    </>
  );
}
