import { SEO } from "../../components/SEO";
import { Zap } from "lucide-react";
import { ServicePage } from "../../components/service-page";

export default function StripePage() {
  return (
    <>
      <SEO title="Stripe Approval for Non-US Founders | Meet Usama Services" description="Stripe activation for SaaS founders, agencies, and global operators — we handle the structuring and documentation." />
      <ServicePage data={{
      eyebrow: "Service · Payments",
      title: "Stripe",
      gold: "Account.",
      subtitle: "The exact documents, structuring and business-model framing needed to get Stripe approved and processing worldwide.",
      icon: Zap,
      timeline: "2–5 business days",
      price: "5000 PKR",
      includes: [
        "Application preparation",
        "Entity + Stripe alignment",
        "Business model description",
        "Website compliance review",
        "Bank + payout setup",
        "Verification response management",
        
      ],
      bullets: [
        "The lowest transaction fees for international card acquiring.",
        "Native support for subscriptions, invoices and marketplaces.",
        "Approved once, and structured to stay approved long-term.",
      ],
      requirements: [
        "UK LTD or US LLC",
        "Live business website with clear T&Cs and refund policy",
        "Business bank account",
        "UK / USA Phone Number"
      ],
    }} />
    </>
  );
}
