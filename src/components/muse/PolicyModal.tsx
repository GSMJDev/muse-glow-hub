import { useState, useRef } from "react";

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PolicyModal({ isOpen, onClose }: PolicyModalProps) {
  const [hasRead, setHasRead] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Função que checa se o usuário rolou até o final da caixa
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      // Se chegou no final (com uma margem de erro de 10px para telas sensíveis)
      if (scrollTop + clientHeight >= scrollHeight - 10) {
        setHasRead(true);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 animate-in fade-in duration-300">
      {/* Fundo escuro focado no Modal */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Caixa do Pop-up */}
      <div className="relative w-full max-w-2xl bg-[#FCFAF8] shadow-2xl flex flex-col max-h-[85vh] rounded-sm border border-[#631F37]/10 z-10">
        
        {/* Cabeçalho */}
        <div className="p-6 md:p-8 pb-4 text-center border-b border-[#631F37]/10 shrink-0">
          <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-[#631F37]/60 block mb-3">
            Muse · Policies
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#631F37] italic">
            Cancellation Policy
          </h2>
        </div>

        {/* Caixa de Texto com Rolagem Obrigatória */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="p-6 md:p-8 overflow-y-auto text-sm text-foreground/75 leading-relaxed space-y-5 flex-grow relative"
        >
          <p>
            At <strong className="text-[#631F37] font-medium">Muse Aesthetics & Spa</strong>, your appointments are very important to us. We understand that sometimes circumstances change, and you may need to cancel or reschedule your visit. 
          </p>
          <p>
            To honor the single guest nature of our spa and the time of our specialists, we have established a firm cancellation policy.
          </p>

          <h3 className="font-serif text-lg text-[#631F37] pt-2">24-Hour Notice</h3>
          <p>
            We require at least 24 hours notice for any cancellations or rescheduling of appointments. This allows us the opportunity to offer that time to another guest.
          </p>

          <h3 className="font-serif text-lg text-[#631F37] pt-2">Late Cancellations</h3>
          <p>
            Cancellations made within 24 hours of the scheduled appointment will result in a fee equivalent to <strong className="text-[#631F37] font-medium">30% of the service total</strong>.
          </p>

          <h3 className="font-serif text-lg text-[#631F37] pt-2">No-Shows</h3>
          <p>
            Failure to show up for your appointment without prior notice will result in a <strong className="text-[#631F37] font-medium">full service charge (100%)</strong>. 
          </p>
          
          <p className="pt-4 text-xs italic text-foreground/50 text-center pb-2">
            You have reached the end of the policy.
          </p>
        </div>

        {/* Rodapé com o Botão de Confirmação */}
        <div className="p-6 bg-white border-t border-[#631F37]/10 flex flex-col items-center shrink-0">
          
          {/* Mensagem de alerta enquanto o usuário não rola até o final */}
          {!hasRead && (
            <span className="text-[10px] text-[#631F37]/70 uppercase tracking-widest mb-3 animate-pulse text-center">
              ↓ Please scroll to the bottom to agree ↓
            </span>
          )}

          {/* Botão Principal */}
          <button
            disabled={!hasRead}
            onClick={onClose}
            className={`w-full py-4 text-[10px] md:text-[11px] uppercase tracking-[0.3em] rounded-sm transition-all duration-500 ${
              hasRead 
                ? "bg-[#631F37] text-white hover:bg-[#631F37]/90 shadow-lg cursor-pointer" 
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            I have read and agree to the policies
          </button>
        </div>

      </div>
    </div>
  );
}