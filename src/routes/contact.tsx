import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SectionLabel } from "@/components/muse/Footer";
import { VagaroWidget } from '@/components/muse/VagaroWidget';

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
          <ContactForm />
        </div>

        {/* --- ÁREA DE AGENDAMENTO COM O WIDGET --- */}
        <div className="mt-20">
          <SectionLabel>RESERVATIONS</SectionLabel>
          <div className="mt-10 bg-white rounded-sm border border-gold/20 py-8">
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    const subject = encodeURIComponent(`Inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:hello@mizzmissi.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="p-8 border border-gold/20 rounded-sm bg-card/40 flex flex-col gap-4"
    >
      <h2 className="font-display text-[10px] tracking-[0.3em] text-gold mb-1">SEND A MESSAGE</h2>
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        maxLength={100}
        required
        className="bg-transparent border-b border-gold/30 px-1 py-2 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-gold"
      />
      <input
        type="email"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        maxLength={255}
        required
        className="bg-transparent border-b border-gold/30 px-1 py-2 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-gold"
      />
      <textarea
        placeholder="How can we help?"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        maxLength={1000}
        required
        rows={5}
        className="bg-transparent border-b border-gold/30 px-1 py-2 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-gold resize-none"
      />
      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center px-8 py-3 text-[11px] uppercase tracking-[0.3em] text-background gold-gradient rounded-sm hover:opacity-90 transition-all"
      >
        {sent ? "Sent ✓" : "Send"}
      </button>
    </form>
  );
}