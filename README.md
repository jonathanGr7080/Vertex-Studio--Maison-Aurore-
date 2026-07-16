# Maison Aurore

Site vitrine d'un **restaurant gastronomique** contemporain à Bruges — cuisine de saison,
terroir belge, hospitalité calme. Conçu et développé par **Vertex Studio** comme pièce de
référence de son portfolio.

> **Concept de démonstration fictif.** Maison Aurore n'est pas un établissement réel.
> Chef, menus, prix, producteurs, adresse, téléphone et réservation sont des contenus de
> démonstration ; le formulaire de réservation ne transmet ni n'enregistre aucune donnée.
> La mention du statut fictif est présente sur la page et en pied de page.

Site en une page, éditorial et responsive, mesuré Lighthouse sur build de production
(voir [Performance](#performance--accessibilité)).

## Stack

- **Next.js** (App Router) + **TypeScript strict**
- **Tailwind CSS v4** — tokens de couleurs, typographie, espacements et mouvement dans
  `app/globals.css`
- Polices **Cormorant Garamond** (titres) et **Inter** (interface) via `next/font`
- **Aucune dépendance d'exécution supplémentaire** — animations et lightbox en CSS +
  APIs navigateur natives (IntersectionObserver, pas de Framer Motion)

## Démarrer

```bash
npm install
npm run dev          # http://localhost:3000
```

## Scripts de qualité

```bash
npm run typecheck    # tsc --noEmit (TypeScript strict)
npm run lint         # ESLint
npm run build        # build de production
npm run check        # typecheck + lint + build (identique à la CI)
npm run start        # sert le build de production
```

La CI GitHub Actions (`.github/workflows/quality.yml`) exécute `npm run check` sur chaque
push et pull request. Aucun secret requis.

## Architecture

```
app/          layout (métadonnées, JSON-LD, polices), page, tokens CSS (globals.css),
              icon.svg (favicon), not-found.tsx, robots.ts, sitemap.ts
components/   navbar, hero, sections éditoriales, footer
              + primitives réutilisables : Reveal, ButtonLink, SectionHeading,
                ImagePlaceholder, Lightbox, GalleryGrid
content/      contenus centralisés et typés (chef, menus, producteurs, expérience,
              FAQ, infos site)
lib/          site-config.ts — configuration dérivée de l'environnement
public/images/ assets d'ambiance générés (hero, galerie) + image Open Graph
```

Principes : **Server Components par défaut**, Client Components réservés aux interactions
(navbar mobile, formulaire de réservation, galerie/lightbox, révélations au scroll).
Contenu centralisé et typé dans `content/`.

## Configuration d'environnement

- `NEXT_PUBLIC_SITE_URL` — URL publique du site (voir `.env.example`).
  - Vide en local → repli sûr `http://localhost:3000`.
  - En production, renseigner l'URL HTTPS réelle.
- L'indexation (`robots.ts`, balise `robots`, `sitemap.ts`) n'est activée **qu'en
  production avec une URL publique réelle**. Localhost et les domaines `.example` /
  `.test` restent volontairement en `noindex`.
- Données structurées : `CreativeWork` honnête (cas d'étude), **jamais** un schéma
  `Restaurant` / `LocalBusiness` qui laisserait croire à un établissement réel.

## Accessibilité

- Structure sémantique, un seul `h1`, hiérarchie de titres cohérente.
- Navigation clavier complète ; **focus visible** et ordre de tabulation contrôlés.
- Menu mobile et lightbox : piège de focus, fermeture `Escape`, restauration du focus.
- Formulaire de réservation : validation accessible (erreurs annoncées via `role="alert"`,
  `aria-invalid` / `aria-describedby`, focus déplacé sur le résumé).
- `prefers-reduced-motion` respecté globalement ; aucune information portée par la seule
  couleur ; contrastes vérifiés (Lighthouse Accessibility 100).

## Performance & accessibilité

Mesuré sur build de production (`next build` + `next start`), Chromium headless, sur un
conteneur non contraint (indice de référence CPU nominal).

| Catégorie | Mobile | Desktop |
|---|---|---|
| Performance | 91 | 99–100 |
| Accessibility | 100 | 100 |
| Best Practices | 100 | 100 |
| SEO | 100 | 100 |

Core Web Vitals : **desktop** LCP ~0,8 s · CLS 0 · TBT 0 ms ; **mobile** LCP ~3,5 s
(élément LCP = titre du hero, profil mobile bridé 4× CPU + 4G lent) · CLS 0 · TBT ~40 ms.
Sur un conteneur momentanément saturé, le TBT desktop remonte artificiellement (surcharge
CPU « Other » du conteneur, script applicatif ~80 ms) et le score chute ; ces mesures ont
donc été prises indice de référence nominal. Aucun score n'a été amélioré au détriment du
rendu ou de l'accessibilité.

## Assets & placeholders

- Le visuel de hero, les ambiances de galerie et l'image Open Graph sont des **visuels
  abstraits générés** pour la démonstration (études de lumière et de matière, **sans
  personne ni plat figuratif**), servis via `next/image`.
- Les emplacements de photographies réelles (portrait du chef, gestes en cuisine)
  restent des **placeholders explicites** : aucune photo de personne réelle n'est inventée.

## Patterns réutilisables (candidats pour un futur Design System Vertex)

- **`Reveal`** — révélations au scroll sans dépendance (IntersectionObserver), gated
  `prefers-reduced-motion` + repli `@media (scripting: none)`.
- **`Lightbox`** — dialogue accessible (focus trap + restauration, clavier, swipe, reduced-motion).
- **`ButtonLink` / `buttonClasses()`** — boutons/liens à variantes, états hover/focus/active/disabled unifiés.
- **`SectionHeading`** — en-tête de section éditorial numéroté.
- **Patron de formulaire accessible** — résumé d'erreurs `role="alert"` + focus + `aria-describedby`.

## Hors périmètre (volontairement)

Pas de réservation réelle, paiement, CMS, base de données, authentification, analytics
externe, avis clients réels ni coordonnées présentées comme réelles.

---

Concept, design et développement : **Vertex Studio**. Projet de démonstration.
