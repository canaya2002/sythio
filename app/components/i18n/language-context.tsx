"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { type Locale, t } from "./translations";

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  s: (key: string) => string;
  /** Returns a path with the current locale prefix. */
  localePath: (path: string) => string;
};

const LOCALE_PREFIXES: Locale[] = ["es", "fr", "pt", "it"];

function detectLocaleFromPath(pathname: string): Locale | null {
  const segment = pathname.split("/")[1];
  if (segment && LOCALE_PREFIXES.includes(segment as Locale)) {
    return segment as Locale;
  }
  return null;
}

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

function setCookie(name: string, value: string) {
  if (typeof document === "undefined") return;
  document.cookie = `${name}=${encodeURIComponent(value)};path=/;max-age=${60 * 60 * 24 * 365};samesite=lax`;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "en",
  setLocale: () => {},
  s: (key: string) => key,
  localePath: (path: string) => path,
});

export function LanguageProvider({
  children,
  initialLocale = "en",
}: {
  children: ReactNode;
  initialLocale?: Locale;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const [locale, setLocaleState] = useState<Locale>(() => {
    return initialLocale;
  });

  // Sync locale from URL path, cookie, or localStorage on mount
  useEffect(() => {
    const fromURL =
      typeof window !== "undefined"
        ? detectLocaleFromPath(window.location.pathname)
        : null;
    const fromCookie = getCookie("NEXT_LOCALE") as Locale | null;
    const fromStorage =
      typeof window !== "undefined"
        ? (localStorage.getItem("sythio-locale") as Locale | null)
        : null;

    const resolved = fromURL ?? fromCookie ?? fromStorage ?? "en";
    const validLocales: Locale[] = ["en", "es", "fr", "pt", "it"];
    const final = validLocales.includes(resolved) ? resolved : "en";

    setLocaleState(final);
    setCookie("NEXT_LOCALE", final);
    localStorage.setItem("sythio-locale", final);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const setLocale = useCallback(
    (newLocale: Locale) => {
      setLocaleState(newLocale);
      setCookie("NEXT_LOCALE", newLocale);
      if (typeof window !== "undefined") {
        localStorage.setItem("sythio-locale", newLocale);
      }

      // Update URL to reflect new locale
      if (typeof window !== "undefined") {
        const currentPath = window.location.pathname;
        const stripped = currentPath.replace(
          /^\/(es|fr|pt|it)(\/|$)/,
          "/"
        );
        const basePath = stripped === "" ? "/" : stripped;

        if (newLocale === "en") {
          router.push(basePath);
        } else {
          router.push(`/${newLocale}${basePath === "/" ? "" : basePath}`);
        }
      }
    },
    [router]
  );

  const s = useCallback(
    (key: string) => t[locale]?.[key] ?? t.en[key] ?? key,
    [locale]
  );

  const localePathFn = useCallback(
    (path: string) => {
      if (locale === "en") return path;
      return `/${locale}${path === "/" ? "" : path}`;
    },
    [locale]
  );

  return (
    <LanguageContext.Provider
      value={{ locale, setLocale, s, localePath: localePathFn }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
