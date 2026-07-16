import fenetreMatin from "@/public/images/gallery/fenetre-matin.webp";
import laitonReflet from "@/public/images/gallery/laiton-reflet.webp";
import linSombre from "@/public/images/gallery/lin-sombre.webp";
import lumiereAube from "@/public/images/gallery/lumiere-aube.webp";
import pierreCalme from "@/public/images/gallery/pierre-calme.webp";
import saugeOmbre from "@/public/images/gallery/sauge-ombre.webp";
import { GalleryGrid } from "@/components/gallery-grid";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import type { LightboxItem } from "@/components/lightbox";

// Ambiances abstraites (aucune personne, aucun plat figuratif) : études de
// lumière et de matière. La légende sert de nom accessible dans la lightbox.
const items: LightboxItem[] = [
  { src: lumiereAube, caption: "Première lumière sur la salle" },
  { src: linSombre, caption: "Lin sombre, avant le service" },
  { src: laitonReflet, caption: "Reflet de laiton" },
  { src: fenetreMatin, caption: "Contre-jour du matin" },
  { src: saugeOmbre, caption: "Ombre de sauge" },
  { src: pierreCalme, caption: "Pierre calme" },
];

export function GallerySection() {
  return (
    <section id="galerie" className="bg-nuit px-5 py-24 text-ivoire sm:px-8 sm:py-36">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="max-w-2xl">
          <SectionHeading index="06" eyebrow="Galerie" title="Matières, gestes, lumière" tone="dark" />
          <p className="mt-9 max-w-[46ch] text-lg leading-relaxed text-ivoire/75">
            Un carnet d&rsquo;ambiances plutôt qu&rsquo;un catalogue : la lumière d&rsquo;une salle
            qui s&rsquo;éveille, les matières et les gestes qui font la maison. Touchez une image
            pour l&rsquo;agrandir.
          </p>
        </Reveal>

        <GalleryGrid items={items} />

        <p className="mt-10 text-xs italic text-ivoire/55">
          Visuels d&rsquo;ambiance générés pour ce concept de démonstration.
        </p>
      </div>
    </section>
  );
}
