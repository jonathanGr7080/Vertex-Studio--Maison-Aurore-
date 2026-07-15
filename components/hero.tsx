const GRAIN_URI =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh items-end overflow-hidden bg-nuit">
      {/* Fond provisoire évoquant l'aube — à remplacer par la photographie finale au Sprint 2. */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(120% 85% at 18% 96%, rgba(185,146,91,0.34) 0%, rgba(185,146,91,0.10) 38%, transparent 68%), radial-gradient(85% 60% at 85% 8%, rgba(90,106,88,0.16), transparent 62%), linear-gradient(180deg, rgba(16,24,32,0.25) 0%, rgba(16,24,32,0.55) 60%, rgba(16,24,32,0.82) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.13] mix-blend-overlay"
        style={{ backgroundImage: GRAIN_URI }}
      />
      {/* Ligne d'horizon */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-[64%] h-px"
        style={{
          backgroundImage:
            "linear-gradient(90deg, transparent, rgba(185,146,91,0.45) 22%, rgba(185,146,91,0.1) 70%, transparent)",
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
