import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { PageHero, CTABand } from "../components/page-hero";

const faqs = [
  { q: "How long does company registration take?", a: "UK LTD registration is typically completed within 24 to 48 hours. US LLC formation takes 5 to 10 business days depending on the state." },
  { q: "Can non-residents open a company?", a: "Absolutely. We specialize in setting up UK LTDs and US LLCs for non-residents from any country, including EIN and banking guidance." },
  { q: "What documents are required?", a: "A valid passport, proof of address, and basic business details are usually all that's needed to start." },
  { q: "Do you help with payment platforms?", a: "Yes — Wise, Payoneer, PayPal Business and Stripe activation, plus structuring and verification support." },
  { q: "Do you provide after-sales support?", a: "Every package includes post-setup support through your first filings, verifications and platform onboarding." },
  { q: "What countries do you serve?", a: "We serve founders in 20+ countries, including UK, US, EU, MENA, South Asia, Africa, and Latin America." },
  { q: "How are your fees structured?", a: "Fixed, transparent pricing per service. No hidden fees. You'll see the full breakdown before we begin." },
  { q: "Do you offer bundle discounts?", a: "Yes. Company + payment account bundles come with meaningful savings — ask about our Founder Package." },
];

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title={<>Answers to the <span className="text-gradient-gold">questions that matter.</span></>}
        subtitle="Everything you need to know before working with us."
      />
      <section className="bg-background py-20 md:py-28">
        <div className="container-luxe mx-auto max-w-3xl space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className={`rounded-2xl border bg-card transition ${isOpen ? "border-[color:var(--gold)]/60 shadow-[var(--shadow-luxe)]" : "border-border"}`}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-bold md:text-lg">{f.q}</span>
                  <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition ${isOpen ? "bg-[color:var(--gold)] text-black" : "bg-secondary"}`}>
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
      </section>
      <CTABand />
    </>
  );
}
