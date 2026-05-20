import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SectionLabel } from "@/components/muse/Footer";
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

function Index() {
  return (
    <>
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
            width={640}
            height={640}
            className="mx-auto h-56 md:h-72 lg:h-80 w-auto mb-4 [image-rendering:auto] drop-shadow-[0_4px_24px_rgba(0,0,0,0.25)]"
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
            <Link
              to="/book"
              className="inline-flex items-center justify-center px-10 py-4 text-[11px] uppercase tracking-[0.3em] text-background gold-gradient rounded-sm hover:opacity-90 transition-all"
            >
              Book Your Experience
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-10 py-4 text-[11px] uppercase tracking-[0.3em] text-gold border border-gold/40 rounded-sm hover:bg-gold/10 transition-all"
            >
              Discover Services
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT brief */}
      <section className="py-28 md:py-40 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <SectionLabel>ABOUT US</SectionLabel>
          <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl text-gold-gradient leading-tight">
            Beauty meets wellness,<br />
            <em className="italic font-light">in perfect balance.</em>
          </h2>
          <p className="mt-10 text-foreground/75 text-base md:text-lg leading-relaxed">
            MUSE Aesthetics &amp; Spa by <span className="text-gold">Missi</span> is the premier
            facial spa and skincare clinic in Shrewsbury, MA — results-driven treatments in a warm,
            inviting environment.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-block text-[10px] uppercase tracking-[0.3em] text-gold border-b border-gold/40 pb-1 hover:border-gold"
          >
            More about us
          </Link>
        </div>
      </section>

      {/* BOOK ON VAGARO */}
      <section className="pb-28 md:pb-40 px-6">
        <div className="mx-auto max-w-5xl text-center">
          <SectionLabel>RESERVATIONS</SectionLabel>
          <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl text-gold-gradient">
            Book Your Visit
          </h2>
          <p className="mt-6 text-foreground/70 max-w-xl mx-auto">
            Choose the moment that's right for you. We honor a single guest at a time.
          </p>
          <div className="mt-12 bg-white rounded-sm border border-gold/20 overflow-hidden">
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
    </>
  );
}
