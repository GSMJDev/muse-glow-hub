import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SectionLabel } from "@/components/muse/Footer";
import heroImg from "@/assets/hero-facial.jpeg";
import { VagaroWidget } from '@/components/muse/VagaroWidget';
import { GoogleReviews } from '@/components/muse/GoogleReviews'; // Importando nosso novo widget!

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
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center md:bg-right"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div className="absolute inset-0 z-10 w-full md:w-[60%] bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 pt-8 pb-12">
          <h1 className="flex flex-col">
            <span className="font-serif text-[clamp(4rem,10vw,8rem)] text-white/95 leading-[1] select-none drop-shadow-lg pb-1">
              Your Beauty is
            </span>
            <span className="font-serif italic text-[clamp(3rem,8vw,6rem)] text-gold-gradient leading-[1] -mt-6 md:-mt-10 relative z-10 drop-shadow-lg pb-6">
              our Greatest Inspiration
            </span>
          </h1>

          <p className="mt-2 text-white/90 max-w-md text-lg leading-relaxed z-20 relative">
            Experience elevated skincare and body treatments designed to enhance your natural beauty.
          </p>

          <div className="mt-12 flex flex-col items-start z-20 relative">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white/80 mb-4 drop-shadow-sm">
              <path d="M12 2C12 2 8 6 8 10C8 12.2 9.8 14 12 14C14.2 14 16 12.2 16 10C16 6 12 2 12 2Z" fill="currentColor"/>
              <path d="M12 22C12 22 16 18 16 14C16 11.8 14.2 10 12 10C9.8 10 8 11.8 8 14C8 18 12 22 12 22Z" fill="currentColor"/>
              <path d="M2 12C2 12 6 8 10 8C12.2 8 14 9.8 14 12C14 14.2 12.2 16 10 16C6 16 2 12 2 12Z" fill="currentColor"/>
              <path d="M22 12C22 12 18 16 14 16C11.8 16 10 14.2 10 12C10 9.8 11.8 8 14 8C18 8 22 12 22 12Z" fill="currentColor"/>
            </svg>

            <p className="text-white/80 text-xs font-bold tracking-[0.25em] uppercase drop-shadow-sm">
              Care designed around you.
            </p>
            <p className="font-serif italic text-white/70 mt-2 text-lg drop-shadow-sm">
              More than treatments — a personalized experience.
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 z-20 relative">
            <Link
              to="/book"
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-center text-white px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase hover:bg-white/20 transition-all shadow-lg"
            >
              Book Your Experience
            </Link>
            <Link
              to="/services"
              className="border border-white/40 text-center text-white px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase hover:bg-white/10 transition-all shadow-lg"
            >
              Discover Services
            </Link>
          </div>
        </div>

        <Link 
          to="/about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/80 cursor-pointer hover:text-white transition-colors z-20"
        >
          <svg className="w-4 h-4 animate-bounce mb-2" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
          <span className="text-[10px] tracking-[0.3em] font-semibold uppercase">About Us</span>
        </Link>
      </section>

      {/* ABOUT */}
      <section className="py-28 md:py-40 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <SectionLabel>ABOUT US</SectionLabel>
          <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl text-gold-gradient leading-tight">
            Beauty meets wellness,<br />
            <em className="italic font-light">in perfect balance.</em>
          </h2>
          <p className="mt-10 text-foreground/75 text-base md:text-lg leading-relaxed">
            A premier aesthetic clinic in Shrewsbury, MA, where dedicated care meets results-driven treatments.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-block text-[10px] uppercase tracking-[0.3em] text-gold border-b border-gold/40 pb-1 hover:border-gold"
          >
            Read our full story
          </Link>
        </div>
      </section>

      {/* OFFERS */}
      <section className="py-24 bg-[#FCFAF8] px-6">
        <div className="mx-auto max-w-5xl text-center">
          <SectionLabel>SPECIAL OFFERS</SectionLabel>
          <h2 className="mt-6 font-serif text-4xl md:text-5xl text-gold-gradient">
            Featured Packages
          </h2>
          <p className="mt-6 text-foreground/70 max-w-2xl mx-auto">
            Discover our curated aesthetic packages designed to deliver transformative results.
          </p>
          
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="p-10 border border-gold/20 rounded-sm bg-white shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-serif text-2xl text-[#631F37] mb-3">The Signature Glow</h3>
              <p className="text-foreground/75 text-sm mb-8 leading-relaxed">
                Elevate your routine with our signature facial treatments. Book a bundle and receive exclusive complimentary add-ons for a complete experience.
              </p>
              <Link to="/packages" className="text-[10px] font-bold tracking-[0.2em] uppercase text-gold hover:text-[#631F37] transition-colors border-b border-gold pb-1">
                Explore Packages &rarr;
              </Link>
            </div>
            
            <div className="p-10 border border-gold/20 rounded-sm bg-white shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-serif text-2xl text-[#631F37] mb-3">Membership Benefits</h3>
              <p className="text-foreground/75 text-sm mb-8 leading-relaxed">
                Join our exclusive membership program to enjoy monthly treatments, special discounts on products, and priority booking.
              </p>
              <Link to="/membership" className="text-[10px] font-bold tracking-[0.2em] uppercase text-gold hover:text-[#631F37] transition-colors border-b border-gold pb-1">
                View Memberships &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* GOOGLE REVIEWS INJETADO AQUI */}
      <GoogleReviews />

      {/* RESERVATIONS (VAGARO) */}
      <section className="pb-28 md:pb-40 px-6 pt-20">
        <div className="mx-auto max-w-5xl text-center">
          <SectionLabel>RESERVATIONS</SectionLabel>
          <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl text-gold-gradient">
            Book Your Visit
          </h2>
          <p className="mt-6 text-foreground/70 max-w-xl mx-auto">
            Choose the moment that's right for you. We honor a single guest at a time.
          </p>
          
          <div className="mt-12 bg-white rounded-sm border border-gold/20 py-8 flex justify-center">
            <VagaroWidget />
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