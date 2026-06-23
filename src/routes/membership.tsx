import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SectionLabel } from "@/components/muse/Footer";

// LINK ATUALIZADO
const VAGARO_LINK = "https://www.vagaro.com/cl/iPUUoMiNTENNwaEuCGUrQ4~2n~4YQlytJUxy-2-IzOY=";

const memberships = [
  {
    id: "essential",
    title: "Muse Essential",
    price: "$89",
    desc: "Makes self-care simple and affordable.",
    treatmentsTitle: "Includes ONE monthly treatment:",
    treatments: [
      "Deep Cleansing Facial",
      "Teen Clear Skin Facial",
      "LED Lamp Therapy w/ Deep Cleansing",
      "Diamond Glow Microdermabrasion w/ Deep Cleansing",
      "Hydragloss Lips Hydration",
    ],
    benefits: [
      "10% OFF additional services",
      "5% OFF retail products",
      "Rollover 1 unused treatment (up to 30 days)",
      "Special birthday gift",
    ],
  },
  {
    id: "signature",
    title: "Muse Signature",
    price: "$99",
    desc: "Our signature monthly wellness experience.", // Reformulado: ritual -> experience
    treatmentsTitle: "Includes ONE monthly treatment:",
    treatments: [
      "Deep Cleansing Facial",
      "Led Lamp Therapy w/ Deep Facial Cleansing",
      "Diamond Glow Microdermabrasion w/ Deep Cleansing",
      "Body Relaxing Treatment",
      "Back Facial with Extractions",
    ],
    benefits: [
      "10% OFF additional services",
      "10% OFF retail products",
      "60-day rollover benefits",
      "Yearly Hydragloss Lips treatment",
      "Birthday gift & exclusive access to member promotions, events, and offers",
    ],
  },
  {
    id: "prestige",
    title: "Muse Prestige",
    price: "$199",
    desc: "Our ultimate luxury wellness experience.", // Atualizado conforme novos dados
    treatmentsTitle: "Includes ONE advanced monthly treatment:", // Atualizado conforme novos dados
    treatments: [
      "Personalized Facial or Body Analysis Consultation",
      "Customized Treatment Plan",
      "Advanced Facial Rejuvenation Treatments",
      "Advanced Body Contouring Treatments",
      "LED Light Therapy",
      "1 Complimentary Waxing Service",
      "1 Complimentary IPL Hair Removal Session (Small Area)",
    ],
    benefits: [
      "15% OFF Additional Services",
      "10% OFF Retail Products",
      "Unused Treatments Roll Over (Up to 60 Days)",
      "Continuous Progress Tracking",
      "Birthday Gift & Priority Access to Exclusive Events and Promotions",
    ],
    note: "A personalized beauty and wellness program designed to deliver visible, long-lasting results while helping you feel confident, radiant, and cared for every month.", // Atualizado conforme novos dados
  },
];

export const Route = createFileRoute("/membership")({
  head: () => ({
    meta: [
      { title: "Membership — MUSE By Missi Aesthetics" },
      { name: "description", content: "A monthly program with reserved pricing and exclusive access at Muse By Missi Aesthetics." }, // Reformulado: ritual -> program
      { property: "og:title", content: "Membership — MUSE By Missi" },
      { property: "og:description", content: "Skin as a discipline. Glow as a routine." },
    ],
  }),
  component: MembershipPage,
});

function MembershipPage() {
  return (
    <section className="pt-40 pb-28 px-6">
      <div className="mx-auto max-w-7xl text-center">
        <SectionLabel>FOR OUR REGULARS</SectionLabel>
        <h1 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl text-gold-gradient">
          Membership
        </h1>
        <p className="mt-6 text-foreground/70 max-w-xl mx-auto leading-relaxed">
          A monthly program with reserved pricing and exclusive access — for clients who treat
          skincare as a discipline, not an occasion. {/* Reformulado: ritual -> program */}
        </p>

        {/* CARDS DOS PLANOS */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
          {memberships.map((plan) => (
            <div
              key={plan.id}
              className="flex flex-col p-8 border border-gold/20 bg-card/40 rounded-sm hover:shadow-xl hover:scale-[1.02] hover:border-gold/50 transition-all duration-300"
            >
              <h2 className="font-serif text-3xl text-gold-gradient">{plan.title}</h2>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl text-foreground font-light">{plan.price}</span>
                <span className="text-sm text-foreground/60 uppercase tracking-widest">/mo</span>
              </div>
              <p className="mt-4 text-sm text-foreground/70 border-b border-gold/15 pb-6">
                {plan.desc}
              </p>

              {/* LISTA DE TRATAMENTOS */}
              <div className="mt-6">
                <h3 className="text-xs font-bold tracking-[0.15em] uppercase text-[#631F37] mb-4">
                  {plan.treatmentsTitle}
                </h3>
                <ul className="space-y-3">
                  {plan.treatments.map((t, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="text-gold/80 text-sm mt-0.5">✦</span>
                      <span className="text-sm text-foreground/80 leading-snug">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* VANTAGENS (BENEFITS) */}
              <div className="mt-8 pt-6 border-t border-gold/15 flex-grow">
                <h3 className="text-xs font-bold tracking-[0.15em] uppercase text-gold mb-4">
                  Member Benefits:
                </h3>
                <ul className="space-y-3">
                  {plan.benefits.map((b, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <svg className="w-4 h-4 text-gold mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-foreground/80 leading-snug">{b}</span>
                    </li>
                  ))}
                </ul>
                
                {/* NOTA PRESTIGE */}
                {plan.note && (
                  <p className="mt-6 text-xs italic text-[#631F37] font-medium leading-relaxed bg-[#631F37]/5 p-3 rounded-sm border-l-2 border-[#631F37]">
                    {plan.note}
                  </p>
                )}
              </div>

              {/* BOTÃO DENTRO DO CARD */}
              <div className="mt-8 pt-6 border-t border-gold/15">
                <a
                  href={VAGARO_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-3 text-[10px] uppercase tracking-[0.2em] text-gold border border-gold/40 rounded-sm hover:bg-gold/10 hover:border-gold transition-all"
                >
                  Select Plan
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* BOTÃO PRINCIPAL INFERIOR */}
        <div className="mt-16">
          <a
            href={VAGARO_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-12 py-4 text-[11px] uppercase tracking-[0.3em] text-background gold-gradient rounded-sm hover:opacity-90 transition-all shadow-md"
          >
            Become a Member
          </a>
        </div>
      </div>
    </section>
  );
}