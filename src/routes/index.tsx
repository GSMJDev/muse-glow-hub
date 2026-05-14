import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/muse/Header";
import { LeadModal } from "@/components/muse/LeadModal";
import heroImg from "@/assets/hero-facial.jpg";
import logoEmblem from "@/assets/muse-logo-rosegold.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MUSE Aesthetics & Spa by Missi — Your Glow, Our Signature" },
      {
        name: "description",
        content:
          "The premier facial spa and skincare clinic in Shrewsbury, MA. Advanced facials, waxing, lymphatic drainage and body treatments.",
      },
      { property: "og:title", content: "MUSE Aesthetics & Spa by Missi" },
      {
        property: "og:description",
        content: "Results-driven skincare and body treatments in a warm, inviting environment.",
      },
    ],
  }),
  component: Index,
});

const services = [
  {
    title: "Advanced Facials",
    desc: "Bespoke clinical facials engineered for radiance, firmness and lasting clarity.",
  },
  {
    title: "Waxing",
    desc: "Precise, gentle hair removal for silky-smooth, beautifully prepared skin.",
  },
  {
    title: "Lymphatic Drainage",
    desc: "Restorative manual therapy that reduces puffiness and revives natural circulation.",
  },
  {
    title: "Body Treatments",
    desc: "Sculpting, nourishing rituals that refine, tone and renew from head to toe.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-display text-[10px] tracking-[0.4em] text-gold/80">{children}</span>
  );
}

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Header />
      <LeadModal />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src={heroImg}
          alt="Woman receiving a luxurious facial treatment"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <img
            src={logoEmblem}
            alt="Muse Aesthetics & Spa by Missi"
            className="mx-auto h-40 md:h-56 w-auto mb-4"
          />
          <SectionLabel>SHREWSBURY · MASSACHUSETTS</SectionLabel>
          <h1 className="mt-6 font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] text-gold-gradient">
            Your Glow,<br />
            <em className="italic font-light">Our Signature</em>
          </h1>
          <p className="mt-8 text-base md:text-lg text-foreground/75 max-w-xl mx-auto leading-relaxed">
            Experience elevated skincare and body treatments designed to enhance your natural beauty.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#book"
              className="inline-flex items-center justify-center px-10 py-4 text-[11px] uppercase tracking-[0.3em] text-background gold-gradient rounded-sm hover:opacity-90 transition-all"
            >
              Book Your Experience
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-10 py-4 text-[11px] uppercase tracking-[0.3em] text-gold border border-gold/40 rounded-sm hover:bg-gold/10 transition-all"
            >
              Discover Services
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold/60 text-[10px] uppercase tracking-[0.3em]">
          Scroll
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 md:py-40 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <SectionLabel>ABOUT US</SectionLabel>
          <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl text-gold-gradient leading-tight">
            Beauty meets wellness,<br />
            <em className="italic font-light">in perfect balance.</em>
          </h2>
          <div className="mt-10 space-y-6 text-foreground/75 text-base md:text-lg leading-relaxed">
            <p>
              MUSE Aesthetics &amp; Spa by <span className="text-gold">Missi</span> is the premier
              facial spa and skincare clinic in Shrewsbury, MA. We specialize in finding the
              perfect balance between beauty and wellness, offering results-driven treatments
              in a warm and inviting environment.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-28 md:py-32 px-6 border-t border-gold/10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <SectionLabel>THE SIGNATURE MENU</SectionLabel>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl text-gold-gradient">
              Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="group relative p-10 bg-card border border-gold/20 rounded-sm hover:border-gold/60 transition-all duration-500 hover:-translate-y-1"
              >
                <span className="font-display text-[10px] tracking-[0.3em] text-gold/60">
                  0{i + 1}
                </span>
                <h3 className="mt-6 font-serif text-2xl md:text-3xl text-foreground group-hover:text-gold transition-colors">
                  {s.title}
                </h3>
                <p className="mt-4 text-sm text-foreground/65 leading-relaxed">{s.desc}</p>
                <div className="mt-8 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-gold">
                  Learn more
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHERRY FINANCING */}
      <section className="py-12 px-6 border-y border-gold/15" style={{ background: "linear-gradient(90deg, transparent, oklch(0.18 0.06 18 / 0.4), transparent)" }}>
        <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-center gap-6 text-center">
          <span className="font-display text-[10px] tracking-[0.4em] text-gold">FLEXIBLE FINANCING</span>
          <p className="font-serif text-xl md:text-2xl text-foreground/90 italic">
            Treat now, pay later with <span className="text-gold-gradient not-italic font-medium">Cherry</span>.
          </p>
        </div>
      </section>

      {/* GIFT CARD / MEMBERSHIP / PACKAGES */}
      <section className="py-28 md:py-32 px-6">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { id: "giftcard", label: "Gift Card", desc: "The gift of glow — beautifully presented, endlessly personal." },
            { id: "membership", label: "Membership", desc: "Monthly rituals with reserved pricing and exclusive access." },
            { id: "packages", label: "Packages", desc: "Curated treatment series engineered for visible, lasting results." },
          ].map((c) => (
            <div
              id={c.id}
              key={c.id}
              className="p-12 text-center border border-gold/20 rounded-sm bg-card/50 hover:border-gold/60 transition-all"
            >
              <SectionLabel>EXCLUSIVE</SectionLabel>
              <h3 className="mt-5 font-serif text-3xl text-gold-gradient">{c.label}</h3>
              <p className="mt-4 text-sm text-foreground/65">{c.desc}</p>
              <a href="#book" className="mt-7 inline-block text-[10px] uppercase tracking-[0.3em] text-gold border-b border-gold/40 pb-1 hover:border-gold">
                Inquire
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-28 px-6 border-t border-gold/10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <SectionLabel>MOMENTS</SectionLabel>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-gold-gradient">Gallery</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className={`bg-muted border border-gold/15 rounded-sm overflow-hidden ${i % 3 === 0 ? "row-span-2 aspect-[3/5]" : "aspect-square"}`}
                style={{
                  background: `linear-gradient(${135 + i * 20}deg, oklch(0.96 0.01 350), oklch(0.88 0.05 350))`,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="py-28 md:py-32 px-6">
        <div className="mx-auto max-w-5xl text-center">
          <SectionLabel>MEET THE TEAM</SectionLabel>
          <h2 className="mt-6 font-serif text-4xl md:text-5xl text-gold-gradient">The hands behind the glow</h2>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { name: "Missi", role: "Founder · Master Esthetician" },
              { name: "Aria", role: "Lymphatic Drainage Specialist" },
              { name: "Lena", role: "Lead Skin Therapist" },
            ].map((m) => (
              <div key={m.name}>
                <div
                  className="aspect-[4/5] rounded-sm border border-gold/20 mb-5"
                  style={{ background: "linear-gradient(160deg, oklch(0.96 0.01 350), oklch(0.86 0.06 350))" }}
                />
                <h3 className="font-serif text-2xl text-foreground">{m.name}</h3>
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold/70 mt-2">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOK / VAGARO */}
      <section id="book" className="py-28 md:py-32 px-6 border-t border-gold/10">
        <div className="mx-auto max-w-5xl text-center">
          <SectionLabel>RESERVATIONS</SectionLabel>
          <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl text-gold-gradient">
            Schedule Your Visit
          </h2>
          <p className="mt-6 text-foreground/70 max-w-xl mx-auto">
            Choose the moment that's right for you. We honor a single guest at a time.
          </p>
          <div
            id="vagaro-widget-container"
            className="mt-12 bg-white rounded-sm border border-gold/20 overflow-hidden"
          >
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

      {/* FOOTER */}
      <footer id="contact" className="border-t border-gold/15 pt-20 pb-10 px-6 bg-card/30">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h4 className="font-serif text-2xl text-gold-gradient">MUSE</h4>
            <p className="font-display text-[9px] tracking-[0.4em] text-gold/60 mt-2">AESTHETICS &amp; SPA</p>
            <p className="mt-6 text-[10px] uppercase tracking-[0.3em] text-gold/70">By appointment only</p>
          </div>
          <div>
            <h5 className="font-display text-[10px] tracking-[0.3em] text-gold mb-4">VISIT</h5>
            <p className="text-sm text-foreground/70 leading-relaxed">
              284 Boston Tpke<br />Shrewsbury, MA 01545
            </p>
          </div>
          <div>
            <h5 className="font-display text-[10px] tracking-[0.3em] text-gold mb-4">CONTACT</h5>
            <p className="text-sm text-foreground/70 leading-relaxed">
              <a href="tel:+17745591684" className="hover:text-gold transition-colors">+1 (774) 559-1684</a><br />
              <a href="mailto:illumeskinspa@gmail.com" className="hover:text-gold transition-colors">illumeskinspa@gmail.com</a>
            </p>
            <div className="mt-5 flex gap-4 text-gold/70">
              <a href="#" aria-label="Instagram" className="hover:text-gold">Instagram</a>
              <a href="#" aria-label="Facebook" className="hover:text-gold">Facebook</a>
            </div>
          </div>
          <div>
            <h5 className="font-display text-[10px] tracking-[0.3em] text-gold mb-4">NEWSLETTER</h5>
            <p className="text-sm text-foreground/70 mb-4">Rituals, openings & private invitations.</p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-2"
            >
              <input
                type="email"
                required
                placeholder="Your email"
                className="flex-1 bg-input border border-gold/30 px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-gold rounded-sm"
              />
              <button
                type="submit"
                className="px-5 py-3 text-[10px] uppercase tracking-[0.3em] text-background gold-gradient rounded-sm hover:opacity-90 transition-all"
              >
                Join
              </button>
            </form>
          </div>
        </div>
        <div className="mx-auto max-w-7xl mt-16 pt-8 border-t border-gold/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/40">
            © {new Date().getFullYear()} Muse Aesthetics &amp; Spa by Missi
          </p>
          <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/40">Crafted with quiet luxury</p>
        </div>
      </footer>
    </div>
  );
}
