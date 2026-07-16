import type { ComponentPropsWithoutRef } from "react";

export type ButtonVariant = "primary" | "outline-light" | "outline-dark";

const base =
  "inline-flex min-h-12 items-center justify-center px-8 text-sm font-medium tracking-[0.03em] " +
  "transition duration-[var(--dur-micro)] ease-[var(--ease-standard)] active:translate-y-px " +
  "disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50";

const variants: Record<ButtonVariant, string> = {
  // CTA principal — sur fond clair comme sombre.
  primary: "bg-laiton text-nuit hover:bg-pierre",
  // Secondaire sur fond sombre.
  "outline-light": "border border-ivoire/30 text-ivoire hover:border-laiton hover:text-laiton",
  // Secondaire sur fond clair (contraste AA garanti via laiton foncé).
  "outline-dark":
    "border border-nuit/25 text-nuit hover:border-laiton-fonce hover:text-laiton-fonce",
};

/** Classes partagées entre ButtonLink et les vrais <button> (formulaires). */
export function buttonClasses(variant: ButtonVariant = "primary", extra = "") {
  return `${base} ${variants[variant]} ${extra}`.trim();
}

/**
 * Lien stylé en bouton, états hover/focus-visible/active harmonisés.
 * Server Component. Réutilisable dans d'autres projets Vertex Studio.
 */
export function ButtonLink({
  variant = "primary",
  className = "",
  ...rest
}: { variant?: ButtonVariant } & ComponentPropsWithoutRef<"a">) {
  return <a className={buttonClasses(variant, className)} {...rest} />;
}
