import { readFileSync } from "node:fs";
import { join } from "node:path";
import { dictionary, language, type Language } from "@/i18n/config";
import { JsonLd, privacyData } from "@/lib/structured-data";
import "@/styles/policy.css";
import IconSprite from "./IconSprite";
import Nav from "./Nav";

/**
 * Die Datenschutzerklärung. Ihr Text kommt aus content/privacy/<code>.html – byte-gleich
 * mit der Fassung in der App (PrivacyTests prüft das). Die Seite zeigt deren <main>.
 */
export default function PrivacyPage({ lang }: { lang: Language }) {
  const policy = language(lang.privacyPolicy);
  const file = readFileSync(join(process.cwd(), "content", "privacy", `${policy.code}.html`), "utf8");
  const body = /<main>([\s\S]*)<\/main>/.exec(file)?.[1];
  if (!body) throw new Error(`content/privacy/${policy.code}.html enthält kein <main>`);
  return (
    <>
      <IconSprite />
      <Nav lang={lang} t={dictionary(lang)} page="privacy" />
      <main className="policy" lang={policy.code} dangerouslySetInnerHTML={{ __html: body }} />
      <JsonLd data={privacyData(lang)} />
    </>
  );
}
