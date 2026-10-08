import { dictionary, paths, type Language } from "@/i18n/config";
import IconSprite from "./IconSprite";
import Nav from "./Nav";

export default function NotFoundPage({ lang }: { lang: Language }) {
  const t = dictionary(lang);
  return (
    <>
      <IconSprite />
      <Nav lang={lang} t={t} page="notFound" />
      <main className="notfound">
        <section>
          <div className="wrap">
            <div className="section-head">
              <h1>{t.notFound.title}</h1>
              <p>{t.notFound.text}</p>
            </div>
            <p className="notfound-back">
              <a className="btn btn-accent" href={paths.home(lang)}>
                {t.notFound.back}
              </a>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
