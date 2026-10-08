// Strukturierte Daten (schema.org, JSON-LD) – für Suchmaschinen und KI-Antworten.
import { absolute, dictionary, image, languages, paths, site, type Language } from "@/i18n/config";
import { plain } from "./text";

const ids = {
  website: absolute("/#website"),
  developer: absolute("/#developer"),
  app: absolute("/#app"),
};

function developer() {
  return { "@type": "Person", "@id": ids.developer, name: site.developer, email: `mailto:${site.email}`, url: absolute("/") };
}

function website() {
  return {
    "@type": "WebSite",
    "@id": ids.website,
    url: absolute("/"),
    name: languages[0]!.appName,
    alternateName: languages.slice(1).map((l) => l.appName),
    inLanguage: languages.map((l) => l.hreflang),
    publisher: { "@id": ids.developer },
  };
}

function app(lang: Language) {
  const t = dictionary(lang);
  return {
    "@type": "MobileApplication",
    "@id": ids.app,
    name: lang.appName,
    alternateName: languages.filter((l) => l.appName !== lang.appName).map((l) => l.appName),
    description: t.meta.description,
    url: absolute(paths.home(lang)),
    image: absolute("/bilder/icon.png"),
    screenshot: ["overview.jpg", "add.jpg", "apple-pay.jpg", "insights.jpg", "expenses.jpg", "ipad.jpg"].map((f) => absolute(image(lang, f))),
    applicationCategory: "FinanceApplication",
    operatingSystem: `iOS ${site.minimumOS}, iPadOS ${site.minimumOS}`,
    availableOnDevice: ["iPhone", "iPad"],
    inLanguage: languages.map((l) => l.hreflang),
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
    featureList: [...t.features.rows.map((r) => r.title), ...t.details.tiles.map((tile) => tile.title)],
    author: { "@id": ids.developer },
    publisher: { "@id": ids.developer },
    ...(site.appStoreId ? { installUrl: `https://apps.apple.com/app/id${site.appStoreId}` } : {}),
  };
}

export function homeData(lang: Language) {
  const t = dictionary(lang);
  const url = absolute(paths.home(lang));
  return {
    "@context": "https://schema.org",
    "@graph": [
      website(),
      developer(),
      app(lang),
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: t.meta.title,
        description: t.meta.description,
        inLanguage: lang.hreflang,
        isPartOf: { "@id": ids.website },
        about: { "@id": ids.app },
        primaryImageOfPage: absolute(image(lang, "og.jpg")),
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#${t.ids.help}`,
        url: `${url}#${t.ids.help}`,
        inLanguage: lang.hreflang,
        isPartOf: { "@id": `${url}#webpage` },
        mainEntity: t.help.faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: plain(item.a) },
        })),
      },
    ],
  };
}

export function privacyData(lang: Language) {
  const t = dictionary(lang);
  const url = absolute(paths.privacy(lang));
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: t.privacyPage.title,
        description: t.privacyPage.description,
        inLanguage: lang.hreflang,
        isPartOf: { "@id": ids.website },
        about: { "@id": ids.app },
        breadcrumb: { "@id": `${url}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: t.privacyPage.home, item: absolute(paths.home(lang)) },
          { "@type": "ListItem", position: 2, name: t.footer.privacy, item: url },
        ],
      },
    ],
  };
}

export function JsonLd({ data }: { data: object }) {
  // „<“ maskieren, damit kein Text das Skript vorzeitig beendet.
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
