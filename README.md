# monatskasse.de

Die Webseite der iPhone- und iPad-App Monatskasse (englisch „My Budget“): Next.js als
statischer Export, ausgeliefert von Cloudflare. Ohne Cookies, ohne Tracking, ohne fremde
Schriften oder Skripte.

## Aufbau

| Ordner / Datei | Inhalt |
|---|---|
| `i18n/languages.json` | Sprachen der Seite: Code, hreflang, Open-Graph-Locale, Name, App-Name, welche Datenschutzerklärung gilt, Texte des Teilbilds. Dazu Adresse, Entwickler, Kontakt, Mindest-iOS und – sobald die App im Store ist – `appStoreId`. |
| `i18n/dictionaries/<code>.ts` | Alle Texte einer Sprache. Der Typ `Dictionary` (`i18n/types.ts`) legt fest, was jede Sprache liefern muss. |
| `i18n/config.ts` | Adressen (`/`, `/datenschutz`, `/en`, `/en/privacy` …), Bilder mit Rückfallsprache, Sprachnamen. |
| `app/(de)/` | Deutsch ohne Präfix – Startseite und Datenschutz. |
| `app/[lang]/` | Jede weitere Sprache unter `/<code>`: Startseite, Datenschutz, 404, Markdown-Fassung. |
| `app/robots.txt`, `app/llms.txt`, `app/sitemap.ts`, `app/manifest.ts` | Für Suchmaschinen und KI, alles aus denselben Daten erzeugt. |
| `components/` | Leiste mit Sprachwahl, Sprachhinweis, Fusszeile, die Abschnitte der Startseite. |
| `lib/seo.ts`, `lib/structured-data.tsx`, `lib/llm.ts` | Meta-Angaben und hreflang, schema.org-Daten (JSON-LD), llms.txt und Markdown. |
| `content/privacy/<code>.html` | Die Datenschutzerklärung – byte-gleich mit der Fassung in der App. |
| `styles/` | Gestaltung der Seite und der Datenschutzerklärung. |
| `public/bilder/` | Symbol und Favicons; je Sprache ein Ordner mit Aufnahmen und Teilbild `og.jpg`. |
| `public/_headers`, `public/_redirects` | Sicherheits-Header und Weiterleitungen alter Adressen (Cloudflare). |
| `docs/` | Nur für die alte Adresse `maximiliamr.github.io/Monatskasse`: Weiterleitungen hierher. |

## Lokal ansehen

```
npm install
npm run dev        # Entwicklung mit Neuladen
npm run preview    # Build und Auslieferung wie bei Cloudflare (wrangler dev)
```

## Eine Sprache hinzufügen

1. In `i18n/languages.json` einen Eintrag ergänzen, etwa `fr` mit Name „Français“, App-Name,
   `ogLocale` und den Texten fürs Teilbild. Gibt es keine eigene Datenschutzerklärung, bleibt
   `privacyPolicy` auf `"en"`.
2. `i18n/dictionaries/en.ts` nach `fr.ts` kopieren, übersetzen und in `i18n/config.ts` bei
   `dictionaries` eintragen. Fehlt ein Text, meldet `npm run build` einen Typfehler.
3. Bilder: die Store-Aufnahmen in der Sprache erzeugen und
   `AppStore/Screenshots/webseite-bilder.sh` laufen lassen (im App-Repository). Ohne eigene
   Bilder nimmt die Seite die englischen.
4. `npm run build` – Sprachwahl, hreflang, Sitemap, llms.txt, Fusszeile und Sprachhinweis
   kennen die neue Sprache dann von selbst.

## Veröffentlichen

Cloudflare baut bei jedem Push auf `main` (Build command `npm run build`, danach
`npx wrangler deploy`, siehe `wrangler.jsonc`) und liefert `out/` unter monatskasse.de aus.
