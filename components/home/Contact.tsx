import { site, type Language } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { Icon } from "../IconSprite";

export default function Contact({ lang, t }: { lang: Language; t: Dictionary }) {
  return (
    <section className="kontakt" id={t.ids.contact}>
      <div className="wrap">
        <div className="kontakt-card">
          <h2>{t.contact.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: t.contact.text }} />
          <a className="btn btn-accent" href={`mailto:${site.email}?subject=${encodeURIComponent(lang.appName)}`}>
            <Icon name="mail" />
            {t.contact.button}
          </a>
          <p className="small" dangerouslySetInnerHTML={{ __html: t.contact.small }} />
        </div>
      </div>
    </section>
  );
}
