# Statut des Validation Gates — Maison Aurore

> **Concept fictif de démonstration** (Vertex Studio). Synthèse de l'état des Gates du pipeline
> Vertex Studio OS v1.1.0 (§16) au terme de la QA P4. Un Gate n'est vert que sur preuve.

- **Base :** `main` @ `1fca646` · **Date :** 2026-07-22
- **Références :** `docs/qa-p4.md`, `docs/signature-gate.md`, `public/images/CREDITS.md`

| Gate | Statut | Preuve / réserve |
|---|---|---|
| Analysis | ✅ PASS | Objectifs, cible, secteur (gastronomie, Bruges fictif), périmètre et rattachement Assets définis au brief. |
| Asset | ✅ PASS *(réserve documentaire mineure)* | 12 photographies sous licence + provenance (`CREDITS.md`). Licences vérifiées au niveau plateforme (Pexels/Unsplash, 2026-07-22) ; auteur documenté depuis le nom de fichier, réserve HTTP 403 non bloquante (attribution non requise). |
| Design | ✅ PASS | Direction artistique, architecture éditoriale, parcours et contenus finalisés ; cohérence avec les médias P3. |
| Development | ✅ PASS | Typecheck / lint / build verts ; console sans erreur ; responsive 8 largeurs sans débordement ; a11y de base + SEO conformes (`docs/qa-p4.md`). |
| Performance | 🟡 CONDITIONNEL | Média optimisé (`next/image`, WebP, `priority`, `sizes`, `blur`), build vert, CLS 0 observé. **Lighthouse à re-mesurer sur la preview Vercel** (non fiable en conteneur headless) avant PASS formel. |
| Signature / Premium | ✅ PASS *(revue humaine à confirmer)* | Thèse « le calme comme luxe », ≥3 choix spécifiques, signature visible, test de re-skin réussi (`docs/signature-gate.md`). Revue visuelle humaine sur preview restant à confirmer. |
| Delivery | ⏳ EN ATTENTE | Requiert Performance Gate formalisé (Lighthouse preview) + revue humaine Signature + revue de la preview Vercel. Voir checklist ci-dessous. |
| Capitalisation | ⏳ NON DÉMARRÉ | Étape 14 obligatoire avant clôture (§ Capitalisation). Fiche portfolio, reversement Assets et impact système à traiter en P5 (Notion). |

## Checklist Delivery Gate (§16)

- [x] Gates Analysis, Asset, Design, Development : verts.
- [x] Signature Gate : PASS statique (thèse, ≥3 choix, re-skin, cohérence responsive).
- [x] Aucun placeholder final, aucun lorem ipsum, aucun visage IA, aucune fausse preuve sociale.
- [x] Mention de démonstration visible et « aucune donnée transmise » sur l'interaction de réservation.
- [x] Pack de captures desktop + mobile généré (`docs/captures/`).
- [ ] Performance Gate formalisé : Lighthouse mesuré sur la preview Vercel (build de prod).
- [ ] Revue visuelle humaine de la preview Vercel (Signature + rendu global).
- [ ] Validation humaine finale et décision de fusion (le propriétaire ; Claude Code ne fusionne pas).

## Réserves ouvertes

1. **Lighthouse P3 :** à mesurer sur la preview Vercel pour lever le conditionnel du Performance Gate.
2. **Revue humaine :** Signature Gate et Delivery Gate incluent une validation visuelle humaine sur preview (§14).
3. **Hero — réserve mineure :** éléments d'arrière-plan (bouteille, ardoise) atténués par le dégradé, à confirmer en revue humaine (`CREDITS.md`).
4. **`og-maison-aurore.png` :** visuel Open Graph encore abstrait (hors périmètre P3), à régénérer si souhaité.
5. **Capitalisation Gate :** obligatoire avant toute clôture « portfolio ready » — à traiter en P5.
