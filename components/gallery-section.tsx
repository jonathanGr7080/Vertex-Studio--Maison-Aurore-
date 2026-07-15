import Image, { type StaticImageData } from "next/image";
import fenetreMatin from "@/public/images/gallery/fenetre-matin.webp";
import laitonReflet from "@/public/images/gallery/laiton-reflet.webp";
import linSombre from "@/public/images/gallery/lin-sombre.webp";
import lumiereAube from "@/public/images/gallery/lumiere-aube.webp";
import pierreCalme from "@/public/images/gallery/pierre-calme.webp";
import saugeOmbre from "@/public/images/gallery/sauge-ombre.webp";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

// Ambiances abstraites (aucune personne, aucun plat figuratif) : études de
// lumière et de matière. Décoratives — d'où alt="".
const items: { src: StaticImageData; caption: string }[] = [
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
          <SectionHeading index="05" eyebrow="Galerie" title="Matières, gestes, lumière" tone="dark" />
          <p className="mt-9 max-w-[46ch] text-lg leading-relaxed text-ivoire/75">
            Un carnet d&rsquo;ambiances plutôt qu&rsquo;un catalogue : la lumière d&rsquo;une salle
            qui s&rsquo;éveille, les matières et les gestes qui font la maison.
          </p>
        </Reveal>

        {/* Masonry par colonnes : composition naturellement asymétrique, ordre de
            lecture simple en une colonne sur mobile. */}
        <div className="mt-16 gap-5 [column-fill:_balance] sm:mt-20 sm:columns-2 sm:gap-6 lg:columns-3">
          {items.map((item, i) => (
            <Reveal
              key={item.caption}
              delayMs={(i % 3) * 80}
              className="mb-5 break-inside-avoid sm:mb-6"
            >
              <figure className="group relative overflow-hidden">
                <Image
                  src={item.src}
                  alt=""
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="h-auto w-full object-cover transition-transform duration-[var(--dur-base)] ease-[var(--ease-standard)] motion-safe:group-hover:scale-[1.03]"
                />
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-nuit/70 to-transparent px-4 pb-3 pt-10 text-[11px] uppercase tracking-[0.16em] text-ivoire/80 opacity-0 transition-opacity duration-[var(--dur-base)] group-hover:opacity-100">
                  {item.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-xs italic text-ivoire/55">
          Visuels d&rsquo;ambiance générés pour ce concept de démonstration.
        </p>
      </div>
    </section>
  );
}
