/** Public destinations only. Invalid or missing URLs intentionally use the contact fallback. */
export function approvedBookingUrl(value: string | undefined, provider: "google" | "stripe") {
  if (!value?.trim()) return undefined;
  try {
    const url = new URL(value.trim());
    if (url.protocol !== "https:" || url.username || url.password || url.port) return undefined;
    const google = (url.hostname === "calendar.google.com" && /^\/calendar\/(?:u\/\d+\/)?appointments\//.test(url.pathname)) ||
      (url.hostname === "calendar.app.google" && url.pathname.length > 1);
    const stripe = (url.hostname === "buy.stripe.com" || url.hostname === "checkout.stripe.com") && url.pathname.length > 1;
    return (provider === "google" ? google : stripe) ? url.href : undefined;
  } catch {
    return undefined;
  }
}

export const coaching = {
  contactEmail: "hello@smalcoda.studio",
  booking15: approvedBookingUrl(process.env.NEXT_PUBLIC_GOOGLE_BOOKING_15 || "https://calendar.app.google/Hw1c3tUtBQmHybz17", "google"),
  booking30: approvedBookingUrl(process.env.NEXT_PUBLIC_GOOGLE_BOOKING_30 || "https://calendar.app.google/dUEe7k1MFmbR3cXq9", "google"),
  bookingSession: approvedBookingUrl(process.env.NEXT_PUBLIC_GOOGLE_BOOKING_COACHING || "https://calendar.app.google/VdsEquhsraScNi9d6", "google"),
  bookingClient: approvedBookingUrl(process.env.NEXT_PUBLIC_GOOGLE_BOOKING_CLIENT, "google"),
  packageUrl: approvedBookingUrl(process.env.NEXT_PUBLIC_STRIPE_PACKAGE_URL, "stripe"),
  subscriptionUrl: approvedBookingUrl(process.env.NEXT_PUBLIC_STRIPE_SUBSCRIPTION_URL, "stripe"),
  // Optional display copy only; keep these aligned with the provider's actual price.
  sessionPrice: process.env.NEXT_PUBLIC_COACHING_SESSION_PRICE?.trim(),
  packagePrice: process.env.NEXT_PUBLIC_COACHING_PACKAGE_PRICE?.trim(),
  subscriptionPrice: process.env.NEXT_PUBLIC_COACHING_SUBSCRIPTION_PRICE?.trim(),
};
