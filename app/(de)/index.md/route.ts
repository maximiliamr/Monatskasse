import { defaultLanguage } from "@/i18n/config";
import { homeMarkdown } from "@/lib/llm";

export const dynamic = "force-static";

export function GET() {
  return new Response(homeMarkdown(defaultLanguage), { headers: { "Content-Type": "text/markdown; charset=utf-8" } });
}
