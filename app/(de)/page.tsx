import HomePage from "@/components/HomePage";
import { defaultLanguage } from "@/i18n/config";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("home", defaultLanguage);

export default function Page() {
  return <HomePage lang={defaultLanguage} />;
}
