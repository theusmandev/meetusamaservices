import { SEO } from "../components/SEO";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { ScrollReveal } from "../components/ScrollReveal";
import {
  Building2,
  Landmark,
  Wallet,
  CreditCard,
  ShoppingBag,
  Store,
  ShieldCheck,
  Sparkles,
  Globe2,
  Clock,
  Users,
  Award,
  ArrowRight,
  Check,
  Star,
  Zap,
  Lock,
  Headphones,
  Briefcase,
  Code2,
  GraduationCap,
  HeartPulse,
  Megaphone,
  DollarSign,
  Rocket,
  FileCheck2,
  Search,
  Plus,
  Minus,
  Quote,
  PauseCircle,
} from "lucide-react";
import { SERVICE_STATUS } from "../data/serviceStatus";
import { CTABand } from "../components/page-hero";

/* ---------- Reusable counter ---------- */
function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setInView(true), io.disconnect()),
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, inView };
}

function Counter({ to, suffix = "", duration = 1600 }: { to: number; suffix?: string; duration?: number }) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.floor(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);
  return <span ref={ref}>{n.toLocaleString()}{suffix}</span>;
}

/* ---------- Hero visual: dashboard mock ---------- */
function HeroDashboard() {
  const brands = [
   
    { name: "Wise", color: "#9FE870" },
    { name: "PayPal", color: "#0070BA" },
    { name: "Stripe", color: "#635BFF" },
    { name: "Payoneer", color: "#FF4800" },
     { name: "TapTap", color: "#95BF47" },
  ];
  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute -inset-6 rounded-[2rem] blur-2xl opacity-60"
        style={{ background: "radial-gradient(circle at 30% 30%, rgba(219,166,38,0.35), transparent 60%)" }}
      />
      <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-5 shadow-2xl backdrop-blur-xl md:p-6">
        {/* window bar */}
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          <div className="ml-3 flex-1 rounded-md bg-white/5 px-3 py-1 text-[11px] text-white/50">
            dashboard.meetusama.com
          </div>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-5">
          {/* Company card */}
          <div className="md:col-span-3 rounded-2xl border border-[color:var(--gold)]/20 bg-black/40 p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-widest text-white/50">Active Company</p>
                <p className="mt-1 font-display text-lg font-bold text-white">Famaplus Ltd.</p>
              </div>
              <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
                Live
              </span>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-xs">
              <div className="rounded-xl bg-white/5 p-3">
                <p className="text-white/50">Jurisdiction</p>
                <p className="mt-1 font-semibold text-white">UK · England</p>
              </div>
              <div className="rounded-xl bg-white/5 p-3">
                <p className="text-white/50">Type</p>
                <p className="mt-1 font-semibold text-white">LTD</p>
              </div>
              <div className="rounded-xl bg-white/5 p-3">
                <p className="text-white/50">Status</p>
                <p className="mt-1 font-semibold text-[color:var(--gold)]">Approved</p>
              </div>
            </div>

            {/* mini chart */}
            <div className="mt-5 rounded-xl bg-white/5 p-4">
              <div className="flex items-baseline justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-widest text-white/50">This month</p>
                  <p className="font-display text-2xl font-bold text-white">$48,290</p>
                </div>
                <span className="text-xs font-semibold text-emerald-300">+24.6%</span>
              </div>
              <svg viewBox="0 0 200 60" className="mt-2 h-14 w-full">
                <defs>
                  <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#DBA626" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#DBA626" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,45 C20,40 30,20 50,25 C70,30 85,10 110,18 C135,26 150,8 175,12 L200,10 L200,60 L0,60 Z"
                  fill="url(#g)"
                />
                <path
                  d="M0,45 C20,40 30,20 50,25 C70,30 85,10 110,18 C135,26 150,8 175,12 L200,10"
                  fill="none"
                  stroke="#DBA626"
                  strokeWidth="1.8"
                />
              </svg>
            </div>
          </div>

          {/* Payment accounts */}
          <div className="md:col-span-2 rounded-2xl border border-white/10 bg-black/40 p-5">
            <p className="text-[11px] uppercase tracking-widest text-white/50">Payment Accounts</p>
            <div className="mt-3 space-y-2.5">
              {brands.map((b) => (
                <div key={b.name} className="flex items-center justify-between rounded-xl bg-white/[0.04] px-3 py-2.5">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="grid h-7 w-7 place-items-center rounded-lg text-[10px] font-bold text-white"
                      style={{ background: b.color }}
                    >
                      {b.name.slice(0, 1)}
                    </span>
                    <span className="text-xs font-medium text-white">{b.name}</span>
                  </div>
                  <Check className="h-4 w-4 text-[color:var(--gold)]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating badge */}
      <div className="absolute -bottom-5 -left-4 flex items-center gap-3 rounded-2xl border border-[color:var(--gold)]/30 bg-black/80 p-3 pr-5 shadow-xl backdrop-blur-md">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-[color:var(--gold)]">
          <ShieldCheck className="h-5 w-5 text-black" />
        </span>
        <div>
          <p className="text-[10px] uppercase tracking-widest text-white/50">Verified</p>
          <p className="text-xs font-semibold text-white">HMRC · IRS · FinCEN</p>
        </div>
      </div>
    </div>
  );
}

/* ---------- Data ---------- */
const services = [
  { icon: Building2, title: "UK LTD Registration", desc: "Full UK Limited company formation with HMRC compliance and business address.", to: "/services/uk-ltd" },
  { icon: Landmark, title: "US LLC Registration", desc: "US LLC formation in Wyoming, Delaware, or New Mexico with EIN.", to: "/services/us-llc" },
  { icon: Wallet, title: "Wise Business", desc: "Open a multi-currency Wise Business account with clean approval.", to: "/services/wise" },
  { icon: CreditCard, title: "Payoneer Business", desc: "Payoneer account setup for freelancers and marketplace sellers.", to: "/services/payoneer" },
  { icon: DollarSign, title: "PayPal Business", desc: "Verified PayPal Business accounts that hold, receive and withdraw.", to: "/services/paypal" },
  { icon: Zap, title: "Stripe Account", desc: "Stripe activation for global entrepreneurs, agencies and SaaS founders.", to: "/services/stripe" },
  { icon: ShoppingBag, title: "Shopify Store Designing", desc: "End-to-end Shopify launch: theme, products, payments, shipping.", to: "/services/shopify" },
  { icon: Store, title: "TikTok Shop", desc: "TikTok Shop application, catalog upload, and creator monetization.", to: "/services/tiktok-shop" },
  { icon: Users, title: "TikTok Agency Account", desc: "TikTok Agency account setup with secure balance protection — website required, no self top-up.", to: "/services/tiktok-agency-account" },
  { icon: FileCheck2, title: "Uk LTD Director Verification", desc: "KYC, KYB, address verification and platform re-verification support.", to: "/services/uk-ltd-director-verification" },
];

const why = [
  { icon: Award, title: "Professional Experts", desc: "10+ years across UK, US, EU and MENA business jurisdictions." },
  { icon: Zap, title: "Fast Response", desc: "Same-day replies. Most consultations start within 24 hours." },
  { icon: Search, title: "Transparent Process", desc: "Clear pricing, clear timelines, clear deliverables. Always." },
  { icon: Globe2, title: "Global Experience", desc: "Clients in 20+ countries — freelancers to 8-figure brands." },
  { icon: Lock, title: "Secure Consultation", desc: "Encrypted document handling and strict client confidentiality." },
  { icon: Headphones, title: "Reliable Guidance", desc: "Post-setup support so you're never left figuring things out alone." },
];

const process = [
  { icon: Sparkles, title: "Choose Your Service", desc: "Book a free consultation and pick the setup that fits your goals." },
  { icon: FileCheck2, title: "Submit Documents", desc: "Share your ID and basic business details through our secure portal." },
  { icon: ShieldCheck, title: "Verification & Consultation", desc: "We prepare, verify and file everything on your behalf." },
  { icon: Rocket, title: "Business Ready", desc: "Receive your company docs, accounts and go-live checklist." },
];

const industries = [
  
  { icon: Code2, label: "Software" },
  { icon: Briefcase, label: "Agencies" },
  { icon: Users, label: "Freelancers" },
  { icon: ShoppingBag, label: "eCommerce" },
  { icon: Rocket, label: "SaaS" },
  { icon: Award, label: "Consultants" },
  { icon: Megaphone, label: "Digital Marketing" },
  { icon: GraduationCap, label: "Education" },
  { icon: HeartPulse, label: "Healthcare" },
  { icon: DollarSign, label: "Finance" },
];

const testimonials = [
  { name: "Sarah Bennett", role: "Shopify Merchant · UK", initials: "SB", quote: "Professional service from start to finish. My UK LTD and Stripe were live in under two weeks. Highly recommended." },
  { name: "Ahmed Khan", role: "Amazon Seller · UAE", initials: "AK", quote: "They handled my US LLC, EIN and Payoneer with zero friction. The clearest process I've seen in this industry." },
  { name: "Lena Müller", role: "SaaS Founder · Germany", initials: "LM", quote: "Stripe approval for my SaaS took days, not months. Their guidance is worth every penny." },
  { name: "Daniel Owusu", role: "Agency Owner · Ghana", initials: "DO", quote: "Finally a consultancy that treats international founders with the same care as local clients. Exceptional." },
];

const faqs = [
  { q: "How long does company registration take?", a: "UK LTD registration is typically completed within 24 to 48 hours. US LLC formation takes 5 to 10 business days depending on the state." },
  { q: "Can non-residents open a company?", a: "Absolutely. We specialize in setting up UK LTDs and US LLCs for non-residents from any country, including EIN and business banking guidance." },
  { q: "What documents are required?", a: "A valid passport, a proof of address (utility bill or bank statement), and basic business details are usually all that's needed to start." },
  { q: "Do you help with payment platforms?", a: "Yes. We assist with Wise, Payoneer, PayPal Business, and Stripe activation, including account structuring and verification support." },
  { q: "Do you provide after-sales support?", a: "Every package includes post-setup support. We stay with you through your first filings, verifications, and platform onboarding." },
];

/* ---------- Sections ---------- */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{ backgroundImage: "radial-gradient(60% 50% at 20% 0%, rgba(219,166,38,0.28), transparent 60%), radial-gradient(50% 50% at 90% 20%, rgba(219,166,38,0.18), transparent 60%)" }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)", backgroundSize: "48px 48px" }}
      />
      <div className="container-luxe relative pt-12 pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/40 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--gold)]">
              <Sparkles className="h-3.5 w-3.5" /> Global Business Consultancy
            </p>
            <h1 className="mt-5 font-display text-4xl font-black leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              Global Business Solutions for{" "}
              <span className="text-gradient-gold">Modern Entrepreneurs</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              Helping businesses register companies, open international payment
              accounts, and scale globally with confidence.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="https://wa.me/447824035366"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-[color:var(--gold)] px-6 py-3.5 text-sm font-semibold text-black shadow-[0_15px_40px_-12px_rgba(219,166,38,0.7)] transition hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-[color:var(--gold-hover)] hover:shadow-lg hover:shadow-[color:var(--gold)]/20"
              >
                Chat on WhatsApp
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]"
              >
                Explore Services
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-white/50">
              <span className="flex items-center gap-2"><Check className="h-4 w-4 text-[color:var(--gold)]" /> No hidden fees</span>
              <span className="flex items-center gap-2"><Check className="h-4 w-4 text-[color:var(--gold)]" /> 5,000+ businesses served</span>
              <span className="flex items-center gap-2"><Check className="h-4 w-4 text-[color:var(--gold)]" /> 20+ countries</span>
            </div>
          </div>

          <HeroDashboard />
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    { n: 5000, s: "+", label: "Businesses Assisted" },
    { n: 50, s: "+", label: "Countries Served" },
    { n: 98, s: "%", label: "Client Satisfaction" },
    { n: 24, s: "/7", label: "Support" },
  ];
  return (
    <section className="border-y border-border bg-[color:var(--secondary)] py-14 md:py-20">
      <div className="container-luxe">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((i, index) => (
            <ScrollReveal key={i.label} delay={index * 80}>
              <div className="text-center">
                <p className="font-display text-4xl font-black tracking-tight text-foreground md:text-6xl">
                  <span className="text-gradient-gold">
                    <Counter to={i.n} suffix={i.s} />
                  </span>
                </p>
                <p className="mt-2 text-sm font-medium uppercase tracking-widest text-muted-foreground">
                  {i.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-background py-20 md:py-28">
      <div className="container-luxe">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="inline-flex rounded-full border border-[color:var(--gold)]/40 bg-[color:var(--gold)]/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--gold)]">
              Our Services
            </p>
            <h2 className="mt-4 font-display text-3xl font-black leading-tight md:text-5xl">
              Everything you need to <span className="text-gradient-gold">operate globally</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              From company incorporation to payment activation and eCommerce launch —
              one team, one process, one point of accountability.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, index) => (
            <ScrollReveal key={s.title} delay={(index % 3) * 100}>
              <ServiceCard {...s} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon: Icon, title, desc, to }: { icon: typeof Building2; title: string; desc: string; to?: string }) {
  const paused = SERVICE_STATUS[title] === "paused";
  const Content = (
    <div className={`group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition hover:-translate-y-1 hover:border-[color:var(--gold)]/60 hover:shadow-[0_20px_45px_-20px_rgba(219,166,38,0.5)] ${paused ? "opacity-75" : ""}`}>
      {paused && (
        <span className="absolute right-3 top-3 z-10 inline-flex items-center gap-1 rounded-full border border-border bg-muted px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          <PauseCircle className="h-3 w-3" />
          Temporarily Paused
        </span>
      )}
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-2xl transition group-hover:opacity-100"
        style={{ background: "radial-gradient(circle, rgba(219,166,38,0.35), transparent 70%)" }}
      />
      <span className="relative grid h-12 w-12 place-items-center rounded-xl bg-[color:var(--gold)]/10 text-[color:var(--gold)] ring-1 ring-[color:var(--gold)]/30">
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="relative mt-5 font-display text-lg font-bold text-foreground">{title}</h3>
      <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
      <span className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--gold)]">
        Learn More
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
      </span>
    </div>
  );
  if (to) return <Link to={to}>{Content}</Link>;
  return Content;
}

