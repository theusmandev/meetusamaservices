import { Link } from "react-router-dom";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(60% 60% at 50% 0%, rgba(219,166,38,0.35) 0%, transparent 60%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #DBA626, transparent)" }}
      />
      <div className="container-luxe relative py-16 md:py-20">
        {eyebrow && (
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/40 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--gold)]">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl font-display text-4xl font-black leading-[1.05] tracking-tight md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}

export function CTABand() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-luxe">
        <div className="relative overflow-hidden rounded-3xl bg-black p-10 text-white shadow-2xl md:p-16">
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-40 blur-3xl"
            style={{ background: "radial-gradient(circle, #DBA626, transparent 70%)" }}
          />
          <div className="relative grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--gold)]">
                Ready when you are
              </p>
              <h2 className="mt-3 font-display text-3xl font-black leading-tight md:text-5xl">
                Launch your global business <span className="text-gradient-gold">with confidence.</span>
              </h2>
              <p className="mt-4 max-w-xl text-white/70">
                Book a 30-minute consultation. We'll map your setup, from company
                registration to payment accounts, in one call.
              </p>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <a
                href="https://wa.me/447824035366"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[color:var(--gold)] px-7 py-3.5 text-sm font-semibold text-black transition hover:scale-[1.03] hover:bg-[color:var(--gold-hover)] hover:shadow-lg hover:shadow-[color:var(--gold)]/20"
              >
                Chat on WhatsApp
              </a>
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
