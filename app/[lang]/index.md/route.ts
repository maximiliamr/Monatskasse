import { language, prefixedLanguages } from "@/i18n/config";
import { homeMarkdown } from "@/lib/llm";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return prefixedLanguages().map((l) => ({ lang: l.code }));
}

export async function GET(_: Request, { params }: { params: Promise<{ lang: string }> }) {
  const markdown = homeMarkdown(language((await params).lang));
  return new Response(markdown, { headers: { "Content-Type": "text/markdown; charset=utf-8" } });
}
