// Wandelt das einfache Markup der Wörterbücher in Text oder Markdown um – für strukturierte
// Daten, llms.txt und die Markdown-Fassungen der Seiten.

const entities: Record<string, string> = { amp: "&", lt: "<", gt: ">", quot: '"', "#39": "'", apos: "'", nbsp: " " };

function decode(text: string): string {
  return text.replace(/&(amp|lt|gt|quot|#39|apos|nbsp);/g, (_, name: string) => entities[name]!);
}

/** Reiner Text ohne Markup, Absätze und Listenpunkte durch Leerzeichen getrennt. */
export function plain(html: string): string {
  return decode(html.replace(/<\/(p|li)>\s*/g, " ").replace(/<[^>]+>/g, ""))
    .replace(/\s+/g, " ")
    .trim();
}

/** Markdown: Absätze, Listen, *kursiv*, **fett** und Links (relative werden absolut). */
export function markdown(html: string, base: string): string {
  const link = (href: string) => (href.startsWith("#") ? base + href : new URL(href, base).toString());
  const md = html
    .replace(/<a [^>]*href="([^"]+)"[^>]*>(.*?)<\/a>/g, (_, href: string, text: string) => `[${text}](${link(href)})`)
    .replace(/<\/?em>/g, "*")
    .replace(/<\/?strong>/g, "**")
    .replace(/<li>\s*/g, "\n- ")
    .replace(/<\/(li|ul|ol)>\s*/g, "")
    .replace(/<(ul|ol)>\s*/g, "\n")
    .replace(/<p[^>]*>\s*/g, "\n\n")
    .replace(/\s*<\/p>/g, "")
    .replace(/<[^>]+>/g, "");
  return decode(md).replace(/[ \t]+/g, " ").replace(/\n{3,}/g, "\n\n").trim();
}
