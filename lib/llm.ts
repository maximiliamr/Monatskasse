// Fassungen für Sprachmodelle: /llms.txt und je Sprache die Startseite als Markdown.
// Beides entsteht aus denselben Wörterbüchern wie die Seite und ist daher nie veraltet.
import {
  absolute,
  dictionary,
  fallbackLanguage,
  languageName,
  languages,
  languagesWithPolicy,
  paths,
  site,
  type Language,
} from "@/i18n/config";
import { markdown, plain } from "./text";

export function homeMarkdown(lang: Language): string {
  const t = dictionary(lang);
  const base = absolute(paths.home(lang));
  const md = (html: string) => markdown(html, base);
  const out: string[] = [];

  out.push(`# ${lang.appName} – ${t.hero.eyebrow}`, "", `> ${t.meta.description}`, "");
  out.push(`## ${t.facts.title}`, "");
  for (const item of t.facts.items) out.push(`- ${item}`);
  out.push(`- ${t.facts.languages}: ${languages.map((l) => languageName(l, lang)).join(", ")}`);
  out.push(`- ${t.footer.privacy}: ${absolute(paths.privacy(lang))}`);
  out.push(`- ${t.footer.contact}: ${site.email}`, "");

  out.push(`## ${t.hero.title}`, "", md(t.hero.lead), "");

  out.push(`## ${t.features.title}`, "", md(t.features.intro), "");
  for (const row of t.features.rows) {
    out.push(`### ${row.title}`, "", md(row.text), "");
    for (const check of row.checks) out.push(`- ${md(check)}`);
    out.push("");
  }

  out.push(`## ${t.devices.title}`, "", md(t.devices.intro), "");
  for (const card of [t.devices.widgets, t.devices.ipad]) out.push(`### ${card.title}`, "", md(card.text), "");

  out.push(`## ${t.details.title}`, "", md(t.details.intro), "");
  for (const tile of t.details.tiles) out.push(`### ${tile.title}`, "", md(tile.text), "");

  out.push(`## ${t.privacy.title}`, "", md(t.privacy.intro), "");
  for (const tile of t.privacy.tiles) out.push(`### ${tile.title}`, "", md(tile.text), "");

  const a = t.applePay;
  out.push(`## ${a.title}`, "", md(a.intro), "");
  if (a.quick) out.push(`### ${a.quick.title}`, "", md(a.quick.text), "", `[${a.quick.button}](${a.quick.url})`, "");
  for (const [label, steps] of [[a.versions[0], a.ios27], [a.versions[1], a.ios26]] as const) {
    out.push(`### ${label}`, "");
    steps.forEach((step, i) => {
      out.push(`${i + 1}. **${step.title}** – ${plain(step.text)}${step.warn ? ` ${plain(step.warn)}` : ""}`);
    });
    out.push("");
  }

  out.push(`## ${t.help.title}`, "", md(t.help.intro), "");
  for (const item of t.help.faq) out.push(`### ${item.q}`, "", md(item.a), "");

  out.push(`## ${t.contact.title}`, "", md(t.contact.text), "", md(t.contact.small), "");
  return out.join("\n").replace(/\n{3,}/g, "\n\n").trim() + "\n";
}

export function llmsTxt(): string {
  const en = dictionary(fallbackLanguage);
  const names = languages.map((l) => l.appName).filter((n, i, all) => all.indexOf(n) === i);
  const out: string[] = [];
  out.push(`# ${names[0]}${names.length > 1 ? ` (${names.slice(1).join(", ")})` : ""}`, "");
  out.push(`> ${plain(en.meta.description)}`, "");
  out.push(
    `${names[0]} is the German name of the app; in English it appears as “${fallbackLanguage.appName}”. Website: ${absolute("/")}.`,
    "",
  );
  for (const item of en.facts.items) out.push(`- ${item}`);
  out.push(`- ${en.facts.languages}: ${languages.map((l) => languageName(l, fallbackLanguage)).join(", ")}`, "");

  out.push("## Pages", "");
  for (const l of languages) {
    const t = dictionary(l);
    out.push(`- [${t.meta.title}](${absolute(paths.markdown(l))}): ${languageName(l, fallbackLanguage)} home page with features, setup guide and FAQ (Markdown; HTML at ${absolute(paths.home(l))})`);
  }
  for (const l of languagesWithPolicy()) {
    out.push(`- [${dictionary(l).privacyPage.title}](${absolute(paths.privacy(l))}): privacy policy in ${languageName(l, fallbackLanguage)}`);
  }
  out.push("", "## Optional", "", `- [Sitemap](${absolute("/sitemap.xml")})`, `- [Contact](mailto:${site.email})`);
  return out.join("\n") + "\n";
}
