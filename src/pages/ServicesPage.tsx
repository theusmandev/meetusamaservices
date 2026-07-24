import { SEO } from "../components/SEO";
import { Link } from "react-router-dom";
import {
  Building2, Landmark, Wallet, CreditCard, DollarSign, Zap, ShoppingBag, Store, FileCheck2, ArrowRight, PauseCircle, Users,
} from "lucide-react";
import { PageHero, CTABand } from "../components/page-hero";
import { ScrollReveal } from "../components/ScrollReveal";
import { SERVICE_STATUS } from "../data/serviceStatus";

const services = [
  { icon: Building2, title: "UK LTD Registration", desc: "Full UK Limited company formation, HMRC compliance and address.", to: "/services/uk-ltd" },
  { icon: Landmark, title: "US LLC Registration", desc: "US LLC formation in Wyoming, Delaware or New Mexico with EIN.", to: "/services/us-llc" },
  { icon: Wallet, title: "Wise Business", desc: "Multi-currency Wise Business accounts with clean approval.", to: "/services/wise" },
  { icon: CreditCard, title: "Payoneer Business", desc: "Payoneer setup for freelancers and marketplace sellers.", to: "/services/payoneer" },
  { icon: DollarSign, title: "PayPal Business", desc: "Verified PayPal Business accounts that hold and withdraw.", to: "/services/paypal" },
  { icon: Zap, title: "Stripe Account", desc: "Stripe activation for SaaS, agencies and global operators.", to: "/services/stripe" },
  { icon: ShoppingBag, title: "Shopify Store Designing", desc: "End-to-end Shopify launch: theme, products, payments, shipping.", to: "/services/shopify" },
  { icon: Store, title: "TikTok Shop", desc: "TikTok Shop application, catalog upload, monetization.", to: "/services/tiktok-shop" },
  { icon: Users, title: "TikTok Agency Account", desc: "TikTok Agency account setup with secure balance protection — website required, no self top-up.", to: "/services/tiktok-agency-account" },
  { icon: FileCheck2, title: "Uk LTD Director Verification", desc: "KYC, KYB, address verification and platform re-verification.", to: "/services/uk-ltd-director-verification" },
];

export default function ServicesPage() {
  return (
    <>
      <SEO title="Our Services | Company Registration &amp; Payment Accounts — Meet Usama Services" description="From UK LTD and US LLC formation to Wise, Stripe, PayPal, and Shopify setup — explore our full range of global business consultancy services." />
      <>
      <PageHero
        eyebrow="Services"
        title={<>One team for every step of your <span className="text-gradient-gold">global setup.</span></>}
        subtitle="Company incorporation, payment accounts, and eCommerce launch — under one premium roof."
      />

      <section className="bg-background pt-20 pb-0 md:pt-28 md:pb-0">
        <div className="container-luxe grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, index) => {
            const paused = SERVICE_STATUS[s.title] === "paused";
            const Card = (
              <div className={`group relative h-full rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-[color:var(--gold)]/60 hover:shadow-[0_20px_45px_-20px_rgba(219,166,38,0.5)] ${paused ? "opacity-75" : ""}`}>
                {paused && (
                  <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full border border-border bg-muted px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                    <PauseCircle className="h-3 w-3" />
                    Temporarily Paused
                  </span>
                )}
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
    </>
  );
}
