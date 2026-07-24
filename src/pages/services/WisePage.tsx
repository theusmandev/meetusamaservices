import { SEO } from "../../components/SEO";
import { Wallet, AlertCircle } from "lucide-react";
import { ServicePage } from "../../components/service-page";

export default function WisePage() {
  return (
    <>
      <SEO title="Wise Business Account Setup | Meet Usama Services" description="Multi-currency Wise Business accounts with clean, reliable approval — set up end-to-end by our consultancy team." />
      <ServicePage data={{
      eyebrow: "Service · Payments",
      title: "Wise",
      gold: "Business.",
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
      notice: (
        <div className="flex items-start gap-3 rounded-xl border border-amber-500/30 bg-amber-500/8 px-4 py-3.5">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
          <p className="text-sm leading-relaxed text-muted-foreground">
            <strong className="text-foreground">Important for Pakistan-based clients:</strong>{" "}
            Wise does not provide USD account details to Pakistan-based users due to a residency
            restriction — even if you have a UK LTD or US LLC.{" "}
            <a
              href="/blog/wise-usd-account-pakistan"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[color:var(--gold)] underline decoration-[color:var(--gold)]/40 underline-offset-2 transition hover:decoration-[color:var(--gold)]"
            >
              Read why →
            </a>
          </p>
        </div>
      ),
    }} />
    </>
  );
}
