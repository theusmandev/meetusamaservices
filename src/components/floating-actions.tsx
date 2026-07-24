

// Inline WhatsApp SVG logo — no extra dependency needed
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M16.003 2.667C8.638 2.667 2.667 8.638 2.667 16c0 2.354.64 4.643 1.854 6.638L2.667 29.333l6.907-1.812A13.3 13.3 0 0 0 16.003 29.333C23.365 29.333 29.333 23.362 29.333 16S23.365 2.667 16.003 2.667Zm0 24.267a11.012 11.012 0 0 1-5.618-1.537l-.402-.24-4.099 1.075 1.096-4L6.73 21.8A11.005 11.005 0 0 1 5.001 16c0-6.074 4.945-11.005 11.002-11.005 6.059 0 11.002 4.931 11.002 11.005 0 6.073-4.943 10.939-11.002 10.939Zm6.034-8.235c-.33-.165-1.952-.963-2.255-1.072-.303-.11-.524-.165-.744.165-.22.33-.853 1.072-1.046 1.293-.192.22-.385.247-.715.083-.33-.165-1.394-.514-2.655-1.638-.981-.874-1.644-1.953-1.836-2.283-.193-.33-.021-.508.145-.673.15-.148.33-.385.495-.578.165-.192.22-.33.33-.55.11-.22.055-.413-.028-.578-.083-.165-.744-1.793-1.02-2.454-.268-.644-.54-.557-.744-.567-.192-.009-.413-.011-.634-.011a1.215 1.215 0 0 0-.881.413c-.303.33-1.155 1.128-1.155 2.75s1.183 3.192 1.348 3.412c.165.22 2.327 3.554 5.641 4.986.789.34 1.404.543 1.884.695.791.252 1.51.216 2.08.131.634-.095 1.952-.798 2.228-1.569.275-.771.275-1.431.193-1.569-.082-.138-.303-.22-.634-.385Z" />
    </svg>
  );
}

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {/* WhatsApp floating button with pulse ring */}
      <div className="relative">
        {/* Pulse ring */}
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
        <a
          href="https://wa.me/447824035366"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.55)] transition duration-300 hover:scale-110 hover:bg-[#1EBE5A] hover:shadow-[0_12px_40px_rgba(37,211,102,0.7)]"
        >
          <WhatsAppIcon className="h-7 w-7" />
        </a>
      </div>
    </div>
  );
}
