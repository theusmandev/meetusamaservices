import { SEO } from "../../components/SEO";
import { FileCheck2 } from "lucide-react";
import { ServicePage } from "../../components/service-page";

export default function UKLtdDirectorVerificationPage() {
  return (
    <>
      <SEO title="Uk LTD Director Verification | Meet Usama Services" description="Verify your UK LTD director details and maintain company compliance with expert assistance." />
      <ServicePage data={{
      eyebrow: "Service · Compliance",
      title: "UK LTD",
      gold: "Director Verification.",
      subtitle: "Ensure your UK LTD director details match official records to maintain compliance and avoid account holds.",
      icon: FileCheck2,
      timeline: "2–5 business days",
      price: "5000 PKR",
      includes: [
        "Director identity verification",
        "Company records cross-check",
        "Documentation review and preparation",
        "Compliance guidance for Companies House requirements",
        "Support with re-verification if flagged",
        "Direct assistance resolving verification issues",
      ],
      bullets: [
        "Keep your UK LTD compliant and avoid penalties or company strike-off due to unverified director details.",
        "Ensure your director's information matches official company records to prevent delays with banks or payment platforms.",
        "Resolve existing verification flags or mismatches quickly with expert support.",
      ],
      requirements: [
        "UK LTD company registration documents",
        "Director's valid government-issued ID",
        "Proof of director's personal address",
        "Company registration/incorporation number",
      ],
    }} />
    </>
  );
}
