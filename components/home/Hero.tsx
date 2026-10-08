import { image, type Language } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { Icon } from "../IconSprite";
import Phone from "../Phone";

export default function Hero({ lang, t }: { lang: Language; t: Dictionary }) {
  return (
    <header className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <p className="eyebrow">
            <img className="app-icon" src="/bilder/icon.png" width="56" height="56" alt="" /> {t.hero.eyebrow}
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
            <a className="btn btn-light" href={`#${t.ids.features}`}>
              {t.hero.ctaFeatures}
            </a>
            <a className="btn btn-glass" href={`#${t.ids.help}`}>
              {t.hero.ctaHelp}
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <Phone className="hero-phone" src={image(lang, "overview.jpg")} alt={t.hero.phoneAlt} priority />
          <img className="hero-widget" src={image(lang, "widget-small.png")} width="353" height="353" alt={t.hero.widgetAlt} />
        </div>
      </div>
    </header>
  );
}
