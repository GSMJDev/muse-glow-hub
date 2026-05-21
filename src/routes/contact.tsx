import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/muse/Footer";

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
          <div className="p-8 border border-gold/20 rounded-sm bg-card/40">
            <h2 className="font-display text-[10px] tracking-[0.3em] text-gold mb-3">VISIT</h2>
            <p className="text-sm text-foreground/75 leading-relaxed">284 Boston Tpke<br />Shrewsbury, MA 01545</p>
          </div>
          <div className="p-8 border border-gold/20 rounded-sm bg-card/40">
            <h2 className="font-display text-[10px] tracking-[0.3em] text-gold mb-3">CALL</h2>
            <a href="tel:+17745591684" className="text-sm text-foreground/80 hover:text-gold transition-colors">+1 (774) 559-1684</a>
          </div>
        </div>

        <div className="mt-20">
          <SectionLabel>RESERVATIONS</SectionLabel>
          <h2 className="mt-6 font-serif text-3xl md:text-4xl lg:text-5xl text-gold-gradient">
            Book Your Visit
          </h2>
          <div className="mt-10 bg-white rounded-sm border border-gold/20 overflow-hidden">
            <iframe
              title="Book on Vagaro"
              src="https://www.vagaro.com/mizzmissiaesthetics"
              className="w-full"
              style={{ height: "900px", border: 0 }}
              loading="lazy"
            />
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