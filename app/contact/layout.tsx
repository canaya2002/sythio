import { buildMetadata } from "../lib/metadata";
import { BreadcrumbSchema } from "../components/json-ld";

export const metadata = buildMetadata({
  title: "Contact Sythio — Support, Partnerships & Inquiries",
  description:
    "Get in touch with the Sythio team. Support, partnerships, press, and general inquiries. We typically respond within 24 hours.",
  path: "/contact",
  keywords: [
    "contact Sythio",
    "Sythio support",
    "Sythio partnerships",
    "AI voice notes help",
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
