import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/muse/Footer";
import { GoogleReviews } from "@/components/muse/GoogleReviews";

// IMPORTAÇÕES ANTIGAS (Mantidas as que não foram substituídas)
import imgPeelingRosto from "@/assets/peelingdorosto.jpeg";
import imgMascaraFacial from "@/assets/mascarafacial.jpg";
import imgMassagemCostas from "@/assets/massagemcostas.jpeg";
import imgCintura from "@/assets/cintura.jpeg";
import imgBarrigaMassagem2 from "@/assets/barrigamassagem-2.jpeg";
import imgMascaraTerrosa from "@/assets/mascarafacialterrosa.jpg";
import imgLaserRostoDois from "@/assets/lasernorostodois.jpg";
import imgMassagemPerna from "@/assets/massagemperna.jpeg";

// IMPORTAÇÕES GERAIS
import imgDeepCleaningMissi from "@/assets/DeepCleaningFacialMuseByMissi.jpeg";
import imgLedLamp from "@/assets/ledlamp.jpeg";
import imgDermaplaning from "@/assets/DermaplaningGlowWDeepfacialCleaning.jpeg";
import imgMicroNeedlingOne from "@/assets/Micro-needlingFacialoneession.jpeg";
import imgMicroNeedlingThree from "@/assets/Micro-NeedlingFacialPackagethreeessions.jpeg";
import imgLowerLegWax from "@/assets/LowerLegWax.jpeg";
import imgHydragloss from "@/assets/HydraglossLipsHydration.jpeg";
import imgIPLHalfLegs from "@/assets/IPLHairRemoval-HalfLegs.jpeg";

// IMPORTAÇÕES DA DEPILAÇÃO
import imgUpperLipWax from "@/assets/UpperLipWax.jpeg";
import imgFullLeggWax from "@/assets/FullLeggWax.jpeg";
import imgArmpitWax from "@/assets/ArmpitWax.jpeg";
import imgBackBikiniBraz from "@/assets/BackWaxBikiniWaxFullBrazilianWax.jpeg"; 

// NOVAS IMPORTAÇÕES
import imgAdvancedAge from "@/assets/AdvancedAge.jpeg";
import imgAcneDefense from "@/assets/AcneDefense.jpeg";
import imgPeelingVitaminC from "@/assets/PeelingVitaminC.jpeg";

const VAGARO_LINK = "https://www.vagaro.com/mizzmissiaesthetics/book-now";

const categoryImage: Record<string, string> = {
  facial: "https://source.unsplash.com/800x600/?facial,skincare",
  waxing: "https://source.unsplash.com/800x600/?waxing,spa",
  corporal: "https://source.unsplash.com/800x600/?body,massage",
  "chemical-peel": "https://source.unsplash.com/800x600/?dermatology,skincare",
  more: "https://source.unsplash.com/800x600/?spa,skincare",
};

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

type Service = { title: string; duration?: string; price?: string; desc?: string; image?: string; link?: string };
type Category = { id: string; label: string; intro?: string; items: Service[] };

