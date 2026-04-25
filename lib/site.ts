/**
 * Public site configuration (set in `.env.local` / Cloudflare env).
 * When Stripe URLs are unset, UI falls back to mailto for trust-safe checkout.
 */

const email = "ben@outmarketthem.com";

function strip(s: string | undefined): string | undefined {
  const t = s?.trim();
  return t ? t : undefined;
}

export const siteEmail = email;

export const formspreeFormId = strip(process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID);

export const formspreeAction = formspreeFormId
  ? `https://formspree.io/f/${formspreeFormId}`
  : null;

/** Stripe Payment Link or Checkout URL for $100 website deposit */
export const stripeWebsiteDepositUrl = strip(
  process.env.NEXT_PUBLIC_STRIPE_WEBSITE_DEPOSIT_URL
);

/** $100 deposit toward each rescue type (optional separate links) */
export const stripeRescueGoogleUrl = strip(
  process.env.NEXT_PUBLIC_STRIPE_RESCUE_GOOGLE_DEPOSIT_URL
);
export const stripeRescueMetaUrl = strip(
  process.env.NEXT_PUBLIC_STRIPE_RESCUE_META_DEPOSIT_URL
);
export const stripeRescueSeoUrl = strip(
  process.env.NEXT_PUBLIC_STRIPE_RESCUE_SEO_DEPOSIT_URL
);
export const stripeRescueBundleUrl = strip(
  process.env.NEXT_PUBLIC_STRIPE_RESCUE_BUNDLE_DEPOSIT_URL
);

/** Advisory membership (e.g. Stripe subscription link) */
export const stripeAdvisoryUrl = strip(
  process.env.NEXT_PUBLIC_STRIPE_ADVISORY_URL
);

export function mailtoHref(subject: string, body?: string): string {
  const q = new URLSearchParams({ subject });
  if (body) q.set("body", body);
  return `mailto:${email}?${q.toString()}`;
}

export function sameAsProfiles(): string[] {
  return [
    strip(process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN_URL),
    strip(process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE_URL),
    strip(process.env.NEXT_PUBLIC_SOCIAL_GBP_URL),
    strip(process.env.NEXT_PUBLIC_SOCIAL_X_URL),
  ].filter(Boolean) as string[];
}
