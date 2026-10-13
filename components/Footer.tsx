import { appStoreUrl, languages, paths, type Language } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import AppIcon from "./AppIcon";

export default function Footer({ lang, t }: { lang: Language; t: Dictionary }) {
  const store = appStoreUrl(lang);
  return (
    <footer>
      <div className="wrap">
        <div className="foot">
          <a className="brand" href="#top">
            <AppIcon size={26} /> {lang.appName}
          </a>
          <div className="foot-links">
            {store && <a href={store}>{t.footer.appStore}</a>}
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
