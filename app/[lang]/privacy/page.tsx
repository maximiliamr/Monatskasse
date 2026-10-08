// Sprachen ohne eigene Datenschutzerklärung zeigen hier die ihrer Rückfallsprache;
// der Canonical-Verweis zeigt dann auf deren Seite.
import PrivacyPage from "@/components/PrivacyPage";
import { language } from "@/i18n/config";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props) {
  return pageMetadata("privacy", language((await params).lang));
}

export default async function Page({ params }: Props) {
  return <PrivacyPage lang={language((await params).lang)} />;
}
