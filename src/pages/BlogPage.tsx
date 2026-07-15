import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { PageHero, CTABand } from "../components/page-hero";
import { ScrollReveal } from "../components/ScrollReveal";

const posts = [
  { title: "UK LTD vs US LLC: Which one should you register in 2026?", desc: "A side-by-side breakdown of costs, tax, banking, and compliance for non-resident founders.", tag: "Company Formation", date: "Jan 12, 2026" },
  { title: "Getting approved on Stripe as a non-US founder", desc: "The exact documents, structuring, and business model tweaks that get international founders approved.", tag: "Payments", date: "Jan 4, 2026" },
  { title: "How to open a Wise Business account from anywhere", desc: "A practical walkthrough — including the mistakes that lead to instant rejection.", tag: "Payments", date: "Dec 22, 2025" },
  { title: "The complete Amazon FBA setup for international sellers", desc: "From LLC to EIN to seller central — the whole flow, sequenced correctly.", tag: "eCommerce", date: "Dec 14, 2025" },
  { title: "Shopify launch checklist: 42 things to do before you go live", desc: "The exact QA list our team runs before publishing a client's Shopify store.", tag: "eCommerce", date: "Nov 30, 2025" },
  { title: "PayPal Business without limitations: a founder's guide", desc: "How to structure a PayPal Business account that actually holds and withdraws funds.", tag: "Payments", date: "Nov 18, 2025" },
];

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title={<>Playbooks for <span className="text-gradient-gold">modern founders.</span></>}
        subtitle="Practical guides and behind-the-scenes insights from our consultancy work."
      />

      <section className="bg-background py-20 md:py-28">
        <div className="container-luxe grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, index) => (
            <ScrollReveal key={p.title} delay={(index % 3) * 100}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:border-[color:var(--gold)]/60 hover:shadow-[var(--shadow-luxe)]">
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  <div
                    className="absolute inset-0 opacity-90"
                    style={{ background: "radial-gradient(120% 80% at 20% 20%, rgba(219,166,38,0.35), transparent 60%), linear-gradient(135deg, #111 0%, #000 100%)" }}
                  />
                  <div className="absolute left-5 top-5">
                    <span className="rounded-full border border-[color:var(--gold)]/40 bg-black/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-[color:var(--gold)]">
                      {p.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-5 right-5 text-white/40">
                    <span className="font-display text-5xl font-black">{p.title.slice(0, 1)}</span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" /> {p.date}
                  </p>
                  <h3 className="mt-3 font-display text-lg font-bold leading-snug">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                  <Link to="/blog" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--gold)]">
                    Read article <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
