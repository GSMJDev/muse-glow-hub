import { useEffect, useState } from "react";
import museLogo from "@/assets/muse-logo.png";

const VAGARO_URL = "https://www.vagaro.com/mizzmissiaesthetics";

// Lista atualizada com 3 serviços reais da sua clínica
const featured = [
  { name: "Deep Cleansing Facial Mizz Missi", duration: "50 min" },
  { name: "Lymphatic Drainage", duration: "60 min" },
  { name: "Full Brazilian Wax", duration: "30 min" },
];

export function LeadModal() {
  const [open, setOpen] = useState(false);
  const [modalType, setModalType] = useState<"services" | "newsletter" | null>(null);

  useEffect(() => {
    if (sessionStorage.getItem("muse_modal_seen")) return;

    const timer = setTimeout(() => {
      if (!sessionStorage.getItem("muse_modal_seen")) {
        setModalType("services");
        setOpen(true);
      }
    }, 5000);

    const onExit = (e: MouseEvent) => {
      if (e.clientY <= 0 && !sessionStorage.getItem("muse_modal_seen")) {
        setModalType("newsletter");
        setOpen(true);
      }
    };

    document.addEventListener("mouseleave", onExit);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", onExit);
    };
  }, []);

  const close = () => {
    setOpen(false);
    sessionStorage.setItem("muse_modal_seen", "1");
  };

  if (!open || !modalType) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pt-16 md:p-4 animate-in fade-in duration-500"
      role="dialog"
      aria-modal="true"
    >
      {/* Overlay escuro de fundo - clica fora pra fechar */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={close} />
      
      {/* Container Principal do Modal */}
      <div className="relative w-full max-w-3xl rounded-sm border border-gold/20 shadow-2xl bg-background overflow-hidden flex flex-col md:grid md:grid-cols-2 max-h-[85vh] mt-4 z-10">
        
        {/* Botão de Fechar "X" Movido para dentro da caixa, longe do menu */}
        <button
          aria-label="Close"
          onClick={close}
          className="absolute top-2 right-2 z-50 flex items-center justify-center w-10 h-10 rounded-full bg-background/60 backdrop-blur-md text-foreground/70 hover:text-foreground hover:bg-background/80 transition-colors shadow-sm"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Imagem - Altura ajustada no mobile pra sobrar mais tela */}
        <div className="relative w-full h-36 md:h-full bg-muted shrink-0 border-b md:border-b-0 md:border-r border-gold/10">
          <img 
            src={museLogo} 
            alt="MUSE Logo" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Área de Conteúdo */}
        <div className="p-6 md:p-12 flex flex-col justify-center text-center overflow-y-auto">
          {modalType === "services" ? (
            <>
              <p className="font-display text-[10px] tracking-[0.4em] text-gold/80 mb-3 md:mb-4">MUSE · INVITATION</p>
              <h3 className="font-serif text-2xl md:text-3xl text-gold-gradient leading-tight">Treatments crafted for you</h3>
              <p className="mt-3 md:mt-4 text-xs md:text-sm text-foreground/75 leading-relaxed">
                Reserve one of our most-loved experiences and feel the MUSE difference.
              </p>
              <ul className="mt-5 md:mt-6 space-y-3 text-left">
                {featured.map((f) => (
                  <li key={f.name} className="flex justify-between border-b border-gold/15 pb-2 text-xs md:text-sm text-foreground/80">
                    <span className="font-medium pr-2">{f.name}</span>
                    <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-gold/70 whitespace-nowrap">{f.duration}</span>
                  </li>
                ))}
              </ul>
              <a
                href={VAGARO_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="mt-6 md:mt-8 flex w-full items-center justify-center py-3.5 md:py-4 text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-background gold-gradient rounded-sm hover:opacity-90 transition-all"
              >
                Book on Vagaro
              </a>
            </>
          ) : (
            <>
              <p className="font-display text-[10px] tracking-[0.4em] text-gold/80 mb-3 md:mb-4">JOIN THE LIST</p>
              <h3 className="font-serif text-2xl md:text-3xl text-gold-gradient leading-tight">Elevate your glow.</h3>
              <p className="mt-3 md:mt-4 text-xs md:text-sm text-foreground/75 leading-relaxed">
                Receive special offers, priority bookings, and private invitations — straight to your inbox.
              </p>
              <form className="mt-6 md:mt-8 flex flex-col gap-3" onSubmit={(e) => { e.preventDefault(); close(); }}>
                <input 
                  type="email" 
                  name="email"
                  placeholder="Enter your email address" 
                  required
                  autoFocus
                  className="w-full px-4 py-3 bg-transparent border border-gold/30 rounded-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-gold transition-colors text-sm"
                />
                <button
                  type="submit"
                  className="w-full flex items-center justify-center py-3.5 md:py-4 text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-background gold-gradient rounded-sm hover:opacity-90 transition-all"
                >
                  Subscribe
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}