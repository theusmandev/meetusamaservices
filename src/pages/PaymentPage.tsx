import { useState, useMemo, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Copy, Check, Upload, Loader2, CheckCircle2, ArrowLeft, Info, X, Clock } from "lucide-react";
import { PageHero } from "../components/page-hero";

// 🔧 Yahan apna Google Apps Script Web App URL daalein (deploy karne ke baad milega)
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbys27wtyItXmdB5L9fLwz4GX9-YZA_EITdS67rIDAM3IusekOpbrH4Sqr94dx6YkFmX/exec";

const PAYMENT_METHODS = {
  easypaisa: {
    label: "Easypaisa",
    fields: [
      { label: "Account Title", value: "Meet Usama Services" },
      { label: "Easypaisa Number", value: "0300-1234567" },
    ],
  },
  jazzcash: {
    label: "JazzCash",
    fields: [
      { label: "Account Title", value: "Meet Usama Services" },
      { label: "JazzCash Number", value: "0300-7654321" },
    ],
  },
  payfast: {
    label: "Payfast",
    fields: [
      { label: "Account Title", value: "Meet Usama Services" },
      { label: "Payfast Account", value: "PF-000000000" },
    ],
  },
  crypto: {
    label: "Crypto (USDT – TRC20)",
    fields: [
      { label: "Network", value: "TRC20 (Tron)" },
      { label: "Wallet Address", value: "TXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" },
    ],
  },
  bank: {
    label: "Bank Transfer",
    fields: [
      { label: "Bank Name", value: "Meezan Bank" },
      { label: "Account Title", value: "Meet Usama Services" },
      { label: "Account Number", value: "0123456789012" },
      { label: "IBAN", value: "PK00MEZN0000000123456789" },
    ],
  },
} as const;

type MethodKey = keyof typeof PAYMENT_METHODS;

