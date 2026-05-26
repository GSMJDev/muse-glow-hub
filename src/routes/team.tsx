import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/muse/Footer";
import fernandaImg from "@/assets/fernanda.png";
import micheleImg from "@/assets/michele.png";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Meet the Team — MUSE Aesthetics & Spa by Missi" },
      { name: "description", content: "Meet Fernanda and Michele — the licensed estheticians behind Mizz Missi Aesthetics." },
      { property: "og:title", content: "Meet the Team — MUSE Aesthetics & Spa" },
      { property: "og:description", content: "The hands behind the glow at Mizz Missi Aesthetics." },
    ],
  }),
  component: TeamPage,
});

type Member = { name: string; role: string; src: string; bio: string };

const team: Member[] = [
  {
    name: "Fernanda Missi",
    role: "Licensed Esthetician & Instructor",
    src: fernandaImg,
    bio: "My name is Fernanda, I'm a licensed esthetician with over 10 years of experience, and a licensed esthetics instructor at Flávia Leal School in Massachusetts. I have a passion for caring for people, and I strive to infuse that love into everything I do. I'm a mother to a splendid girl who is the inspiration behind Mizz Missi Aesthetics. I aim to provide you with an experience where you feel your face, body, and mind in harmony and satisfaction. Your trust in us is crucial, and we'll do everything within our power to earn it. I hope Mizz Missi Aesthetics becomes part of your self-care journey.",
  },
  {
    name: "Michele",
    role: "Licensed Esthetician",
    src: micheleImg,
    bio: "My name is Michele, and I am a licensed esthetician in Massachusetts, specialized in body hair removal. I believe that body care goes far beyond aesthetics — it is about comfort, confidence, and overall well-being. Each treatment is performed with technique, responsibility, and great attention to detail, always respecting the individuality and comfort of every client. My goal is to provide a safe, effective, and personalized service, ensuring that you feel confident and well cared for from start to finish.",
  },
];

function MemberCard({ m }: { m: Member }) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);
  return (
    <article className="group flex flex-col bg-card/40 border border-gold/20 rounded-sm overflow-hidden hover:border-gold/60 transition-all duration-500">
      <div
        className="relative w-full h-96 md:h-[28rem] overflow-hidden"
        style={{ background: "linear-gradient(160deg, oklch(0.96 0.01 350), oklch(0.86 0.06 350))" }}
      >
        {!errored && (
          <img
            src={m.src}
            alt={`${m.name} — ${m.role}`}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            onError={() => setErrored(true)}
            className={`absolute inset-0 w-full h-full object-cover object-[center_top] block transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
          />
        )}
        {(!loaded || errored) && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-serif text-6xl text-gold-gradient opacity-70">
              {m.name.charAt(0)}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
      </div>
      <div className="p-8 md:p-10 flex-1 flex flex-col">
        <h3 className="font-serif text-3xl text-foreground group-hover:text-gold transition-colors">
          {m.name}
        </h3>
        <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-gold/80">{m.role}</p>
        <p className="mt-6 text-sm text-foreground/70 leading-relaxed">{m.bio}</p>
      </div>
    </article>
  );
}

function TeamPage() {
  return (
    <section className="pt-40 pb-28 px-6">
      <div className="mx-auto max-w-6xl text-center">
        <SectionLabel>MEET THE TEAM</SectionLabel>
        <h1 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl text-gold-gradient">
          The hands behind the glow
        </h1>
        <p className="mt-6 text-foreground/70 max-w-2xl mx-auto">
          Passionate professionals dedicated to your beauty, comfort and well-being.
        </p>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {team.map((m) => (
            <MemberCard key={m.name} m={m} />
          ))}
        </div>
      </div>
    </section>
  );
}