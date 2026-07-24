import { SEO } from "../../components/SEO";
import { Users, ShieldCheck } from "lucide-react";
import { ServicePage } from "../../components/service-page";

export default function TikTokAgencyPage() {
  return (
    <>
      <SEO title="TikTok Agency Account | Meet Usama" description="TikTok Agency account setup with secure balance protection — managed for you." />
      <ServicePage data={{
      eyebrow: "Service · Advertising",
      title: "TikTok",
      gold: "Agency Account.",
      subtitle: "Run your TikTok ad campaigns smoothly through a dedicated agency account, with balance protection and expert support.",
      icon: Users,
      timeline: "3–7 business days",
      price: "5000 PKR",
      includes: [
        "TikTok Agency account setup",
        "No self top-up required — fully managed for you",
        "Account recovery if any issue occurs",
        "Ongoing account support",
      ],
      bullets: [
        "Run TikTok ad campaigns through a dedicated, professionally set up agency account.",
        "No need to handle top-ups yourself — the account is managed on your behalf.",
        "Focus on your campaigns instead of account management overhead.",
      ],
      requirements: [
        "A working website (required)",
      ],
      notice: (
        <div className="flex items-start gap-3 rounded-xl border border-[color:var(--gold)]/30 bg-[color:var(--gold)]/10 px-4 py-4">
          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--gold)]" />
          <p className="text-sm leading-relaxed text-muted-foreground">
            <strong className="text-foreground">Balance Protection Guarantee:</strong>{" "}
            If your agency account ever faces an issue, we will rebuild it for you — and your ad balance stays fully protected.
          </p>
        </div>
      ),
    }} />
    </>
  );
}
