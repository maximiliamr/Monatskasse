// Wird als /<sprache>/404.html ausgegeben; Cloudflare zeigt sie für unbekannte Adressen
// unter /<sprache>/ (not_found_handling in wrangler.jsonc).
import NotFoundPage from "@/components/NotFoundPage";
import { language } from "@/i18n/config";
import { notFoundMetadata } from "@/lib/seo";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props) {
  return notFoundMetadata(language((await params).lang));
}

export default async function Page({ params }: Props) {
  return <NotFoundPage lang={language((await params).lang)} />;
}
