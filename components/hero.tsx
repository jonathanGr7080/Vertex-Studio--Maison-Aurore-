import Image from "next/image";
import heroImage from "@/public/images/hero-aurore.webp";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh items-end overflow-hidden bg-nuit">
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

      {/* Voile dégradé pour garantir la lisibilité du texte quelle que soit l'image. */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(16,24,32,0.25) 0%, rgba(16,24,32,0.5) 58%, rgba(16,24,32,0.85) 100%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1200px] px-5 pb-24 pt-44 sm:px-8 sm:pb-32">
        <div className="max-w-3xl motion-safe:animate-[fade-up_0.55s_ease-out]">
          <p className="flex items-center gap-4 text-[12px] uppercase tracking-[0.24em] text-laiton">
            <span aria-hidden className="h-px w-10 bg-laiton/50" />
            Restaurant gastronomique · Bruges
          </p>

          <h1 className="mt-7 font-display text-[clamp(2.6rem,6vw,4.75rem)] font-medium leading-[1.06] text-ivoire">
            Une cuisine de saison pensée pour créer des souvenirs.
          </h1>

          <p className="mt-7 max-w-[46ch] text-lg leading-relaxed text-ivoire/80">
            Produits belges, créativité contemporaine et hospitalité au cœur de Bruges.
          </p>

          <div className="mt-11 flex flex-wrap gap-4">
            <a
              href="#reservation"
              className="flex min-h-12 items-center bg-laiton px-8 text-sm font-medium tracking-[0.03em] text-nuit transition-colors duration-200 hover:bg-pierre"
            >
              Réserver une table
            </a>
            <a
              href="#menus"
              className="flex min-h-12 items-center border border-ivoire/30 px-8 text-sm font-medium tracking-[0.03em] text-ivoire transition-colors duration-200 hover:border-laiton hover:text-laiton"
            >
              Découvrir les menus
            </a>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="absolute bottom-0 left-1/2 hidden h-16 w-px -translate-x-1/2 bg-gradient-to-b from-transparent to-ivoire/40 sm:block"
      />
    </section>
  );
}
