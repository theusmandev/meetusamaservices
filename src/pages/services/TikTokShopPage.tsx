import { SEO } from "../../components/SEO";
import { Store } from "lucide-react";
import { ServicePage } from "../../components/service-page";

export default function TikTokShopPage() {
  return (
    <>
      <SEO title="TikTok Shop | Meet Usama Services" description="TikTok Shop application, catalog upload, and monetization setup — done for you by our experts." />
      <ServicePage data={{
      eyebrow: "Service · eCommerce",
      title: "TikTok Shop",
      gold: "Setup.",
      subtitle: "Launch your TikTok Shop with proper Uk LTD Director Verification, catalog setup, and payment integration.",
      icon: Store,
      timeline: "3–7 business days",
      price: "20000 PKR",
      includes: [
        "TikTok Shop application submission",
        "Product catalog setup",
        "Business verification support",
        "Payment method configuration",
        "Shipping & fulfillment setup",
        "Post-approval optimization",
      ],
      bullets: [
        "Reach TikTok's massive engaged shopping audience directly through in-app storefronts.",
        "Get your products discovered through TikTok's algorithm-driven content and live selling features.",
        "Perfect for sellers looking to diversify beyond traditional marketplaces like Amazon and Shopify.",
      ],
      requirements: [
        "Registered business (UK LTD or US LLC)",
        "Business registration documents",
        "Product catalog/inventory details",
        "Valid ID and bank/payment account details",
      ],
    }} />
    </>
  );
}
