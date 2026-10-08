// Sprachen, Adressen und Bilder der Seite. Eine neue Sprache braucht einen Eintrag in
// languages.json und ein Wörterbuch in dictionaries/ – der Rest ergibt sich von hier aus.
import { existsSync } from "node:fs";
import { join } from "node:path";
import registry from "./languages.json";
import de from "./dictionaries/de";
import en from "./dictionaries/en";
import type { Dictionary } from "./types";

const dictionaries: Record<string, Dictionary> = { de, en };

export interface Language {
  code: string;
  hreflang: string;
  ogLocale: string;
  /** Name der Sprache in ihr selbst: „Deutsch“, „English“. */
  name: string;
  appName: string;
  /** In welcher Sprache die Datenschutzerklärung für diese Sprache vorliegt. */
  privacyPolicy: string;
  shareImage: { headline: string; pills: string[] };
}

export const site = {
  url: registry.site,
  developer: registry.developer,
  email: registry.email,
  minimumOS: registry.minimumOS,
  /** Apple-ID der App aus App Store Connect – gesetzt, sobald die App im Store ist. */
  appStoreId: registry.appStoreId as string | null,
};

export const languages: Language[] = registry.languages;
export const defaultLanguage = language(registry.defaultLanguage);
export const fallbackLanguage = language(registry.fallbackLanguage);
export const xDefaultLanguage = language(registry.xDefault);

for (const l of languages) {
  if (!dictionaries[l.code]) throw new Error(`Für „${l.code}“ fehlt i18n/dictionaries/${l.code}.ts`);
}

export function language(code: string): Language {
  const found = registry.languages.find((l) => l.code === code);
  if (!found) throw new Error(`Unbekannte Sprache „${code}“`);
  return found;
}

export function dictionary(lang: Language): Dictionary {
  return dictionaries[lang.code]!;
}

/** Die Sprachen mit eigenem Präfix (/en, später /fr …). */
export function prefixedLanguages(): Language[] {
  return languages.filter((l) => l.code !== defaultLanguage.code);
}

/** Sprachen mit eigener Datenschutzerklärung; die übrigen verweisen auf deren Fassung. */
export function languagesWithPolicy(): Language[] {
  return languages.filter((l) => l.privacyPolicy === l.code);
}

export const paths = {
  home(lang: Language): string {
    return lang.code === defaultLanguage.code ? "/" : `/${lang.code}`;
  },
  privacy(lang: Language): string {
    const policy = language(lang.privacyPolicy);
    return policy.code === defaultLanguage.code ? "/datenschutz" : `/${policy.code}/privacy`;
  },
  markdown(lang: Language): string {
    return lang.code === defaultLanguage.code ? "/index.md" : `/${lang.code}/index.md`;
  },
};

export type PageKind = "home" | "privacy";

export function pathFor(kind: PageKind, lang: Language): string {
  return kind === "home" ? paths.home(lang) : paths.privacy(lang);
}

export function absolute(path: string): string {
  return new URL(path, site.url).toString();
}

/**
 * Ein Bild der Sprache aus public/bilder/<code>/. Fehlt es dort (neue Sprache ohne
 * eigene Aufnahmen), nimmt die Seite das der Rückfallsprache.
 */
export function image(lang: Language, file: string): string {
  const own = join(process.cwd(), "public", "bilder", lang.code, file);
  return existsSync(own) ? `/bilder/${lang.code}/${file}` : `/bilder/${fallbackLanguage.code}/${file}`;
}

/** Name einer Sprache in einer anderen, etwa „Englisch“ auf einer deutschen Seite. */
export function languageName(of: Language, inLanguage: Language): string {
  const name = new Intl.DisplayNames([inLanguage.code], { type: "language" }).of(of.code) ?? of.name;
  return name.charAt(0).toLocaleUpperCase(inLanguage.code) + name.slice(1);
}
