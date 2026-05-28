import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/muse/Footer";
import { VagaroWidget } from "@/components/muse/VagaroWidget";

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
  return (
    <section className="pt-40 pb-28 px-6">
      <div className="mx-auto max-w-5xl text-center">
        <SectionLabel>RESERVATIONS</SectionLabel>
        <h1 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl text-gold-gradient">Schedule Your Visit</h1>
        <p className="mt-6 text-foreground/70 max-w-xl mx-auto">
          Choose the moment that's right for you. We honor a single guest at a time.
        </p>
        <div className="mt-12">
          <VagaroWidget />
        </div>
        <div className="mt-12 bg-white rounded-sm border border-gold/20 overflow-hidden">
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
    </section>
  );
}