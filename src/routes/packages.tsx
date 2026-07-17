import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/muse/Footer";

// Atualizado para o link de agendamento geral (já que o anterior ia para memberships)
const VAGARO = "https://www.vagaro.com/cl/iPUUoMiNTENNwaEuCGUrQ4~2n~4YQlytJUxy-2-IzOY=";

const packs = [
  {
    name: "Glow & Go Package",
    label: "SPECIAL PACKAGE",
    desc: (
      <>
        <p className="mb-3">
          Perfect for clients who want silky skin and a radiant complexion. Pay for the Facial and Brazilian Wax to get a free Underarm Wax!
        </p>
        <p className="font-semibold text-[#631F37] mb-2 tracking-wider text-xs uppercase">Includes:</p>
        <ul className="space-y-1.5">
          <li className="flex gap-2"><span className="text-gold">✦</span> Deep Cleansing Facial</li>
          <li className="flex gap-2"><span className="text-gold">✦</span> Underarm Wax w/ Brazilian Wax</li>
        </ul>
      </>
    ),
    price: "$150",
  },
  {
    name: "Date Night Ready",
    label: "FEEL UNSTOPPABLE",
    desc: (
      <p>
        Look amazing, feel unstoppable! Feel confident and radiant with our Date Night Ready package, featuring a Detox & Glow Body Exfoliating and Contouring Treatment, Hydragloss Lips Hydration, and a Full Brazilian Wax. The perfect combination for silky-smooth skin, a sculpted glow, hydrated lips, and effortless confidence before your next special occasion. 
        <br/><br/>
        <em className="text-gold/90 font-medium">Includes a special gift to take on your date!</em>
      </p>
    ),
    price: "$249",
  },
  {
    name: "Deep Collagen Stimulation",
    label: "3 SESSIONS",
    desc: (
      <p>
        Rejuvenate your skin! Microneedling is a revolutionary facial rejuvenation treatment that stimulates the natural production of collagen and elastin. It smooths fine lines, improves skin firmness, and promotes deep cellular renewal, resulting in a younger, more even, and radiant complexion. Minimizes enlarged pores and deeply revitalizes the skin, providing a naturally youthful and long-lasting glow.
      </p>
    ),
    price: "$600",
  },
  {
    name: "Detox & Renew Body Treatment",
    label: "4 WEEKLY SESSIONS",
    desc: (
      <p>
        Experience a unique wellness journey with our Lymphatic Drainage Detox, combined with the soothing warmth of a Hot Blanket. In just 4 weekly sessions, you'll enjoy benefits like reduced fluid retention, improved circulation, enhanced immunity, stress relief, and total renewal. Each session detoxifies your body, restoring balance and vitality. You'll feel lighter, rejuvenated, and energized.
      </p>
    ),
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

export function PackagesPage() {
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
        
        {/* Alterado para um grid de 2 colunas para comportar perfeitamente 4 pacotes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {packs.map((p) => (
            <article
              key={p.name}
              className="p-10 border border-gold/20 rounded-sm bg-card/40 hover:border-gold/60 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <SectionLabel>{p.label}</SectionLabel>
              <h3 className="mt-4 font-serif text-2xl md:text-3xl text-gold-gradient">{p.name}</h3>
              
              <div className="mt-6 text-sm text-foreground/75 leading-relaxed flex-1">
                {p.desc}
              </div>
              
              {p.price && (
                <div className="mt-8 flex items-end justify-between border-t border-gold/15 pt-6">
                  <span className="text-3xl font-light text-foreground">
                    {p.price}
                  </span>
                  <a
                    href={VAGARO}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-[10px] uppercase tracking-[0.3em] text-gold border-b border-gold/40 pb-1 hover:border-gold"
                  >
                    Book Package →
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}