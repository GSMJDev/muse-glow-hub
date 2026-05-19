import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/muse/Footer";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — MUSE Aesthetics & Spa by Missi" },
      { name: "description", content: "Moments from the MUSE studio — treatments, rituals and quiet luxury in Shrewsbury, MA." },
      { property: "og:title", content: "Gallery — MUSE Aesthetics & Spa" },
      { property: "og:description", content: "A glimpse inside the MUSE studio." },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <section className="pt-40 pb-28 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <SectionLabel>MOMENTS</SectionLabel>
          <h1 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl text-gold-gradient">Gallery</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div
              key={i}
              className={`bg-muted border border-gold/15 rounded-sm overflow-hidden ${i % 3 === 0 ? "row-span-2 aspect-[3/5]" : "aspect-square"}`}
              style={{ background: `linear-gradient(${135 + i * 20}deg, oklch(0.96 0.01 350), oklch(0.88 0.05 350))` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}