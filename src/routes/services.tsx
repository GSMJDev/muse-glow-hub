import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionLabel } from "@/components/muse/Footer";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Mizz Missi Aesthetics" },
      { name: "description", content: "Facials, waxing, body treatments, chemical peels and more in Shrewsbury, MA." },
      { property: "og:title", content: "Services — Mizz Missi Aesthetics" },
      { property: "og:description", content: "Bespoke treatments engineered for radiance, firmness and lasting clarity." },
    ],
  }),
  component: ServicesPage,
});

type Service = { title: string; duration?: string; price?: string; desc?: string };
type Category = { id: string; label: string; intro?: string; items: Service[] };

const categories: Category[] = [
  {
    id: "facial",
    label: "Facial",
    items: [
      { title: "Deep Cleaning Facial Mizz Missi", duration: "1h", price: "$95", desc: "Experience a relaxing Deep Cleansing Facial at Mizz Missi. Tailored to your skin, it includes cleansing, exfoliation, steam, massage, gentle extraction, purifying mask, and hydration for radiant, revitalized skin, providing a moment of deep relaxation as well." },
      { title: "Deep Cleaning Facial w/ LED Lamp", duration: "1h", price: "$120", desc: "Discover skin rejuvenation with our Deep Cleansing Facial with LED Lamp. Combining deep cleansing and LED light therapy, this treatment eliminates impurities, unclogs pores, and promotes a radiant appearance. Benefit from LED light therapy to reduce inflammation, stimulate collagen, and enhance skin clarity." },
      { title: "Deep Cleaning Facial w/ Dermaplaning", duration: "1h", price: "$140", desc: "Unlock the secret to radiant skin with dermaplaning. This gentle and painless esthetic procedure uses a surgical blade to unveil smoother, more luminous skin instantly. Remove surface layers to diminish fine lines, eliminate facial hair, and promote a visibly rejuvenated appearance." },
      { title: "Algae Peeling (Organic Peeling)", duration: "50 min", price: "$120", desc: "Algae peeling provides skin brightening, rejuvenation, cellular renewal, inflammation reduction, analgesic, anti-inflammatory and bactericidal effects — acne fighting, reduction of pigment spots, scars, and stretch marks, plus improved blood circulation." },
      { title: "Microdermabrasion w/ Facial", duration: "1h 20min", price: "$120", desc: "Microdermabrasion is your key to incredibly smooth, radiant, and renewed skin. Remove impurities, smooth fine lines, and reduce dark spots and enlarged pores. Transform your skin with this revolutionary treatment and enjoy a radiant appearance." },
      { title: "Microneedling Facial (1 Session)", duration: "1h 20min", price: "$180", desc: "A cosmetic procedure using tiny needles to stimulate collagen and elastin production in the skin. Benefits include improved texture, reduction of wrinkles, acne scars, enlarged pores, and dark spots, as well as treatment for stretch marks." },
      { title: "Microneedling Facial (Package · 3 Sessions)", duration: "1h 20min", price: "$499" },
    ],
  },
  {
    id: "waxing",
    label: "Waxing",
    intro:
      "Experience the sensation of smooth, hair-free skin with our waxing services. Our gentle New Concept wax, specially formulated for sensitive skin, provides a comfortable and effective hair removal experience — long-lasting results with minimal irritation, in our welcoming environment.",
    items: [
      { title: "Upper Lip Wax", duration: "15 min", price: "$15" },
      { title: "Armpit Wax", duration: "30 min", price: "$20" },
      { title: "Lower Leg Wax", duration: "30 min", price: "$30" },
      { title: "Bikini Wax", duration: "30 min", price: "$35" },
      { title: "Back Wax", duration: "30 min", price: "$55" },
      { title: "Full Leg Wax", duration: "50 min", price: "$55" },
      { title: "Full Brazilian Wax", duration: "45 min", price: "$65" },
    ],
  },
  {
    id: "corporal",
    label: "Corporal",
    items: [
      { title: "Body Relaxing Treatment", duration: "1h 20min", price: "$75", desc: "A back relaxation for tension relief and overall well-being. Our skilled professionals use gentle techniques to relax muscles, providing immediate relief from pain and stiffness, improving circulation, reducing stress and enhancing sleep quality." },
      { title: "Body Contour Brazilian", duration: "1h 20min", price: "$130", desc: "An advanced body treatment combining contouring techniques to sculpt the abdomen, buttocks, thighs, and arms. Reduces cellulite, improves skin firmness, and shapes the body." },
      { title: "Body Contour Detox w/ Thermal Blanket", duration: "1h 20min", price: "$130", desc: "Detox treatment with a thermal blanket using far infrared heat to release toxins. Reduced measurements, healthier skin, relief from muscle pain — while relaxing and strengthening your immune system." },
    ],
  },
  {
    id: "chemical-peel",
    label: "Chemical Peel",
    items: [
      { title: "Chemical Peel for Acne", desc: "An advanced treatment with a unique combination of gentle acids and botanical ingredients that deeply penetrate pores, eliminating impurities and excess oil. Reduces acne and inflammation while minimizing scars and dark spots for a clearer, more even complexion." },
      { title: "Chemical Peel Dark Spots (Pigmentation)", desc: "An effective solution for hyperpigmentation and uneven skin tone. A unique formula of exfoliating acids and brightening agents that diminishes dark spots and unveils a more radiant, even, and revitalized complexion." },
    ],
  },
  {
    id: "more",
    label: "Service +",
    intro: "Additional treatments available — ask us for details when booking.",
    items: [
      { title: "Deep Collagen Stimulation" },
      { title: "Lymphatic Drainage Detox with Hot Blanket" },
      { title: "Peel Vit C" },
      { title: "Hydragloss" },
      { title: "Advanced Age" },
      { title: "Jessner" },
      { title: "Acne Defense" },
      { title: "Teen Facial" },
    ],
  },
];

