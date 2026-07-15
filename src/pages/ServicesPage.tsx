import { Link } from "react-router-dom";
import {
  Building2, Landmark, Wallet, CreditCard, DollarSign, Zap, ShoppingBag, Store, FileCheck2, ArrowRight,
} from "lucide-react";
import { PageHero, CTABand } from "../components/page-hero";
import { ScrollReveal } from "../components/ScrollReveal";

const services = [
  { icon: Building2, title: "UK LTD Registration", desc: "Full UK Limited company formation, HMRC compliance and address.", to: "/services/uk-ltd" },
  { icon: Landmark, title: "US LLC Registration", desc: "US LLC formation in Wyoming, Delaware or New Mexico with EIN.", to: "/services/us-llc" },
  { icon: Wallet, title: "Wise Business Consultancy", desc: "Multi-currency Wise Business accounts with clean approval.", to: "/services/wise" },
  { icon: CreditCard, title: "Payoneer Consultancy", desc: "Payoneer setup for freelancers and marketplace sellers.", to: "/services/payoneer" },
  { icon: DollarSign, title: "PayPal Business Setup", desc: "Verified PayPal Business accounts that hold and withdraw.", to: "/services/paypal" },
  { icon: Zap, title: "Stripe Consultancy", desc: "Stripe activation for SaaS, agencies and global operators.", to: "/services/stripe" },
  { icon: ShoppingBag, title: "Shopify Store Setup", desc: "End-to-end Shopify launch: theme, products, payments, shipping.", to: "/services/shopify" },
  { icon: Store, title: "TikTok Shop Setup", desc: "TikTok Shop application, catalog upload, monetization." },
  { icon: FileCheck2, title: "Business Verification", desc: "KYC, KYB, address verification and platform re-verification." },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<>One team for every step of your <span className="text-gradient-gold">global setup.</span></>}
        subtitle="Company incorporation, payment accounts, and eCommerce launch — under one premium roof."
      />

      <section className="bg-background py-20 md:py-28">
        <div className="container-luxe grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, index) => {
            const Card = (
              <div className="group relative h-full rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-[color:var(--gold)]/60 hover:shadow-[0_20px_45px_-20px_rgba(219,166,38,0.5)]">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-[color:var(--gold)]/10 text-[color:var(--gold)] ring-1 ring-[color:var(--gold)]/30">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--gold)]">
                  Learn More <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </span>
              </div>
            );
            return (
              <ScrollReveal key={s.title} delay={(index % 3) * 100}>
                {s.to ? <Link to={s.to}>{Card}</Link> : <div>{Card}</div>}
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      <CTABand />
    </>
  );
}
