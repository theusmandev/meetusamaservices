import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Video, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { useNavScroll } from "../hooks/use-nav-scroll";

const services = [
  { to: "/services/uk-ltd", label: "UK LTD Registration" },
  { to: "/services/us-llc", label: "US LLC Registration" },
  { to: "/services/wise", label: "Wise Business" },
  { to: "/services/payoneer", label: "Payoneer Business" },
  { to: "/services/paypal", label: "PayPal Business" },
  { to: "/services/stripe", label: "Stripe Account" },
  { to: "/services/shopify", label: "Shopify Store Designing" },
  { to: "/services/tiktok-shop", label: "TikTok Shop" },
  { to: "/services/tiktok-agency-account", label: "TikTok Agency Account" },
  

] as const;

const links = [
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/blog", label: "Blog" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

const legal = [
  { to: "/privacy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms & Conditions" },
  { to: "/refund-policy", label: "Refund Policy" },
] as const;

export function SiteFooter() {
  const handleNavClick = useNavScroll();

  return (
    <footer className="bg-black text-white">
      <div className="container-luxe py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" onClick={handleNavClick("/")} className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-[color:var(--gold)] font-display text-xl font-black text-black">
                M
              </span>
              <span className="font-display text-xl font-bold">
                Meet Usama <span className="text-[color:var(--gold)]"></span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              Global business consultancy helping entrepreneurs register companies,
              open international payment accounts, and scale worldwide.
            </p>
            <div className="mt-6 space-y-2.5 text-sm text-white/70">
              <a href="mailto:contact@meetusama.com" className="flex items-center gap-2.5 hover:text-[color:var(--gold)]">
                <Mail className="h-4 w-4 text-[color:var(--gold)]" /> contact@meetusama.com
              </a>
              <a href="tel:+447824035366" className="flex items-center gap-2.5 hover:text-[color:var(--gold)]">
                <Phone className="h-4 w-4 text-[color:var(--gold)]" /> +447824035366
              </a>
              <span className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-[color:var(--gold)]" /> 42 Rose Avenue, London, United Kingdom
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} onClick={handleNavClick(l.to)} className="transition hover:text-[color:var(--gold)]">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {services.slice(0, 6).map((l) => (
                <li key={l.to}>
                  <Link to={l.to} onClick={handleNavClick(l.to)} className="transition hover:text-[color:var(--gold)]">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Resources</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {legal.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} onClick={handleNavClick(l.to)} className="transition hover:text-[color:var(--gold)]">{l.label}</Link>
                </li>
              ))}
              <li><Link to="/blog" onClick={handleNavClick("/blog")} className="transition hover:text-[color:var(--gold)]">Blog</Link></li>
            </ul>
           
            
            
          <div className="mt-6 flex gap-3">
              {[
                { Icon: Youtube, url: "https://www.youtube.com/@meetusama" },
                { Icon: Instagram, url: "https://www.instagram.com/meet_usama" },
                { Icon: Facebook, url: "https://www.facebook.com/meetusamaimtiaz" },
                { Icon: Video, url: "https://www.tiktok.com/@meet_usama" }, // TikTok yahan add ho gaya
                { Icon: Linkedin, url: "https://www.linkedin.com/in/usama-imtiaz-078a18399/" }
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Social"
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-[color:var(--gold)] transition hover:border-[color:var(--gold)] hover:bg-[color:var(--gold)] hover:text-black"
                >
                  <item.Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Meet Usama Services. All rights reserved.</p>
          {/* <p>Crafted with precision for global entrepreneurs.</p> */}
        </div>
      </div>
    </footer>
  );
}
