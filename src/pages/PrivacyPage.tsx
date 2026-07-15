import { PageHero } from "../components/page-hero";
import { ScrollReveal } from "../components/ScrollReveal";

const sections = [
  { title: "Information we collect", body: "We collect the information you provide when submitting our contact form or engaging our services, including your name, email, phone number, country and business details." },
  { title: "How we use information", body: "We use your information solely to respond to enquiries, deliver requested services, and communicate updates related to your engagement. We do not sell your data." },
  { title: "Document handling", body: "Identification and business documents are handled through encrypted channels and retained only for the duration required by law and our service agreement." },
  { title: "Third parties", body: "We may share limited information with regulatory authorities, banking partners or platforms strictly as required to complete requested services on your behalf." },
  { title: "Your rights", body: "You may request access, correction or deletion of your personal information at any time by contacting us. We will respond within a reasonable timeframe." },
  { title: "Cookies", body: "Our website uses minimal cookies for functionality and anonymous analytics. You can disable cookies in your browser at any time." },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" subtitle="Last updated: January 2026" />
      <section className="bg-background py-16 md:py-24">
        <ScrollReveal>
          <article className="container-luxe prose prose-neutral mx-auto max-w-3xl">
            <p className="text-muted-foreground">
              This page is maintained by Meet Usama Services and describes how we
              handle personal information collected through our website and during
              client engagements.
            </p>

            {sections.map((s) => (
              <div key={s.title} className="mt-10">
                <h2 className="font-display text-2xl font-bold">{s.title}</h2>
                <p className="mt-3 text-muted-foreground">{s.body}</p>
              </div>
            ))}

            <p className="mt-10 text-sm text-muted-foreground">
              Questions about this policy? Contact us at contact@meetusama.com.
            </p>
          </article>
        </ScrollReveal>
      </section>
    </>
  );
}
