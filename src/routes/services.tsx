import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionLabel } from "@/components/muse/Footer";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — MUSE Aesthetics & Spa by Missi" },
      { name: "description", content: "Advanced facials, waxing, lymphatic drainage and body treatments in Shrewsbury, MA." },
      { property: "og:title", content: "Services — MUSE Aesthetics & Spa" },
      { property: "og:description", content: "Bespoke treatments engineered for radiance, firmness and lasting clarity." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { title: "Advanced Facials", desc: "Bespoke clinical facials engineered for radiance, firmness and lasting clarity." },
  { title: "Waxing", desc: "Precise, gentle hair removal for silky-smooth, beautifully prepared skin." },
  { title: "Lymphatic Drainage", desc: "Restorative manual therapy that reduces puffiness and revives natural circulation." },
  { title: "Body Treatments", desc: "Sculpting, nourishing rituals that refine, tone and renew from head to toe." },
];

function ServicesPage() {
  return (
    <>
      <section className="pt-40 pb-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <SectionLabel>THE SIGNATURE MENU</SectionLabel>
            <h1 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl text-gold-gradient">Services</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="group relative p-10 bg-card border border-gold/20 rounded-sm hover:border-gold/60 transition-all duration-500 hover:-translate-y-1"
              >
                <span className="font-display text-[10px] tracking-[0.3em] text-gold/60">0{i + 1}</span>
                <h3 className="mt-6 font-serif text-2xl md:text-3xl text-foreground group-hover:text-gold transition-colors">{s.title}</h3>
                <p className="mt-4 text-sm text-foreground/65 leading-relaxed">{s.desc}</p>
                <Link to="/book" className="mt-8 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-gold">
                  Book now
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 px-6 border-y border-gold/15" style={{ background: "linear-gradient(90deg, transparent, oklch(0.18 0.06 18 / 0.4), transparent)" }}>
        <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-center gap-6 text-center">
          <span className="font-display text-[10px] tracking-[0.4em] text-gold">FLEXIBLE FINANCING</span>
          <p className="font-serif text-xl md:text-2xl text-foreground/90 italic">
            Treat now, pay later with <span className="text-gold-gradient not-italic font-medium">Cherry</span>.
          </p>
        </div>
      </section>
    </>
  );
}