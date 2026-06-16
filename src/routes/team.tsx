import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/muse/Footer";

// AQUI: Importações corrigidas para .jpeg
import fernandaImg from "@/assets/fernanda.jpeg";
import micheleImg from "@/assets/michele.jpeg";
import krystalImg from "@/assets/krystal.jpeg";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Meet the Team — MUSE Aesthetics & Spa by Missi" },
      { name: "description", content: "Behind every glow, there is care, skill, and a team that truly loves what they do." },
      { property: "og:title", content: "Meet the Team — MUSE Aesthetics & Spa" },
      { property: "og:description", content: "The hands behind the glow at Muse By Missi Aesthetics." },
    ],
  }),
  component: TeamPage,
});

type Member = { name: string; role: string; src: string; bio: string };

const team: Member[] = [
  {
    name: "Fernanda Missi",
    role: "Founder · Licensed Esthetician · Aesthetics Instructor",
    src: fernandaImg,
    bio: "Founder of Muse By Missi Aesthetics, Fernanda Missi is a licensed esthetician and aesthetics instructor in Massachusetts, with over 4 years of experience in aesthetics and 10 years in psychology. Specialized in facial and body treatments, she is passionate about personalized care, creating customized protocols designed to help every client feel confident, cared for, and naturally beautiful.",
  },
  {
    name: "Michele Lopes",
    role: "Licensed Esthetician",
    src: micheleImg,
    bio: "Michele Lopes is a licensed esthetician in Massachusetts and a Medical Assistant student, specializing in waxing, IPL hair removal, and personalized facial treatments. With a detail-oriented and client-centered approach, she is dedicated to providing safe, comfortable, and professional experiences that help every client feel confident and well cared for.",
  },
  {
    name: "Krystal Vitorino",
    role: "Administrative Assistant | Muse By Missi",
    src: krystalImg,
    bio: "Hello! My name is Krystal Vitorino, and I help with some of the administrative tasks at Muse by Missi Spa, making sure everything runs smoothly behind the scenes. I’m a fun, friendly, and kind person who loves creating a welcoming atmosphere for our clients. Whether you’re visiting for the first time or returning for another appointment, I’m always happy to greet you with a smile and help however I can. I look forward to welcoming you to Muse by Missi Spa anytime!",
  },
];

function MemberCard({ m }: { m: Member }) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);
  return (
    <article className="group flex flex-col md:flex-row bg-card/40 border border-gold/20 rounded-sm overflow-hidden hover:border-gold/60 transition-all duration-500">
      <div
        className="relative w-full md:w-[42%] h-80 md:h-auto md:min-h-[28rem] overflow-hidden flex-shrink-0"
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
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-background/20" />
      </div>
      <div className="p-8 md:p-12 flex-1 flex flex-col justify-center">
        <h3 className="font-serif text-3xl text-foreground group-hover:text-gold transition-colors">
          {m.name}
        </h3>
        <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-gold/80">{m.role}</p>
        <div className="mt-5 h-px w-12 bg-gold/40" />
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
        <p className="mt-6 text-foreground/70 max-w-2xl mx-auto italic font-serif text-lg md:text-xl">
          Behind every glow, there is care, skill, and a team that truly loves what they do.
        </p>
        <div className="mt-16 flex flex-col gap-10 text-left">
          {team.map((m) => (
            <MemberCard key={m.name} m={m} />
          ))}
        </div>
      </div>
    </section>
  );
}