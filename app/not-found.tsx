import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Page introuvable — Maison Aurore",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-1 items-center justify-center bg-nuit px-5 py-24 text-ivoire sm:px-8">
      <div className="mx-auto w-full max-w-[640px] text-center">
        <p className="flex items-center justify-center gap-4 text-[12px] uppercase tracking-[0.24em] text-laiton">
          <span aria-hidden className="h-px w-8 bg-laiton/50" />
          Erreur 404
          <span aria-hidden className="h-px w-8 bg-laiton/50" />
        </p>

        <h1 className="mt-7 font-display text-[clamp(2.4rem,6vw,3.6rem)] font-medium leading-[1.08]">
          Cette page a quitté la carte
        </h1>

        <p className="mx-auto mt-6 max-w-[46ch] text-lg leading-relaxed text-ivoire/75">
          Comme un plat hors saison, la page que vous cherchez n&rsquo;est plus au menu.
          Revenons à l&rsquo;accueil.
        </p>

        <div className="mt-10 flex justify-center">
          <ButtonLink href="/" variant="primary">
            Retour à l&rsquo;accueil
          </ButtonLink>
        </div>

        <p className="mt-14 border-t border-ivoire/10 pt-6 text-xs text-ivoire/50">
          {siteConfig.demoNotice}
        </p>
      </div>
    </main>
  );
}
