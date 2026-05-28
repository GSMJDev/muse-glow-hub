import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/muse/Footer";

const VAGARO = "https://www.vagaro.com/mizzmissiaesthetics/gift-certificates";

export const Route = createFileRoute("/gift-card")({
  head: () => ({
    meta: [
      { title: "Gift Cards — MUSE By Missi Aesthetics" },
      { name: "description", content: "The gift of glow — Muse By Missi Aesthetics gift cards, beautifully presented and endlessly personal." },
      { property: "og:title", content: "Gift Cards — MUSE By Missi" },
      { property: "og:description", content: "Give the gift of luxury skincare and wellness." },
    ],
  }),
  component: GiftCardPage,
});

function GiftCardPage() {
  return (
    <section className="pt-40 pb-28 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <SectionLabel>EXCLUSIVE</SectionLabel>
        <h1 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl text-gold-gradient">
          Gift Cards
        </h1>
        <p className="mt-6 text-foreground/70 max-w-xl mx-auto leading-relaxed">
          The gift of glow — beautifully presented, endlessly personal. Choose any amount and let
          someone you love discover the Muse experience.
        </p>
        <div className="mt-12 p-12 border border-gold/30 rounded-sm bg-card/40">
          <p className="font-serif text-2xl md:text-3xl text-gold-gradient italic">
            "The most thoughtful luxury."
          </p>
          <a
            href={VAGARO}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center justify-center px-10 py-4 text-[11px] uppercase tracking-[0.3em] text-background gold-gradient rounded-sm hover:opacity-90 transition-all"
          >
            Purchase a Gift Card
          </a>
        </div>
      </div>
    </section>
  );
}