function WhyUs() {
  return (
    <section className="bg-[color:var(--secondary)] py-20 md:py-28">
      <div className="container-luxe">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <ScrollReveal>
            <div>
              <p className="inline-flex rounded-full border border-[color:var(--gold)]/40 bg-[color:var(--gold)]/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--gold)]">
                Why Choose Us
              </p>
              <h2 className="mt-4 font-display text-3xl font-black leading-tight md:text-5xl">
                A consultancy built for <span className="text-gradient-gold">serious operators.</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                We're not a template mill. Every setup is reviewed by a senior
                specialist so you launch with structure, compliance, and clarity.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {why.map(({ icon: Icon, title, desc }, index) => (
              <ScrollReveal key={title} delay={(index % 2) * 100}>
                <div className="rounded-2xl border border-border bg-card p-6 transition hover:border-[color:var(--gold)]/60 hover:shadow-[var(--shadow-luxe)]">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-black text-[color:var(--gold)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display font-bold text-foreground">{title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="bg-black py-20 text-white md:py-28">
      <div className="container-luxe">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="inline-flex rounded-full border border-[color:var(--gold)]/40 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--gold)]">
              Process Timeline
            </p>
            <h2 className="mt-4 font-display text-3xl font-black leading-tight md:text-5xl">
              Four steps to a <span className="text-gradient-gold">launch-ready business.</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="relative mt-16">
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[color:var(--gold)]/40 to-transparent lg:block" />
          <div className="grid gap-8 lg:grid-cols-4">
            {process.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 80}>
                <div className="relative">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:border-[color:var(--gold)]/50">
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-[color:var(--gold)] font-bold text-black">
                        {i + 1}
                      </span>
                      <p className="text-xs font-semibold uppercase tracking-widest text-white/50">Step {i + 1}</p>
                    </div>
                    <span className="mt-5 inline-grid h-12 w-12 place-items-center rounded-xl bg-white/5 text-[color:var(--gold)]">
                      <p.icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-4 font-display text-lg font-bold">{p.title}</h3>
                    <p className="mt-1.5 text-sm text-white/70">{p.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container-luxe">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="inline-flex rounded-full border border-[color:var(--gold)]/40 bg-[color:var(--gold)]/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--gold)]">
              Industries We Help
            </p>
            <h2 className="mt-4 font-display text-3xl font-black leading-tight md:text-5xl">
              Trusted across <span className="text-gradient-gold">every modern industry.</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {industries.map(({ icon: Icon, label }, index) => (
            <ScrollReveal key={label} delay={(index % 5) * 60}>
              <div className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center transition hover:-translate-y-1 hover:border-[color:var(--gold)]/60 hover:shadow-[var(--shadow-luxe)]">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-[color:var(--gold)]/10 text-[color:var(--gold)] transition group-hover:bg-[color:var(--gold)] group-hover:text-black">
                  <Icon className="h-6 w-6" />
                </span>
                <p className="text-sm font-semibold text-foreground">{label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-[color:var(--secondary)] py-20 md:py-28">
      <div className="container-luxe">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="inline-flex rounded-full border border-[color:var(--gold)]/40 bg-[color:var(--gold)]/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--gold)]">
              Testimonials
            </p>
            <h2 className="mt-4 font-display text-3xl font-black leading-tight md:text-5xl">
              Trusted by founders <span className="text-gradient-gold">across the world.</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {testimonials.map((t, index) => (
            <ScrollReveal key={t.name} delay={(index % 2) * 100}>
              <figure className="relative rounded-2xl border border-border bg-card p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition hover:-translate-y-1 hover:border-[color:var(--gold)]/60 hover:shadow-[0_20px_45px_-20px_rgba(0,0,0,0.15)]">
                <Quote className="absolute right-6 top-6 h-8 w-8 text-[color:var(--gold)]/20" />
                <div className="flex items-center gap-1 text-[color:var(--gold)]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 text-base leading-relaxed text-foreground">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-black font-display text-sm font-bold text-[color:var(--gold)]">
                    {t.initials}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container-luxe grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <ScrollReveal>
          <div>
          <p className="inline-flex rounded-full border border-[color:var(--gold)]/40 bg-[color:var(--gold)]/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--gold)]">
            FAQ
          </p>
          <h2 className="mt-4 font-display text-3xl font-black leading-tight md:text-5xl">
            Questions, <span className="text-gradient-gold">answered.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Can't find what you're looking for? Reach out — we typically reply the same day.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)] px-5 py-2.5 text-sm font-semibold text-[color:var(--gold)] transition hover:scale-[1.03] hover:bg-[color:var(--gold)] hover:text-black hover:shadow-lg hover:shadow-[color:var(--gold)]/20"
          >
            Ask a question <ArrowRight className="h-4 w-4" />
          </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="space-y-3">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={f.q}
                  className={`rounded-2xl border bg-card transition ${isOpen ? "border-[color:var(--gold)]/60 shadow-[var(--shadow-luxe)]" : "border-border"}`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-base font-bold text-foreground md:text-lg">{f.q}</span>
                    <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition ${isOpen ? "bg-[color:var(--gold)] text-black" : "bg-secondary text-foreground"}`}>
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  <div
                    className="grid overflow-hidden px-5 transition-[grid-template-rows,padding] duration-300"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr", paddingBottom: isOpen ? "1rem" : "0" }}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <p className="text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
export function Contact() {
  return (
    <section id="contact" className="bg-[color:var(--secondary)] py-20 md:py-28">
      <div className="container-luxe">
        <ScrollReveal>
          <div className="grid overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-luxe)] lg:grid-cols-[1fr_1.2fr]">
            {/* Left: info */}
            <div className="relative overflow-hidden bg-black p-10 text-white md:p-12">
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-40 blur-3xl"
                style={{ background: "radial-gradient(circle, #DBA626, transparent 70%)" }}
              />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--gold)]">Get in touch</p>
              <h2 className="mt-3 font-display text-3xl font-black leading-tight md:text-4xl">
                Let's build your <span className="text-gradient-gold">global business.</span>
              </h2>
              <p className="mt-4 text-white/70">
                Share a few details and we'll get back within one business day with
                a clear roadmap and honest pricing.
              </p>

              <div className="mt-8 space-y-5">
                {[
                  { icon: Users, label: "Email", value: "contact@meetusama.com" },
                  { icon: Clock, label: "Response Time", value: "Within 24 hours" },
                  { icon: Globe2, label: "Coverage", value: "Serving clients in 20+ countries" },
                  { icon: ShieldCheck, label: "Confidentiality", value: "Encrypted, NDA-ready by request" },
                ].map((i) => (
                  <div key={i.label} className="flex items-start gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/5 text-[color:var(--gold)]">
                      <i.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-[11px] uppercase tracking-widest text-white/50">{i.label}</p>
                      <p className="text-sm font-semibold text-white">{i.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <ContactForm />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// Google Apps Script endpoint — do not change
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyyAFn1-yhpPbIS5dj8Ry2MpYf6IPgfpj_zRP_jh0eu1zJJzqjiqaLuSt_AILh_l_A/exec";

function ContactForm() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setSubmitting(true);
    
    // Bug Fix: JSON.stringify hata kar wapas FormData lagaya ha
    fetch(APPS_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      body: formData, 
    })
      .finally(() => {
        setSubmitting(false);
        setSent(true);
        form.reset(); // UX Fix: Form data send hotay hi khali ho jayega
        
        // UX Fix: 5 second baad button wapas normal ho jayega
        setTimeout(() => {
          setSent(false);
        }, 5000);
      });
  }

  return (
    <form onSubmit={handleSubmit} className="p-8 md:p-12">
      <div className="grid gap-4 sm:grid-cols-2">
        {/* Bug Fix: Sab inputs ke "name" ko Capital kar diya gaya ha (Name, Email, etc.) */}
        <Field label="Full Name" name="Name" placeholder="Jane Smith" autoComplete="name" required />
        <Field label="Email" name="Email" type="email" placeholder="jane@company.com" autoComplete="email" required />
        <Field label="WhatsApp Number" name="WhatsApp" placeholder="+44 7…" autoComplete="tel" required />
        <Field label="Country" name="Country" placeholder="United Kingdom" autoComplete="country-name" />
        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Message<span className="text-red-500"> *</span>
          </label>
          <textarea
            required
            name="Message"
            rows={4}
            placeholder="Tell us a little about your business goals…"
            spellCheck={false}
            data-gramm="false"
            className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground/60 focus:border-[color:var(--gold)] focus:ring-2 focus:ring-[color:var(--gold)]/30"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={submitting || sent}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--gold)] px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-[color:var(--gold-hover)] disabled:opacity-70 sm:w-auto"
      >
        {sent ? "Message received — we'll be in touch" : submitting ? "Sending…" : "Send Message"}
        <ArrowRight className="h-4 w-4" />
      </button>
      <p className="mt-3 text-xs text-muted-foreground">
        By submitting you agree to our privacy policy. No spam, ever.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}{required && <span className="text-red-500"> *</span>}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        spellCheck={false}
        data-gramm="false"
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground/60 focus:border-[color:var(--gold)] focus:ring-2 focus:ring-[color:var(--gold)]/30"
      />
    </div>
  );
}


export default function HomePage() {
  return (
    <>
      <SEO title="Meet Usama — Global Business & Payment Consultancy" description="Register UK LTD & US LLC companies, open Wise, Payoneer, PayPal & Stripe accounts, and launch Shopify stores worldwide — done for you by experienced consultants." />
      <>
      <Hero />
      <Stats />
      <Services />
      <WhyUs />
      <Process />
      <Industries />
      <Testimonials />
      <FAQ />
      <Contact />
      <CTABand />
    </>
    </>
  );
}
