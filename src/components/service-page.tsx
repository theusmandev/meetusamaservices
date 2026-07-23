import { Link } from "react-router-dom";
import { Check, ArrowRight, Clock, ShieldCheck, Sparkles, AlertTriangle } from "lucide-react";
import { PageHero, CTABand } from "./page-hero";
import type { LucideIcon, ReactNode } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { SERVICE_STATUS } from "../data/serviceStatus";

export interface ServiceDetail {
  eyebrow: string;
  title: string;
  gold: string;
  subtitle: string;
  icon: LucideIcon;
  timeline: string;
  price: string;
  bullets: string[];
  includes: string[];
  requirements: string[];
  notice?: ReactNode;
}

export function ServicePage({ data }: { data: ServiceDetail }) {
  const numericPrice = data.price.replace(/[^0-9]/g, "");
  const Icon = data.icon;

  // Derive the service's lookup key (title + gold, trimmed, period stripped) —
  // matching the keys used in ServiceStatus and the payment page URL param.
  const serviceKey = (data.title + " " + data.gold).trim().replace(/\.$/, "");
  const paused = SERVICE_STATUS[serviceKey] === "paused";

  const paymentUrl = `/payment?service=${encodeURIComponent(serviceKey)}${numericPrice ? `&price=${numericPrice}` : ""}`;

  return (
    <>
      <PageHero
        eyebrow={data.eyebrow}
        title={<>{data.title} <span className="text-gradient-gold">{data.gold}</span></>}
        subtitle={data.subtitle}
      >
        <div className="flex flex-wrap items-center gap-3">
          {paused ? (
            <>
              <button
                disabled
                aria-disabled="true"
                className="inline-flex cursor-not-allowed items-center gap-2 rounded-full bg-muted px-6 py-3 text-sm font-semibold text-muted-foreground opacity-60"
              >
                Currently Unavailable
              </button>
              <a
                href="https://wa.me/447824035366"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]"
              >
                Contact Us for Updates
              </a>
            </>
          ) : (
            <>
              <Link
                to={paymentUrl}
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--gold)] px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.03] hover:bg-[color:var(--gold-hover)] hover:shadow-lg hover:shadow-[color:var(--gold)]/20"
              >
                Start Now <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]"
              >
                All Services
              </Link>
            </>
          )}
        </div>
      </PageHero>

      <section className="bg-background py-20 md:py-28">
        <div className="container-luxe grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <ScrollReveal>
            <div>
              {/* Paused notice banner */}
              {paused && (
                <div className="mb-8 flex items-start gap-3 rounded-xl border border-orange-500/30 bg-orange-500/8 px-4 py-4">
                  <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <strong className="text-foreground">This service is currently paused and not accepting new orders.</strong>{" "}
                    Please check back later or{" "}
                    <a
                      href="https://wa.me/447824035366"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[color:var(--gold)] underline decoration-[color:var(--gold)]/40 underline-offset-2 transition hover:decoration-[color:var(--gold)]"
                    >
                      contact us
                    </a>{" "}
                    for more information.
                  </p>
                </div>
              )}

              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-black text-[color:var(--gold)]">
                <Icon className="h-7 w-7" />
              </span>
              <h2 className="mt-6 font-display text-3xl font-black leading-tight md:text-4xl">
                What you <span className="text-gradient-gold">get.</span>
              </h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {data.includes.map((i) => (
                  <li key={i} className="flex items-start gap-2 rounded-xl border border-border bg-card p-4 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold)]" /> {i}
                  </li>
                ))}
              </ul>

              <h3 className="mt-12 font-display text-xl font-bold">Why it matters</h3>
              <ul className="mt-4 space-y-3">
                {data.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--gold)]" /> {b}
                  </li>
                ))}
              </ul>

              {data.notice && (
                <div className="mt-10">{data.notice}</div>
              )}

              <h3 className="mt-12 font-display text-xl font-bold">What we need from you</h3>
              <ul className="mt-4 grid gap-2">
                {data.requirements.map((r) => (
                  <li key={r} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Sparkles className="h-4 w-4 text-[color:var(--gold)]" /> {r}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <aside className="h-fit rounded-3xl border border-[color:var(--gold)]/30 bg-card p-7 shadow-[var(--shadow-luxe)] lg:sticky lg:top-24">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Service Charges</p>
              <p className="mt-2 font-display text-4xl font-black text-foreground">{data.price}</p>
              <div className="mt-6 space-y-3 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4 text-[color:var(--gold)]" /> Timeline:{" "}
                  <span className="font-semibold text-foreground">{data.timeline}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <ShieldCheck className="h-4 w-4 text-[color:var(--gold)]" /> 100% compliant filing
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Check className="h-4 w-4 text-[color:var(--gold)]" /> Post-setup support included
                </div>
              </div>
              {paused ? (
                <>
                  <button
                    disabled
                    aria-disabled="true"
                    className="mt-6 inline-flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-full bg-muted px-5 py-3 text-sm font-semibold text-muted-foreground opacity-60"
                  >
                    Currently Unavailable
                  </button>
                  <a
                    href="https://wa.me/447824035366"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold transition hover:border-[color:var(--gold)]"
                  >
                    Contact Us for Updates
                  </a>
                </>
              ) : (
                <>
                  <Link
                    to={paymentUrl}
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--gold)] px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.03] hover:bg-[color:var(--gold-hover)] hover:shadow-lg hover:shadow-[color:var(--gold)]/20"
                  >
                    Order Service Now!
                  </Link>
                  <a
                    href="https://wa.me/447824035366"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold transition hover:border-[color:var(--gold)]"
                  >
                    Chat on WhatsApp
                  </a>
                </>
              )}
            </aside>
          </ScrollReveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
