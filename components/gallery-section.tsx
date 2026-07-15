import { ImagePlaceholder } from "@/components/image-placeholder";
import { SectionHeading } from "@/components/section-heading";

const galleryItems = [
  { label: "La salle vide, avant le service", aspect: "aspect-[4/3]", className: "sm:col-span-4" },
  { label: "Dressage d'une assiette signature", aspect: "aspect-[4/5]", className: "sm:col-span-2 sm:mt-14" },
  { label: "Produits bruts du matin", aspect: "aspect-square", className: "sm:col-span-2" },
  { label: "Gestes du chef, cuisine ouverte", aspect: "aspect-[4/3]", className: "sm:col-span-4 sm:-mt-14" },
  { label: "Lin, pierre et laiton — détails de salle", aspect: "aspect-[4/3]", className: "sm:col-span-3" },
  { label: "Accord au verre, lumière du soir", aspect: "aspect-[4/3]", className: "sm:col-span-3 sm:mt-10" },
];

export function GallerySection() {
  return (
    <section id="galerie" className="bg-nuit px-5 py-24 text-ivoire sm:px-8 sm:py-36">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading index="05" eyebrow="Galerie" title="Matières, gestes, lumière" tone="dark" />

        {/* Composition irrégulière volontaire — décalages contrôlés, pas de carrousel. */}
        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-6">
          {galleryItems.map((item) => (
            <ImagePlaceholder
              key={item.label}
              label={item.label}
              aspect={item.aspect}
              className={item.className}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
