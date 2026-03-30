"use client";

import { type ReactNode } from "react";
import { LanguageProvider } from "./i18n/language-context";
import Navbar from "./navbar";
import Footer from "./footer";
export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </LanguageProvider>
  );
}
