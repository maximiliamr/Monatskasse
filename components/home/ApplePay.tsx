import type { Dictionary, GuideStep } from "@/i18n/types";

// Safari nennt in „Version/…“ die iOS-Version. Wer noch iOS 26 oder älter hat, sieht
// gleich seinen Weg; ohne Angabe bleibt es bei iOS 27. Muss zwischen den Knöpfen und
// der Anleitung stehen, damit nichts umspringt.
const pickVersion = `(function () {
  var m = /(iPhone|iPad|iPod).+Version\\/(\\d+)/.exec(navigator.userAgent);
  if (m && +m[2] < 27) document.getElementById("ios26").checked = true;
})();`;

function Step({ step }: { step: GuideStep }) {
  return (
    <div className={step.cards ? "gstep cards" : "gstep"}>
      <h3>{step.title}</h3>
      <p dangerouslySetInnerHTML={{ __html: step.text }} />
      {step.warn && <p className="warn" dangerouslySetInnerHTML={{ __html: step.warn }} />}
      <div className="mk" aria-hidden="true" dangerouslySetInnerHTML={{ __html: step.mock }} />
    </div>
  );
}

export default function ApplePay({ t }: { t: Dictionary }) {
  const a = t.applePay;
  return (
    <section className="alt" id={t.ids.applePay}>
      <div className="wrap">
        <div className="section-head">
          <h2>{a.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: a.intro }} />
        </div>

        <input className="os-radio" type="radio" name="ios" id="ios27" defaultChecked />
        <input className="os-radio" type="radio" name="ios" id="ios26" />
        <script dangerouslySetInnerHTML={{ __html: pickVersion }} />
        <div className="os-switch">
          <label htmlFor="ios27">{a.versions[0]}</label>
          <label htmlFor="ios26">{a.versions[1]}</label>
        </div>
        <p className="os-hint" dangerouslySetInnerHTML={{ __html: a.osHint }} />

        {a.quick && (
          <div className="gquick">
            <div>
              <h3>{a.quick.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: a.quick.text }} />
            </div>
            <a className="btn btn-accent" href={a.quick.url}>
              {a.quick.button}
            </a>
          </div>
        )}

        <div className="guide ios27">
          {a.ios27.map((step) => (
            <Step key={step.title + step.text} step={step} />
          ))}
        </div>
        <div className="guide ios26">
          {a.ios26.map((step) => (
            <Step key={step.title + step.text} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}
