import { paths, type Language, type PageKind } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import AppIcon from "./AppIcon";
import LanguageHint from "./LanguageHint";
import LanguageSwitcher from "./LanguageSwitcher";

/** Die Leiste oben. Auf der Startseite mit Sprungmarken, sonst nur Marke und Sprachwahl. */
export default function Nav({ lang, t, page }: { lang: Language; t: Dictionary; page: PageKind | "notFound" }) {
  const home = page === "home";
  // Von einer 404-Seite führt die Sprachwahl zur Startseite der anderen Sprache.
  const target: PageKind = page === "notFound" ? "home" : page;
  return (
    <>
      <a className="skip-link" href="#inhalt">
        {t.nav.skip}
      </a>
      <nav className="nav" aria-label={t.nav.label}>
        <div className="wrap">
          <a className="brand" href={home ? "#top" : paths.home(lang)}>
            <AppIcon size={30} /> {lang.appName}
          </a>
          <div className="nav-links">
            {home && (
              <>
                <a className="optional" href={`#${t.ids.features}`}>
                  {t.nav.features}
                </a>
                <a className="optional" href={`#${t.ids.privacy}`}>
                  {t.nav.privacy}
                </a>
                {/* Wie die beiden davor nur auf breiten Bildschirmen – mobil steht die Hilfe in der Fusszeile. */}
                <a className="optional" href={`#${t.ids.help}`}>
                  {t.nav.help}
                </a>
              </>
            )}
            <LanguageSwitcher lang={lang} t={t} page={target} />
          </div>
        </div>
      </nav>
      {page !== "notFound" && <LanguageHint lang={lang} page={target} />}
    </>
  );
}
