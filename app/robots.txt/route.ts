// Alle dürfen die Seite lesen – Suchmaschinen und KI-Dienste, für Suche, Antworten und Training.
// Die KI-Crawler stehen einzeln da, damit die Absicht auch für sie eindeutig ist. Bewusst ohne
// „Content-Signal“: Google und Lighthouse kennen die Zeile nicht und melden sie als Fehler, und
// ohne Einschränkung ist ohnehin alles erlaubt.
import { absolute } from "@/i18n/config";

export const dynamic = "force-static";

const aiCrawlers = [
  "OAI-SearchBot", "ChatGPT-User", "GPTBot",
  "Claude-SearchBot", "Claude-User", "ClaudeBot",
  "PerplexityBot", "Perplexity-User",
  "Google-Extended", "Applebot-Extended",
  "meta-externalagent", "Amazonbot", "DuckAssistBot", "MistralAI-User", "CCBot",
];

export function GET() {
  const body = [
    "# monatskasse.de – everyone is welcome to read this site, including AI services",
    "# for search, answers and training.",
    "",
    "User-agent: *",
    "Allow: /",
    "",
    ...aiCrawlers.map((name) => `User-agent: ${name}`),
    "Allow: /",
    "",
    `Sitemap: ${absolute("/sitemap.xml")}`,
    "",
  ].join("\n");
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
