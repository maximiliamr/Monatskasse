import type { CSSProperties } from "react";
import { image, type Language } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { Icon, type IconName } from "../IconSprite";
import Phone from "../Phone";

// Aufbau der vier Zeilen, gleich in jeder Sprache: Symbol, Farbe, Bild, Seite des Bilds.
const rows: { icon: IconName; color?: string; image: string; flip: boolean }[] = [
  { icon: "plus", image: "add.jpg", flip: false },
  { icon: "bolt", color: "var(--teal)", image: "apple-pay.jpg", flip: true },
  { icon: "chart", color: "var(--violet)", image: "insights.jpg", flip: false },
  { icon: "list", color: "var(--orange)", image: "expenses.jpg", flip: true },
];

export default function Features({ lang, t }: { lang: Language; t: Dictionary }) {
  return (
    <section id={t.ids.features}>
      <div className="wrap">
        <div className="section-head">
          <h2>{t.features.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: t.features.intro }} />
        </div>

        {t.features.rows.map((row, i) => {
          const layout = rows[i]!;
          return (
            <article
              key={layout.image}
              className={layout.flip ? "row flip" : "row"}
              style={layout.color ? ({ "--k": layout.color } as CSSProperties) : undefined}
            >
              <div className="copy">
                <p className="kicker">
                  <Icon name={layout.icon} />
                  {row.kicker}
                </p>
                <h3>{row.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: row.text }} />
                <ul className="checks">
                  {row.checks.map((check, j) => (
                    <li key={j}>
                      <Icon name="check" />
                      <span dangerouslySetInnerHTML={{ __html: check }} />
                    </li>
                  ))}
                </ul>
              </div>
              <figure className="media">
                <Phone src={image(lang, layout.image)} alt={row.alt} />
              </figure>
            </article>
          );
        })}
      </div>
    </section>
  );
}
