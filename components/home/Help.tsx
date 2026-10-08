import type { Dictionary } from "@/i18n/types";

export default function Help({ t }: { t: Dictionary }) {
  return (
    <section id={t.ids.help}>
      <div className="wrap">
        <div className="section-head">
          <h2>{t.help.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: t.help.intro }} />
        </div>
        <div className="faq">
          {t.help.faq.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <div dangerouslySetInnerHTML={{ __html: item.a }} />
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
