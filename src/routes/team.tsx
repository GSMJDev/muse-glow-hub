import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/muse/Footer";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Meet the Team — MUSE Aesthetics & Spa by Missi" },
      { name: "description", content: "Meet the master estheticians and therapists behind the MUSE glow." },
      { property: "og:title", content: "Meet the Team — MUSE Aesthetics & Spa" },
      { property: "og:description", content: "The hands behind the glow at MUSE Aesthetics & Spa." },
    ],
  }),
  component: TeamPage,
});

const team = [
  { name: "Missi", role: "Founder · Master Esthetician" },
  { name: "Aria", role: "Lymphatic Drainage Specialist" },
  { name: "Lena", role: "Lead Skin Therapist" },
];

function TeamPage() {
  return (
    <section className="pt-40 pb-28 px-6">
      <div className="mx-auto max-w-5xl text-center">
        <SectionLabel>MEET THE TEAM</SectionLabel>
        <h1 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl text-gold-gradient">The hands behind the glow</h1>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          {team.map((m) => (
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
  );
}