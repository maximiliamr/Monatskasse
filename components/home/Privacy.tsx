import { paths, type Language } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { Icon, type IconName } from "../IconSprite";

const icons: IconName[] = ["person", "cloud", "eyeoff", "faceid"];

export default function Privacy({ lang, t }: { lang: Language; t: Dictionary }) {
  return (
    <section className="privat" id={t.ids.privacy}>
      <div className="wrap">
        <div className="section-head">
          <h2>{t.privacy.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: t.privacy.intro }} />
        </div>
        <div className="privat-grid">
          {t.privacy.tiles.map((tile, i) => (
            <div className="privat-tile" key={icons[i]}>
              <Icon name={icons[i]!} />
              <h3>{tile.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: tile.text }} />
            </div>
          ))}
        </div>
        <p className="privat-link">
          <a href={paths.privacy(lang)}>
            {t.privacy.link} <Icon name="arrow" />
          </a>
        </p>
      </div>
    </section>
  );
}
