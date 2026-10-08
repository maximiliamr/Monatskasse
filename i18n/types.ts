// Der Aufbau der Wörterbücher. Jede Sprache liefert genau diese Felder – fehlt eines,
// bricht `npm run build` mit einem Typfehler ab.

/** Text mit einfachem Markup: <em>, <strong>, <a>, <p>, <ul>/<li>. */
export type Html = string;

type Four<T> = [T, T, T, T];
type Six<T> = [T, T, T, T, T, T];

export interface FeatureRow {
  kicker: string;
  title: string;
  text: Html;
  checks: Html[];
  alt: string;
}

export interface Card {
  kicker: string;
  title: string;
  text: Html;
  alt: string;
}

export interface Tile {
  title: string;
  text: Html;
}

/** Ein Schritt der Apple-Pay-Anleitung. `mock` ist die nachgebaute Kurzbefehle-Ansicht. */
export interface GuideStep {
  title: string;
  text: Html;
  warn: Html | null;
  mock: Html;
  /** Der Schlussschritt „Karten zuordnen“ mit Häkchen statt Nummer. */
  cards: boolean;
}

export interface Dictionary {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    ogImageAlt: string;
  };
  nav: { label: string; features: string; privacy: string; help: string };
  /** Sprungmarken der Abschnitte, in der Sprache der Seite. */
  ids: { features: string; devices: string; privacy: string; applePay: string; help: string; contact: string };
  language: {
    /** Überschrift im Sprachmenü. */
    menu: string;
    /** Bezeichnung des Knopfs für Screenreader. */
    button: string;
    /** Der Hinweis für Besucher, deren Browser diese Sprache bevorzugt – in dieser Sprache. */
    hint: { text: string; action: string; close: string };
  };
  hero: {
    eyebrow: string;
    title: string;
    lead: Html;
    pills: [string, string, string];
    ctaFeatures: string;
    ctaHelp: string;
    phoneAlt: string;
    widgetAlt: string;
  };
  features: { title: string; intro: Html; rows: Four<FeatureRow> };
  devices: { title: string; intro: Html; widgets: Card; ipad: Card };
  details: { title: string; intro: Html; tiles: Six<Tile> };
  privacy: { title: string; intro: Html; tiles: Four<Tile>; link: string };
  applePay: {
    title: string;
    intro: Html;
    /** Beschriftung der beiden Knöpfe: iOS 27, iOS 26. */
    versions: [string, string];
    osHint: Html;
    /** Der fertige Kurzbefehl zum Laden – nur, wo es ihn in dieser Sprache gibt. */
    quick: { title: string; text: Html; button: string; url: string } | null;
    ios27: GuideStep[];
    ios26: GuideStep[];
  };
  help: { title: string; intro: Html; faq: { q: string; a: Html }[] };
  contact: { title: string; text: Html; button: string; small: Html };
  footer: { privacy: string; help: string; contact: string; copyright: string; fine: Html };
  privacyPage: { title: string; description: string; home: string };
  notFound: { title: string; text: string; back: string };
  /** Kurzfakten für Suchmaschinen und KI (llms.txt, Markdown-Fassung). */
  facts: { title: string; items: string[]; languages: string };
}
