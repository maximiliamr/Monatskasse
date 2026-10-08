import { dictionary, languages, pathFor, type Language, type PageKind } from "@/i18n/config";
import { Icon } from "./IconSprite";

// Zeigt den Hinweis nur, wer von aussen kommt und dessen Browser eine andere vorhandene
// Sprache vor der Sprache dieser Seite nennt. Nichts wird gespeichert, nichts umgeleitet.
const script = `(function () {
  try {
    if (document.referrer && new URL(document.referrer).origin === location.origin) return;
    var current = document.documentElement.lang;
    var hints = document.querySelectorAll(".lang-hint[data-lang]");
    var wanted = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language];
    for (var i = 0; i < wanted.length; i++) {
      var code = String(wanted[i]).toLowerCase().split("-")[0];
      if (code === current) return;
      for (var j = 0; j < hints.length; j++) {
        if (hints[j].getAttribute("data-lang") !== code) continue;
        var hint = hints[j];
        hint.hidden = false;
        hint.querySelector("button").addEventListener("click", function () { hint.hidden = true; });
        return;
      }
    }
  } catch (e) {}
})();`;

/** Je anderer Sprache ein verborgener Hinweis in dieser Sprache, z. B. „This page is also available in English.“ */
export default function LanguageHint({ lang, page }: { lang: Language; page: PageKind }) {
  const others = languages.filter((l) => l.code !== lang.code);
  return (
    <>
      {others.map((l) => {
        const hint = dictionary(l).language.hint;
        return (
          <aside key={l.code} className="lang-hint" data-lang={l.code} lang={l.code} hidden>
            <div className="wrap">
              <Icon name="globe" />
              <p>{hint.text}</p>
              <a href={pathFor(page, l)} hrefLang={l.hreflang}>
                {hint.action}
              </a>
              <button type="button" aria-label={hint.close}>
                ×
              </button>
            </div>
          </aside>
        );
      })}
      <script dangerouslySetInnerHTML={{ __html: script }} />
    </>
  );
}
