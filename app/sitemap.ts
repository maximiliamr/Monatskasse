import type { MetadataRoute } from "next";
import { absolute, languages, languagesWithPolicy, paths } from "@/i18n/config";
import { alternates } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const home = languages.map((l) => ({
    url: absolute(paths.home(l)),
    alternates: { languages: alternates("home") },
  }));
  const privacy = languagesWithPolicy().map((l) => ({
    url: absolute(paths.privacy(l)),
    alternates: { languages: alternates("privacy") },
  }));
  return [...home, ...privacy];
}
