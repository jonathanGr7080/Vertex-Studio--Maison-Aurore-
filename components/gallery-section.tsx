import salleLampe from "@/public/images/gallery/salle-lampe-claustra.webp";
import linCouverts from "@/public/images/gallery/lin-couverts.webp";
import refletSombre from "@/public/images/gallery/reflet-sombre.webp";
import fenetreLumiere from "@/public/images/gallery/fenetre-lumiere.webp";
import sauge from "@/public/images/gallery/sauge.webp";
import ailBoisNoir from "@/public/images/gallery/ail-bois-noir.webp";
import { GalleryGrid } from "@/components/gallery-grid";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import type { LightboxItem } from "@/components/lightbox";

// Photographies d'ambiance sous licence (matières, lumière, gestes). La légende
// sert de nom accessible dans la lightbox.
const items: LightboxItem[] = [
  { src: salleLampe, caption: "Première lumière sur la salle" },
  { src: linCouverts, caption: "Lin sombre, avant le service" },
  { src: refletSombre, caption: "Reflet de laiton" },
  { src: fenetreLumiere, caption: "Contre-jour du matin" },
  { src: sauge, caption: "Ombre de sauge" },
  { src: ailBoisNoir, caption: "Ail nouveau, sur le bois" },
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
          Photographies d&rsquo;ambiance sous licence — concept de démonstration.
        </p>
      </div>
    </section>
  );
}
