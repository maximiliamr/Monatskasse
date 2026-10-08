import PrivacyPage from "@/components/PrivacyPage";
import { defaultLanguage } from "@/i18n/config";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("privacy", defaultLanguage);

export default function Page() {
  return <PrivacyPage lang={defaultLanguage} />;
}
