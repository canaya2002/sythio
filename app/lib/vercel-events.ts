/**
 * Vercel Analytics custom events for Sythio.
 *
 * All events fire via `track()` from @vercel/analytics and appear
 * in the Vercel dashboard under Events.
 *
 * Naming convention: snake_case, max 50 chars.
 * Properties: flat key-value pairs (string | number | boolean).
 */

import { track } from "@vercel/analytics";

/* ─── Conversion Events ─── */

/** User clicks any CTA that leads to sythio.app (sign-up / get started) */
export function trackCTAClick(cta: string, location: string) {
  track("cta_click", { cta, location });
}

/** User clicks a specific pricing plan CTA */
export function trackPricingPlanClick(plan: "free" | "premium" | "enterprise") {
  track("pricing_plan_click", { plan });
}

/** Contact form submitted successfully */
export function trackContactSubmit() {
  track("contact_form_submit");
}

/** Waitlist email submitted */
export function trackWaitlistSignup(variant: string) {
  track("waitlist_signup", { variant });
}

/* ─── Navigation Events ─── */

/** User clicks a navbar link */
export function trackNavClick(link: string) {
  track("nav_click", { link });
}

/** User clicks a footer link */
export function trackFooterClick(link: string) {
  track("footer_click", { link });
}

/* ─── Engagement Events ─── */

/** User expands a FAQ accordion item */
export function trackFAQExpand(question: string, location: string) {
  track("faq_expand", { question: question.slice(0, 80), location });
}

/** User changes language */
export function trackLanguageChange(from: string, to: string) {
  track("language_change", { from, to });
}

/** User skips the intro video */
export function trackVideoSkip() {
  track("video_skip");
}

/** Intro video plays to completion */
export function trackVideoComplete() {
  track("video_complete");
}

/** User clicks an output mode tab on the product/outcomes section */
export function trackOutputModeSelect(mode: string) {
  track("output_mode_select", { mode });
}

/** User clicks "Explore Product" (secondary CTA, internal navigation) */
export function trackExploreProduct(location: string) {
  track("explore_product", { location });
}

/** Blog post CTA clicked */
export function trackBlogCTAClick() {
  track("blog_cta_click");
}

/** External link to sythio.app clicked (catch-all for any outbound link) */
export function trackExternalLinkClick(destination: string, location: string) {
  track("external_link_click", { destination, location });
}
