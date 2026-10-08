import { languages, paths, type Language } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

export default function Footer({ lang, t }: { lang: Language; t: Dictionary }) {
  return (
    <footer>
      <div className="wrap">
        <div className="foot">
          <a className="brand" href="#top">
            <img src="/bilder/icon.png" width="26" height="26" alt="" /> {lang.appName}
          </a>
          <div className="foot-links">
            <a href={paths.privacy(lang)}>{t.footer.privacy}</a>
            <a href={`#${t.ids.help}`}>{t.footer.help}</a>
            <a href={`#${t.ids.contact}`}>{t.footer.contact}</a>
            {languages
              .filter((l) => l.code !== lang.code)
              .map((l) => (
                <a key={l.code} href={paths.home(l)} hrefLang={l.hreflang} lang={l.code}>
                  {l.name}
                </a>
              ))}
            <span>{t.footer.copyright}</span>
          </div>
        </div>
        <p className="fine" dangerouslySetInnerHTML={{ __html: t.footer.fine }} />
      </div>
    </footer>
  );
}
