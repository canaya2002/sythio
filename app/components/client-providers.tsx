"use client";

import { type ReactNode } from "react";
import { LanguageProvider } from "./i18n/language-context";
import type { Locale } from "./i18n/translations";
import Navbar from "./navbar";
import Footer from "./footer";

export default function ClientProviders({
  children,
  initialLocale,
}: {
  children: ReactNode;
  initialLocale?: Locale;
}) {
  return (
    <LanguageProvider initialLocale={initialLocale}>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </LanguageProvider>
  );
}
