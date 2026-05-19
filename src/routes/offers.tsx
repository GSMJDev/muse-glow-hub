import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionLabel } from "@/components/muse/Footer";

export const Route = createFileRoute("/offers")({
  head: () => ({
    meta: [
      { title: "Offers — Gift Cards, Memberships & Packages | MUSE" },
      { name: "description", content: "Gift cards, monthly memberships and curated treatment packages at MUSE Aesthetics & Spa." },
      { property: "og:title", content: "Offers — MUSE Aesthetics & Spa" },
      { property: "og:description", content: "Reserved pricing, exclusive access and curated treatment series." },
    ],
  }),
  component: OffersPage,
});

const offers = [
  { id: "giftcard", label: "Gift Card", desc: "The gift of glow — beautifully presented, endlessly personal." },
  { id: "membership", label: "Membership", desc: "Monthly rituals with reserved pricing and exclusive access." },
  { id: "packages", label: "Packages", desc: "Curated treatment series engineered for visible, lasting results." },
];

function OffersPage() {
  return (
    <section className="pt-40 pb-28 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <SectionLabel>EXCLUSIVE</SectionLabel>
          <h1 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl text-gold-gradient">Offers</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((c) => (
            <div id={c.id} key={c.id} className="p-12 text-center border border-gold/20 rounded-sm bg-card/50 hover:border-gold/60 transition-all">
              <SectionLabel>EXCLUSIVE</SectionLabel>
              <h3 className="mt-5 font-serif text-3xl text-gold-gradient">{c.label}</h3>
              <p className="mt-4 text-sm text-foreground/65">{c.desc}</p>
              <Link to="/contact" className="mt-7 inline-block text-[10px] uppercase tracking-[0.3em] text-gold border-b border-gold/40 pb-1 hover:border-gold">
                Inquire
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}