import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/muse/Footer";

const VAGARO = "https://www.vagaro.com/mizzmissiaesthetics";

const packs = [
  {
    name: "Glow Series",
    sessions: "3 sessions",
    desc: "Deep Cleansing Facial with LED therapy — three sessions for visible, lasting clarity.",
  },
  {
    name: "Sculpt & Detox",
    sessions: "5 sessions",
    desc: "Body Contour + Lymphatic Drainage with Hot Blanket — engineered for firmer, lighter contours.",
  },
  {
    name: "Microneedling Protocol",
    sessions: "3 sessions",
    desc: "Our signature collagen-stimulating series — texture, tone and bounce restored.",
    price: "$499",
  },
];

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Treatment Packages — MUSE By Missi Aesthetics" },
      { name: "description", content: "Curated treatment series engineered for visible, lasting results at Muse By Missi Aesthetics." },
      { property: "og:title", content: "Packages — MUSE By Missi" },
      { property: "og:description", content: "Curated treatment series engineered for lasting results." },
    ],
  }),
  component: PackagesPage,
});

function PackagesPage() {
  return (
    <section className="pt-40 pb-28 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <SectionLabel>CURATED SERIES</SectionLabel>
          <h1 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl text-gold-gradient">
            Packages
          </h1>
          <p className="mt-6 text-foreground/70 max-w-2xl mx-auto">
            Treatment series designed to compound results over time — at a reserved price.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packs.map((p) => (
            <article
              key={p.name}
              className="p-10 border border-gold/20 rounded-sm bg-card/40 hover:border-gold/60 transition-all flex flex-col"
            >
              <SectionLabel>{p.sessions.toUpperCase()}</SectionLabel>
              <h3 className="mt-4 font-serif text-2xl text-gold-gradient">{p.name}</h3>
              <p className="mt-4 text-sm text-foreground/70 leading-relaxed flex-1">{p.desc}</p>
              {p.price && (
                <span className="mt-6 inline-block self-start px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-background gold-gradient rounded-sm">
                  {p.price}
                </span>
              )}
              <a
                href={VAGARO}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block text-[10px] uppercase tracking-[0.3em] text-gold border-b border-gold/40 pb-1 hover:border-gold self-start"
              >
                Book this package →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}