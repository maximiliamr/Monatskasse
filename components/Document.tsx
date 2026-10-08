import type { ReactNode } from "react";
import "@/styles/site.css";

/** Das Grundgerüst jeder Seite: <html> in ihrer Sprache. */
export default function Document({ lang, children }: { lang: string; children: ReactNode }) {
  return (
    <html lang={lang}>
      <body>{children}</body>
    </html>
  );
}
