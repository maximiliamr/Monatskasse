import type { Dictionary } from "@/i18n/types";
import { Icon, type IconName } from "../IconSprite";

const icons: IconName[] = ["ring", "bell", "mic", "tag", "share", "moon"];

export default function Details({ t }: { t: Dictionary }) {
  return (
    <section>
      <div className="wrap">
        <div className="section-head">
          <h2>{t.details.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: t.details.intro }} />
        </div>
        <div className="grid">
          {t.details.tiles.map((tile, i) => (
            <div className="tile" key={icons[i]}>
              <div className="ico">
                <Icon name={icons[i]!} />
              </div>
              <h3>{tile.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: tile.text }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
