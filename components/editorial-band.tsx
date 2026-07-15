import Image from "next/image";
import ambianceImage from "@/public/images/gallery/lumiere-aube.webp";
import { Reveal } from "@/components/reveal";

/**
 * Bande éditoriale plein cadre : citation manifeste + visuel d'ambiance débordant.
 * Rompt le rythme « section + grille » et sert de respiration entre deux sections.
 */
export function EditorialBand() {
  return (
    <section className="relative overflow-hidden bg-nuit text-ivoire">
      <div className="mx-auto grid max-w-[1400px] items-stretch lg:grid-cols-2">
        <div className="order-2 flex flex-col justify-center px-5 py-20 sm:px-8 sm:py-28 lg:order-1 lg:py-40 lg:pr-16">
          <Reveal>
            <p className="flex items-center gap-4 text-[12px] uppercase tracking-[0.22em] text-laiton">
              <span aria-hidden className="h-px w-10 bg-laiton/60" />
              Au rythme des saisons
            </p>
            <p className="mt-8 max-w-[20ch] font-display text-[clamp(2.2rem,4.4vw,3.6rem)] font-medium leading-[1.08]">
              Ce que la terre et la mer donnent au matin, la table le raconte le soir.
            </p>
            <p className="mt-8 max-w-[44ch] text-lg leading-relaxed text-ivoire/75">
              Aucune carte figée, aucune promesse hors-saison. La maison cuisine ce qui est prêt,
              au moment où il l&rsquo;est — et l&rsquo;assume comme une signature.
            </p>
          </Reveal>
        </div>

        <div className="relative order-1 min-h-[52vw] lg:order-2 lg:min-h-[36rem]">
          <Image
            src={ambianceImage}
            alt=""
            fill
            placeholder="blur"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          {/* Fondu vers le texte côté intérieur, pour une jonction douce. */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(16,24,32,0.65) 0%, transparent 45%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
