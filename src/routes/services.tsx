import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/muse/Footer";
import { GoogleReviews } from "@/components/muse/GoogleReviews";

// IMPORTAÇÕES ANTIGAS (Mantidas as que não foram substituídas)
import imgPeelingRosto from "@/assets/peelingdorosto.jpeg";
import imgMascaraFacial from "@/assets/mascarafacial.jpeg";
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
import imgTeenFacial from "@/assets/TeenFacial.jpeg";

const VAGARO_LINK = "https://www.vagaro.com/mizzmissiaesthetics/book-now";

// Dicionário de links diretos do Vagaro gerado a partir da sua lista
const VAGARO_LINKS = {
  skinAssessment: "https://www.vagaro.com/cl/iPUUoMiNTENNwaEuCGUrQ4~2n~4YQlytJUxy-2-IzOY=",
  deepCleaningFacialMissi: "https://www.vagaro.com/cl/e3XTbPwag6j6mnd8dPjQLJq06YepsqJLq203QvXln8w=",
  teenClearSkin: "https://www.vagaro.com/cl/rpgo8HhL65SU0FN2r~Z2f0GUxYdl5hUzkN-Mtg9xfy4=",
  dermaplaningGlowDeepCleaning: "https://www.vagaro.com/cl/E55Ji14rXvQK-hw2h8afLIlGOzi3igi0B24b-erf8Aw=",
  ledLamp: "https://www.vagaro.com/cl/XYJd1OBP5FKtbPYpBaRgR1sjvF9qVdrTM5kPtI5t69A=",
  diamondGlowDeepFacial: "https://www.vagaro.com/cl/ikOUzFpTtiEFUUQC9ilx8WiUCqOwr5aOpHewu7iQbSY=",
  acneDefense: "https://www.vagaro.com/cl/P~crthzreveRox1uELoecKM4Jpn0qk8nmMBOHrXMPuY=",
  melasmaTreat: "https://www.vagaro.com/cl/ZNzbjDdgooMXIWfgM7KobY9hZPZnXyEtHBjrkw5VTbM=",
  jessner: "https://www.vagaro.com/cl/FtmQYXnQyqG8zR3-94R4eEGf4XSzDgUEhRsPb39ydKI=",
  advancedAge: "https://www.vagaro.com/cl/mvqTfgB3RPVyqcS8omr-eSdgaEGfB0Ul5fzJsZjhWVA=",
  collagen: "https://www.vagaro.com/cl/lSVcRKYkEBhApcUdKT3ZgKPDYy0hyFO8GJNvTWSTCKA=",
  microNeedlingFacial3Session: "https://www.vagaro.com/cl/fLIDgC5Tg1ab8w8CQyTJzFZvx9wg~XNsFNcxcHa8HZI=",
  seaweedDetoxPeel: "https://www.vagaro.com/cl/v-OjtehJAYcp2wOpKGDj3ErsODoWcMBqSxnmy5-e57I=",
  vitaminC: "https://www.vagaro.com/cl/~Qli9EMPlNINgfK6QFz7oft1I0PeNfcfIceq4Hyc7m0=",
  deepCleaningGroupon: "https://www.vagaro.com/cl/GzRVhEne577ccTjxpXBW2YPfzv9OU2mw6fMjXYCIpv0=",
  lipsHydragloss: "https://www.vagaro.com/cl/0wj6jPPcAIFXhGhxK632xzlAQaeJ8G9Rs~EMRKhUfr4=",
  bodyContourBrazilian: "https://www.vagaro.com/cl/4Ne7167jFBjtJwZCGSpsYUdBlHS0xRJn1wWfuOM~3eI=",
  lymphaticDrainage: "https://www.vagaro.com/cl/UOMqfMTnjKAxqDTI7Ua1luDVgJ3afHigCdUf0mdYRc4=",
  bodyRelaxingTreatment: "https://www.vagaro.com/cl/Qm7kABTS385VLuZH9988IcJDkfXnvYeYsNJuWJQ4KKo=",
  bodyContourDetox: "https://www.vagaro.com/cl/l8LRpvk1mwduOMM7VtwLPiTkyuDW8o1rF2yc~GCiqC4=",
  backFacialExtractions: "https://www.vagaro.com/cl/jv65AnX37CYZDba-SfyyyiHSul5qE25oVKR4szaSzMQ=",
  bodyTreatmentPeelAlgae: "https://www.vagaro.com/cl/msEWdl~4s5PuzZm4zbQgHpJ0L32KcN6Z4FPj~c2BoRs=",
  stretchMarks: "https://www.vagaro.com/cl/Yntu9zt~P14280rGAZfrViuP52DiVNe4cnBsXQrqJrg=",
  brighteningIntimateAreas: "https://www.vagaro.com/cl/6q3d6i~hA0BKVLBEE~3MEMLxM2gFf1hICT~i6A06m9k=",
  detoxHotBlanket: "https://www.vagaro.com/cl/LHirH9Jb62Nj0vAeb36pKmgr0Qa5E3GNEdm-xxOqyR0=",
  upperLipWax: "https://www.vagaro.com/cl/kumGRlgQ1m~HZddoQtr2nzU2vLe2rfsTqxbdU-RLrVQ=",
  armpitWax: "https://www.vagaro.com/cl/Yofsa-vQACW~sSUQfISd-sBXKwRMwKJvp5m0wSfRLv8=",
  backWax: "https://www.vagaro.com/cl/4rnD79K2hYOw7rXgWpzTaq88ZsYJoIyvx~qGsufalxw=",
  bikiniWax: "https://www.vagaro.com/cl/wZsc5qsEvfqQUtCuzmjbstzmHT2Y5liEAWPLFljHc7A=",
  fullBrazilianWax: "https://www.vagaro.com/cl/Jy4G6nGtpXyIY606BTCK9CUDEM0R~gbVEyQCdFPQ8yo=",
  fullLegWax: "https://www.vagaro.com/cl/WGKjEE6cNzrq2VASoaauHe42RGqYsVhnjyuxvS7~wvc=",
  lowerLegWax: "https://www.vagaro.com/cl/2YasF2kK2ALm3-JcjLrJxBp~E4gmaeFoSaP6~i7EoXU=",
  eyebrowTweez: "https://www.vagaro.com/cl/IEhyqG8PDJtOIviJOIVgF915eEWCqKvviN4Bj1mk8ZQ=",
  lashesClassic: "https://www.vagaro.com/cl/xcPfkdzyxRXr0lqYWJyGlYs0o9i-fBs-L0A45McNto4=",
  lashesFillsClassic3Week: "https://www.vagaro.com/cl/cCm1tx~5GDgjxaAGVjnbCgrYm12Z~54nv4yUDzY6gbg=",
  lashesBrazilian: "https://www.vagaro.com/cl/Y4NtX43cVNd2OR0Zy9P8DnZh9vic2xSpPhHyPapgZlQ=",
  lashesFillsBrazilian: "https://www.vagaro.com/cl/O3US4MV-wHdtvy78roVfvQlutzvVZ-B85fHm6rCqFKs=",
  lashesHybrid: "https://www.vagaro.com/cl/-Bp3FcA-10AkQxO1uEAiiDr24UKs6IA1eOCV8JRVW6g=",
  lashesFillsHybrid: "https://www.vagaro.com/cl/sdIJIzEWwq4HwOI5DUJv4Cjto1zCLCET6j~LXmGMm5E=",
  iplFullFace: "https://www.vagaro.com/cl/sjxVdsAvP~yWlKK5HkTKSQswVOhIVdpqlA~9pK04it4=",
  iplLips: "https://www.vagaro.com/cl/nJnqEQLEjhFrmVWeaybIXjrw1lliM9wTHLneZ~EMq9U=",
  iplChin: "https://www.vagaro.com/cl/CLoym3Z0Cc0qVOgRBI995DP~ZyUOWmUD6mgILNvmDno=",
  iplLipAndChin: "https://www.vagaro.com/cl/9xjtaq62pkdqKVmV-~frOAWHj0-~jXt2c~IwAn170dw=",
  iplSideBurns: "https://www.vagaro.com/cl/lIpQCrQ6D0w~MylFUFWaLxZA1hUc4rVCeZXCYfzB8Uk=",
  iplUnderarms: "https://www.vagaro.com/cl/ZJ7nec4JCwxjOUFbBAJIPLMxLH8DSqqMy4zMyb2aCxc=",
  iplFullArms: "https://www.vagaro.com/cl/gUNYn-hBCYKowJNwq~lbk1z5NDpVxjbUItgn-YmMozY=",
  iplHalfArms: "https://www.vagaro.com/cl/szW75wPLp7mULV~4IiZLj-NGzHUe3i1sZvDFheXnWek=",
  iplFullLegs: "https://www.vagaro.com/cl/OPpIQAqLPflAPlRvTrnU-5NvOZZMaBkIJPS5v62VODE=",
  iplHalfLegs: "https://www.vagaro.com/cl/uhYSFbXNrOIKDoc486aYBOxnAeMinl7WEuNpx7JXdAc=",
  iplChest: "https://www.vagaro.com/cl/5AAYIhtzK8oWU6MRhbrhiySGMRtlbpAhQbeqGUUazJU=",
  iplAbdomen: "https://www.vagaro.com/cl/sf2xpwcYeDSnybWMmp9n44CJgPABKG1-F8dKLv9LS~M=",
  iplFullBack: "https://www.vagaro.com/cl/kkOY1LYjJZpUEsU~LLWGxXKac6eT5WFh0n6IzHJ5xFk=",
  iplSmallAreas: "https://www.vagaro.com/cl/Ue3ZjJuG4JaaV0h8tLaogUFl12~Z7yf~WXwMF5GWC~Q=",
  iplBikini: "https://www.vagaro.com/cl/Mnuy956iAi6Bksed3vHWg7R~gGYSAFQRUixvehzKEtA=",
  iplFullBrazilian: "https://www.vagaro.com/cl/RSEhQbdbzSIeLjTEPCsRyV2chSK6cub37XjsFYDZ~ug=",
  iplComboUnderarmsBrazilian: "https://www.vagaro.com/cl/wFevv0yz8aDtoMens2e~lI-iEMhNxX1n2uQlsJ4fzfA="
};

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
      { title: "Deep Cleaning Facial Mizz Missi", duration: "1h", price: "$95", desc: "Experience a relaxing Deep Cleansing Facial at Mizz Missi. Tailored to your skin, it includes cleansing, exfoliation, steam, massage, gentle extraction, purifying mask, and hydration for radiant, revitalized skin.", image: imgDeepCleaningMissi, link: VAGARO_LINKS.deepCleaningFacialMissi },
      { title: "Deep Cleaning Facial w/ LED Lamp", duration: "1h", price: "$120", desc: "Discover skin rejuvenation with our Deep Cleansing Facial with LED Lamp. Combining deep cleansing and LED light therapy, this treatment eliminates impurities, unclogs pores, and promotes a radiant appearance.", image: imgLedLamp, link: VAGARO_LINKS.ledLamp },
      { title: "Deep Cleaning Facial w/ Dermaplaning", duration: "1h", price: "$140", desc: "Unlock the secret to radiant skin with dermaplaning. This gentle and painless esthetic procedure uses a surgical blade to unveil smoother, more luminous skin instantly.", image: imgDermaplaning, link: VAGARO_LINKS.dermaplaningGlowDeepCleaning },
      { title: "Algae Peeling (Organic Peeling)", duration: "50 min", price: "$120", desc: "Algae peeling provides skin brightening, rejuvenation, cellular renewal, inflammation reduction, analgesic, anti-inflammatory and bactericidal effects.", image: imgPeelingRosto, link: VAGARO_LINKS.bodyTreatmentPeelAlgae },
      { title: "Microdermabrasion w/ Facial", duration: "1h 20min", price: "$120", desc: "Microdermabrasion is your key to incredibly smooth, radiant, and renewed skin. Remove impurities, smooth fine lines, and reduce dark spots and enlarged pores.", image: imgMascaraFacial }, // Sem link direto
      { title: "Microneedling Facial (1 Session)", duration: "1h 20min", price: "$180", desc: "A cosmetic procedure using tiny needles to stimulate collagen and elastin production in the skin.", image: imgMicroNeedlingOne }, // Sem link direto
      { title: "Microneedling Facial (Package · 3 Sessions)", duration: "1h 20min", price: "$499", image: imgMicroNeedlingThree, link: VAGARO_LINKS.microNeedlingFacial3Session },
    ],
  },
  {
    id: "waxing",
    label: "Waxing",
    intro:
      "Experience the sensation of smooth, hair-free skin with our waxing services. Our gentle New Concept wax, specially formulated for sensitive skin, provides a comfortable and effective hair removal experience.",
    items: [
      { title: "Upper Lip Wax", duration: "15 min", price: "$15", image: imgUpperLipWax, link: VAGARO_LINKS.upperLipWax },
      { title: "Armpit Wax", duration: "30 min", price: "$20", image: imgArmpitWax, link: VAGARO_LINKS.armpitWax },
      { title: "Lower Leg Wax", duration: "30 min", price: "$30", image: imgLowerLegWax, link: VAGARO_LINKS.lowerLegWax },
      { title: "Bikini Wax", duration: "30 min", price: "$35", image: imgBackBikiniBraz, link: VAGARO_LINKS.bikiniWax },
      { title: "Back Wax", duration: "30 min", price: "$55", image: imgBackBikiniBraz, link: VAGARO_LINKS.backWax },
      { title: "Full Leg Wax", duration: "50 min", price: "$55", image: imgFullLeggWax, link: VAGARO_LINKS.fullLegWax },
      { title: "Full Brazilian Wax", duration: "45 min", price: "$65", image: imgBackBikiniBraz, link: VAGARO_LINKS.fullBrazilianWax },
    ],
  },
  {
    id: "corporal",
    label: "Corporal",
    items: [
      { title: "Body Relaxing Treatment", duration: "1h 20min", price: "$75", desc: "A back relaxation for tension relief and overall well-being. Our skilled professionals use gentle techniques to relax muscles.", image: imgMassagemCostas, link: VAGARO_LINKS.bodyRelaxingTreatment },
      { title: "Body Contour Brazilian", duration: "1h 20min", price: "$130", desc: "An advanced body treatment combining contouring techniques to sculpt the abdomen, buttocks, thighs, and arms.", image: imgCintura, link: VAGARO_LINKS.bodyContourBrazilian },
      { title: "Body Contour Detox w/ Thermal Blanket", duration: "1h 20min", price: "$130", desc: "Detox treatment with a thermal blanket using far infrared heat to release toxins. Reduced measurements, healthier skin.", image: imgBarrigaMassagem2, link: VAGARO_LINKS.bodyContourDetox },
    ],
  },
  {
    id: "chemical-peel",
    label: "Chemical Peel",
    items: [
      { title: "Chemical Peel for Acne", desc: "An advanced treatment with a unique combination of gentle acids and botanical ingredients that deeply penetrate pores, eliminating impurities and excess oil.", image: imgMascaraTerrosa, link: VAGARO_LINKS.acneDefense },
      { title: "Chemical Peel Dark Spots (Pigmentation)", desc: "An effective solution for hyperpigmentation and uneven skin tone. A unique formula of exfoliating acids and brightening agents.", image: imgPeelingRosto, link: VAGARO_LINKS.melasmaTreat },
    ],
  },
  {
    id: "more",
    label: "Service +",
    intro: "Additional treatments available — ask us for details when booking.",
    items: [
      { title: "Deep Collagen Stimulation", image: imgLaserRostoDois, link: VAGARO_LINKS.collagen },
      { title: "Lymphatic Drainage Detox with Hot Blanket", image: imgMassagemPerna, link: VAGARO_LINKS.detoxHotBlanket },
      { title: "Peel Vit C", image: imgPeelingVitaminC, link: VAGARO_LINKS.vitaminC },
      { title: "Hydragloss", image: imgHydragloss, link: VAGARO_LINKS.lipsHydragloss },
      { title: "IPL Hair Removal - Half Legs", image: imgIPLHalfLegs, link: VAGARO_LINKS.iplHalfLegs },
      { title: "Advanced Age", image: imgAdvancedAge, link: VAGARO_LINKS.advancedAge },
      { title: "Jessner", link: VAGARO_LINKS.jessner },
      { title: "Acne Defense", image: imgAcneDefense, link: VAGARO_LINKS.acneDefense },
      { title: "Teen Facial", image: imgTeenFacial, link: VAGARO_LINKS.teenClearSkin },
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