const categories: Category[] = [
  {
    id: "facial",
    label: "Facial",
    items: [
      { title: "Deep Cleaning Facial Mizz Missi", duration: "1h", price: "$95", desc: "Experience a relaxing Deep Cleansing Facial at Mizz Missi. Tailored to your skin, it includes cleansing, exfoliation, steam, massage, gentle extraction, purifying mask, and hydration for radiant, revitalized skin.", image: imgDeepCleaningMissi },
      { title: "Deep Cleaning Facial w/ LED Lamp", duration: "1h", price: "$120", desc: "Discover skin rejuvenation with our Deep Cleansing Facial with LED Lamp. Combining deep cleansing and LED light therapy, this treatment eliminates impurities, unclogs pores, and promotes a radiant appearance.", image: imgLedLamp },
      { title: "Deep Cleaning Facial w/ Dermaplaning", duration: "1h", price: "$140", desc: "Unlock the secret to radiant skin with dermaplaning. This gentle and painless esthetic procedure uses a surgical blade to unveil smoother, more luminous skin instantly.", image: imgDermaplaning },
      { title: "Algae Peeling (Organic Peeling)", duration: "50 min", price: "$120", desc: "Algae peeling provides skin brightening, rejuvenation, cellular renewal, inflammation reduction, analgesic, anti-inflammatory and bactericidal effects.", image: imgPeelingRosto },
      { title: "Microdermabrasion w/ Facial", duration: "1h 20min", price: "$120", desc: "Microdermabrasion is your key to incredibly smooth, radiant, and renewed skin. Remove impurities, smooth fine lines, and reduce dark spots and enlarged pores.", image: imgMascaraFacial },
      { title: "Microneedling Facial (1 Session)", duration: "1h 20min", price: "$180", desc: "A cosmetic procedure using tiny needles to stimulate collagen and elastin production in the skin.", image: imgMicroNeedlingOne },
      { title: "Microneedling Facial (Package · 3 Sessions)", duration: "1h 20min", price: "$499", image: imgMicroNeedlingThree },
    ],
  },
  {
    id: "waxing",
    label: "Waxing",
    intro:
      "Experience the sensation of smooth, hair-free skin with our waxing services. Our gentle New Concept wax, specially formulated for sensitive skin, provides a comfortable and effective hair removal experience.",
    items: [
      { title: "Upper Lip Wax", duration: "15 min", price: "$15", image: imgUpperLipWax },
      { title: "Armpit Wax", duration: "30 min", price: "$20", image: imgArmpitWax },
      { title: "Lower Leg Wax", duration: "30 min", price: "$30", image: imgLowerLegWax },
      { title: "Bikini Wax", duration: "30 min", price: "$35", image: imgBackBikiniBraz },
      { title: "Back Wax", duration: "30 min", price: "$55", image: imgBackBikiniBraz },
      { title: "Full Leg Wax", duration: "50 min", price: "$55", image: imgFullLeggWax },
      { title: "Full Brazilian Wax", duration: "45 min", price: "$65", image: imgBackBikiniBraz },
    ],
  },
  {
    id: "corporal",
    label: "Corporal",
    items: [
      { title: "Body Relaxing Treatment", duration: "1h 20min", price: "$75", desc: "A back relaxation for tension relief and overall well-being. Our skilled professionals use gentle techniques to relax muscles.", image: imgMassagemCostas },
      { title: "Body Contour Brazilian", duration: "1h 20min", price: "$130", desc: "An advanced body treatment combining contouring techniques to sculpt the abdomen, buttocks, thighs, and arms.", image: imgCintura },
      { title: "Body Contour Detox w/ Thermal Blanket", duration: "1h 20min", price: "$130", desc: "Detox treatment with a thermal blanket using far infrared heat to release toxins. Reduced measurements, healthier skin.", image: imgBarrigaMassagem2 },
    ],
  },
  {
    id: "chemical-peel",
    label: "Chemical Peel",
    items: [
      { title: "Chemical Peel for Acne", desc: "An advanced treatment with a unique combination of gentle acids and botanical ingredients that deeply penetrate pores, eliminating impurities and excess oil.", image: imgMascaraTerrosa },
      { title: "Chemical Peel Dark Spots (Pigmentation)", desc: "An effective solution for hyperpigmentation and uneven skin tone. A unique formula of exfoliating acids and brightening agents.", image: imgPeelingRosto },
    ],
  },
  {
    id: "more",
    label: "Service +",
    intro: "Additional treatments available — ask us for details when booking.",
    items: [
      { title: "Deep Collagen Stimulation", image: imgLaserRostoDois },
      { title: "Lymphatic Drainage Detox with Hot Blanket", image: imgMassagemPerna },
      { title: "Peel Vit C", image: imgPeelingVitaminC },
      { title: "Hydragloss", image: imgHydragloss },
      { title: "IPL Hair Removal - Half Legs", image: imgIPLHalfLegs },
      { title: "Advanced Age", image: imgAdvancedAge },
      { title: "Jessner" },
      { title: "Acne Defense", image: imgAcneDefense },
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

function ServiceCard({ s, image }: { s: Service; image: string }) {
  return (
    <a
      href={s.link || VAGARO_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-card/50 border border-gold/15 rounded-sm overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:border-gold/50"
    >
      <div className="w-full h-64 overflow-hidden">
        <img
          src={s.image || image}
          alt={s.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6 md:p-7">
        <h3 className="font-serif text-xl text-foreground group-hover:text-gold transition-colors">
          {s.title}
        </h3>
        <PriceTag duration={s.duration} price={s.price} />
        {s.desc && (
          <p className="mt-4 text-sm text-foreground/70 leading-relaxed">{s.desc}</p>
        )}
      </div>
    </a>
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
                  <a
                    href={VAGARO_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] uppercase tracking-[0.3em] text-gold border-b border-gold/40 pb-1 hover:border-gold"
                  >
                    Book this →
                  </a>
                </div>

                {cat.intro && (
                  <p className="mb-10 text-foreground/70 leading-relaxed max-w-4xl">
                    {cat.intro}
                  </p>
                )}

                <div
                  className={
                    cat.id === "more"
                      ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
                      : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  }
                >
                  {cat.items.map((s) =>
                    cat.id === "more" ? (
                      <a
                        key={s.title}
                        href={s.link || VAGARO_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block bg-card/40 border border-gold/15 rounded-sm overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:border-gold/50"
                      >
                        <div className="w-full h-48 overflow-hidden">
                          <img
                            src={s.image || categoryImage[cat.id]}
                            alt={s.title}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        <div className="p-4 text-center">
                          <span className="font-serif text-base text-foreground group-hover:text-gold transition-colors">
                            {s.title}
                          </span>
                        </div>
                      </a>
                    ) : (
                      <ServiceCard key={s.title} s={s} image={categoryImage[cat.id]} />
                    )
                  )}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <GoogleReviews />
    </>
  );
}