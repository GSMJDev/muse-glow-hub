import { createFileRoute } from "@tanstack/react-router";
import { useForm, ValidationError } from "@formspree/react";
import { SectionLabel } from "@/components/muse/Footer";
import { VagaroWidget } from '@/components/muse/VagaroWidget';
import { useState } from "react"; // IMPORT PARA A POLÍTICA FUNCIONAR

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — MUSE Aesthetics & Spa by Missi" },
      { name: "description", content: "Visit MUSE Aesthetics & Spa at 284 Boston Tpke, Shrewsbury, MA. Call or email to inquire." },
      { property: "og:title", content: "Contact — MUSE Aesthetics & Spa" },
      { property: "og:description", content: "Get in touch with MUSE Aesthetics & Spa by Missi." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  // ESTADO PARA A GAVETA DA POLÍTICA
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);

  return (
    <section className="pt-40 pb-28 px-6">
      <div className="mx-auto max-w-4xl text-center">
        <SectionLabel>SAY HELLO</SectionLabel>
        <h1 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl text-gold-gradient">Contact</h1>
        <p className="mt-6 text-foreground/70 max-w-xl mx-auto">
          By appointment only — we look forward to welcoming you.
        </p>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="flex flex-col gap-6">
            <div className="p-8 border border-gold/20 rounded-sm bg-card/40">
              <h2 className="font-display text-[10px] tracking-[0.3em] text-gold mb-3">VISIT</h2>
              <p className="text-sm text-foreground/75 leading-relaxed">
                284 Boston Tpke<br />Shrewsbury, MA 01545
              </p>
            </div>
            <div className="p-8 border border-gold/20 rounded-sm bg-card/40">
              <h2 className="font-display text-[10px] tracking-[0.3em] text-gold mb-3">CALL</h2>
              <a
                href="tel:+17745591684"
                className="text-sm text-foreground/80 hover:text-gold transition-colors"
              >
                +1 (774) 559-1684
              </a>
            </div>
          </div>
          
          {/* Formulário integrado com Formspree */}
          <ContactForm />
        </div>

        {/* --- ÁREA DE AGENDAMENTO COM O WIDGET --- */}
        <div className="mt-20">
          <SectionLabel>RESERVATIONS</SectionLabel>

          {/* =========================================
              CANCELLATION POLICY (ACCORDION)
              ========================================= */}
          <div className="mt-8 max-w-2xl mx-auto border-t border-b border-gold/20 py-6">
            <button
              onClick={() => setIsPolicyOpen(!isPolicyOpen)}
              className="flex items-center justify-center w-full gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-foreground/70 hover:text-gold transition-colors"
            >
              <span>Cancellation Policy</span>
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${isPolicyOpen ? 'rotate-180 text-gold' : ''}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isPolicyOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
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

          <div className="mt-10 bg-white rounded-sm border border-gold/20 py-8 flex justify-center">
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
      </div>
    </section>
  );
}

function ContactForm() {
  const [state, handleSubmit] = useForm("maqkrajd");

  // Mantém o mesmo container visual, mas mostra o feedback de sucesso de forma sutil
  if (state.succeeded) {
    return (
      <div className="p-8 border border-gold/20 rounded-sm bg-card/40 flex flex-col justify-center items-center text-center gap-3 min-h-[340px]">
        <h2 className="font-display text-[10px] tracking-[0.3em] text-gold uppercase">THANK YOU</h2>
        <p className="text-sm text-foreground/80 max-w-xs leading-relaxed">
          Your message has been sent. Missi will review your inquiry and get in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 border border-gold/20 rounded-sm bg-card/40 flex flex-col gap-4"
    >
      <h2 className="font-display text-[10px] tracking-[0.3em] text-gold mb-1">SEND A MESSAGE</h2>
      
      <div>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Your name"
          maxLength={100}
          required
          className="w-full bg-transparent border-b border-gold/30 px-1 py-2 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-gold"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-400 text-xs mt-1 block" />
      </div>

      <div>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email address"
          maxLength={255}
          required
          className="w-full bg-transparent border-b border-gold/30 px-1 py-2 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-gold"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs mt-1 block" />
      </div>

      <div>
        <textarea
          id="message"
          name="message"
          placeholder="How can we help?"
          maxLength={1000}
          required
          rows={5}
          className="w-full bg-transparent border-b border-gold/30 px-1 py-2 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-gold resize-none"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-xs mt-1 block" />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="mt-2 inline-flex items-center justify-center px-8 py-3 text-[11px] uppercase tracking-[0.3em] text-background gold-gradient rounded-sm hover:opacity-90 transition-all disabled:opacity-50"
      >
        {state.submitting ? "Sending..." : "Send"}
      </button>
      {state.errors && (
        <p className="text-red-400 text-[11px] text-center tracking-wider uppercase mt-1">
           Error sending. Please try again.
        </p>
      )}
    </form>
  );
}