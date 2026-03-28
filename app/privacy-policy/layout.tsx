import { buildMetadata } from "../lib/metadata";
import { BreadcrumbSchema } from "../components/json-ld";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Learn how Sythio collects, uses, and protects your personal information. Our privacy policy covers audio data, transcripts, cookies, and your rights.",
  path: "/privacy-policy",
  noIndex: true,
});

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Privacy Policy", href: "/privacy-policy" },
        ]}
      />
      {children}
    </>
  );
}
