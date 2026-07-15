// Déclare les types des imports d'images statiques (import ... from "*.webp", etc.).
// Versionné pour que `tsc --noEmit` réussisse même quand `next-env.d.ts` n'a pas
// encore été régénéré (ex. en CI, où le typecheck s'exécute avant le build).
/// <reference types="next/image-types/global" />

export {};
