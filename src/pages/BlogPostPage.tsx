import { Link, useParams, Navigate } from "react-router-dom";
import { Calendar, ArrowLeft, ArrowRight } from "lucide-react";
import { blogPosts } from "../data/blogPosts";
import { CTABand } from "../components/page-hero";
import { ScrollReveal } from "../components/ScrollReveal";
import { SEO } from "../components/SEO";

/** Splits a paragraph into a [leadIn, rest] tuple if it starts with a bold
 *  lead-in phrase (text before the first colon that is ≤ 60 chars and has
 *  no period — i.e. it looks like a sub-heading, not a sentence opener).
 *  Returns [null, fullText] when there is no lead-in. */
function splitLeadIn(text: string): [string | null, string] {
  const colonIdx = text.indexOf(":");
  if (colonIdx === -1 || colonIdx > 60) return [null, text];
  const leadIn = text.slice(0, colonIdx);
  // Reject if the lead-in itself contains a period — it's just a sentence.
  if (leadIn.includes(".")) return [null, text];
  return [leadIn, text.slice(colonIdx + 1).trimStart()];
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/not-found" replace />;
  }

  return (
    <>
      <SEO title={post.title} description={post.excerpt} image={post.image} />
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-black text-white">
        {/* Background image (when available) */}
        {post.image && (
          <>
            <img
              src={post.image}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            {/* Multi-layer dark overlay: keeps all text readable over any photo */}
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </>
        )}

        {/* Radial gold glow (always rendered on top) */}
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(60% 60% at 50% 0%, rgba(219,166,38,0.35) 0%, transparent 60%)",
          }}
        />
        {/* Top gold line */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, #DBA626, transparent)" }}
        />

        <div className="container-luxe relative py-16 md:py-24">
          {/* Back link */}
          <Link
            to="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-white/60 transition hover:text-[color:var(--gold)]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-[color:var(--gold)]/40 bg-[color:var(--gold)]/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[color:var(--gold)]">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-white/50">
              <Calendar className="h-3.5 w-3.5" />
              {post.date}
            </span>
          </div>

          <h1 className="mt-6 max-w-3xl font-display text-4xl font-black leading-[1.05] tracking-tight md:text-6xl">
            {post.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* ── Article Body ─────────────────────────────────────────────────── */}
      <section className="bg-background py-16 md:py-24">
        <ScrollReveal>
          <article className="container-luxe mx-auto max-w-3xl">
            {post.content.map((paragraph, i) => {
              const [leadIn, rest] = splitLeadIn(paragraph);
              return (
                <div key={i} className={i > 0 ? "mt-8" : undefined}>
                  {leadIn ? (
                    <>
                      <h3 className="font-display text-lg font-bold text-foreground md:text-xl">
                        {leadIn}
                      </h3>
                      <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                        {rest}
                      </p>
                    </>
                  ) : (
                    <p className="text-base leading-relaxed text-muted-foreground">{paragraph}</p>
                  )}
                </div>
              );
            })}

            {/* Bottom back + next nudge */}
            <div className="mt-16 flex items-center gap-4 border-t border-border pt-8">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]"
              >
                <ArrowLeft className="h-4 w-4" />
                All articles
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--gold)] px-5 py-2.5 text-sm font-semibold text-black transition hover:scale-[1.03] hover:bg-[color:var(--gold-hover)] hover:shadow-lg hover:shadow-[color:var(--gold)]/20"
              >
                Book a consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        </ScrollReveal>
      </section>

      {/* ── CTA Band ─────────────────────────────────────────────────────── */}
      <CTABand />
    </>
  );
}
