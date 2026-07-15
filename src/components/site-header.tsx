import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavScroll } from "../hooks/use-nav-scroll";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/blog", label: "Blog" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const handleNavClick = useNavScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-black/85 backdrop-blur-xl border-b border-[color:var(--gold)]/20"
          : "bg-black"
      }`}
    >
      <div className="container-luxe flex h-16 items-center justify-between md:h-20">
        <Link to="/" onClick={handleNavClick("/")} className="group flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-[color:var(--gold)] font-display text-lg font-black text-black">
            M
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-white">
            Meet Usama <span className="text-[color:var(--gold)]">Services</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              onClick={handleNavClick(n.to)}
              className={({ isActive }) =>
                `group relative px-3 py-2 text-sm font-medium transition hover:text-[color:var(--gold)] ${
                  isActive ? "text-[color:var(--gold)]" : "text-white/90"
                }`
              }
            >
              {n.label}
              <span className="absolute inset-x-3 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-[color:var(--gold)] transition-transform duration-300 group-hover:scale-x-100" />
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/contact"
            onClick={handleNavClick("/contact")}
            className="inline-flex items-center rounded-full bg-[color:var(--gold)] px-5 py-2.5 text-sm font-semibold text-black shadow-[0_10px_30px_-10px_rgba(219,166,38,0.7)] transition hover:bg-[color:var(--gold-hover)] hover:-translate-y-0.5"
          >
            Book Consultation
          </Link>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-lg text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-black md:hidden">
          <div className="container-luxe flex flex-col gap-1 py-4">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                onClick={handleNavClick(n.to, () => setOpen(false))}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-white/5 hover:text-[color:var(--gold)] ${
                    isActive ? "text-[color:var(--gold)] bg-white/5" : "text-white/90"
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={handleNavClick("/contact", () => setOpen(false))}
              className="mt-2 rounded-full bg-[color:var(--gold)] px-5 py-2.5 text-center text-sm font-semibold text-black"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
