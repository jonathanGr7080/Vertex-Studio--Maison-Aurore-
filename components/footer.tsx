import { navLinks, practicalInfo, siteConfig } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-ivoire/10 bg-nuit px-5 py-16 text-ivoire sm:px-8 sm:py-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-12 sm:grid-cols-12">
          <div className="sm:col-span-5">
            <p className="font-display text-2xl font-medium tracking-[0.04em]">Maison Aurore</p>
            <p className="mt-3 max-w-[34ch] text-sm leading-relaxed text-ivoire/60">
              {siteConfig.signature}
            </p>
          </div>

          <nav aria-label="Pied de page" className="sm:col-span-3">
            <ul className="grid gap-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-ivoire/70 transition-colors duration-200 hover:text-laiton">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="sm:col-span-4">
            <p className="text-[12px] uppercase tracking-[0.2em] text-ivoire/60">Horaires</p>
            <ul className="mt-3 grid gap-1.5 text-sm text-ivoire/70">
              {practicalInfo.hours.map((h) => (
                <li key={h.days}>
                  {h.days} — {h.time}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-ivoire/10 pt-7 text-[13px] leading-relaxed text-ivoire/60">
          <p className="max-w-[68ch]">{siteConfig.demoNotice}</p>
          <p className="mt-2 text-ivoire/55">
            © {new Date().getFullYear()} — Concept réalisé par Vertex Studio.
          </p>
        </div>
      </div>
    </footer>
  );
}
