"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { navLinks } from "@/content/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);

  const closeMenu = useCallback(() => setOpen(false), []);

  // Ferme le menu et rend le focus au bouton déclencheur (Échap ou bouton).
  const closeAndRestoreFocus = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  // En-tête : transparent en haut, opaque après un léger défilement.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Referme le menu si l'on repasse en disposition desktop (≥ lg).
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)");
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  // Piège de focus + Échap + verrou de défilement, actifs uniquement à l'ouverture.
  useEffect(() => {
    if (!open) return;
    const menu = menuRef.current;
    if (!menu) return;

    const getFocusable = () =>
      Array.from(
        menu.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'),
      );

    // Déplace le focus dans le menu à l'ouverture.
    getFocusable()[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeAndRestoreFocus();
        return;
      }
      if (event.key !== "Tab") return;

      const items = getFocusable();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (event.shiftKey) {
        if (active === first || !menu.contains(active)) {
          event.preventDefault();
          last.focus();
        }
      } else if (active === last || !menu.contains(active)) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, closeAndRestoreFocus]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-nuit/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <a
        href="#contenu"
        className="sr-only focus-visible:not-sr-only focus-visible:absolute focus-visible:left-4 focus-visible:top-4 focus-visible:z-50 focus-visible:bg-ivoire focus-visible:px-4 focus-visible:py-2 focus-visible:text-sm focus-visible:text-nuit"
      >
        Aller au contenu
      </a>

      <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between gap-4 px-5 sm:px-8">
        <a
          href="#top"
          className="font-display text-[1.35rem] font-medium tracking-[0.04em] text-ivoire transition-colors duration-[var(--dur-micro)] hover:text-laiton"
        >
          Maison&nbsp;Aurore
        </a>

        <nav aria-label="Navigation principale" className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ivoire/85 transition-colors duration-[var(--dur-micro)] hover:text-laiton"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#reservation"
            className="flex min-h-11 items-center border border-laiton/70 px-4 py-2 text-[13px] font-medium tracking-[0.04em] text-ivoire transition duration-[var(--dur-micro)] ease-[var(--ease-standard)] hover:bg-laiton hover:text-nuit active:translate-y-px sm:px-6 sm:text-sm"
          >
            Réserver
          </a>

          <button
            ref={triggerRef}
            type="button"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => (open ? closeAndRestoreFocus() : setOpen(true))}
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
        className={`grid transition-[grid-template-rows] duration-300 ease-out lg:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <nav
          ref={menuRef}
          id="menu-mobile"
          aria-label="Navigation mobile"
          className={`overflow-hidden bg-nuit ${open ? "" : "invisible"}`}
        >
          <ul className="flex flex-col border-t border-ivoire/10 px-5 py-4 sm:px-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="flex min-h-12 items-center border-b border-ivoire/10 font-display text-xl text-ivoire/90 hover:text-laiton"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#reservation"
                onClick={closeMenu}
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
