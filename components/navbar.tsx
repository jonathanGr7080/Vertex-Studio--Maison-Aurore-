"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/content/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-nuit/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-ivoire focus:px-4 focus:py-2 focus:text-sm focus:text-nuit"
      >
        Aller au contenu
      </a>

      <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between gap-4 px-5 sm:px-8">
        <a
          href="#top"
          className="font-display text-[1.35rem] font-medium tracking-[0.04em] text-ivoire"
        >
          Maison&nbsp;Aurore
        </a>

        <nav aria-label="Navigation principale" className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ivoire/85 transition-colors duration-200 hover:text-laiton"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#reservation"
            className="flex min-h-11 items-center border border-laiton/70 px-4 py-2 text-[13px] font-medium tracking-[0.04em] text-ivoire transition-colors duration-200 hover:bg-laiton hover:text-nuit sm:px-6 sm:text-sm"
          >
            Réserver
          </a>

          <button
            type="button"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center text-ivoire lg:hidden"
          >
            {open ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M4 8h16M4 16h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        id="menu-mobile"
        className={`grid transition-[grid-template-rows] duration-300 ease-out lg:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <nav
          aria-label="Navigation mobile"
          className={`overflow-hidden bg-nuit ${open ? "" : "invisible"}`}
        >
          <ul className="flex flex-col border-t border-ivoire/10 px-5 py-4 sm:px-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center border-b border-ivoire/10 font-display text-xl text-ivoire/90 hover:text-laiton"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#reservation"
                onClick={() => setOpen(false)}
                className="mt-5 mb-2 flex min-h-12 items-center justify-center bg-laiton px-5 text-sm font-medium text-nuit"
              >
                Réserver une table
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
