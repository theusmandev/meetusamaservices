import { SEO } from "../components/SEO";
import { PageHero } from "../components/page-hero";
import { 
  CheckCircle2, 
  XCircle, 
  Briefcase, 
  Building2, 
  Wallet, 
  Clock, 
  CalendarClock, 
  Mail, 
  CheckSquare 
} from "lucide-react";

export default function RefundPolicyPage() {
  return (
    <>
      <SEO title="Refund Policy | Meet Usama" description="Read our refund policy before making a payment for any Meet Usama consultancy service." />
      <>
      <PageHero
        eyebrow="Legal"
        title="Refund Policy"
        subtitle="Last Updated: July 17, 2026"
      />
      <section className="bg-background py-16 md:py-24">
        <article className="container-luxe mx-auto max-w-3xl space-y-6">

            {/* ── Section 1 ── */}
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <h2 className="flex items-center gap-3 font-display text-2xl font-bold">
                <Briefcase className="h-6 w-6 text-[color:var(--gold)]" />
                Nature of Our Services
              </h2>
              <p className="mt-4 text-muted-foreground">
                Meet Usama provides digital consultancy and business support services. We
                assist clients with setting up and verifying business accounts on platforms such as
                Wise, PayPal, Stripe, Payoneer, and other financial or business service providers.
              </p>
              <p className="mt-3 text-muted-foreground">
                Our role is to guide clients throughout the entire process by providing professional
                consultation, reviewing documentation, assisting with applications, and helping
                ensure that all required information is submitted accurately and in accordance with
                each platform's requirements.
              </p>
              <p className="mt-3 text-muted-foreground">
                We make every reasonable effort to help our clients successfully complete the
                requested service. However,{" "}
                <strong>
                  the final approval, verification, or acceptance of any application is solely at
                  the discretion of the respective platform, financial institution, or government
                  authority.
                </strong>{" "}
                Therefore, we cannot guarantee approval in every case.
              </p>
              <p className="mt-3 text-muted-foreground">
                If, despite our efforts and the client's full cooperation, we are unable to complete
                the requested service or successfully create the requested account, the client may be
                eligible for a refund in accordance with the terms and conditions outlined in this
                Refund Policy.
              </p>
            </div>

            {/* ── Section 2 ── */}
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6 md:p-8">
              <h2 className="font-display text-2xl font-bold text-emerald-400">Refund Eligibility</h2>
              <p className="mt-4 font-medium text-foreground">A refund may be approved if:</p>
              <ul className="mt-4 space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                  <span>The requested service cannot be completed despite the client's full cooperation and submission of all required documents and information.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                  <span>The delay or issue is directly caused by our team.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                  <span>Our team determines that we are unable to deliver the service as agreed.</span>
                </li>
              </ul>
              <p className="mt-5 text-muted-foreground">
                Each refund request is reviewed individually. Approval is not automatic and depends
                on the circumstances of the case.
              </p>
            </div>

            {/* ── Section 3 ── */}
            <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6 md:p-8">
              <h2 className="font-display text-2xl font-bold text-red-400">
                Situations Where Refunds Are Not Available
              </h2>
              <p className="mt-4 font-medium text-foreground">
                Refunds will not be issued in the following circumstances:
              </p>
              <ul className="mt-4 space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                  <span>The client changes their mind after work has started.</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                  <span>The client receives consultation, guidance, or learns the complete process and then requests a refund.</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                  <span>The client fails to provide the required documents, information, verification, or cooperation necessary to complete the service.</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                  <span>Incorrect, incomplete, or misleading information is provided by the client.</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                  <span>Delays occur because the client does not respond promptly or fails to complete required verification steps.</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                  <span>Government, platform, or compliance requirements change after the service has begun.</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                  <span>Government application fees, registration fees, or third-party platform charges that are non-refundable under their own policies.</span>
                </li>
              </ul>
            </div>

            {/* ── Section 4 ── */}
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <h2 className="flex items-center gap-3 font-display text-2xl font-bold">
                <Building2 className="h-6 w-6 text-[color:var(--gold)]" />
                Third-Party Platforms
              </h2>
              <p className="mt-4 text-muted-foreground">
                Many of our services involve third-party companies and authorities, including but
                not limited to Wise, PayPal, Stripe, Payoneer, banks, payment processors, and
                government agencies.
              </p>
              <p className="mt-3 text-muted-foreground">
                Although we provide professional assistance throughout the process,{" "}
                <strong>
                  the final decision regarding approval, verification, suspension, limitation, or
                  rejection always rests with the respective platform or authority.
                </strong>
              </p>
              <p className="mt-3 text-muted-foreground">
                We are not responsible for decisions made by third-party platforms based on their
                internal compliance, risk assessment, Know Your Customer (KYC), Anti-Money
                Laundering (AML), or other regulatory policies.
              </p>
              <p className="mt-3 text-muted-foreground">
                However, if we are unable to successfully complete the requested account setup or
                service, you may be eligible for a refund according to this Refund Policy.
              </p>
            </div>

            {/* ── Section 5 ── */}
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <h2 className="flex items-center gap-3 font-display text-2xl font-bold">
                <Wallet className="h-6 w-6 text-[color:var(--gold)]" />
                Service Fee Deduction
              </h2>
              <p className="mt-4 text-muted-foreground">
                Our standard consultancy fee is <strong className="font-bold text-[color:var(--gold)]">PKR 5,000</strong> per service.
              </p>
              <p className="mt-3 text-muted-foreground">If a refund is approved:</p>
              <ul className="ml-5 mt-3 list-disc space-y-2 text-muted-foreground">
                <li>
                  A <strong className="font-bold text-[color:var(--gold)]">PKR 1,000</strong> service and processing fee will be deducted.
                </li>
                <li>
                  The remaining <strong className="font-bold text-[color:var(--gold)]">PKR 4,000</strong> will be refunded to the client.
                </li>
              </ul>
            </div>

            {/* ── Section 6 ── */}
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <h2 className="flex items-center gap-3 font-display text-2xl font-bold">
                <Clock className="h-6 w-6 text-[color:var(--gold)]" />
                Refund Processing Time
              </h2>
              <p className="mt-4 text-muted-foreground">
                Approved refunds are not processed immediately. Instead:
              </p>
              <ul className="ml-5 mt-3 list-disc space-y-2 text-muted-foreground">
                <li>
                  Refunds are processed at the{" "}
                  <strong className="font-bold text-[color:var(--gold)]">end of the same calendar month</strong>.
                </li>
                <li>
                  Payments are issued on the{" "}
                  <strong className="font-bold text-[color:var(--gold)]">10th day of the following month</strong>.
                </li>
              </ul>
              <p className="mt-3 text-muted-foreground">
                Please ensure that your payment details are accurate before the refund is
                processed.
              </p>
            </div>

            {/* ── Section 7 ── */}
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <h2 className="flex items-center gap-3 font-display text-2xl font-bold">
                <CalendarClock className="h-6 w-6 text-[color:var(--gold)]" />
                Refund Request Deadline
              </h2>
              <p className="mt-4 text-muted-foreground">
                Refund requests must be submitted <strong className="font-bold text-[color:var(--gold)]">within 30 days</strong> from the original
                payment date. Requests received after this period will not be considered.
              </p>
            </div>

            {/* ── Section 8 ── */}
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <h2 className="flex items-center gap-3 font-display text-2xl font-bold">
                <Mail className="h-6 w-6 text-[color:var(--gold)]" />
                Contact Us
              </h2>
              <p className="mt-4 text-muted-foreground">
                If you believe you are eligible for a refund or have any questions regarding this
                policy, please contact our support team with your order details. We will review your
                request and respond as soon as reasonably possible.
              </p>
            </div>

            {/* ── Section 9 ── */}
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <h2 className="flex items-center gap-3 font-display text-2xl font-bold">
                <CheckSquare className="h-6 w-6 text-[color:var(--gold)]" />
                Acceptance of This Policy
              </h2>
              <p className="mt-4 text-muted-foreground">
                By purchasing any service from Meet Usama, you confirm that:
              </p>
              <ul className="ml-5 mt-3 list-disc space-y-2 text-muted-foreground">
                <li>You have read and understood this Refund Policy.</li>
                <li>You agree to all of the terms and conditions described above.</li>
                <li>
                  You accept this Refund Policy before making any payment for our services.
                </li>
              </ul>
            </div>

            <p className="mt-10 px-4 text-sm text-muted-foreground">
              Questions about this policy? Contact us at contact@meetusama.com.
            </p>
          </article>
      </section>
    </>
    </>
  );
}
