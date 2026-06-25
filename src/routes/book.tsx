import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/muse/Footer";
import { VagaroWidget } from "@/components/muse/VagaroWidget";
import { useState, useEffect } from "react";
import { PolicyModal } from "@/components/muse/PolicyModal"; 

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book Your Visit — MUSE Aesthetics & Spa by Missi" },
      { name: "description", content: "Schedule your appointment at MUSE Aesthetics & Spa in Shrewsbury, MA." },
      { property: "og:title", content: "Book Your Visit — MUSE Aesthetics & Spa" },
      { property: "og:description", content: "Reserve your moment of quiet luxury." },
    ],
  }),
  component: BookPage,
});

function BookPage() {
  // ESTADOS
  const [isPolicyModalOpen, setIsPolicyModalOpen] = useState(true); // Controla o Pop-up obrigatório
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);    // Controla a sanfona de texto na página

  // Verifica se o usuário já aceitou a política nesta sessão
  useEffect(() => {
    if (sessionStorage.getItem("muse_policy_accepted")) {
      setIsPolicyModalOpen(false);
    }
  }, []);

  // Função para fechar o pop-up e gravar a confirmação
  const handleAcceptPolicy = () => {
    setIsPolicyModalOpen(false);
    sessionStorage.setItem("muse_policy_accepted", "1");
  };

  return (
    <section className="pt-40 pb-28 px-6">
      
      {/* RENDERIZA O MODAL DE POLÍTICA POR CIMA DE TUDO */}
      <PolicyModal 
        isOpen={isPolicyModalOpen} 
        onClose={handleAcceptPolicy} 
      />

      <div className="mx-auto max-w-5xl text-center">
        <SectionLabel>RESERVATIONS</SectionLabel>
        <h1 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl text-gold-gradient">Schedule Your Visit</h1>
        <p className="mt-6 text-foreground/70 max-w-xl mx-auto">
          Choose the moment that's right for you. We honor a single guest at a time.
        </p>

        {/* =========================================
            CANCELLATION POLICY (ACCORDION ESTÁTICO)
            ========================================= */}
        <div className="mt-8 max-w-2xl mx-auto border-t border-b border-gold/20 py-6">
          <button
            onClick={() => setIsAccordionOpen(!isAccordionOpen)}
            className="flex items-center justify-center w-full gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-foreground/70 hover:text-gold transition-colors"
          >
            <span>Cancellation Policy</span>
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${isAccordionOpen ? 'rotate-180 text-gold' : ''}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isAccordionOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="p-6 md:p-8 bg-[#FCFAF8] border border-gold/20 rounded-sm text-sm text-foreground/75 leading-relaxed text-left md:text-center shadow-inner">
              <p>
                We ask that you please reschedule or cancel at least <strong className="text-[#631F37] font-semibold">24 hours</strong> before the beginning of your appointment or you may be charged a cancellation fee. We have a firm 24-hour cancellation policy.
              </p>
              <p className="mt-4">
                Cancelling within 24 hours results in a fee of <strong className="text-[#631F37] font-semibold">30% of the service total</strong>. Same day cancellations or no-shows result in a <strong className="text-[#631F37] font-semibold">full service price</strong> charge.
              </p>
            </div>
          </div>
        </div>
        {/* FIM DA CANCELLATION POLICY */}

        <div className="mt-12 bg-white rounded-sm border border-gold/20 flex justify-center py-8">
          <VagaroWidget />
        </div>
        
        <p className="mt-6 text-xs text-foreground/60">
          Trouble loading?{" "}
          <a
            href="https://www.vagaro.com/mizzmissiaesthetics"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline-offset-4 hover:underline"
          >
            Book directly on Vagaro
          </a>
          .
        </p>
      </div>
    </section>
  );
}