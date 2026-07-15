import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-config";

/**
 * Le site est une page unique ; le sitemap ne référence que la racine.
 * L'URL est dérivée de `NEXT_PUBLIC_SITE_URL` (fallback local sûr).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
