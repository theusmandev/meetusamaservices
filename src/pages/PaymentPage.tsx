import { useState, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Copy, Check, Upload, Loader2, CheckCircle2, ArrowLeft } from "lucide-react";
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

export default function PaymentPage() {
  const [searchParams] = useSearchParams();
  const prefilledService = searchParams.get("service") || "";

  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [service, setService] = useState(prefilledService);
  const [method, setMethod] = useState<MethodKey | "">("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    if (!name || !whatsapp || !service || !method || !file) {
      setSubmitError("Please fill in your details, complete the payment, upload the payment screenshot, and submit the form.");
      return;
    }

    setSubmitting(true);
    try {
      const base64File = await fileToBase64(file);

      const payload = {
        name,
        whatsapp,
        service,
        paymentMethod: selectedMethod?.label,
        message,
        fileName: file.name,
        fileType: file.type,
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
    } catch (err) {
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
      <PageHero
        eyebrow="Payment"
        title={<>Complete Your <span className="text-gradient-gold">Payment.</span></>}
        subtitle="Apni details fill karein, payment karein, aur screenshot upload kar ke submit kar dein."
      />

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
                <label className="mb-2 block text-sm font-semibold">Name</label>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-[color:var(--gold)]"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold">WhatsApp No.</label>
                <input
                  required
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="+92 3XX XXXXXXX"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-[color:var(--gold)]"
                />
              </div>
            </div>

            {/* Service */}
            <div>
              <label className="mb-2 block text-sm font-semibold">Service Required</label>
              <input
                required
                value={service}
                onChange={(e) => setService(e.target.value)}
                placeholder="e.g. UK LTD Registration"
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-[color:var(--gold)]"
              />
            </div>

            {/* Payment method */}
            <div>
              <label className="mb-2 block text-sm font-semibold">Select Payment Method</label>
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
              <label className="mb-2 block text-sm font-semibold">Upload Payment Screenshot</label>
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
              {submitting ? "Submitting..." : "Submit Payment Details"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}