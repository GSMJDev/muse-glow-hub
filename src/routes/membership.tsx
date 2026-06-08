import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/muse/Footer";

const VAGARO = "https://www.vagaro.com/mizzmissiaesthetics/memberships";

const perks = [
  "Reserved pricing on every signature treatment",
  "Priority booking & exclusive members-only hours",
  "Complimentary monthly add-on (LED, dermaplane or peel)",
  "Early access to seasonal rituals & limited launches",
];

export const Route = createFileRoute("/membership")({
  head: () => ({
    meta: [
      { title: "Membership — MUSE By Missi Aesthetics" },
      { name: "description", content: "A monthly ritual with reserved pricing and exclusive access at Muse By Missi Aesthetics." },
      { property: "og:title", content: "Membership — MUSE By Missi" },
      { property: "og:description", content: "Skin as a discipline. Glow as a routine." },
    ],
  }),
  component: MembershipPage,
});

function MembershipPage() {
  return (
    <section className="pt-40 pb-28 px-6">
      <div className="mx-auto max-w-4xl text-center">
        <SectionLabel>FOR OUR REGULARS</SectionLabel>
        <h1 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl text-gold-gradient">
          Membership
        </h1>
        <p className="mt-6 text-foreground/70 max-w-xl mx-auto leading-relaxed">
          A monthly ritual with reserved pricing and exclusive access — for clients who treat
          skincare as a discipline, not an occasion.
        </p>
        <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
          {perks.map((p) => (
            <li key={p} className="flex gap-3 p-5 border border-gold/15 rounded-sm bg-card/40">
              <span className="text-gold">✦</span>
              <span className="text-sm text-foreground/80">{p}</span>
            </li>
          ))}
        </ul>
        <a
          href={VAGARO}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-flex items-center justify-center px-10 py-4 text-[11px] uppercase tracking-[0.3em] text-background gold-gradient rounded-sm hover:opacity-90 transition-all"
        >
          Inquire about Membership
        </a>
      </div>
    </section>
  );
}