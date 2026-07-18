import { SEO } from "../../components/SEO";
import { Landmark } from "lucide-react";
import { ServicePage } from "../../components/service-page";

export default function USLlcPage() {
  return (
    <>
      <SEO title="US LLC Formation (Wyoming, Delaware, New Mexico) | Meet Usama Services" description="US LLC formation for non-residents with a matching EIN — fast, compliant, and built for global founders." />
      <ServicePage data={{
      eyebrow: "Service · US",
      title: "US LLC",
      gold: "Registration.",
      subtitle: "Form a US LLC as a non-resident. Full-service filing, EIN, and registered agent — ready for Stripe, PayPal and Amazon US.",
      icon: Landmark,
      timeline: "5–10 business days",
      price: "5000 PKR",
      includes: [
        "LLC formation (WY, DE or NM)",
        "EIN from the IRS",
        "Registered agent (12 months)",
        "Operating agreement",
        "US business address",
        "Mercury / Wise / Payoneer guidance",
      ],
      bullets: [
        "Sell into the US market with a locally recognized entity.",
        "Unlock Stripe US, PayPal US and Amazon.com seller central.",
        "Non-resident-friendly tax structure with clean bookkeeping.",
      ],
      requirements: [
        "Passport copy",
        "Proof of address",
        "Preferred company name and business activity",
      ],
    }} />
    </>
  );
}
