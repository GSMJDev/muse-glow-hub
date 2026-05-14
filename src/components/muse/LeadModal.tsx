import { useEffect, useState } from "react";

export function LeadModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("muse_modal_seen")) return;
    const t = setTimeout(() => setOpen(true), 5000);
    return () => clearTimeout(t);
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
        className="relative w-full max-w-lg rounded-sm border border-burgundy/30 p-10 md:p-14 text-center shadow-2xl bg-background"
      >
        <button
          aria-label="Close"
          onClick={close}
          className="absolute top-4 right-4 text-gold/70 hover:text-gold transition-colors p-2"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M6 6l12 12M6 18L18 6" />
          </svg>
        </button>
        <p className="font-display text-[10px] tracking-[0.4em] text-gold/80 mb-5">MUSE · INVITATION</p>
        <h3 className="font-serif text-3xl md:text-4xl text-gold-gradient leading-tight">
          The Power of a Perfect Treatment
        </h3>
        <p className="mt-5 text-sm md:text-base text-foreground/75 leading-relaxed">
          Reserve your complimentary consultation and discover a treatment plan crafted entirely around your skin.
        </p>
        <a
          href="#book"
          onClick={close}
          className="mt-8 inline-flex items-center justify-center px-10 py-4 text-[11px] uppercase tracking-[0.3em] text-background gold-gradient rounded-sm hover:opacity-90 transition-all"
        >
          Book Now!
        </a>
        <p className="mt-5 text-[10px] uppercase tracking-[0.25em] text-foreground/40">By appointment only</p>
      </div>
    </div>
  );
}