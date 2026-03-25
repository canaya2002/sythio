import { buildMetadata } from "../lib/metadata";
import { BreadcrumbSchema } from "../components/json-ld";

export const metadata = buildMetadata({
  title: "Contact Sythio — Support, Partnerships & Inquiries",
  description:
    "Get in touch with the Sythio team for support, partnerships, press, and general inquiries. Whether you need help with the audio app or want to explore partnerships, we typically respond within 24 hours.",
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
