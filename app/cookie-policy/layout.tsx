import { buildMetadata } from "../lib/metadata";
import { BreadcrumbSchema } from "../components/json-ld";

export const metadata = buildMetadata({
  title: "Cookie Policy",
  description:
    "Understand how Sythio uses cookies and similar technologies. Learn about the types of cookies we use and how to manage your preferences.",
  path: "/cookie-policy",
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
