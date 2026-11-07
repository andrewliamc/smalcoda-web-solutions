# Coaching page setup

`/coaching` is an unlisted, public page with `noindex, nofollow`. It is absent from all marketing navigation and the sitemap's explicit route list. It has its own visual layout; the rest of the site retains its existing layout.

## Configuration

Copy entries from `coaching.env.example` into `.env.local` (or your deployment environment). All entries are optional. Rebuild/redeploy after changing them; Next.js public environment values are captured at build time. Never enter API credentials or secret keys.

- `NEXT_PUBLIC_GOOGLE_BOOKING_15`: shareable appointment schedule URL for the free 15-minute call.
- `NEXT_PUBLIC_GOOGLE_BOOKING_30`: shareable appointment schedule URL for the free 30-minute consultation.
- `NEXT_PUBLIC_GOOGLE_BOOKING_COACHING`: shareable appointment schedule URL for the paid 60-minute Zoom session.
- `NEXT_PUBLIC_GOOGLE_BOOKING_CLIENT`: optional separately managed existing-client schedule.
- `NEXT_PUBLIC_STRIPE_PACKAGE_URL`: existing Stripe Payment Link for prepaid sessions.
- `NEXT_PUBLIC_STRIPE_SUBSCRIPTION_URL`: existing Stripe Payment Link for monthly coaching.
- `NEXT_PUBLIC_COACHING_SESSION_PRICE`, `NEXT_PUBLIC_COACHING_PACKAGE_PRICE`, `NEXT_PUBLIC_COACHING_SUBSCRIPTION_PRICE`: optional price display text, including currency and billing cadence. Match the actual checkout prices. When omitted, no price is invented.

In Google Calendar, copy the booking-page link from each appointment schedule's sharing controls. Use an HTTPS `calendar.app.google/...` or `calendar.google.com/calendar/.../appointments/...` link. Confirm durations, free versus paid status, timezone, and availability in Calendar. For the paid schedule, verify the existing Stripe connection and payment requirement. The page does not configure these settings.

Copy existing Stripe-hosted links from your Stripe dashboard for packages/monthly plans. Only HTTPS `buy.stripe.com` and `checkout.stripe.com` destinations are accepted. Provider hostnames must match exactly; credentials and nonstandard ports are rejected. Missing or invalid destinations show a clear email fallback. Contact goes to the existing `hello@smalcoda.studio` address, configurable centrally in `lib/coaching.ts`.

## Manual workflow

Google Calendar handles availability, checkout for individual paid sessions, and confirmations. Create and send each Zoom link manually before the appointment. Manage package balances, subscription entitlements, and associated scheduling separately; a Stripe payment does not reserve a session. Publish the cancellation policy in your provider booking configuration as appropriate; the website does not capture agreement for Google's flow.

The existing portrait is used. No separate personal-brand specification document was found in this checkout; the supplied project brief determines the page's visual treatment.

## Verification

Run `npm run lint`, `npx tsc --noEmit`, and `npm run build`, then `npm start`. Open `/coaching` at mobile (390px), tablet (768px), and desktop (1440px) widths. Check keyboard focus, hero section anchors, readable cards, no horizontal overflow, and the cancellation accordion. Follow a paid policy link to confirm its location is visible.

With variables empty, confirm every unavailable booking option offers email contact and explains the fallback. With your actual public links configured and rebuilt, inspect each destination and open the official provider page to verify the service, duration, price, currency, timezone, and availability. Stop before confirming an appointment or payment unless intentionally conducting your own controlled transaction. No real appointment or payment was made during implementation.

Check `/` retains its original header/footer and `/coaching` has only its own masthead/footer. Inspect `/coaching` HTML for `noindex, nofollow`. The existing `app/sitemap.ts` exposes `/sitemap.xml` using an explicit marketing route list that omits coaching. Sitemap behavior was left unchanged. `public/robots.txt` allows crawling so crawlers can read the noindex directive. Unlisted does not mean private, and search-engine removal is not guaranteed.

No commit, push, or deployment is performed by this implementation.

## Implementation verification results

- ESLint, TypeScript, production build, and diff whitespace checks pass.
- Local production HTTP checks: `/coaching`, `/`, and `/sitemap.xml` return 200. Coaching includes `noindex, nofollow` and omits the marketing navigation; home retains it; the sitemap omits coaching. All five unavailable service links render contact fallbacks.
- Browser preview service was unavailable. Responsive breakpoints were reviewed in CSS, but mobile/tablet/desktop visual and interactive checks remain manual.
- The existing ESLint configuration used ESLint 9 APIs with ESLint 8 installed. It was adapted using the installed FlatCompat API without changing dependencies.

## Current availability

The three supplied Google Calendar links are configured as defaults in `lib/coaching.ts`; their corresponding environment variables can override them. Coaching Packages and Monthly Coaching show “Details coming soon.” with no checkout links or prices. The retained Stripe configuration is reserved for a future launch and is not currently displayed.
