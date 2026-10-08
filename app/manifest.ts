import type { MetadataRoute } from "next";
import { defaultLanguage, dictionary } from "@/i18n/config";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: defaultLanguage.appName,
    short_name: defaultLanguage.appName,
    description: dictionary(defaultLanguage).meta.ogDescription,
    lang: defaultLanguage.hreflang,
    start_url: "/",
    display: "browser",
    background_color: "#0B0B16",
    theme_color: "#1D1C45",
    icons: [
      { src: "/bilder/favicon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/bilder/icon.png", sizes: "256x256", type: "image/png" },
    ],
  };
}
