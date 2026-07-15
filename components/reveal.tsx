"use client";

import {
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type ElementType,
  type Ref,
} from "react";

type RevealProps<T extends ElementType> = {
  /** Élément rendu (div par défaut) — évite d'ajouter un wrapper qui casserait une grille. */
  as?: T;
  /** Décalage de la transition, pour un léger effet d'escalier entre éléments frères. */
  delayMs?: number;
} & Omit<ComponentPropsWithoutRef<T>, "as">;

/**
 * Révèle son contenu à l'entrée dans le viewport : opacité + légère translation,
 * une seule fois. Aucune dépendance (IntersectionObserver natif). Sous
 * `prefers-reduced-motion: reduce`, le contenu est affiché immédiatement.
 *
 * Client Component minimal : les enfants restent rendus côté serveur.
 */
export function Reveal<T extends ElementType = "div">({
  as,
  delayMs,
  style,
  children,
  ...rest
}: RevealProps<T>) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Note : sous prefers-reduced-motion, la CSS laisse déjà le contenu visible
    // (l'état masqué est gated derrière `no-preference`). L'observateur ci-dessous
    // reste inoffensif dans ce cas.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setRevealed(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as Ref<HTMLElement>}
      data-reveal=""
      data-revealed={revealed ? "true" : "false"}
      style={delayMs ? { ...style, transitionDelay: `${delayMs}ms` } : style}
      {...rest}
    >
      {children}
    </Tag>
  );
}
