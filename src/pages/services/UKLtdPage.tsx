import { Building2 } from "lucide-react";
import { ServicePage } from "../../components/service-page";

export default function UKLtdPage() {
  return (
    <ServicePage data={{
      eyebrow: "Service · UK",
      title: "UK LTD",
      gold: "Registration.",
      subtitle: "A fully compliant UK Limited company, ready for banking, Stripe and international trade — usually within 48 hours.",
      icon: Building2,
      timeline: "24–48 hours",
      price: "5000 PKR",
      includes: [
        "Companies House filing",
        "Certificate of incorporation",
        "Memorandum & articles",
        "UK registered address (12 months)",
        "Share certificates",
        "HMRC UTR guidance",
      ],
      bullets: [
        "Access UK banking and Stripe UK acquiring for lower fees and higher approval rates.",
        "Establish credibility with UK and EU buyers, marketplaces and suppliers.",
        "Simple annual filing structure — perfect for freelancers and international founders.",
      ],
      requirements: [
        "Valid passport (any country)",
        "Proof of address (utility or bank statement)",
        "Preferred company name and business activity",
      ],
    }} />
  );
}
