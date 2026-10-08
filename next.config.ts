import type { NextConfig } from "next";

// Die Seite ist rein statisch: `next build` schreibt sie nach out/, Cloudflare liefert
// den Ordner aus (wrangler.jsonc). Adressen ohne Schrägstrich am Ende: /en, /datenschutz.
const config: NextConfig = {
  output: "export",
  trailingSlash: false,
  images: { unoptimized: true },
  reactStrictMode: true,
  experimental: {
    // CSS direkt in die Seite, wie bisher – kein zusätzlicher Abruf vor dem ersten Bild.
    inlineCss: true,
    // Mehrere Wurzel-Layouts (je Sprache ein <html lang>) brauchen eine eigene 404-Seite.
    globalNotFound: true,
  },
};

export default config;
