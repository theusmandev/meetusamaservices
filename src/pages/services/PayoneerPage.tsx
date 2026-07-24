import { SEO } from "../../components/SEO";
import { CreditCard, CheckCircle2 } from "lucide-react";
import { ServicePage } from "../../components/service-page";

export default function PayoneerPage() {
  return (
    <>
      <SEO title="Payoneer Business Creation | Meet Usama Services" description="Payoneer account setup for freelancers and marketplace sellers, handled from application to approval." />
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
      notice: (
        <div className="flex items-start gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/8 px-4 py-3.5">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
          <p className="text-sm leading-relaxed text-muted-foreground">
            <strong className="text-foreground">Based in Pakistan and need a working USD receiving account?</strong>{" "}
            Payoneer Business is often the more reliable option compared to Wise for Pakistan-based
            founders.{" "}
            <a
              href="/blog/wise-usd-account-pakistan"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[color:var(--gold)] underline decoration-[color:var(--gold)]/40 underline-offset-2 transition hover:decoration-[color:var(--gold)]"
            >
              Learn why →
            </a>
          </p>
        </div>
      ),
    }} />
    </>
  );
}