function PriceTag({ duration, price }: { duration?: string; price?: string }) {
  if (!duration && !price) return null;
  return (
    <div className="flex flex-wrap items-center gap-2 mt-3">
      {duration && (
        <span className="px-2.5 py-1 text-[10px] uppercase tracking-[0.25em] text-foreground/70 border border-gold/20 rounded-sm">
          {duration}
        </span>
      )}
      {price && (
        <span className="px-2.5 py-1 text-[10px] uppercase tracking-[0.25em] text-background gold-gradient rounded-sm">
          {price}
        </span>
      )}
    </div>
  );
}

function ServiceCard({ s }: { s: Service }) {
  return (
    <div className="p-6 md:p-7 bg-card/50 border border-gold/15 rounded-sm hover:border-gold/50 transition-all">
      <h3 className="font-serif text-xl text-foreground">{s.title}</h3>
      <PriceTag duration={s.duration} price={s.price} />
      {s.desc && (
        <p className="mt-4 text-sm text-foreground/70 leading-relaxed">{s.desc}</p>
      )}
    </div>
  );
}

function CategoryNav() {
  return (
    <nav className="flex flex-wrap justify-center gap-3 mb-16">
      {categories.map((c, i) => (
        <a
          key={c.id}
          href={`#${c.id}`}
          className="px-5 py-2.5 text-[10px] uppercase tracking-[0.3em] text-gold border border-gold/30 rounded-sm hover:bg-gold/10 transition-all"
        >
          <span className="text-gold/50 mr-2">0{i + 1}</span>
          {c.label}
        </a>
      ))}
    </nav>
  );
}

function ServicesPage() {
  return (
    <>
      <section className="pt-40 pb-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <SectionLabel>THE SIGNATURE MENU</SectionLabel>
            <h1 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl text-gold-gradient">
              Services
            </h1>
            <p className="mt-6 text-foreground/70 max-w-2xl mx-auto">
              Bespoke treatments — engineered for radiance, firmness and lasting clarity.
            </p>
          </div>

          <CategoryNav />

          <div className="space-y-24">
            {categories.map((cat, i) => (
              <section key={cat.id} id={cat.id} className="scroll-mt-28">
                <div className="flex items-end justify-between flex-wrap gap-4 border-b border-gold/15 pb-6 mb-10">
                  <div>
                    <span className="font-display text-[10px] tracking-[0.4em] text-gold/60">
                      0{i + 1} · CATEGORY
                    </span>
                    <h2 className="mt-3 font-serif text-3xl md:text-4xl text-gold-gradient">
                      {cat.label}
                    </h2>
                  </div>
                  <Link
                    to="/book"
                    className="text-[10px] uppercase tracking-[0.3em] text-gold border-b border-gold/40 pb-1 hover:border-gold"
                  >
                    Book this →
                  </Link>
                </div>

                {cat.intro && (
                  <p className="mb-10 text-foreground/70 leading-relaxed max-w-4xl">
                    {cat.intro}
                  </p>
                )}

                <div
                  className={
                    cat.id === "more"
                      ? "grid grid-cols-2 md:grid-cols-4 gap-4"
                      : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  }
                >
                  {cat.items.map((s) =>
                    cat.id === "more" ? (
                      <div
                        key={s.title}
                        className="p-5 text-center bg-card/40 border border-gold/15 rounded-sm hover:border-gold/50 transition-all"
                      >
                        <span className="font-serif text-base text-foreground">{s.title}</span>
                      </div>
                    ) : (
                      <ServiceCard key={s.title} s={s} />
                    )
                  )}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-12 px-6 border-y border-gold/15"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.18 0.06 18 / 0.4), transparent)",
        }}
      >
        <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-center gap-6 text-center">
          <span className="font-display text-[10px] tracking-[0.4em] text-gold">
            FLEXIBLE FINANCING
          </span>
          <p className="font-serif text-xl md:text-2xl text-foreground/90 italic">
            Treat now, pay later with{" "}
            <span className="text-gold-gradient not-italic font-medium">Cherry</span>.
          </p>
        </div>
      </section>
    </>
  );
}