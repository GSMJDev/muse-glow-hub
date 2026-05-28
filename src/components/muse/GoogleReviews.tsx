import { SectionLabel } from "@/components/muse/Footer";

type Review = { name: string; rating: number; text: string; date: string };

const reviews: Review[] = [
  {
    name: "Sarah M.",
    rating: 5,
    date: "2 weeks ago",
    text: "Absolutely the best facial I've ever had. Fernanda's attention to detail is unmatched and my skin has never looked better.",
  },
  {
    name: "Jessica R.",
    rating: 5,
    date: "1 month ago",
    text: "The space is gorgeous and so calming. Michele made my waxing experience comfortable and quick. Highly recommend!",
  },
  {
    name: "Amanda L.",
    rating: 5,
    date: "1 month ago",
    text: "True luxury experience. The lymphatic drainage with the hot blanket was life-changing. I'll be back monthly.",
  },
];

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5 text-gold">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i < n ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export function GoogleReviews() {
  return (
    <section className="py-24 md:py-32 px-6 bg-card/20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <SectionLabel>GOOGLE REVIEWS</SectionLabel>
          <h2 className="mt-6 font-serif text-3xl md:text-4xl lg:text-5xl text-gold-gradient">
            Loved by our guests
          </h2>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Stars n={5} />
            <span className="text-sm text-foreground/70">5.0 · Verified Google Reviews</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <article
              key={r.name}
              className="p-8 border border-gold/15 rounded-sm bg-background/60 hover:border-gold/40 transition-colors"
            >
              <Stars n={r.rating} />
              <p className="mt-5 text-sm text-foreground/80 leading-relaxed italic">"{r.text}"</p>
              <div className="mt-6 pt-5 border-t border-gold/10 flex items-center justify-between">
                <span className="text-sm font-serif text-foreground">{r.name}</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/50">{r.date}</span>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/search?q=Muse+By+Missi+Aesthetics+Shrewsbury"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-[10px] uppercase tracking-[0.3em] text-gold border-b border-gold/40 pb-1 hover:border-gold"
          >
            Read all reviews on Google →
          </a>
        </div>
      </div>
    </section>
  );
}