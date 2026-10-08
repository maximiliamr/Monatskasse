// Deutsch ist die Hauptsprache und liegt ohne Präfix: /, /datenschutz.
import type { ReactNode } from "react";
import Document from "@/components/Document";
import { defaultLanguage } from "@/i18n/config";

export { viewport } from "@/lib/seo";

export default function Layout({ children }: { children: ReactNode }) {
  return <Document lang={defaultLanguage.code}>{children}</Document>;
}
