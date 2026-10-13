import type { Language } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { Icon } from "../IconSprite";
import Picture from "../Picture";
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
              <Picture language={lang} file="widget-medium.png" widths={[378, 756]} sizes="(max-width: 560px) 80vw, 430px" width="756" height="353" loading="lazy" decoding="async" alt={widgets.alt} />
            </div>
          </div>
          <div className="card card-ipad">
            <p className="kicker">
              <Icon name="devices" />
              {ipad.kicker}
            </p>
            <h3>{ipad.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: ipad.text }} />
            <Tablet lang={lang} file="ipad.jpg" className="ipad" alt={ipad.alt} sizes="(max-width: 920px) 80vw, 460px" />
          </div>
        </div>
      </div>
    </section>
  );
}
