import { CreditCard } from "lucide-react";
import { ServicePage } from "../../components/service-page";

export default function PayoneerPage() {
  return (
    <ServicePage data={{
      eyebrow: "Service · Payments",
      title: "Payoneer",
      gold: "Consultancy.",
      subtitle: "A verified Payoneer account with local receiving accounts — for freelancers, Amazon, Upwork, Fiverr and beyond.",
      icon: CreditCard,
      timeline: "3–5 business days",
      price: "5000 PKR",
      includes: [
        "Account application prep",
        "KYC document review",
        "Business classification",
        "Verification follow-up",
        "USD / EUR / GBP receiving accounts",
        "Withdrawal setup guidance",
      ],
      bullets: [
        "Receive marketplace and client payments globally.",
        "Withdraw to your local bank in your local currency.",
        "Integrates with Amazon, Fiverr, Upwork, Airbnb, and more.",
      ],
      requirements: [
        "UK LTD or US LLC",
        "Passport / national ID / Driving License",
        "Director's Bank Statement",
        "Business Documents",
        "UK / USA Phone Number",
      ],
    }} />
  );
}
