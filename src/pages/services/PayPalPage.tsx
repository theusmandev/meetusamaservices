import { DollarSign } from "lucide-react";
import { ServicePage } from "../../components/service-page";

export default function PayPalPage() {
  return (
    <ServicePage data={{
      eyebrow: "Service · Payments",
      title: "PayPal Business",
      gold: "Setup.",
      subtitle: "A verified PayPal Business account structured to actually work — with clean withdrawal and lower limitation risk.",
      icon: DollarSign,
      timeline: "3–7 business days",
      price: "5000 PKR",
      includes: [
        "Business account creation",
        "Entity linking (UK LTD / US LLC)",
        "Bank linking & verification",
        "Business profile setup",
        "Withdrawal configuration",
        "Limitation-prevention guidance",
      ],
      bullets: [
        "Accept payments from 200+ countries with buyer familiarity.",
        "Reduce the risk of holds and reserves with proper structuring.",
        "Ideal for digital products, services and eCommerce brands.",
      ],
      requirements: [
        "UK LTD or US LLC",
        "Business bank account",
        "UK / USA Phone Number",
      ],
    }} />
  );
}
