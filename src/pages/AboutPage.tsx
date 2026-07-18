import { SEO } from "../components/SEO";
import { Link } from "react-router-dom";
import { Award, Users, Globe2, Target, Sparkles, ShieldCheck } from "lucide-react";
import { PageHero, CTABand } from "../components/page-hero";
import { ScrollReveal } from "../components/ScrollReveal";

const values = [
  { icon: Target, title: "Precision", desc: "Every filing, every account, done right the first time." },
  { icon: ShieldCheck, title: "Trust", desc: "Encrypted document handling and airtight confidentiality." },
  { icon: Globe2, title: "Global Reach", desc: "Serving founders across five continents and every major jurisdiction." },
  { icon: Sparkles, title: "Craft", desc: "A boutique consultancy experience — no call-center runarounds." },
];

export default function AboutPage() {
  return (
    <>
      <SEO title="About Us | Meet Usama Services" description="Learn about Meet Usama Services — a global business consultancy helping entrepreneurs register companies and open international payment accounts." />
      <>
      <PageHero
        eyebrow="About Us"
        title={<>Built for founders who take <span className="text-gradient-gold">business seriously.</span></>}
        subtitle="Meet Usama Services is a premium consultancy helping international entrepreneurs incorporate, activate payments, and launch eCommerce brands the right way — from day one."
      />

      <section className="bg-background py-20 md:py-28">
        <div className="container-luxe grid gap-12 lg:grid-cols-2 lg:items-center">
          <ScrollReveal>
            <div>
              <h2 className="font-display text-3xl font-black leading-tight md:text-4xl">
                A decade of <span className="text-gradient-gold">international business setup.</span>
              </h2>
              <p className="mt-5 text-muted-foreground">
                We started as a small team of accountants and operations specialists
                helping freelancers register their first UK Limited company. Today,
                we work with SaaS founders, agencies, Amazon sellers and Shopify
                brands in more than fifty countries — with the same care and
                precision that got us here.
              </p>
              <p className="mt-4 text-muted-foreground">
                Every engagement is led by a senior specialist. No account managers
                handing you off. No template forms. Just clean, compliant setups
                that hold up to any bank, marketplace, or regulator.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { n: "5K+", l: "Businesses" },
                  { n: "20+", l: "Countries" },
                  { n: "10y", l: "Experience" },
                ].map((s) => (
                  <div key={s.l} className="rounded-2xl border border-border bg-card p-5 text-center">
                    <p className="font-display text-3xl font-black text-gradient-gold">{s.n}</p>
                    <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((v, index) => (
              <ScrollReveal key={v.title} delay={(index % 2) * 100}>
                <div className="rounded-2xl border border-border bg-card p-6 transition hover:border-[color:var(--gold)]/60 hover:shadow-[var(--shadow-luxe)]">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-black text-[color:var(--gold)]">
                    <v.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display font-bold">{v.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--secondary)] py-20 md:py-28">
        <ScrollReveal>
          <div className="container-luxe">
            <h2 className="max-w-2xl font-display text-3xl font-black leading-tight md:text-4xl">
              Our mission is simple: <span className="text-gradient-gold">remove borders from business.</span>
            </h2>
            <p className="mt-5 max-w-3xl text-muted-foreground">
              Where you're born, what passport you hold, or where you live shouldn't
              limit your ability to operate a modern business. We handle the
              paperwork, the platforms, and the fine print — so you can focus on
              building.
            </p>
            <div className="mt-10">
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full bg-[color:var(--gold)] px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.03] hover:bg-[color:var(--gold-hover)] hover:shadow-lg hover:shadow-[color:var(--gold)]/20"
              >
                Work with us
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <CTABand />
    </>
    </>
  );
}
