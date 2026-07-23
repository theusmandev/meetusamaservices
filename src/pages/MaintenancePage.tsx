import { MessageCircle, Youtube, Instagram, Facebook, Video, Linkedin } from "lucide-react";

const socials = [
  { Icon: Youtube,   url: "https://www.youtube.com/@meetusama",                     label: "YouTube" },
  { Icon: Instagram, url: "https://www.instagram.com/meet_usama",                   label: "Instagram" },
  { Icon: Facebook,  url: "https://www.facebook.com/meetusamaimtiaz",               label: "Facebook" },
  { Icon: Video,     url: "https://www.tiktok.com/@meet_usama",                     label: "TikTok" },
  { Icon: Linkedin,  url: "https://www.linkedin.com/in/usama-imtiaz-078a18399/",    label: "LinkedIn" },
];

export default function MaintenancePage() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black px-6 py-12 md:py-20 text-white">
      {/* Background radial glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(55% 45% at 50% 0%, rgba(219,166,38,0.22), transparent 70%), radial-gradient(40% 40% at 80% 80%, rgba(219,166,38,0.10), transparent 70%)",
        }}
      />
      {/* Subtle grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-lg flex-col items-center text-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-[color:var(--gold)] font-display text-2xl font-black text-black">
            M
          </span>
          <span className="font-display text-2xl font-bold tracking-tight">
            Meet Usama <span className="text-[color:var(--gold)]">Services</span>
          </span>
        </div>

        {/* Eyebrow pill */}
        <p className="mt-10 inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/40 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--gold)]">
          Scheduled Maintenance
        </p>

        {/* Heading */}
        <h1 className="mt-6 font-display text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
          We'll Be{" "}
          <span
            className="text-transparent"
            style={{
              backgroundImage: "linear-gradient(135deg, #DBA626 0%, #F5C842 50%, #DBA626 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            Right Back
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-md text-base leading-relaxed text-white/65">
          We're currently performing scheduled maintenance to improve your experience.
          Please check back shortly.
        </p>

        {/* WhatsApp CTA */}
        <a
          href="https://wa.me/447824035366"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2.5 rounded-full bg-[color:var(--gold)] px-7 py-3.5 text-sm font-semibold text-black shadow-[0_15px_40px_-12px_rgba(219,166,38,0.65)] transition hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-[color:var(--gold-hover)]"
        >
          <MessageCircle className="h-4 w-4" />
          Chat on WhatsApp
        </a>

        {/* Divider */}
        <div className="mt-12 flex w-full items-center gap-4">
          <span className="h-px flex-1 bg-white/10" />
          <span className="text-xs text-white/30 uppercase tracking-widest">Follow us</span>
          <span className="h-px flex-1 bg-white/10" />
        </div>

        {/* Social icons */}
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {socials.map(({ Icon, url, label }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-[color:var(--gold)] transition hover:border-[color:var(--gold)] hover:bg-[color:var(--gold)] hover:text-black"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-12 text-xs text-white/30">
          © {new Date().getFullYear()} Meet Usama Services. All rights reserved.
        </p>
      </div>
    </div>
  );
}
