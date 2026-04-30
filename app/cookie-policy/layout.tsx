import { seoMetadata } from "../lib/metadata";
import { BreadcrumbSchema } from "../components/json-ld";

export const generateMetadata = seoMetadata({
  title: "Cookie Policy",
  description:
    "Understand how Sythio uses cookies and similar technologies. Learn about the types of cookies we use and how to manage your preferences.",
  path: "/cookie-policy",
  noIndex: true,
});

export default function CookiePolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Cookie Policy", href: "/cookie-policy" },
        ]}
      />
      {children}
    </>
  );
}
