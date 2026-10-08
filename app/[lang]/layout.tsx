// Alle weiteren Sprachen mit Präfix: /en, /en/privacy – später /fr usw.
import type { ReactNode } from "react";
import Document from "@/components/Document";
import { language, prefixedLanguages } from "@/i18n/config";

export { viewport } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return prefixedLanguages().map((l) => ({ lang: l.code }));
}

export default async function Layout({ children, params }: { children: ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return <Document lang={language(lang).code}>{children}</Document>;
}
