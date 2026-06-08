import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionLabel } from "@/components/muse/Footer";

// IMPORTAÇÕES
import aboutBg from "@/assets/aboutus.jpeg";
import teamPhoto from "@/assets/team.jpeg"; 

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — MUSE Aesthetics & Spa by Missi" },
      { name: "description", content: "Meet MUSE Aesthetics & Spa by Missi — Shrewsbury's premier facial spa balancing beauty and wellness." },
      { property: "og:title", content: "About MUSE Aesthetics & Spa by Missi" },
      { property: "og:description", content: "Premier facial spa and skincare clinic in Shrewsbury, MA — where beauty meets wellness." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <section className="relative pt-40 pb-28 md:pb-40 px-6 overflow-hidden">
      
      {/* CAMADA DE FUNDO */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img
          src={aboutBg}
          alt="About Background"
          loading="lazy"
          className="w-full h-full object-cover opacity-30" 
        />
        <div className="absolute inset-0 bg-background/40 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <SectionLabel>ABOUT US</SectionLabel>
        <h1 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl text-gold-gradient leading-tight">
          Beauty and wellness<br />
          <em className="italic font-light">in perfect harmony.</em>
        </h1>

        {/* BLOCO DE TEXTO INICIAL */}
        <div className="mt-10 space-y-6 text-foreground/75 text-base md:text-lg leading-relaxed text-left md:text-center">
          <p>
            Welcome to <span className="text-gold">Muse By Missi Aesthetics</span> — a new chapter
            created from the dream of offering a space where beauty, care, and well-being come
            together in perfect harmony.
          </p>
          <p>
            Founded in June 2022 as Mizz Missi Aesthetics, our journey began with a simple mission:
            to create an environment where clients feel genuinely welcomed, confident, and inspired.
          </p>
        </div>

      

        {/* BLOCO DE TEXTO FINAL */}
        <div className="space-y-6 text-foreground/75 text-base md:text-lg leading-relaxed text-left md:text-center">
          <p>
            Over the years, we have grown not only as a business, but as a brand with greater
            purpose, vision, and an even stronger commitment to the experience of every client.
          </p>
          <p className="font-serif text-xl md:text-2xl text-gold-gradient italic">
            Today, we proudly evolve into Muse By Missi.
          </p>
          <div className="my-20 flex justify-center px-4">
          <div className="relative p-2 border border-gold/20 bg-white shadow-2xl rotate-[-1deg] hover:rotate-0 transition-transform duration-500 max-w-2xl w-full">
            <img
              src={teamPhoto}
              alt="MUSE Aesthetics & Spa Team"
              className="w-full h-auto grayscale-[10%] hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-3 border border-gold/10 pointer-events-none" />
          </div>
        </div>
          <p>
            The name <em className="text-gold not-italic">"Muse"</em> represents inspiration,
            femininity, confidence, and beauty in its most authentic form.
          </p>
          <p>
            Our team is dedicated to continuous improvement, professional excellence, and genuine
            human connection — because we believe every client deserves to feel valued, seen, and
            beautifully cared for.
          </p>
          <p className="text-gold/90">
            Thank you for being part of our story since 2022. We look forward to welcoming you into
            this new chapter of Muse By Missi Aesthetics.
          </p>
        </div>

        <Link
          to="/book"
          className="mt-12 inline-flex items-center justify-center px-10 py-4 text-[11px] uppercase tracking-[0.3em] text-background gold-gradient rounded-sm hover:opacity-90 transition-all"
        >
          Book Your Visit
        </Link>
      </div>
    </section>
  );
}