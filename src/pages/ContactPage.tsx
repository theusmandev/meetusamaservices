
import { useState } from "react";
import { PageHero } from "../components/page-hero";
import { Users, Clock, Globe2, ShieldCheck, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

// Aap ka original Google Apps Script endpoint
const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyPEsa5iA2UyMfDVc94B6N-qNp1gCwPOBE3emVwnChuFFmwhIuxhlsU0BlkimQpo10/exec";

const inputCls =
  "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground/60 focus:border-[color:var(--gold)] focus:ring-2 focus:ring-[color:var(--gold)]/30";

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
      {children}
    </label>
  );
}

function Input(p: { label: string; name: string; type?: string; required?: boolean; autoComplete?: string; placeholder?: string }) {
  return (
    <div>
      <Label>{p.label}</Label>
      <input
        name={p.name}
        type={p.type ?? "text"}
        required={p.required}
        autoComplete={p.autoComplete}
        placeholder={p.placeholder}
        spellCheck={false}
        data-gramm="false"
        className={inputCls}
      />
    </div>
  );
}

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setSubmitting(true);
    
    // Yahan hum ne wapas aap ka purana reliable tarika laga diya ha
    fetch(APPS_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    }).finally(() => {
      setSubmitting(false);
      setSent(true);
      form.reset(); // Data send honay ke baad form khali kar dega
      
      // 5 second baad success message hata dega
      setTimeout(() => {
        setSent(false);
      }, 5000);
    });
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let's build your <span className="text-gradient-gold">global business.</span></>}
        subtitle="Share a few details and we'll get back within one business day with a clear roadmap and honest pricing."
      />

      <section className="bg-background py-20 md:py-28">
        <div className="container-luxe">
          <div className="grid overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-luxe)] lg:grid-cols-[1fr_1.2fr]">
            <div className="relative overflow-hidden bg-black p-10 text-white md:p-12">
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-40 blur-3xl"
                style={{ background: "radial-gradient(circle, #DBA626, transparent 70%)" }}
              />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--gold)]">Direct contact</p>
              <h2 className="mt-3 font-display text-3xl font-black leading-tight">Reach us directly.</h2>
              <div className="mt-8 space-y-5">
                {[
                  { icon: Mail, label: "Email", value: "contact@meetusama.com" },
                  { icon: Phone, label: "Phone", value: "+447824035366" },
                  { icon: MapPin, label: "Offices", value: "42 Rose Avenue, London, United Kingdom" },
                  { icon: Clock, label: "Response Time", value: "Within 24 hours" },
                  { icon: Globe2, label: "Coverage", value: "Serving 20+ countries" },
                  { icon: ShieldCheck, label: "Confidentiality", value: "Encrypted, NDA-ready" },
                ].map((i) => (
                  <div key={i.label} className="flex items-start gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/5 text-[color:var(--gold)]">
                      <i.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-[11px] uppercase tracking-widest text-white/50">{i.label}</p>
                      <p className="text-sm font-semibold text-white">{i.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-8 md:p-12">
              <div className="grid gap-4 sm:grid-cols-2">
                <Input label="Full Name" name="Name" autoComplete="name" required />
                <Input label="Email" name="Email" type="email" autoComplete="email" required />
                <Input label="WhatsApp Number" name="WhatsApp" autoComplete="tel" placeholder="+44 7…" />
                <Input label="Country" name="Country" autoComplete="country-name" placeholder="United Kingdom" />
                <div className="sm:col-span-2">
                  <Label>Service Required</Label>
                  <select name="Service" className={inputCls}>
                    {["UK LTD Registration", "US LLC Registration", "Wise", "Payoneer", "PayPal", "Stripe", "Shopify", "Amazon", "Other"].map((x) => (
                      <option key={x}>{x}</option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <Label>Message</Label>
                  <textarea
                    rows={5}
                    name="Message"
                    placeholder="Tell us about your business…"
                    spellCheck={false}
                    data-gramm="false"
                    className={inputCls}
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={submitting || sent}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--gold)] px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-[color:var(--gold-hover)] disabled:opacity-70"
              >
                {sent ? "Message received" : submitting ? "Sending…" : "Send Message"}{" "}
                <ArrowRight className="h-4 w-4" />
              </button>
              <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
                <Users className="h-4 w-4 text-[color:var(--gold)]" /> 5,000+ businesses served since 2015
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}















// import { useState } from "react";
// import { PageHero } from "../components/page-hero";
// import { Users, Clock, Globe2, ShieldCheck, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

// // Google Apps Script endpoint — do not change URL or no-cors mode
// const APPS_SCRIPT_URL =
//   "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec";

// const inputCls =
//   "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground/60 focus:border-[color:var(--gold)] focus:ring-2 focus:ring-[color:var(--gold)]/30";

// function Label({ children }: { children: React.ReactNode }) {
//   return (
//     <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
//       {children}
//     </label>
//   );
// }

// function Input(p: { label: string; name: string; type?: string; required?: boolean; autoComplete?: string; placeholder?: string }) {
//   return (
//     <div>
//       <Label>{p.label}</Label>
//       <input
//         name={p.name}
//         type={p.type ?? "text"}
//         required={p.required}
//         autoComplete={p.autoComplete}
//         placeholder={p.placeholder}
//         spellCheck={false}
//         data-gramm="false"
//         className={inputCls}
//       />
//     </div>
//   );
// }

// export default function ContactPage() {
//   const [sent, setSent] = useState(false);
//   const [submitting, setSubmitting] = useState(false);

//   function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     const form = e.currentTarget;
//     const data = new FormData(form);
//     const payload: Record<string, string> = {};
//     data.forEach((v, k) => { payload[k] = v.toString(); });

//     setSubmitting(true);
//     fetch(APPS_SCRIPT_URL, {
//       method: "POST",
//       mode: "no-cors",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(payload),
//     }).finally(() => {
//       setSubmitting(false);
//       setSent(true);
//     });
//   }

//   return (
//     <>
//       <PageHero
//         eyebrow="Contact"
//         title={<>Let's build your <span className="text-gradient-gold">global business.</span></>}
//         subtitle="Share a few details and we'll get back within one business day with a clear roadmap and honest pricing."
//       />

//       <section className="bg-background py-20 md:py-28">
//         <div className="container-luxe">
//           <div className="grid overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-luxe)] lg:grid-cols-[1fr_1.2fr]">
//             <div className="relative overflow-hidden bg-black p-10 text-white md:p-12">
//               <div
//                 className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-40 blur-3xl"
//                 style={{ background: "radial-gradient(circle, #DBA626, transparent 70%)" }}
//               />
//               <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--gold)]">Direct contact</p>
//               <h2 className="mt-3 font-display text-3xl font-black leading-tight">Reach us directly.</h2>
//               <div className="mt-8 space-y-5">
//                 {[
//                   { icon: Mail, label: "Email", value: "hello@meetusama.com" },
//                   { icon: Phone, label: "Phone", value: "+44 123 456 7890" },
//                   { icon: MapPin, label: "Offices", value: "London · New York · Dubai" },
//                   { icon: Clock, label: "Response Time", value: "Within 24 hours" },
//                   { icon: Globe2, label: "Coverage", value: "Serving 50+ countries" },
//                   { icon: ShieldCheck, label: "Confidentiality", value: "Encrypted, NDA-ready" },
//                 ].map((i) => (
//                   <div key={i.label} className="flex items-start gap-3">
//                     <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/5 text-[color:var(--gold)]">
//                       <i.icon className="h-5 w-5" />
//                     </span>
//                     <div>
//                       <p className="text-[11px] uppercase tracking-widest text-white/50">{i.label}</p>
//                       <p className="text-sm font-semibold text-white">{i.value}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <form onSubmit={handleSubmit} className="p-8 md:p-12">
//               <div className="grid gap-4 sm:grid-cols-2">
//                 <Input label="Full Name" name="name" autoComplete="name" required />
//                 <Input label="Email" name="email" type="email" autoComplete="email" required />
//                 <Input label="WhatsApp Number" name="whatsapp" autoComplete="tel" placeholder="+44 7…" />
//                 <Input label="Country" name="country" autoComplete="country-name" placeholder="United Kingdom" />
//                 <div className="sm:col-span-2">
//                   <Label>Service Required</Label>
//                   <select name="service" className={inputCls}>
//                     {["UK LTD Registration", "US LLC Registration", "Wise", "Payoneer", "PayPal", "Stripe", "Shopify", "Amazon", "Other"].map((x) => (
//                       <option key={x}>{x}</option>
//                     ))}
//                   </select>
//                 </div>
//                 <div className="sm:col-span-2">
//                   <Label>Message</Label>
//                   <textarea
//                     rows={5}
//                     name="message"
//                     placeholder="Tell us about your business…"
//                     spellCheck={false}
//                     data-gramm="false"
//                     className={inputCls}
//                   />
//                 </div>
//               </div>
//               <button
//                 type="submit"
//                 disabled={submitting || sent}
//                 className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--gold)] px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-[color:var(--gold-hover)] disabled:opacity-70"
//               >
//                 {sent ? "Message received" : submitting ? "Sending…" : "Send Message"}{" "}
//                 <ArrowRight className="h-4 w-4" />
//               </button>
//               <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
//                 <Users className="h-4 w-4 text-[color:var(--gold)]" /> 5,000+ businesses served since 2015
//               </div>
//             </form>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
