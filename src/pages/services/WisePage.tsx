import { Wallet } from "lucide-react";
import { ServicePage } from "../../components/service-page";

export default function WisePage() {
  return (
    <ServicePage data={{
      eyebrow: "Service · Payments",
      title: "Wise Business",
      gold: "Consultancy.",
      subtitle: "A multi-currency Wise Business account — approved the first time, with the right structure for your entity and country.",
      icon: Wallet,
      timeline: "3–7 business days",
      price: "5000 PKR",
      includes: [
        "Application preparation",
        "Business activity classification",
        "Document review",
        "Verification support",
        "Multi-currency setup",
        "Post-approval optimization",
      ],
      bullets: [
        "Hold and convert 40+ currencies at real mid-market rates.",
        "Get local account details in USD, GBP, EUR, AUD and more.",
        "Perfect for freelancers, agencies and eCommerce sellers.",
      ],
      requirements: [
        "UK LTD or US LLC",
        "Registered company documents",
        "Director's passport & Bank Statement",
        "UK / USA Phone Number",
      ],
    }} />
  );
}
