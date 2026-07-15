# Maison Aurore — Concept de démonstration Vertex Studio

Site vitrine d'un restaurant gastronomique fictif à Bruges, réalisé pour le portfolio de
Vertex Studio. **Maison Aurore n'est pas un établissement réel** : adresses, téléphone,
producteurs et réservations sont des contenus de démonstration.

Source de vérité du projet : les pages Notion `Portfolio / Maison Aurore`
(Brief produit, UX & Wireframe, Direction artistique, Revue Sprint 1 & Spécifications Sprint 2).

## Stack

- Next.js (App Router) + TypeScript strict
- Tailwind CSS v4 (tokens dans `app/globals.css`)
- Polices : Cormorant Garamond (titres) et Inter (interface) via `next/font`
- Aucune autre dépendance d'exécution

## Lancer le projet

```bash
npm install
npm run dev        # http://localhost:3000
```

## Vérifications

```bash
npm run typecheck  # tsc --noEmit
npm run lint       # ESLint
npm run build      # build de production
npm run check      # typecheck + lint + build (identique à la CI)
npm run start      # sert le build (port 3000)
```

La CI GitHub Actions (`.github/workflows/quality.yml`) exécute `npm run check` sur chaque
push et pull request. Aucun secret n'est requis.

## Configuration d'environnement

- `NEXT_PUBLIC_SITE_URL` — URL publique du site. Voir `.env.example`.
  - Vide en local → repli sûr `http://localhost:3000`.
  - En production, renseigner l'URL HTTPS réelle.
- L'indexation par les moteurs (`robots.ts`, balise `robots`, `sitemap.ts`) n'est
  activée **qu'en production avec une URL publique réelle**. Localhost et les
  domaines `.example` / `.test` restent volontairement en `noindex`.

## Structure

- `app/` — layout (métadonnées, JSON-LD, polices), page d'accueil, tokens CSS,
  favicon, `robots.ts`, `sitemap.ts`
- `components/` — navigation, hero, sections (expérience, menus, histoire,
  producteurs, galerie, réservation démo, FAQ, infos pratiques), footer
- `content/` — contenus centralisés et typés (menus, producteurs, FAQ, infos site)
- `lib/` — configuration du site dérivée de l'environnement (`site-config.ts`)
- `public/images/` — assets générés pour la démonstration (hero, image Open Graph)

## Assets & placeholders

- Le visuel de hero (`public/images/hero-aurore.webp`) et l'image Open Graph
  (`public/images/og-maison-aurore.png`) sont des visuels **abstraits générés pour
  la démonstration**, sans aucune personne. Le hero est servi via `next/image`
  (`fill`, `sizes`, `priority`, `placeholder="blur"`).
- Les emplacements de photographies (portrait du chef, galerie, producteurs, plan)
  restent des **placeholders explicites « Photo à venir »** : aucune photo de
  personne réelle n'est inventée.

## Hors périmètre (volontairement)

Pas de moteur de réservation réel, paiement, CMS, base de données, analytics externe
ni coordonnées présentées comme réelles. Le formulaire de réservation est une
simulation qui n'envoie rien.
