import type { MetadataRoute } from "next";
import { allowIndexing, siteUrl } from "@/lib/site-config";

/**
 * Robots généré selon l'environnement :
 * - production avec URL publique réelle → indexation autorisée + sitemap ;
 * - partout ailleurs (dev, preview, domaine `.example`) → tout en noindex.
 */
export default function robots(): MetadataRoute.Robots {
  if (!allowIndexing) {
    return {
      rules: [{ userAgent: "*", disallow: "/" }],
    };
  }

  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
