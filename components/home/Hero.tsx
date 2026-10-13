import { appStoreUrl, image, type Language } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import AppIcon from "../AppIcon";
import { Icon } from "../IconSprite";
import Phone from "../Phone";
import Picture from "../Picture";

export default function Hero({ lang, t }: { lang: Language; t: Dictionary }) {
  const store = appStoreUrl(lang);
  return (
    <header className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <p className="eyebrow">
            <AppIcon size={56} className="app-icon" /> {t.hero.eyebrow}
          </p>
          <h1>{t.hero.title}</h1>
          <p className="lead" dangerouslySetInnerHTML={{ __html: t.hero.lead }} />
          <ul className="pills">
            {t.hero.pills.map((pill) => (
              <li key={pill}>
                <Icon name="check" />
                {pill}
              </li>
            ))}
          </ul>
          <div className="cta">
            {store && (
              <a className="store-badge" href={store}>
                <img src={image(lang, "app-store.svg")} width="150" height="50" alt={t.hero.store} />
              </a>
            )}
            <a className={store ? "btn btn-glass" : "btn btn-light"} href={`#${t.ids.features}`}>
              {t.hero.ctaFeatures}
              <Icon name="chevron" />
            </a>
            {!store && (
              <a className="btn btn-glass" href={`#${t.ids.help}`}>
                {t.hero.ctaHelp}
              </a>
            )}
          </div>
        </div>
        <div className="hero-visual">
          <Phone lang={lang} file="overview.jpg" className="hero-phone" alt={t.hero.phoneAlt} sizes="310px" priority />
          <Picture language={lang} file="widget-small.png" widths={[176, 353]} sizes="160px" className="hero-widget" width="353" height="353" alt={t.hero.widgetAlt} />
        </div>
      </div>
    </header>
  );
}
