import { image, type Language } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { Icon } from "../IconSprite";
import Tablet from "../Tablet";

export default function Devices({ lang, t }: { lang: Language; t: Dictionary }) {
  const { widgets, ipad } = t.devices;
  return (
    <section className="alt" id={t.ids.devices}>
      <div className="wrap">
        <div className="section-head">
          <h2>{t.devices.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: t.devices.intro }} />
        </div>
        <div className="bento">
          <div className="card card-widgets">
            <p className="kicker">
              <Icon name="widget" />
              {widgets.kicker}
            </p>
            <h3>{widgets.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: widgets.text }} />
            <div className="widget-stage">
              <img src={image(lang, "widget-medium.png")} width="756" height="353" loading="lazy" decoding="async" alt={widgets.alt} />
            </div>
          </div>
          <div className="card card-ipad">
            <p className="kicker">
              <Icon name="devices" />
              {ipad.kicker}
            </p>
            <h3>{ipad.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: ipad.text }} />
            <Tablet className="ipad" src={image(lang, "ipad.jpg")} alt={ipad.alt} />
          </div>
        </div>
      </div>
    </section>
  );
}
