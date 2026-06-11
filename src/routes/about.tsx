import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionLabel } from "@/components/muse/Footer";

// IMPORTAÇÕES
import aboutBg from "@/assets/aboutus.jpeg"; // Foto da Fernanda
import teamPhoto from "@/assets/team.jpeg";  // Foto da Equipe

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
    <section className="pt-40 pb-28 md:pb-40 px-6">
      <div className="mx-auto max-w-7xl">
        
        {/* GRID DE DUAS COLUNAS: Fotos na esquerda, Texto na direita */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          
          {/* LADO ESQUERDO: GALERIA DE FOTOS */}
          <div className="flex flex-col gap-8 md:gap-12">
            
            {/* Foto Principal (Fernanda) */}
            <div className="relative p-2 border border-gold/20 bg-white shadow-xl rotate-[-1deg] hover:rotate-0 transition-transform duration-500 w-full">
              <img
                src={aboutBg}
                alt="Missi"
                loading="lazy"
                className="w-full aspect-[4/3] object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700" 
              />
              <div className="absolute inset-3 border border-gold/10 pointer-events-none" />
            </div>

            {/* Foto da Equipe */}
            <div className="relative p-2 border border-gold/20 bg-white shadow-xl rotate-[1deg] hover:rotate-0 transition-transform duration-500 w-full">
              <img
                src={teamPhoto}
                alt="MUSE Aesthetics & Spa Team"
                loading="lazy"
                className="w-full aspect-[4/3] object-cover object-center grayscale-[10%] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-3 border border-gold/10 pointer-events-none" />
            </div>

          </div>

          {/* LADO DIREITO: CONTEÚDO E TEXTO */}
          <div className="flex flex-col justify-start">
            <SectionLabel>ABOUT US</SectionLabel>
            <h1 className="mt-4 font-serif text-4xl md:text-5xl text-gold-gradient leading-tight">
              Beauty and wellness<br />
              <em className="italic font-light">in perfect harmony.</em>
            </h1>

            <div className="mt-8 space-y-6 text-foreground/75 text-base md:text-lg leading-relaxed text-left">
              <p>
                Welcome to <span className="text-gold">Muse By Missi Aesthetics</span> — a new chapter
                created from the dream of offering a space where beauty, care, and well-being come
                together in perfect harmony.
              </p>
              <p>
                Founded in June 2022 as Mizz Missi Aesthetics, our journey began with a simple mission:
                to create an environment where clients feel genuinely welcomed, confident, and inspired.
              </p>
              <p>
                Over the years, we have grown not only as a business, but as a brand with greater
                purpose, vision, and an even stronger commitment to the experience of every client.
              </p>
              <p className="font-serif text-2xl text-gold-gradient italic py-2 border-l-2 border-gold/30 pl-4 my-4">
                Today, we proudly evolve into Muse By Missi.
              </p>
              <p>
                The name <em className="text-gold not-italic">"Muse"</em> represents inspiration,
                femininity, confidence, and beauty in its most authentic form.
              </p>
              <p>
                Our team is dedicated to continuous improvement, professional excellence, and genuine
                human connection — because we believe every client deserves to feel valued, seen, and
                beautifully cared for.
              </p>
              <p className="text-gold/90 font-medium">
                Thank you for being part of our story since 2022. We look forward to welcoming you into
                this new chapter of Muse By Missi Aesthetics.
              </p>
            </div>

            <div className="mt-10">
              <Link
                to="/book"
                className="inline-flex items-center justify-center px-10 py-4 text-[11px] uppercase tracking-[0.3em] text-background gold-gradient rounded-sm hover:opacity-90 transition-all shadow-md"
              >
                Book Your Visit
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}