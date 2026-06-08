import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/muse/Footer";

// Imagens originais da galeria
import eyebrown_jpeg from "@/assets/eyebrown.jpeg";
import galery1_1_jpg from "@/assets/galery 1 (1).jpg";
import galery1_2_jpeg from "@/assets/galery 1 (2).jpeg";
import galery1_2_jpg from "@/assets/galery 1 (2).jpg";
import galery1_3_jpeg from "@/assets/galery 1 (3).jpeg";
import galery1_4_jpeg from "@/assets/galery 1 (4).jpeg";

// Imagens representativas dos Serviços para preencher a galeria
import imgDeepCleaningFacial from "@/assets/DeepCleaningFacialMuseByMissi.jpeg";
import imgDermaplaning from "@/assets/DermaplaningGlowWDeepfacialCleaning.jpeg";
import imgMassagemCostas from "@/assets/massagemcostas.jpeg";
import imgMassagemPerna from "@/assets/massagemperna.jpeg";
import imgWaxing from "@/assets/BackWaxBikiniWaxFullBrazilianWax.jpeg";
import imgLasersNoRosto from "@/assets/lasersnorosto.jpeg";
import imgCintura from "@/assets/cintura.jpeg";
import imgLedLamp from "@/assets/ledlamp.jpeg";
import imgAcariciandoLabios from "@/assets/acariciandolabios.jpeg";
import imgMicroNeedling from "@/assets/Micro-needlingFacialoneession.jpeg";

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

// Mapeamento de todas as imagens com tamanho padrão (sem lógica de vertical/horizontal)
const GALLERY_IMAGES = [
  { id: 1, src: galery1_1_jpg, alt: "MUSE Aesthetics Rituals" },
  { id: 2, src: galery1_2_jpeg, alt: "MUSE Aesthetics Studio" },
  { id: 3, src: galery1_2_jpg, alt: "Quiet Luxury Experience" },
  { id: 4, src: galery1_3_jpeg, alt: "MUSE Care and Details" },
  { id: 5, src: galery1_4_jpeg, alt: "MUSE Aesthetics Space" },
  { id: 6, src: eyebrown_jpeg, alt: "Eyebrow Treatment" },
  { id: 7, src: imgDeepCleaningFacial, alt: "Deep Cleansing Facial" },
  { id: 8, src: imgMassagemCostas, alt: "Body Relaxing Massage" },
  { id: 9, src: imgWaxing, alt: "Waxing Services" },
  { id: 10, src: imgLasersNoRosto, alt: "IPL Laser Treatment" },
  { id: 11, src: imgDermaplaning, alt: "Dermaplaning Glow" },
  { id: 12, src: imgCintura, alt: "Body Contour Treatment" },
  { id: 13, src: imgLedLamp, alt: "LED Light Therapy" },
  { id: 14, src: imgMassagemPerna, alt: "Lymphatic Drainage" },
  { id: 15, src: imgAcariciandoLabios, alt: "Lips Hydration" },
  { id: 16, src: imgMicroNeedling, alt: "Microneedling Session" },
];

function GalleryPage() {
  return (
    <section className="pt-40 pb-28 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <SectionLabel>MOMENTS</SectionLabel>
          <h1 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl text-gold-gradient">Gallery</h1>
        </div>
        
        {/* Grid System Uniforme - aspect-square garante que todas fiquem do mesmo tamanho */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {GALLERY_IMAGES.map((image) => (
            <div
              key={image.id}
              className="bg-card border border-gold/15 overflow-hidden group relative aspect-square"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              {/* Overlay sutil para o efeito luxury no hover */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}