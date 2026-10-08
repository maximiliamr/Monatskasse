// Titel, Beschreibung, Canonical, hreflang und Vorschau (Open Graph, X) je Seite und Sprache.
import type { Metadata, Viewport } from "next";
import {
  absolute,
  dictionary,
  image,
  languages,
  languagesWithPolicy,
  paths,
  pathFor,
  site,
  xDefaultLanguage,
  type Language,
  type PageKind,
} from "@/i18n/config";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#1D1C45",
  colorScheme: "light dark",
};

const icons: Metadata["icons"] = {
  icon: [
    { url: "/favicon.ico", sizes: "48x48" },
    { url: "/bilder/favicon-32.png", sizes: "32x32", type: "image/png" },
    { url: "/bilder/favicon-96.png", sizes: "96x96", type: "image/png" },
    { url: "/bilder/favicon-192.png", sizes: "192x192", type: "image/png" },
  ],
  apple: [{ url: "/bilder/apple-touch-icon-180.png", sizes: "180x180" }],
};

/** Alle Sprachfassungen einer Seite für hreflang, dazu x-default. */
export function alternates(kind: PageKind): Record<string, string> {
  const available = kind === "privacy" ? languagesWithPolicy() : languages;
  const result: Record<string, string> = {};
  for (const l of available) result[l.hreflang] = absolute(pathFor(kind, l));
  const fallback = available.includes(xDefaultLanguage) ? xDefaultLanguage : available[0]!;
  result["x-default"] = absolute(pathFor(kind, fallback));
  return result;
}

export function shareImage(lang: Language) {
  return {
    url: absolute(image(lang, "og.jpg")),
    width: 1200,
    height: 630,
    type: "image/jpeg",
    alt: dictionary(lang).meta.ogImageAlt,
  };
}

export function pageMetadata(kind: PageKind, lang: Language): Metadata {
  const t = dictionary(lang);
  const url = absolute(pathFor(kind, lang));
  const title = kind === "home" ? t.meta.title : t.privacyPage.title;
  const description = kind === "home" ? t.meta.description : t.privacyPage.description;
  const ogTitle = kind === "home" ? t.meta.ogTitle : t.privacyPage.title;
  const ogDescription = kind === "home" ? t.meta.ogDescription : t.privacyPage.description;
  const others = languages.filter((l) => l.code !== lang.code);

  return {
    metadataBase: new URL(site.url),
    title,
    description,
    applicationName: lang.appName,
    authors: [{ name: site.developer }],
    alternates: {
      canonical: url,
      languages: alternates(kind),
      ...(kind === "home" ? { types: { "text/markdown": absolute(paths.markdown(lang)) } } : {}),
    },
    openGraph: {
      type: "website",
      siteName: lang.appName,
      locale: lang.ogLocale,
      alternateLocale: others.map((l) => l.ogLocale),
      url,
      title: ogTitle,
      description: ogDescription,
      images: [shareImage(lang)],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: [{ url: shareImage(lang).url, alt: t.meta.ogImageAlt }],
    },
    icons,
    robots: { index: true, follow: true },
    // Safari zeigt oben auf der Seite das Banner mit „Laden“, sobald die App im Store ist.
    ...(site.appStoreId ? { itunes: { appId: site.appStoreId } } : {}),
  };
}

export function notFoundMetadata(lang: Language): Metadata {
  const t = dictionary(lang);
  return {
    title: `${t.notFound.title} – ${lang.appName}`,
    robots: { index: false, follow: true },
    icons,
  };
}