function CopyField({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="flex items-center justify-between gap-3 rounded-xl border border-border bg-background px-4 py-3">
      <div className="min-w-0">
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="truncate font-mono text-sm font-semibold">{value}</p>
      </div>
      <button
        type="button"
        onClick={handleCopy}
        className="flex shrink-0 items-center gap-1.5 rounded-lg bg-[color:var(--gold)]/10 px-3 py-2 text-xs font-semibold text-[color:var(--gold)] ring-1 ring-[color:var(--gold)]/30 transition hover:bg-[color:var(--gold)]/20"
      >
        {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}

// ─── Refund Policy Modal ──────────────────────────────────────────────────────
interface RefundPolicyModalProps {
  onAgree: () => void;
  onCancel: () => void;
  submitting: boolean;
  serviceFee: string;   // formatted e.g. "PKR 50,000" or empty string
  refundAmount: string; // formatted e.g. "PKR 49,000" or empty string
}

function RefundPolicyModal({ onAgree, onCancel, submitting, serviceFee, refundAmount }: RefundPolicyModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="refund-modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onCancel}
      />

      {/* Modal card */}
      <div className="relative z-10 w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl border border-[color:var(--gold)]/30 bg-card p-6 md:p-8 shadow-[var(--shadow-luxe)]">
        {/* Close button */}
        <button
          type="button"
          onClick={onCancel}
          className="absolute right-4 top-4 rounded-lg p-1.5 text-muted-foreground transition hover:bg-[color:var(--gold)]/10 hover:text-[color:var(--gold)]"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <h2
          id="refund-modal-title"
          className="font-display text-xl font-black md:text-2xl"
        >
          Refund{" "}
          <span className="text-gradient-gold">Policy</span>
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Please read carefully before submitting your payment.
        </p>

        {/* Policy content */}
        <div className="mt-5 space-y-4 text-sm text-muted-foreground">
          {/* Applicable section */}
          <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4">
            <p className="mb-3 font-semibold text-emerald-400">✅ Refund Policy</p>
            <p className="mb-3 text-foreground">
              Our services are digital and consultancy-based. Because of this, refunds are handled under the following terms:
            </p>
            <ul className="mb-4 space-y-2">
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                <span>A refund is only applicable if a delay or issue is caused directly from our side.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                <span>
                  If approved, refunds are <strong>not processed immediately</strong> — they are processed at the end of the current month and transferred on the <strong>10th of the following month.</strong>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                <span>A refund also applies if a third-party platform (Wise, Stripe, PayPal, government body, etc.) rejects the application.</span>
              </li>
            </ul>

            {/* Refund Breakdown Box */}
            {serviceFee ? (
              <div className="mb-4 rounded-lg border border-border/50 bg-background/50 p-4 shadow-sm">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-emerald-400/80">Refund Breakdown</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Service Fee:</span>
                    <span className="font-medium text-foreground">{serviceFee}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Processing Fee (deducted):</span>
                    <span className="font-medium text-foreground">PKR 1,000</span>
                  </div>
                  <div className="mt-3 flex justify-between items-center border-t border-border/50 pt-3">
                    <span className="font-semibold text-foreground">Amount Refunded:</span>
                    <strong className="text-lg text-[color:var(--gold)]">{refundAmount}</strong>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mb-4 rounded-lg border border-border/50 bg-background/50 px-4 py-3 text-sm text-muted-foreground italic shadow-sm">
                Service fee will be confirmed by our team.
              </div>
            )}

            {/* Highlighted note */}
            <div className="flex items-center gap-2.5 rounded-lg bg-emerald-500/10 px-4 py-3 text-emerald-400">
              <Clock className="h-5 w-5 shrink-0" />
              <span>
                Refund requests are only accepted within <strong>30 days</strong> of payment.
              </span>
            </div>
          </div>

          {/* Non-applicable section */}
          <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-4">
            <p className="mb-3 font-semibold text-red-400">❌ Refund will NOT be given if:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                <span>The client changes their mind after work has already started.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                <span>The client learns the process from us and then requests a refund.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                <span>Required documents or information were not provided by the client.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                <span>The refund involves government or platform fees, which are non-refundable in some cases.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Note */}
        <p className="mt-6 text-center text-xs leading-relaxed text-muted-foreground">
          By proceeding with payment, you confirm that you have read and agree to this refund policy.
        </p>

        {/* Actions */}
        <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row">
          <button
            type="button"
            onClick={onCancel}
            disabled={submitting}
            className="flex flex-1 items-center justify-center rounded-full border border-border px-5 py-3 text-sm font-semibold transition hover:border-[color:var(--gold)] hover:text-[color:var(--gold)] disabled:cursor-not-allowed disabled:opacity-60"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onAgree}
            disabled={submitting}
            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[color:var(--gold)] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[color:var(--gold-hover)] hover:scale-[1.02] hover:shadow-lg hover:shadow-[color:var(--gold)]/20 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
            {submitting ? "Submitting…" : "I Agree & Submit"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function PaymentPage() {
  const [searchParams] = useSearchParams();
  const prefilledService = searchParams.get("service") || "";
  const prefilledPrice   = searchParams.get("price")   || "";

  // Format price for display: "5000" → "PKR 5,000"
  const formatPKR = (n: number) => `PKR ${n.toLocaleString("en-PK")}`;
  const displayPrice  = prefilledPrice ? formatPKR(Number(prefilledPrice)) : "";
  const serviceFee    = prefilledPrice ? formatPKR(Number(prefilledPrice)) : "";
  const refundAmount  = prefilledPrice ? formatPKR(Math.max(0, Number(prefilledPrice) - 1000)) : "";

  const [name,        setName]        = useState("");
  const [whatsapp,    setWhatsapp]    = useState("");
  const [service,     setService]     = useState(prefilledService);
  const [method,      setMethod]      = useState<MethodKey | "">("");
  const [message,     setMessage]     = useState("");
  const [file,        setFile]        = useState<File | null>(null);
  const [fileError,   setFileError]   = useState("");
  const [submitting,  setSubmitting]  = useState(false);
  const [submitted,   setSubmitted]   = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [showModal,   setShowModal]   = useState(false);

  useEffect(() => {
    if (submitted) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [submitted]);

  const selectedMethod = useMemo(() => (method ? PAYMENT_METHODS[method] : null), [method]);

  const handleFile = (f: File | null) => {
    setFileError("");
    if (!f) return setFile(null);
    if (f.size > 5 * 1024 * 1024) {
      setFileError("File 5MB se zyada hai. Chhoti size ki screenshot upload karein.");
      setFile(null);
      return;
    }
    if (!f.type.startsWith("image/") && f.type !== "application/pdf") {
      setFileError("Sirf image ya PDF file upload karein.");
      setFile(null);
      return;
    }
    setFile(f);
  };

  const fileToBase64 = (f: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve((reader.result as string).split(",")[1]);
      reader.onerror = reject;
      reader.readAsDataURL(f);
    });

  // Validate → open modal (actual fetch happens in performSubmit)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    if (!name || !whatsapp || !service || !method || !file) {
      setSubmitError("Please fill in your details, complete the payment, upload the payment screenshot, and submit the form.");
      return;
    }

    // Validation passed — show the refund policy modal
    setShowModal(true);
  };

  // Called when user clicks "I Agree & Submit" inside the modal
  const performSubmit = async () => {
    setShowModal(false);
    setSubmitting(true);
    setSubmitError("");
    try {
      const base64File = await fileToBase64(file!);

      const payload = {
        name,
        whatsapp,
        service,
        price: displayPrice || "To be confirmed",
        paymentMethod: selectedMethod?.label,
        message,
        fileName: file!.name,
        fileType: file!.type,
        fileData: base64File,
      };

      const res = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" }, // preflight avoid karne ke liye
        body: JSON.stringify(payload),
      });

      const result = await res.json();
      if (!result.success) throw new Error(result.error || "Submission failed");

      setSubmitted(true);
    } catch {
      setSubmitError("Kuch masla ho gaya. Please dobara koshish karein ya WhatsApp par sample bhejein.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <>
        <PageHero
          eyebrow="Payment"
          title={<>Thank you, <span className="text-gradient-gold">{name}!</span></>}
          subtitle="Aapki payment details receive ho gayi hain. Hamari team jald aapse WhatsApp par rabta karegi."
        />
        <section className="bg-background py-16">
          <div className="container-luxe max-w-lg text-center">
            <div className="rounded-2xl border border-border bg-card p-8">
              <CheckCircle2 className="mx-auto h-14 w-14 text-[color:var(--gold)]" />
              <p className="mt-4 text-sm text-muted-foreground">
                Confirmation ke liye humara WhatsApp check karte rahein.
              </p>
              <Link
                to="/"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-[color:var(--gold)] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[color:var(--gold-hover)] hover:scale-[1.03] hover:shadow-lg hover:shadow-[color:var(--gold)]/20"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Refund policy modal */}
      {showModal && (
        <RefundPolicyModal
          onAgree={performSubmit}
          onCancel={() => setShowModal(false)}
          submitting={submitting}
          serviceFee={serviceFee}
          refundAmount={refundAmount}
        />
      )}

      <PageHero
        eyebrow="Payment"
        title={<>Complete Your <span className="text-gradient-gold">Payment.</span></>}
        subtitle="Apni details fill karein, payment karein, aur screenshot upload kar ke submit kar dein."
      >
        <p className="text-sm text-white/60">
          Please read our{" "}
          <Link
            to="/refund-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[color:var(--gold)] underline underline-offset-2 hover:text-[color:var(--gold)]/80"
          >
            Refund Policy
          </Link>{" "}
          before proceeding with payment.
        </p>
      </PageHero>

      <section className="bg-background py-16 md:py-20">
        <div className="container-luxe max-w-2xl">
          <Link
            to="/services"
            className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition hover:text-[color:var(--gold)]"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Services
          </Link>

          <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-border bg-card p-6 md:p-8">
            {/* Name + WhatsApp */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  name="name"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-[color:var(--gold)]"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  WhatsApp No. <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  name="tel"
                  autoComplete="tel"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="+92 3XX XXXXXXX"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-[color:var(--gold)]"
                />
              </div>
            </div>

            {/* Service */}
            <div>
              <label className="mb-2 block text-sm font-semibold">
                Service Required <span className="text-red-500">*</span>
              </label>
              <input
                required
                value={service}
                onChange={(e) => setService(e.target.value)}
                placeholder="e.g. UK LTD Registration"
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-[color:var(--gold)]"
              />
            </div>

            {/* Amount to Pay — auto-filled from URL, read-only */}
            {displayPrice ? (
              <div>
                <label className="mb-2 block text-sm font-semibold">Amount to Pay</label>
                <div className="flex items-center gap-3 rounded-xl border border-[color:var(--gold)]/40 bg-[color:var(--gold)]/5 px-4 py-3">
                  <span className="font-mono text-2xl font-black text-[#252525]">
                    {displayPrice}
                  </span>
                </div>
              </div>
            ) : (
              <div>
                <label className="mb-2 block text-sm font-semibold">Amount to Pay</label>
                <div className="rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-muted-foreground italic">
                  Amount will be confirmed by our team.
                </div>
              </div>
            )}

            {/* ── Task 1: Instruction note above payment method selector ── */}
            <div className="flex items-start gap-3 rounded-xl border border-[color:var(--gold)]/30 bg-[color:var(--gold)]/8 px-4 py-3.5">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold)]" />
              <p className="text-sm leading-relaxed text-[color:var(--gold)]/90">
                <strong>How to pay:</strong> Select a payment method below, transfer the exact amount to the account details shown, take a screenshot of the transaction, upload it here, and then hit Submit.
              </p>
            </div>

            {/* Payment method */}
            <div>
              <label className="mb-2 block text-sm font-semibold">
                Select Payment Method <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                {(Object.keys(PAYMENT_METHODS) as MethodKey[]).map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setMethod(key)}
                    className={`rounded-xl border px-3 py-3 text-sm font-semibold transition ${
                      method === key
                        ? "border-[color:var(--gold)] bg-[color:var(--gold)]/10 text-[color:var(--gold)]"
                        : "border-border bg-background text-foreground hover:border-[color:var(--gold)]/40"
                    }`}
                  >
                    {PAYMENT_METHODS[key].label}
                  </button>
                ))}
              </div>
            </div>

            {/* Account details */}
            {selectedMethod && (
              <div className="space-y-2.5 rounded-2xl border border-border bg-background/60 p-5">
                <p className="mb-1 text-sm font-bold text-[color:var(--gold)]">
                  {selectedMethod.label} Details
                </p>
                {selectedMethod.fields.map((f) => (
                  <CopyField key={f.label} label={f.label} value={f.value} />
                ))}
              </div>
            )}

            {/* Upload screenshot */}
            <div>
              <label className="mb-2 block text-sm font-semibold">
                Upload Payment Screenshot <span className="text-red-500">*</span>
              </label>
              <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border bg-background px-4 py-8 text-center transition hover:border-[color:var(--gold)]/50">
                <Upload className="h-6 w-6 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  {file ? file.name : "Click to upload (max 5MB, image or PDF)"}
                </span>
                <input
                  type="file"
                  accept="image/*,application/pdf"
                  className="hidden"
                  onChange={(e) => handleFile(e.target.files?.[0] || null)}
                />
              </label>
              {fileError && <p className="mt-2 text-xs text-red-500">{fileError}</p>}
            </div>

            {/* Message */}
            <div>
              <label className="mb-2 block text-sm font-semibold">Any message for us</label>
              <textarea
                name="message"
                autoComplete="off"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                placeholder="Optional notes..."
                className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-[color:var(--gold)]"
              />
            </div>

            {submitError && <p className="text-sm text-red-500">{submitError}</p>}

            <button
              type="submit"
              disabled={submitting}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--gold)] px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-[color:var(--gold-hover)] hover:scale-[1.02] hover:shadow-lg hover:shadow-[color:var(--gold)]/20 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
              {submitting ? "Submitting… please wait😊" : "Submit Payment Details"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}