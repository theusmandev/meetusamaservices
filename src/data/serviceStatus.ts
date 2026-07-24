/**
 * Service status registry.
 *
 * To pause a service: change its status from "active" to "paused".
 * To reactivate it: change it back to "active".
 *
 * Keys must match the title used in ServicesPage.tsx and the title+gold
 * combination rendered by each individual service page (trimmed, period removed).
 *
 * ⚠️  This is the SINGLE place to toggle any service's availability.
 *     No other code changes are needed — the grid card, detail page, and
 *     payment page all read from here automatically.
 */
export type ServiceStatus = "active" | "paused";

export const SERVICE_STATUS: Record<string, ServiceStatus> = {
  "UK LTD Registration": "active",
  "US LLC Registration": "paused",
  "Wise Business Consultancy": "active",
  "Payoneer Business Creation": "active",
  "PayPal Business Setup": "active",
  "Stripe Consultancy": "active",
  "Shopify Store Setup": "paused",
  "TikTok Shop Setup": "active",
  "TikTok Agency Account": "active",
  "Business Verification": "active",
};
