import { Reveal } from "@/components/reveal";
import { navLinks, practicalInfo, siteConfig } from "@/content/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-ivoire/10 bg-nuit px-5 pb-14 pt-20 text-ivoire sm:px-8 sm:pb-16 sm:pt-28">
      <div className="mx-auto max-w-[1200px]">
        {/* Signature de fin de page. */}
        <Reveal className="border-b border-ivoire/10 pb-14 sm:pb-20">
          <p className="text-[12px] uppercase tracking-[0.24em] text-laiton">
            {siteConfig.locationLabel}
          </p>
          <p className="mt-6 font-display text-[clamp(2.6rem,8vw,6rem)] font-medium leading-[0.95] tracking-[0.02em]">
            Maison Aurore
          </p>
          <p className="mt-6 max-w-[38ch] text-lg leading-relaxed text-ivoire/70">
            {siteConfig.signature}
          </p>
        </Reveal>

        <div className="grid gap-10 py-12 sm:grid-cols-12">
          <nav aria-label="Pied de page" className="sm:col-span-4">
            <p className="text-[12px] uppercase tracking-[0.2em] text-ivoire/50">Explorer</p>
            <ul className="mt-4 grid gap-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-ivoire/70 transition-colors duration-[var(--dur-micro)] hover:text-laiton"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="sm:col-span-4">
            <p className="text-[12px] uppercase tracking-[0.2em] text-ivoire/50">Horaires</p>
            <ul className="mt-4 grid gap-1.5 text-sm text-ivoire/70">
              {practicalInfo.hours.map((h) => (
                <li key={h.days}>
                  {h.days} — {h.time}
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-4">
            <p className="text-[12px] uppercase tracking-[0.2em] text-ivoire/50">Adresse</p>
            <address className="mt-4 text-sm not-italic leading-relaxed text-ivoire/70">
              {practicalInfo.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
              <a
                href="#top"
                className="mt-4 inline-flex items-center gap-2 text-ivoire/80 transition-colors duration-[var(--dur-micro)] hover:text-laiton"
              >
                Haut de page
                <span aria-hidden>↑</span>
              </a>
            </address>
          </div>
        </div>

        <div className="border-t border-ivoire/10 pt-7 text-[13px] leading-relaxed text-ivoire/55">
          <p className="max-w-[70ch]">{siteConfig.demoNotice}</p>
          <p className="mt-2">© {new Date().getFullYear()} — Concept réalisé par Vertex Studio.</p>
        </div>
      </div>
    </footer>
  );
}
