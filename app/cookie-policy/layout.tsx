import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Understand how Sythio uses cookies and similar technologies. Learn about the types of cookies we use and how to manage your preferences.",
};

export default function CookiePolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
