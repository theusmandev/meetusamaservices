import { SEO } from "../components/SEO";
import { PageHero } from "../components/page-hero";
import { ScrollReveal } from "../components/ScrollReveal";

const sections = [
  { title: "Acceptance of terms", body: "By using our website or engaging our services, you agree to these terms and conditions in full." },
  { title: "Services", body: "We provide business consultancy services including company formation and payment account activation guidance. All services are performed on a best-efforts basis." },
  { title: "Client responsibilities", body: "You are responsible for providing accurate information and valid documentation. We are not liable for delays or refusals caused by incorrect or incomplete information." },
  { title: "Fees & refunds", body: "Fees are payable in advance unless otherwise agreed. Government and third-party fees are non-refundable once incurred." },
  { title: "Limitation of liability", body: "Our liability is limited to the fees paid for the specific service. We are not liable for indirect or consequential losses." },
  { title: "Governing law", body: "These terms are governed by the laws of England & Wales. Any disputes will be resolved in the courts of London." },
];

export default function TermsPage() {
  return (
    <>
      <SEO title="Terms & Conditions | Meet Usama Services" description="The terms and conditions governing use of Meet Usama Services and our consultancy services." />
      <>
      <PageHero eyebrow="Legal" title="Terms & Conditions" subtitle="Last updated: January 2026" />
      <section className="bg-background py-16 md:py-24">
        <ScrollReveal>
          <article className="container-luxe mx-auto max-w-3xl">
            {sections.map((s) => (
              <div key={s.title} className="mt-8 first:mt-0">
                <h2 className="font-display text-2xl font-bold">{s.title}</h2>
                <p className="mt-3 text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </article>
        </ScrollReveal>
      </section>
    </>
    </>
  );
}
