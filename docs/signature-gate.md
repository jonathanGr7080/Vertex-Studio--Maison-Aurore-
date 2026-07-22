# Signature Gate — Maison Aurore

> **Concept fictif de démonstration** (Vertex Studio). Ce document formalise la thèse visuelle,
> les choix réellement spécifiques et le test de re-skin exigés par le Signature Gate (§6, §16).

- **Secteur :** restaurant gastronomique. **Localisation fictive :** Bruges, Belgique.
- **Base évaluée :** `main` @ `1fca646`, après intégration des 12 photographies sous licence (P3).

## 1. Thèse visuelle

**« Le calme comme luxe. »** Maison Aurore refuse le vocabulaire habituel du restaurant premium
(dorures, contrastes spectaculaires, bento grids, effets de reveal appuyés). L'identité repose
sur une **retenue nocturne et organique** : fonds `nuit` profonds (`#101820`), respirations
`ivoire` (`#f7f5ef`), un unique accent `laiton` mat (`#b9925b`) et une touche `sauge`
(`#5a6a58`) empruntée au végétal. La typographie associe un **serif éditorial** (Cormorant
Garamond) pour la voix du lieu à un sans-serif discret (Inter) pour l'interface. Le rythme est
lent, très aéré, ponctué de numéros de section (`01`, `02`, …) qui donnent au parcours une
allure de **cahier éditorial** plutôt que de page marketing.

Cette thèse se traduit dans :
- le **hero** : salle sombre plein cadre, dégradé descendant, titre serif « Une cuisine de saison
  pensée pour créer des souvenirs » — aucune surcharge, aucun badge, aucun CTA agressif ;
- la **typographie** : gros corps serif italique pour les citations, capitales espacées
  (`tracking`) pour les eyebrows ;
- le **rythme** : sections très espacées (`py-24`/`py-36`), alternance de fonds
  clair/nuit qui séquence la lecture ;
- les **médias** : photographies d'ambiance art-directées (matière, geste, lumière), chef en
  **noir et blanc**, jamais de visage identifiable ;
- les **transitions** : `Reveal` sobre (opacité + translation, `cubic-bezier(0.22,1,0.36,1)`),
  strictement soumis à `prefers-reduced-motion`.

## 2. Au moins trois choix réellement spécifiques

1. **Cluster d'images du chef en chevauchement, en noir et blanc.** Deux photographies (passe
   4:5 + dressage 1:1) superposées avec un anneau `ivoire`, sans visage — un traitement de
   composition propre à ce projet, qui raconte le geste plutôt que la personne.
2. **Narration « producteurs » en fiches alternées avec dictionnaire En cuisine / Pourquoi eux.**
   Chaque producteur (maraîcher, pêcheur, fromager) alterne image/texte avec une `dl` structurée,
   photographie art-directée dédiée et ratio propre (4:5, 4:3, 5:4) — une présentation de la
   preuve d'approvisionnement spécifique au récit du lieu.
3. **Galerie reportage asymétrique « Matières, gestes, lumière ».** Grille non uniforme de
   fragments (lin, reflets, sauge, ail sur bois) traités comme un carnet photographique, pas
   comme une mosaïque décorative interchangeable.
4. **Bande éditoriale nocturne pleine largeur** (« Ce que la terre et la mer donnent au
   matin… ») en rupture de fond, servant de respiration narrative entre le chef et les
   producteurs.

*(Quatre choix formalisés, au-delà du minimum de trois.)*

## 3. Élément de signature dans le parcours principal

Le **hero plein cadre en salle sombre**, surmonté du titre serif, est perceptible **au-dessus de
la ligne de flottaison** ; le **cluster chef N&B** et la **bande éditoriale nocturne** constituent
deux moments de signature supplémentaires dans le parcours de lecture principal.

## 4. Test de re-skin

> *Le projet échoue si, en remplaçant uniquement logo, palette, textes et images, il pouvait
> devenir crédiblement le site d'un autre secteur.*

**Verdict : réussi.** La structure narrative — parcours de menus en trois voies (Découverte /
Signature / Végétal), fiches producteurs avec provenance, bande éditoriale sur le rythme des
saisons, galerie « matières & gestes », réservation présentée comme rituel — est **indissociable
du récit gastronomique de terroir**. Un simple rebrand (couleurs + textes + images) ne
produirait pas un site d'un autre secteur sans **refonte structurelle** de l'architecture
éditoriale et du parcours. La différenciation ne repose pas seulement sur la palette, les textes
ou les images.

## 5. Cohérence multi-supports

Vérifiée en QA (voir `docs/qa-p4.md`) sur 320 → 1440 px : aucun débordement, version mobile
complète et non secondaire, un seul H1, hiérarchie de titres cohérente.

## 6. Statut

**Signature Gate : PASS** au niveau de la revue statique et responsive (thèse claire, ≥3 choix
spécifiques, signature visible, test de re-skin réussi, cohérence desktop/tablette/mobile).

**Réserve :** la validation finale du Signature Gate inclut une **revue visuelle humaine** sur la
preview Vercel (§14, §16) — captures fournies dans `docs/captures/`, revue humaine restant à
confirmer.
