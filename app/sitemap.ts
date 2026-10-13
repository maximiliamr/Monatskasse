// Alle Seiten mit ihren Sprachfassungen (hreflang), dem Datum der letzten Änderung und den
// Bildern der Startseiten. In der Google Search Console als „sitemap.xml“ einreichen.
import type { MetadataRoute } from "next";
import { absolute, image, language, languages, languagesWithPolicy, paths } from "@/i18n/config";
import { lastChange } from "@/lib/lastmod";
import { alternates } from "@/lib/seo";

export const dynamic = "force-static";

const screenshots = ["og.jpg", "overview.jpg", "add.jpg", "apple-pay.jpg", "insights.jpg", "expenses.jpg", "ipad.jpg"];

export default function sitemap(): MetadataRoute.Sitemap {
  const home = languages.map((l) => ({
    url: absolute(paths.home(l)),
    lastModified: lastChange([`i18n/dictionaries/${l.code}.ts`, "i18n/languages.json", "components", "styles", `public/bilder/${l.code}`]),
    alternates: { languages: alternates("home") },
    images: screenshots.map((file) => absolute(image(l, file))),
  }));
  const privacy = languagesWithPolicy().map((l) => ({
    url: absolute(paths.privacy(l)),
    lastModified: lastChange([`content/privacy/${language(l.privacyPolicy).code}.html`, "components/PrivacyPage.tsx", "styles/policy.css"]),
    alternates: { languages: alternates("privacy") },
  }));
  return [...home, ...privacy];
}
