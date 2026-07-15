import { Link } from "react-router-dom";
import { MessageCircle, CalendarCheck } from "lucide-react";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      <Link
        to="/contact"
        className="group hidden items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white shadow-2xl ring-1 ring-[color:var(--gold)]/50 transition hover:-translate-y-0.5 hover:bg-[color:var(--gold)] hover:text-black sm:inline-flex"
      >
        <CalendarCheck className="h-4 w-4 text-[color:var(--gold)] group-hover:text-black" />
        Book Consultation
      </Link>
      <a
        href="https://wa.me/447824035366"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_15px_40px_-10px_rgba(37,211,102,0.6)] transition hover:-translate-y-0.5"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
