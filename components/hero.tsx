import Image from "next/image";
import heroImage from "@/public/images/hero-aurore.webp";
import { ButtonLink } from "@/components/button-link";

const signals = ["Cuisine de saison", "Cuisine ouverte", "Cœur de Bruges"];

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh flex-col justify-end overflow-hidden bg-nuit">
      {/*
        Visuel d'ambiance « aube sur la salle » généré pour la démonstration
        (abstrait, sans personne). À remplacer par la photographie finale.
        Décoratif : l'information est portée par le H1, d'où alt="".
      */}
      <Image
        src={heroImage}
        alt=""
        fill
        priority
        placeholder="blur"
        sizes="100vw"
        className="object-cover"
      />

      {/* Double voile : renforce la présence et garantit la lisibilité du texte. */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(16,24,32,0.2) 0%, rgba(16,24,32,0.45) 52%, rgba(16,24,32,0.88) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(130% 90% at 15% 100%, rgba(16,24,32,0.55) 0%, transparent 55%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1200px] px-5 pb-14 pt-40 sm:px-8 sm:pb-16 sm:pt-48">
        <div className="max-w-3xl motion-safe:animate-[fade-up_0.6s_var(--ease-out)_both]">
          <p className="flex items-center gap-4 text-[12px] uppercase tracking-[0.24em] text-laiton">
            <span aria-hidden className="h-px w-10 bg-laiton/60" />
            Restaurant gastronomique · Bruges
          </p>

          <h1 className="mt-7 font-display text-[clamp(2.7rem,6.4vw,5rem)] font-medium leading-[1.04] text-ivoire text-balance">
            Une cuisine de saison pensée pour créer des souvenirs.
          </h1>

          <p className="mt-7 max-w-[46ch] text-lg leading-relaxed text-ivoire/80">
            Produits belges, créativité contemporaine et hospitalité au cœur de Bruges.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <ButtonLink href="#reservation" variant="primary">
              Réserver une table
            </ButtonLink>
            <ButtonLink href="#menus" variant="outline-light">
              Découvrir les menus
            </ButtonLink>
          </div>
        </div>

        {/* Ligne de signature : ancre le positionnement en une lecture. */}
        <div className="mt-14 border-t border-ivoire/15 pt-6 sm:mt-20">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] uppercase tracking-[0.18em] text-ivoire/70">
            {signals.map((signal, i) => (
              <li key={signal} className="flex items-center gap-6">
                {i > 0 && <span aria-hidden className="h-1 w-1 rounded-full bg-laiton/70" />}
                {signal}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 hidden h-16 w-px -translate-x-1/2 overflow-hidden sm:block"
      >
        <span className="block h-full w-px bg-gradient-to-b from-transparent to-ivoire/45 motion-safe:animate-[scroll-cue_2.4s_var(--ease-standard)_infinite]" />
      </div>
    </section>
  );
}
