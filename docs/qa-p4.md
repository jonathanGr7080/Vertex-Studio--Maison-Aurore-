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

## 5. Performance / Lighthouse — limite documentée

Lighthouse **n'a pas été ré-exécuté en P4** : l'outil n'est pas préinstallé dans l'environnement
et les scores mesurés en conteneur headless sont peu fiables (le TBT desktop remonte
artificiellement sous charge CPU « Other » du conteneur).

- Le README porte des mesures Lighthouse d'un sprint antérieur (Performance 91 mobile / 99–100
  desktop ; Accessibility 100 ; Best Practices 100 ; SEO 100), prises **avant** le remplacement
  des médias en P3.
- D'après la mesure Lighthouse **antérieure au remplacement des médias (P3)**, l'élément LCP
  était le **titre du hero** (texte). Cette conclusion **n'a pas été reconfirmée après P3** : le
  nouveau hero (WebP 484 K) pourrait modifier l'élément LCP, ce qui reste **à vérifier sur la
  preview Vercel**. Les nouveaux WebP sont optimisés (`next/image`, `priority`, `sizes`, `blur`).
- **Action recommandée :** mesurer Lighthouse sur la **preview Vercel** (build de prod, hors
  conteneur headless) pour valider formellement le Performance Gate avec les médias P3.

## 6. Vercel

Les checks Vercel (Preview + déploiement) étaient **verts** sur la PR #7 avant fusion. La
vérification de l'URL live depuis cet environnement d'exécution reste soumise aux restrictions
d'egress (accès historiquement 403) ; la revue visuelle de la preview relève de la validation
humaine (§14).

## 7. Conclusion QA

**Aucun défaut bloquant détecté.** Les contrôles techniques sont verts, le responsive est propre
sur les 8 largeurs, l'accessibilité de base et le SEO sont conformes, la mention de démonstration
est présente. Seule réserve : mesure Lighthouse à confirmer sur la preview Vercel (Performance
Gate conditionnel).
