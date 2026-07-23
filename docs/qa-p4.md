# QA finale — Maison Aurore (P4)

> **Concept fictif de démonstration** (Vertex Studio). Ce document consigne les preuves de la
> QA finale exécutée avant livraison. Aucune donnée réelle, aucun établissement réel.

- **Date :** 2026-07-22
- **Base :** `main` @ `1fca646` (P3 — Asset Gate fusionné)
- **Environnement :** conteneur d'exécution Linux, Node 22, Next.js 16.2.10 (Turbopack),
  Chromium headless (Puppeteer), profil `prefers-reduced-motion: reduce`.
- **Périmètre P4 :** documentation seule, aucun changement de code (QA sans défaut bloquant).

## 1. Contrôles techniques (§13)

Exécutés sur la base livrée, build de production.

| Contrôle | Commande | Résultat |
|---|---|---|
| Typecheck | `npm run typecheck` (`tsc --noEmit`) | ✅ vert, aucune erreur |
| Lint | `npm run lint` (`eslint`) | ✅ vert, aucun warning |
| Build | `npm run build` (`next build`) | ✅ vert — compilé en ~5,6 s, 6 routes statiques |
| Tests | — | Aucun script `test` défini dans ce dépôt (n/a) |
| Console navigateur | Puppeteer (page complète, 1440) | ✅ aucune erreur, aucun warning |

Routes générées (statiques) : `/`, `/_not-found`, `/icon.svg`, `/robots.txt`, `/sitemap.xml`.

## 2. Responsive (§11)

Audit automatisé du débordement horizontal (`documentElement.scrollWidth` vs `clientWidth`)
et du nombre de `h1`, sur les 8 largeurs de référence, après déclenchement du lazy-loading.

| Largeur | Débordement horizontal | H1 | Capture pleine page |
|---|---|---|---|
| 320 px | ✅ aucun | 1 | `captures/qa-320.jpg` |
| 360 px | ✅ aucun | 1 | — |
| 375 px | ✅ aucun | 1 | — |
| 390 px | ✅ aucun | 1 | `captures/qa-390.jpg` |
| 430 px | ✅ aucun | 1 | — |
| 768 px | ✅ aucun | 1 | `captures/qa-768.jpg` |
| 1024 px | ✅ aucun | 1 | — |
| 1440 px | ✅ aucun | 1 | `captures/qa-1440.jpg` |

`scrollWidth = clientWidth` à chaque largeur : **aucun débordement**. Version mobile complète
(colonne unique, galerie en grille, formulaire pleine largeur), non traitée comme secondaire.

## 3. Accessibilité / SEO / contenu (§7, §11)

Relevé sur le DOM rendu (build de prod, page d'accueil).

- **`lang="fr"`**, `<title>` unique, `meta description`, **Open Graph** présents.
- **Un seul `H1`** ; ordre des titres logique (H1 → H2 → H3 → H4 cohérent, aucun saut inversé).
- **14 images, toutes pourvues de `alt`.** Les visuels d'ambiance portent `alt=""` (décoratif,
  cohérent avec la décision P3 : photographies d'ambiance, pas de contenu informatif porté par
  l'image).
- **6 champs de formulaire, tous associés à un label** (aucun champ sans nom accessible).
- Aucun lien ni bouton sans nom accessible.
- **JSON-LD `CreativeWork`** — choix honnête : pas de `Restaurant`, qui laisserait croire à un
  établissement réel (conforme §12 et règles locales).
- **Mention de démonstration présente et détectable** : « démonstration », « fictif »,
  « concept » et **« aucune donnée »** (les interactions démo indiquent qu'aucune donnée n'est
  transmise ni enregistrée).

## 4. Média & indexation (§8)

- Hero : `priority` + `placeholder="blur"` + `sizes="100vw"` ; tous les visuels via
  `next/image`, format **WebP**, dimensions explicites (imports statiques → largeur/hauteur
  intrinsèques réservant l'espace). Aucune mesure CLS n'a été exécutée en P4 ; la stabilité de
  mise en page reste à confirmer par Web Vitals / Lighthouse sur la preview Vercel.
- Poids des 12 WebP livrés (P3) : de 64 K à 532 K. Les deux plus lourds — `hero-salle-aube`
  (484 K) et `gallery/fenetre-lumiere` (532 K) — restent acceptables ; une recompression
  ciblée est possible ultérieurement sans urgence.
- `robots.txt` en local = `Disallow: /` (**noindex**) : comportement **correct et voulu**.
  L'indexation ne s'active qu'en production **avec** `NEXT_PUBLIC_SITE_URL` réelle
  (`lib/site-config.ts`). Le `canonical` pointant vers `localhost:3000` observé en QA est le
  **fallback sûr documenté**, remplacé par l'URL publique en déploiement — ce n'est pas un défaut.

## 5. Performance / Lighthouse

Lighthouse n'a pas pu être exécuté depuis l'environnement d'exécution (outil non préinstallé,
egress bloqué vers la preview, scores conteneur headless peu fiables). La mesure a donc été
réalisée **par le propriétaire** sur le déploiement de production.

**Mesure Lighthouse — 2026-07-23, Microsoft Edge, URL `https://maison-aurore-demo.vercel.app/` :**

| Catégorie | Score | Seuil Vertex | Statut |
|---|---|---|---|
| Performance | **96** | ≥ 95 | ✅ |
| Accessibility | **100** | ≥ 98 | ✅ |
| Best Practices | **100** | = 100 | ✅ |
| SEO | **100** | = 100 | ✅ |

- **Tous les seuils Vertex sont atteints.**
- **Profil Lighthouse :** non précisé dans les éléments transmis.
- **LCP et CLS : non relevés** (non fournis dans le rapport transmis).
- **Contexte :** `maison-aurore-demo.vercel.app` est le déploiement de production (branche `main`,
  état post-P3, médias définitifs). Les commits P4 étant strictement documentaires (`docs/`), le
  rendu de cette URL est identique à celui de la preview de la PR #8 (`ea359d55`).
- Rappel : le README porte des mesures antérieures au remplacement des médias P3 (Performance 91
  mobile / 99–100 desktop), désormais complétées par la mesure ci-dessus.

## 6. Vercel

Checks Vercel (déploiement) **verts** sur la PR #8 (commit `ea359d55`). L'URL live de la preview
n'est **pas accessible depuis l'environnement d'exécution** (egress bloqué par la politique de
l'organisation : 403 au CONNECT) ; la QA visuelle sur la preview a donc été réalisée **par le
propriétaire**, pas automatiquement.

**Revue visuelle humaine — 2026-07-23, preview confirmée sur `ea359d55`, desktop + mobile.**
Conformes : chargement et rendu général, navigation et ancres, galerie/lightbox, formulaire de
démonstration, contrastes, cadrage des 12 photographies, absence d'image cassée / de débordement /
de chevauchement / de décalage, cohérence visuelle globale, **hero** et **image Open Graph**.

## 7. Conclusion QA

**Aucun défaut bloquant détecté.** Les contrôles techniques sont verts, le responsive est propre
sur les 8 largeurs, l'accessibilité de base et le SEO sont conformes, la mention de démonstration
est présente. La revue visuelle humaine sur la preview et la mesure Lighthouse (Perf 96 / A11y 100 /
BP 100 / SEO 100, 2026-07-23) sont **effectuées et conformes**. Reste, hors périmètre P4 : la
décision de fusion du propriétaire, puis la Capitalisation (P5).
