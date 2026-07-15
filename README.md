# Maison Aurore — Concept de démonstration Vertex Studio

Site vitrine d'un restaurant gastronomique fictif à Bruges, réalisé pour le portfolio de
Vertex Studio. **Maison Aurore n'est pas un établissement réel** : adresses, téléphone,
producteurs et réservations sont des contenus de démonstration.

Source de vérité du projet : les pages Notion `Portfolio / Maison Aurore`
(Brief produit, UX & Wireframe, Direction artistique, Prompt Sprint 1).

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

Vérifications :

```bash
npx tsc --noEmit   # typecheck strict
npm run lint       # ESLint
npm run build      # build de production
npm run start      # sert le build (port 3000)
```

## Structure

- `app/` — layout (métadonnées, polices), page d'accueil, tokens CSS, favicon
- `components/` — navigation, hero, sections (expérience, menus, histoire,
  producteurs, galerie, réservation démo, FAQ, infos pratiques), footer
- `content/` — contenus centralisés et typés (menus, producteurs, FAQ, infos site)

## État Sprint 1

Fondation technique + première version visuelle complète. Restent volontairement
en attente pour le Sprint 2 : photographies finales (placeholders explicites
« Photo à venir »), intégration d'un vrai service de réservation, image Open Graph,
plan illustré du quartier.
