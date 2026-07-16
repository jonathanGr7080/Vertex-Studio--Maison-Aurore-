"use client";

import Image, { type StaticImageData } from "next/image";
import { useCallback, useEffect, useRef } from "react";

export type LightboxItem = {
  src: StaticImageData;
  caption: string;
};

type LightboxProps = {
  items: LightboxItem[];
  index: number;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
};

/**
 * Lightbox accessible, sans dépendance.
 * - role="dialog" aria-modal, nom accessible dérivé de la légende ;
 * - piège de focus + restauration gérée par l'appelant ;
 * - fermeture Escape / bouton / clic extérieur ;
 * - navigation précédent/suivant au clavier (flèches) et par boutons ;
 * - swipe horizontal léger sur mobile ;
 * - respecte prefers-reduced-motion (animations via motion-safe).
 */
export function Lightbox({ items, index, onClose, onNavigate }: LightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef<number | null>(null);

  const total = items.length;
  const current = items[index];

  const goPrev = useCallback(
    () => onNavigate((index - 1 + total) % total),
    [index, total, onNavigate],
  );
  const goNext = useCallback(() => onNavigate((index + 1) % total), [index, total, onNavigate]);

  // Focus initial + verrou de défilement + gestion clavier.
  useEffect(() => {
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "Escape":
          event.preventDefault();
          onClose();
          break;
        case "ArrowLeft":
          event.preventDefault();
          goPrev();
          break;
        case "ArrowRight":
          event.preventDefault();
          goNext();
          break;
        case "Tab": {
          const dialog = dialogRef.current;
          if (!dialog) break;
          const focusables = dialog.querySelectorAll<HTMLElement>("button:not([disabled])");
          if (focusables.length === 0) break;
          const first = focusables[0];
          const last = focusables[focusables.length - 1];
          const active = document.activeElement;
          if (event.shiftKey && (active === first || !dialog.contains(active))) {
            event.preventDefault();
            last.focus();
          } else if (!event.shiftKey && active === last) {
            event.preventDefault();
            first.focus();
          }
          break;
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, goPrev, goNext]);

  if (!current) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-nuit/95 backdrop-blur-sm motion-safe:animate-[fade-in_var(--dur-base)_var(--ease-out)]"
      onClick={onClose}
      onTouchStart={(event) => {
        touchStartX.current = event.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(event) => {
        const startX = touchStartX.current;
        if (startX === null) return;
        const dx = (event.changedTouches[0]?.clientX ?? startX) - startX;
        if (Math.abs(dx) > 50) (dx > 0 ? goPrev : goNext)();
        touchStartX.current = null;
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={`Galerie — image ${index + 1} sur ${total} : ${current.caption}`}
        className="relative flex flex-1 flex-col"
      >
        {/* Barre supérieure : compteur + fermeture */}
        <div className="flex items-center justify-between px-4 py-4 text-ivoire sm:px-6">
          <p className="text-[12px] uppercase tracking-[0.18em] text-ivoire/70">
            {index + 1} / {total}
          </p>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Fermer la galerie"
            className="flex h-11 w-11 items-center justify-center rounded-full text-ivoire transition-colors duration-[var(--dur-micro)] hover:bg-ivoire/10 hover:text-laiton"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Zone image + navigation */}
        <div className="flex flex-1 items-center justify-between gap-2 px-2 pb-2 sm:px-4">
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              goPrev();
            }}
            aria-label="Image précédente"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-ivoire transition-colors duration-[var(--dur-micro)] hover:bg-ivoire/10 hover:text-laiton"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <figure
            className="flex min-w-0 flex-1 flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              key={current.src.src}
              src={current.src}
              alt={current.caption}
              placeholder="blur"
              sizes="100vw"
              className="h-auto w-auto max-h-[74vh] max-w-full object-contain motion-safe:animate-[zoom-in_var(--dur-base)_var(--ease-out)]"
            />
            <figcaption className="mt-4 text-center text-sm text-ivoire/75">
              {current.caption}
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              goNext();
            }}
            aria-label="Image suivante"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-ivoire transition-colors duration-[var(--dur-micro)] hover:bg-ivoire/10 hover:text-laiton"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
