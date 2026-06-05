import { useEffect, useState } from "react";

const VAGARO_URL = "https://www.vagaro.com/mizzmissiaesthetics";

const featured = [
  { name: "Signature Deep Cleansing Facial", duration: "50 min" },
  { name: "Lymphatic Drainage Detox + Hot Blanket", duration: "75 min" },
  { name: "Full Brazilian Wax", duration: "20 min" },
];

export function LeadModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("muse_modal_seen")) return;
    const show = () => {
      if (sessionStorage.getItem("muse_modal_seen")) return;
      setOpen(true);
    };
    const t = setTimeout(show, 10000);
    const onExit = (e: MouseEvent) => {
      if (e.clientY <= 0) show();
    };
    document.addEventListener("mouseleave", onExit);
    return () => {
      clearTimeout(t);
      document.removeEventListener("mouseleave", onExit);
    };
  }, []);

  const close = () => {
    setOpen(false);
    sessionStorage.setItem("muse_modal_seen", "1");
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 animate-in fade-in duration-500"
      role="dialog"
      aria-modal="true"
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={close} />
      <div
        className="relative w-full max-w-lg rounded-sm border border-burgundy/30 p-6 sm:p-10 md:p-14 text-center shadow-2xl bg-background max-h-[90vh] overflow-y-auto"
      >
        <button
          aria-label="Close"
          onClick={close}
          className="absolute top-2 right-2 md:top-4 md:right-4 text-gold/70 hover:text-gold transition-colors p-2"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M6 6l12 12M6 18L18 6" />
          </svg>
        </button>
        <p className="font-display text-[10px] tracking-[0.4em] text-gold/80 mb-4 md:mb-5 mt-2 md:mt-0">MUSE · INVITATION</p>
        <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-gold-gradient leading-tight">
          Treatments crafted for you
        </h3>
        <p className="mt-3 md:mt-5 text-sm md:text-base text-foreground/75 leading-relaxed">
          Reserve one of our most-loved experiences and feel the Mizz Missi difference.
        </p>
        <ul className="mt-6 space-y-3 md:space-y-2 text-left">
          {featured.map((f) => (
            <li
              key={f.name}
              className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gold/15 pb-2 md:pb-2 gap-1 sm:gap-4 text-sm text-foreground/80"
            >
              <span className="font-medium sm:font-normal">{f.name}</span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold/70">{f.duration}</span>
            </li>
          ))}
        </ul>
        <a
          href={VAGARO_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={close}
          className="mt-8 flex md:inline-flex w-full md:w-auto items-center justify-center px-10 py-4 text-[11px] uppercase tracking-[0.3em] text-background gold-gradient rounded-sm hover:opacity-90 transition-all"
        >
          Book on Vagaro
        </a>
        <p className="mt-5 text-[10px] uppercase tracking-[0.25em] text-foreground/40">By appointment only</p>
      </div>
    </div>
  );
}