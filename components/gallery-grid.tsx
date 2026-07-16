"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Lightbox, type LightboxItem } from "@/components/lightbox";
import { Reveal } from "@/components/reveal";

/**
 * Grille de galerie en masonry, chaque visuel ouvrant une lightbox accessible.
 * Le rendu des images reste optimisé via next/image ; seul l'état d'ouverture
 * est côté client.
 */
export function GalleryGrid({ items }: { items: LightboxItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  function open(index: number, trigger: HTMLButtonElement) {
    triggerRef.current = trigger;
    setOpenIndex(index);
  }

  function close() {
    setOpenIndex(null);
    // Restaure le focus sur la vignette d'origine.
    triggerRef.current?.focus();
  }

  return (
    <>
      <div className="mt-16 gap-5 [column-fill:_balance] sm:mt-20 sm:columns-2 sm:gap-6 lg:columns-3">
        {items.map((item, i) => (
          <Reveal key={item.caption} delayMs={(i % 3) * 80} className="mb-5 break-inside-avoid sm:mb-6">
            <button
              type="button"
              onClick={(event) => open(i, event.currentTarget)}
              aria-label={`Agrandir : ${item.caption}`}
              className="group relative block w-full overflow-hidden"
            >
              <Image
                src={item.src}
                alt=""
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="h-auto w-full object-cover transition-transform duration-[var(--dur-base)] ease-[var(--ease-standard)] motion-safe:group-hover:scale-[1.03]"
              />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-gradient-to-t from-nuit/70 to-transparent px-4 pb-3 pt-10 text-[11px] uppercase tracking-[0.16em] text-ivoire/80 opacity-0 transition-opacity duration-[var(--dur-base)] group-hover:opacity-100 group-focus-visible:opacity-100">
                {item.caption}
                <span aria-hidden className="text-laiton">Agrandir</span>
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      {openIndex !== null && (
        <Lightbox
          items={items}
          index={openIndex}
          onClose={close}
          onNavigate={setOpenIndex}
        />
      )}
    </>
  );
}
