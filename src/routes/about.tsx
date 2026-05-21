import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionLabel } from "@/components/muse/Footer";

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
      <div className="mx-auto max-w-4xl text-center">
        <SectionLabel>ABOUT US</SectionLabel>
        <h1 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl text-gold-gradient leading-tight">
          Beauty meets wellness,<br />
          <em className="italic font-light">in perfect balance.</em>
        </h1>
        <div className="mt-10 space-y-6 text-foreground/75 text-base md:text-lg leading-relaxed text-left md:text-center">
          <p>
            Welcome to <span className="text-gold">Mizz Muse By Missi Aesthetics</span>, where caring
            for your beauty and well-being is our top priority. Here, you will find a welcoming
            environment where our dedicated team is ready to meet your needs with professionalism
            and care.
          </p>
          <p>
            Count on us to provide high-quality aesthetic experiences, based on our dedication to
            being better every day. We look forward to welcoming you and being part of your
            self-care journey.
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