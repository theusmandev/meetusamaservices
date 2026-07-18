import { SEO } from "../components/SEO";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { PageHero, CTABand } from "../components/page-hero";
import { ScrollReveal } from "../components/ScrollReveal";
import { blogPosts } from "../data/blogPosts";

export default function BlogPage() {
  return (
    <>
      <SEO title="Blog | Meet Usama Services" description="Practical guides and insights on company formation, Stripe, PayPal, and Wise approval for global founders." />
      <>
      <PageHero
        eyebrow="Blog"
        title={<>Playbooks for <span className="text-gradient-gold">modern founders.</span></>}
        subtitle="Practical guides and behind-the-scenes insights from our consultancy work."
      />

      <section className="bg-background py-20 md:py-28">
        <div className="container-luxe grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <ScrollReveal key={post.slug} delay={(index % 3) * 100}>
              <Link
                to={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:border-[color:var(--gold)]/60 hover:shadow-[var(--shadow-luxe)]"
              >
                {/* Card thumbnail */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  {post.image ? (
                    <>
                      {/* Real photo */}
                      <img
                        src={post.image}
                        alt={post.title}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
                      />
                      {/* Dark gradient overlay — keeps badge readable */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
                    </>
                  ) : (
                    /* Fallback: original gradient + initial letter */
                    <div
                      className="absolute inset-0 opacity-90"
                      style={{
                        background:
                          "radial-gradient(120% 80% at 20% 20%, rgba(219,166,38,0.35), transparent 60%), linear-gradient(135deg, #111 0%, #000 100%)",
                      }}
                    />
                  )}
                  <div className="absolute left-5 top-5">
                    <span className="rounded-full border border-[color:var(--gold)]/40 bg-black/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-[color:var(--gold)]">
                      {post.category}
                    </span>
                  </div>
                  {!post.image && (
                    <div className="absolute bottom-5 right-5 text-white/40">
                      <span className="font-display text-5xl font-black">
                        {post.title.slice(0, 1)}
                      </span>
                    </div>
                  )}
                </div>

                {/* Card body */}
                <div className="flex flex-1 flex-col p-6">
                  <p className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" /> {post.date}
                  </p>
                  <h3 className="mt-3 font-display text-lg font-bold leading-snug">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--gold)]">
                    Read article{" "}
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <CTABand />
    </>
    </>
  );
}
