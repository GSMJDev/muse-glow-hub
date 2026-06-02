import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/muse/Footer";

// Importando as imagens direto da pasta assets conforme o print image_8e3661.png
import galery1_1_jpeg from "@/assets/galery 1 (1).jpeg";
import galery1_1_jpg from "@/assets/galery 1 (1).jpg";
import galery1_2_jpeg from "@/assets/galery 1 (2).jpeg";
import galery1_2_jpg from "@/assets/galery 1 (2).jpg";
import galery1_3_jpeg from "@/assets/galery 1 (3).jpeg";
import galery1_4_jpeg from "@/assets/galery 1 (4).jpeg";

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

// Mapeamento das imagens importadas
const GALLERY_IMAGES = [
  { id: 1, src: galery1_1_jpeg, alt: "MUSE Aesthetics Treatment", isVertical: false },
  { id: 2, src: galery1_1_jpg, alt: "MUSE Aesthetics Rituals", isVertical: false },
  { id: 3, src: galery1_2_jpeg, alt: "MUSE Aesthetics Studio", isVertical: true }, // Destaque vertical
  { id: 4, src: galery1_2_jpg, alt: "Quiet Luxury Experience", isVertical: false },
  { id: 5, src: galery1_3_jpeg, alt: "MUSE Care and Details", isVertical: false },
  { id: 6, src: galery1_4_jpeg, alt: "MUSE Aesthetics Space", isVertical: true }, // Destaque vertical
];

function GalleryPage() {
  return (
    <section className="pt-40 pb-28 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <SectionLabel>MOMENTS</SectionLabel>
          <h1 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl text-gold-gradient">Gallery</h1>
        </div>
        
        {/* Grid System */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {GALLERY_IMAGES.map((image) => (
            <div
              key={image.id}
              className={`bg-muted border border-gold/15 rounded-sm overflow-hidden group relative 
                ${image.isVertical ? "row-span-2 aspect-[3/5]" : "aspect-square"}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {/* Overlay sutil para o efeito luxury no hover */}
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}