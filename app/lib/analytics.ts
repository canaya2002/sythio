/**
 * Analytics utility for Sythio.
 *
 * Setup instructions:
 * 1. Create a Google Analytics 4 property at https://analytics.google.com
 * 2. Get the Measurement ID (format: G-XXXXXXXXXX)
 * 3. Set NEXT_PUBLIC_GA_MEASUREMENT_ID in your .env.local file
 * 4. Connect Google Search Console at https://search.google.com/search-console
 * 5. Link GA4 and Search Console in GA4 Admin > Product Links
 */

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";

export const isAnalyticsEnabled = (): boolean => {
  return (
    typeof window !== "undefined" &&
    GA_MEASUREMENT_ID.length > 0 &&
    GA_MEASUREMENT_ID.startsWith("G-")
  );
};

/* ─── Page view ─── */
export function trackPageView(url: string) {
  if (!isAnalyticsEnabled()) return;
  window.gtag?.("config", GA_MEASUREMENT_ID, { page_path: url });
}

/* ─── Custom events ─── */
type AnalyticsEvent = {
  action: string;
  category: string;
  label?: string;
  value?: number;
};

export function trackEvent({ action, category, label, value }: AnalyticsEvent) {
  if (!isAnalyticsEnabled()) return;
  window.gtag?.("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
}

/* ─── Pre-defined events for Sythio ─── */

export function trackCTAClick(ctaName: string, destination: string) {
  trackEvent({
    action: "cta_click",
    category: "conversion",
    label: `${ctaName} → ${destination}`,
  });
}

export function trackPricingView(tier: string) {
  trackEvent({
    action: "pricing_view",
    category: "conversion",
    label: tier,
  });
}

export function trackFeatureExplore(feature: string) {
  trackEvent({
    action: "feature_explore",
    category: "engagement",
    label: feature,
  });
}

export function trackContactSubmit() {
  trackEvent({
    action: "contact_submit",
    category: "conversion",
    label: "contact_form",
  });
}

export function trackComparisonView(competitor: string) {
  trackEvent({
    action: "comparison_view",
    category: "engagement",
    label: competitor,
  });
}

export function trackLanguageChange(locale: string) {
  trackEvent({
    action: "language_change",
    category: "engagement",
    label: locale,
  });
}

/* ─── TypeScript global type for gtag ─── */
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}
