import { languageName, languages, pathFor, type Language, type PageKind } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { Icon } from "./IconSprite";

/**
 * Knopf mit Globus und der aktuellen Sprache, darunter ein Menü mit allen Sprachen.
 * Läuft ohne JavaScript (HTML-Popover): schliesst bei Klick daneben und mit Esc.
 * Jeder Eintrag führt zur gleichen Seite in der anderen Sprache.
 */
export default function LanguageSwitcher({ lang, t, page }: { lang: Language; t: Dictionary; page: PageKind }) {
  return (
    <>
      <button type="button" className="lang-btn" popoverTarget="sprachwahl" aria-label={`${t.language.button}: ${lang.name}`}>
        <Icon name="globe" />
        <span>{lang.name}</span>
        <Icon name="chevron" className="i lang-chev" />
      </button>
      <div id="sprachwahl" popover="auto" className="lang-menu">
        <p className="lang-title">{t.language.menu}</p>
        <ul>
          {languages.map((l) => {
            const current = l.code === lang.code;
            return (
              <li key={l.code}>
                <a
                  href={pathFor(page, l)}
                  hrefLang={l.hreflang}
                  lang={l.code}
                  aria-current={current ? "page" : undefined}
                >
                  <span className="lang-name">{l.name}</span>
                  <span className="lang-sub" lang={lang.code}>
                    {current ? l.appName : `${languageName(l, lang)} · ${l.appName}`}
                  </span>
                  {current && <Icon name="check" className="i lang-check" />}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
