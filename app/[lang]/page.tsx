import HomePage from "@/components/HomePage";
import { language } from "@/i18n/config";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props) {
  return pageMetadata("home", language((await params).lang));
}

export default async function Page({ params }: Props) {
  return <HomePage lang={language((await params).lang)} />;
}
