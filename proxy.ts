import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const LOCALE_PREFIXES = ["es", "fr", "pt", "it"];
const COOKIE_NAME = "NEXT_LOCALE";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static files, API routes, _next
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") // static files
  ) {
    return NextResponse.next();
  }

  // Check if path starts with a locale prefix
  const matchedLocale = LOCALE_PREFIXES.find(
    (locale) =>
      pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (matchedLocale) {
    // Strip locale prefix and rewrite to base path
    const strippedPath =
      pathname.replace(`/${matchedLocale}`, "") || "/";
    const url = request.nextUrl.clone();
    url.pathname = strippedPath;

    // Pass locale to server components via request headers
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-locale", matchedLocale);

    const response = NextResponse.rewrite(url, {
      request: { headers: requestHeaders },
    });

    // Set locale cookie so browser remembers the preference
    response.cookies.set(COOKIE_NAME, matchedLocale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365, // 1 year
      sameSite: "lax",
    });

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico, sitemap.xml, robots.txt
     */
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
