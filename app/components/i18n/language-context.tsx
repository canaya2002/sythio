"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { type Locale, t } from "./translations";

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  s: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType>({
  locale: "en",
  setLocale: () => {},
  s: (key: string) => key,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    if (typeof window !== "undefined") {
      localStorage.setItem("sythio-locale", newLocale);
    }
  }, []);

  const s = useCallback(
    (key: string) => t[locale]?.[key] ?? t.en[key] ?? key,
    [locale]
  );

  return (
    <LanguageContext.Provider value={{ locale, setLocale, s }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
