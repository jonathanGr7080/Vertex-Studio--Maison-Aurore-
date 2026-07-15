/**
 * Configuration du site dérivée de l'environnement.
 *
 * `NEXT_PUBLIC_SITE_URL` porte l'URL publique du déploiement. En local, une
 * valeur de secours sûre est utilisée. L'indexation par les moteurs de
 * recherche n'est autorisée qu'en production, et uniquement lorsqu'une URL
 * publique réelle est configurée (jamais localhost ni un domaine `.example`).
 */

const FALLBACK_SITE_URL = "http://localhost:3000";

const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || FALLBACK_SITE_URL;

/** URL publique normalisée, sans barre oblique finale. */
export const siteUrl = rawSiteUrl.replace(/\/+$/, "");

/**
 * Une URL publique « réelle » est en HTTPS et ne pointe ni vers un hôte local
 * ni vers un domaine réservé aux exemples/tests.
 */
function isRealPublicUrl(value: string): boolean {
  let url: URL;
  try {
    url = new URL(value);
  } catch {
    return false;
  }
  if (url.protocol !== "https:") return false;

  const host = url.hostname.toLowerCase();
  if (host === "localhost" || host.endsWith(".local")) return false;
  if (
    host.endsWith(".example") ||
    host.endsWith(".test") ||
    host.endsWith(".invalid") ||
    host.endsWith(".localhost")
  ) {
    return false;
  }
  return true;
}

/** Vrai uniquement pour un déploiement de production avec URL publique réelle. */
export const isProductionDeployment =
  process.env.NODE_ENV === "production" && isRealPublicUrl(siteUrl);

/** Autoriser l'indexation seulement sur un déploiement de production réel. */
export const allowIndexing = isProductionDeployment;

/** Base absolue pour `metadataBase` et les URL canoniques. */
export const metadataBaseUrl = new URL(siteUrl);

export const siteMeta = {
  name: "Maison Aurore",
  siteName: "Maison Aurore (démonstration Vertex Studio)",
  locale: "fr_BE",
  title: "Maison Aurore — Concept de démonstration · Vertex Studio",
  description:
    "Maison Aurore, concept fictif de restaurant gastronomique à Bruges imaginé par Vertex Studio : une cuisine de saison, un terroir belge et une hospitalité calme. Menus, chef et réservation sont des contenus de démonstration.",
  ogDescription:
    "Cas d'étude Vertex Studio : storytelling, menus de saison, section chef et parcours de réservation pour un restaurant gastronomique fictif à Bruges.",
} as const;
