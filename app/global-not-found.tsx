// Die 404-Seite der Hauptsprache (/404.html). Unter /en/ greift app/[lang]/404.
import Document from "@/components/Document";
import NotFoundPage from "@/components/NotFoundPage";
import { defaultLanguage } from "@/i18n/config";
import { notFoundMetadata } from "@/lib/seo";

export const metadata = notFoundMetadata(defaultLanguage);

export default function GlobalNotFound() {
  return (
    <Document lang={defaultLanguage.code}>
      <NotFoundPage lang={defaultLanguage} />
    </Document>
  );
}
