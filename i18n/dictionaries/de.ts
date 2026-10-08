// Alle Texte der Seite auf Deutsch. Felder vom Typ Html dürfen einfaches Markup
// enthalten (<em>, <strong>, <a>, <p>, <ul>/<li>), alles andere ist reiner Text.
import type { Dictionary } from "../types";

const de: Dictionary = {
  meta: {
    title: "Monatskasse – Haushaltsbuch für iPhone und iPad",
    description: "Wie viel ist diesen Monat noch übrig? Monatskasse ist das Haushaltsbuch für iPhone und iPad: Ausgaben in Sekunden erfassen, Fixkosten automatisch buchen, Budget im Blick – ohne Konto, ohne Werbung, ohne Tracking.",
    ogTitle: "Monatskasse – Haushaltsbuch für iPhone und iPad",
    ogDescription: "Budget, Ausgaben und Fixkosten auf einen Blick. Ohne Konto, ohne Werbung, ohne Tracking.",
    ogImageAlt: "Monatskasse auf dem iPhone: Übersicht und Analyse eines Monats",
  },
  nav: {
    label: "Hauptnavigation",
    features: "Funktionen",
    privacy: "Privatsphäre",
    help: "Hilfe",
  },
  ids: {
    features: "funktionen",
    devices: "geraete",
    privacy: "privat",
    applePay: "apple-pay",
    help: "hilfe",
    contact: "kontakt",
  },
  language: {
    menu: "Sprache",
    button: "Sprache wählen",
    hint: {
      text: "Diese Seite gibt es auch auf Deutsch.",
      action: "Auf Deutsch lesen",
      close: "Hinweis schließen",
    },
  },
  hero: {
    eyebrow: "Haushaltsbuch für iPhone und iPad",
    title: "Wie viel ist diesen Monat noch übrig?",
    lead: "Monatskasse zeigt dir auf einen Blick, was du ausgegeben hast und was bis zum Monatsende bleibt. Ausgaben in Sekunden erfassen, Fixkosten automatisch buchen, Budget im Blick behalten.",
    pills: ["Kein Konto", "Keine Werbung", "Kein Tracking"],
    ctaFeatures: "Funktionen ansehen",
    ctaHelp: "Hilfe & Kontakt",
    phoneAlt: "Die Übersicht in Monatskasse: Im Oktober sind von 3.500 € Budget noch 1.578,45 € übrig, 55 Prozent sind genutzt.",
    widgetAlt: "Kleines Widget auf dem Home-Bildschirm: 55 % des Budgets genutzt, darunter „Reicht bis Monatsende“ und eine Zahlung zu prüfen.",
  },
  features: {
    title: "Einfach im Alltag. Klar am Monatsende.",
    intro: "Du erfasst, was du ausgibst. Monatskasse rechnet mit und zeigt dir jederzeit, wo du stehst.",
    rows: [
      {
        kicker: "Erfassen",
        title: "In Sekunden erfasst",
        text: "Betrag, Titel, fertig. Häufige Einträge schlägt Monatskasse schon beim Tippen vor, samt Kategorie und Zahlart.",
        checks: [
          "Kassenbeleg fotografieren: Summe, Datum und Positionen werden auf dem Gerät erkannt – mit Rechenprobe, damit die Beträge stimmen",
          "Rechnung geteilt? Durch Personen teilen oder deinen Anteil eintragen – auch nachträglich, etwa bei einer Apple-Pay-Zahlung",
          "Im Ausland bezahlt? Betrag in der fremden Währung erfassen – Monatskasse rechnet mit dem Tageskurs der Europäischen Zentralbank um und merkt sich, was du bezahlt hast",
          "Schon gebucht? Gehört ein gescannter Beleg zu Fixkosten oder einer Apple-Pay-Zahlung, die schon da ist, schlägt Monatskasse vor, ihn dort anzuhängen – statt doppelt zu zählen",
          "Spesen? Belege sammeln und mit einem Tipp als Abrechnung an die Buchhaltung geben – PDF mit allen Belegen, Tabelle und Originaldateien. Auch Fixkosten lassen sich als Spesen führen, etwa ein Abo fürs Geschäft",
          "Auch mit Siri, mit Kurzbefehlen oder über den Knopf im Kontrollzentrum",
        ],
        alt: "Beleg prüfen: Ein Kassenzettel über 16,76 € ist erkannt, die vier Positionen ergeben genau die Summe, als Kategorie ist Lebensmittel vorgeschlagen.",
      },
      {
        kicker: "Automatisch",
        title: "Apple Pay trägt sich selbst ein",
        text: "Richte einmal eine Automation in der Kurzbefehle-App ein – eine für alle Karten. Danach landen Zahlungen mit Apple Pay von selbst in Monatskasse, mit Betrag, Händler und Karte.",
        checks: [
          "Die App führt dich Schritt für Schritt durch die Einrichtung – <a href=\"#apple-pay\">die Anleitung steht auch hier</a>",
          "Jede Karte bekommt ihre Zahlart: einmal zugeordnet, immer richtig gebucht",
          "Zur Sicherheit erst unter „Zu prüfen“, denn iOS meldet auch abgelehnte Zahlungen",
        ],
        alt: "Zu prüfen: Vier Zahlungen mit Apple Pay – Bäckerei, Wochenmarkt, Café am Markt und Tankstelle – warten darauf, mit einem Tipp übernommen zu werden.",
      },
      {
        kicker: "Analyse",
        title: "Sehen, wohin das Geld geht",
        text: "Wie steht der Monat im Vergleich zum Vormonat? Wo landest du, wenn es so weitergeht? Und wohin geht das Geld eigentlich? Monatskasse zeigt es dir – zum Antippen und Darüberfahren.",
        checks: [
          "Der Monat Tag für Tag neben dem Vormonat, mit Prognose bis zum Monatsende",
          "Der Verlauf über drei, sechs oder zwölf Monate, aufgeteilt in Fixkosten und Alltag",
          "Nach Kategorie, Zahlart oder Händler – jede mit eigener Seite und allen Buchungen dahinter",
          "Einen Monat antippen, und alles darunter zeigt genau ihn – bis zu den Wochentagen",
        ],
        alt: "Analyse: 1.921,55 € im Oktober, 14 Prozent weniger als im September am selben Tag, voraussichtlich 3.029 € und damit 471 € unter Budget. Darunter der Verlauf mit 2.904 € im Schnitt und fünf von fünf Monaten im Budget.",
      },
      {
        kicker: "Buchungen & Fixkosten",
        title: "Alles an seinem Platz",
        text: "Jede Ausgabe nach Tagen sortiert, mit Kategorie und Zahlart – und über die Suche schnell wiedergefunden. Miete, Versicherung und Abos legst du einmal an, Monatskasse bucht sie pünktlich von selbst.",
        checks: [
          "Täglich, wöchentlich, monatlich oder jährlich",
          "Im Tagesschnitt über den Monat verteilt, statt dich am Monatsersten zu erschrecken",
          "Erinnerung einen Tag vor großen Fixkosten",
          "Auch in fremder Währung – jede Buchung mit dem Kurs ihres Tages",
        ],
        alt: "Buchungen nach Tagen: Wocheneinkauf 87,40 €, Bäckerei 6,80 €, Tanken 78,40 €, Mittagessen 12,90 €.",
      },
    ],
  },
  devices: {
    title: "Dein Stand, wo du ihn brauchst",
    intro: "Auf Home- und Sperrbildschirm, auf dem iPhone und auf dem iPad – immer mit denselben Zahlen.",
    widgets: {
      kicker: "Widgets",
      title: "Ein Blick, ohne die App zu öffnen",
      text: "Widgets in drei Größen und auf dem Sperrbildschirm zeigen, ob dein Budget bis Monatsende reicht, was pro Tag bleibt und was ansteht. Beträge siehst du nur, wenn du sie einschaltest.",
      alt: "Mittleres Widget: 55 % des Budgets genutzt, darunter „Reicht bis Monatsende“. Rechts, was ansteht: Warmmiete und Strom am 1. November, eine Zahlung zu prüfen und noch 24 Tage im Monat.",
    },
    ipad: {
      kicker: "iPhone und iPad",
      title: "Überall derselbe Stand",
      text: "Deine Einträge gleichen sich über deine iCloud automatisch ab. Auf dem iPad und dem aufgeklappten iPhone Duo in zwei Spalten, mit viel Platz.",
      alt: "Monatskasse auf dem iPad in zwei Spalten: links Budget-Ring und Kennzahlen, rechts die Aufteilung nach Kategorien und die letzten Ausgaben.",
    },
  },
  details: {
    title: "Durchdacht bis ins Detail",
    intro: "Kleine Dinge, die im Alltag den Unterschied machen.",
    tiles: [
      {
        title: "Budget als Ring",
        text: "Grün, solange alles im Rahmen ist, orange ab drei Vierteln, rot, wenn es überzogen ist. Für einzelne Monate anpassbar, etwa für den Urlaubsmonat.",
      },
      {
        title: "Erinnert, wenn es zählt",
        text: "Bei 80 und 100 Prozent deines Budgets, einen Tag vor großen Fixkosten und mit einem Rückblick zum Monatsanfang. Mehr nicht.",
      },
      {
        title: "Siri und Kurzbefehle",
        text: "„Ausgabe in Monatskasse erfassen“ – oder frag nach deinem Monatsstand.",
      },
      {
        title: "Deine Kategorien",
        text: "Eigene Kategorien mit Emoji und Farbe, dazu deine Zahlarten – vom Girokonto bis zum Bargeld.",
      },
      {
        title: "Export und Sicherung",
        text: "Als Tabelle für Numbers oder Excel oder als vollständige Sicherung aller Buchungen, Kategorien, Zahlarten, Fixkosten und Budgets.",
      },
      {
        title: "Dunkelmodus und große Schrift",
        text: "Monatskasse richtet sich nach deinen Einstellungen und bleibt auch mit großer Schrift gut lesbar.",
      },
    ],
  },
  privacy: {
    title: "Deine Finanzen gehen nur dich etwas an",
    intro: "Monatskasse braucht kein Konto, betreibt keinen eigenen Server und zeigt keine Werbung. Deine Einträge liegen auf deinem Gerät und in deiner privaten iCloud.",
    tiles: [
      {
        title: "Kein Konto",
        text: "Keine Registrierung und keine Bankzugangsdaten. Monatskasse verbindet sich mit keiner Bank und bewegt kein Geld.",
      },
      {
        title: "Deine iCloud",
        text: "Der Abgleich läuft über deine private iCloud. Wir als Entwickler haben darauf keinen Zugriff.",
      },
      {
        title: "Kein Tracking",
        text: "Keine Werbung, keine Analysewerkzeuge und keine Software von Drittanbietern, die Daten über dich sammelt.",
      },
      {
        title: "Mit Face ID gesperrt",
        text: "Auf Wunsch fragt Monatskasse nach Face ID, bevor deine Zahlen zu sehen sind.",
      },
    ],
    link: "Datenschutzerklärung lesen",
  },
  applePay: {
    title: "Apple Pay einrichten",
    intro: "Einmalig, in der Kurzbefehle-App. Die Schritte hängen von der iOS-Version ab – auf dem iPhone zeigt dir Monatskasse unter <em>Verwalten → Apple Pay automatisch erfassen</em> gleich die passenden.",
    versions: ["iOS 27", "iOS 26"],
    osHint: "Welche Version du hast, steht in den Einstellungen unter „Allgemein“ → „Info“.",
    quick: {
      title: "Am schnellsten: den fertigen Kurzbefehl laden",
      text: "Öffne den Link auf dem iPhone und tippe auf „Kurzbefehl hinzufügen“. Schalte danach im Kurzbefehl „Automation“ ein – geteilte Automationen lässt iOS zuerst ausgeschaltet. Die Schritte 1 bis 6 brauchst du dann nicht.",
      button: "Kurzbefehl laden",
      url: "https://www.icloud.com/shortcuts/eb2a20ba6b2d4d06930c334ea50a6940",
    },
    ios27: [
      {
        title: "Kurzbefehle öffnen",
        text: "Öffne die App „Kurzbefehle“ und tippe in der Mediathek auf „Automation“ – landest du in einer Liste, zuerst oben links auf ‹. Dann unten auf ＋.",
        warn: null,
        mock: "<b>Mediathek</b> <div class=\"mk-row\">Alle Kurzbefehle<span class=\"chev\">›</span></div> <div class=\"mk-row\">Galerie<span class=\"chev\">›</span></div> <div class=\"mk-row hint\">Automation<span class=\"chev\">›</span></div> <span class=\"mk-circle hint\">＋</span>",
        cards: false,
      },
      {
        title: "Selbst zusammenstellen",
        text: "Oben bietet die App an, den Kurzbefehl zu beschreiben. Tippe stattdessen oben rechts auf „Bearbeiten“.",
        warn: null,
        mock: "<div class=\"mk-bar\"><span class=\"mk-circle\">‹</span><b>Neuer Kurzbefehl</b><span class=\"mk-pill hint\">Bearbeiten</span></div> <div class=\"mk-search mk-faded\">Kurzbefehl beschreiben</div>",
        cards: false,
      },
      {
        title: "Auslöser „Wallet“",
        text: "Tippe unten ins Suchfeld und dann auf „Automation“. Gib „Wallet“ ein und wähle „Wallet – Wenn ich eine Wallet-Karte verwende“.",
        warn: "Ohne „Automation“ findet die Suche nur Aktionen, nicht den Auslöser – dann läuft die Automation bei einer Zahlung nie.",
        mock: "<div class=\"mk-search\"><span class=\"mk-token hint\">Automation</span>Wallet</div> <div class=\"mk-row hint\"><span><b>Wallet</b><small>„Wenn ich eine Wallet-Karte verwende“</small></span></div>",
        cards: false,
      },
      {
        title: "Aktion einfügen",
        text: "Oben steht jetzt „Wenn Jede Karte angetippt wird“ – so lassen, „Automation“ bleibt an. Gib unten im Suchfeld „Ausgabe erfassen“ ein und tippe auf die Aktion von Monatskasse.",
        warn: null,
        mock: "<div class=\"mk-trigger\">Wenn <span class=\"mk-any\">Jede Karte</span> angetippt wird</div> <div class=\"mk-row\">Automation<span class=\"mk-switch\"></span></div> <div class=\"mk-search\">Ausgabe erfassen</div> <div class=\"mk-row hint\"><picture class=\"mk-app\"><source srcset=\"/bilder/icon-dunkel.png\" media=\"(prefers-color-scheme: dark)\"><img src=\"/bilder/icon.png\" width=\"22\" height=\"22\" alt=\"\"></picture>Ausgabe erfassen</div>",
        cards: false,
      },
      {
        title: "Felder verbinden",
        text: "Tippe in der Aktion auf das blasse „Betrag“, über der Tastatur auf „Variable auswählen“ und dann auf „Transaktion“. Tippe das blaue „Transaktion“ an und wähle „Betrag“. Genauso verbindest du „Händler“ mit Transaktion › „Händler“ und „Karte“ mit Transaktion › „Karte“.",
        warn: null,
        mock: "<div class=\"mk-sentence\"><picture class=\"mk-app\"><source srcset=\"/bilder/icon-dunkel.png\" media=\"(prefers-color-scheme: dark)\"><img src=\"/bilder/icon.png\" width=\"22\" height=\"22\" alt=\"\"></picture> Ausgabe über <span class=\"mk-var\">Betrag</span> bei <span class=\"mk-var\">Händler</span> mit <span class=\"mk-var\">Karte</span> erfassen</div> <div class=\"mk-map\"><b>Betrag</b><small>Transaktion ›</small><span class=\"mk-var\">Betrag</span></div> <div class=\"mk-map\"><b>Händler</b><small>Transaktion ›</small><span class=\"mk-var\">Händler</span></div> <div class=\"mk-map\"><b>Karte</b><small>Transaktion ›</small><span class=\"mk-var\">Karte</span></div>",
        cards: false,
      },
      {
        title: "Fertig",
        text: "Tippe oben links auf ‹ – gespeichert wird von selbst. Unter „Automation“ steht jetzt „Wenn ich eine Wallet- oder Zahlungskarte an ein Lesegerät halte“. Bezahlst du das nächste Mal mit dem iPhone, erscheint die Zahlung in Monatskasse unter „Zu prüfen“.",
        warn: "Nicht mit ▶ ausprobieren: Ohne echte Zahlung gibt es keinen Betrag, und die Aktion meldet einen Fehler. Zum Ausprobieren gibt es in Monatskasse unter <em>Verwalten → Apple Pay automatisch erfassen</em> die Testbuchung.",
        mock: "<b>Automation</b> <div class=\"mk-row\"><span><b>Wenn ich eine Wallet- oder Zahlungskarte an ein Lesegerät halte</b><small>Ausgabe erfassen</small></span><span class=\"mk-switch\"></span></div>",
        cards: false,
      },
      {
        title: "Karten zuordnen",
        text: "Jede Karte, mit der du bezahlt hast, erscheint in Monatskasse unter „Deine Karten“. Wähle einmal die Zahlart – danach bucht die App jede Zahlung mit dieser Karte richtig.",
        warn: null,
        mock: "<div class=\"mk-row\">Visa Debit<span class=\"end\">Girokonto</span></div> <div class=\"mk-row\">Revolut<span class=\"end\" style=\"color: #f59e0b\">Zuordnen</span></div>",
        cards: true,
      },
    ],
    ios26: [
      {
        title: "Kurzbefehle öffnen",
        text: "Öffne die App „Kurzbefehle“ und tippe unten auf „Automation“. Dann auf „Neue Automation“ – hast du schon Automationen, oben rechts auf ＋.",
        warn: null,
        mock: "<b>Automation</b> <span class=\"mk-btn hint\">Neue Automation</span> <div class=\"mk-tabs\"><span>Mediathek</span><span class=\"on hint\">Automation</span><span>Galerie</span></div>",
        cards: false,
      },
      {
        title: "„Wallet“ wählen",
        text: "Tippe unten ins Suchfeld, gib „Wallet“ ein und wähle den Eintrag „Wallet“.",
        warn: null,
        mock: "<b>Persönliche Automation</b> <div class=\"mk-row hint\"><span><b>Wallet</b><small>„Wenn ich eine Wallet-Karte verwende“</small></span></div> <div class=\"mk-search\">Wallet</div>",
        cards: false,
      },
      {
        title: "Karten und Ausführung",
        text: "Wähle alle Karten aus, mit denen du bezahlst. Stelle „Sofort ausführen“ ein und lass „Bei Ausführung benachrichtigen“ aus. Tippe dann oben rechts auf „Weiter“.",
        warn: null,
        mock: "<b>Wenn ich Folgendes auswähle</b> <div class=\"mk-row\">Visa Debit<span class=\"end\">✓</span></div> <div class=\"mk-row\">Mastercard<span class=\"end\">✓</span></div> <div class=\"mk-row hint\">Sofort ausführen<span class=\"end\">✓</span></div>",
        cards: false,
      },
      {
        title: "Neuen Kurzbefehl erstellen",
        text: "Tippe unter „Los gehts“ auf „Neuen Kurzbefehl erstellen“.",
        warn: "Nicht weiter unten auf „Monatskasse“ oder „Neue Ausgabe“ tippen: Dann legt iOS die Automation ohne verbundene Felder an, und sie kann den Betrag nicht übernehmen.",
        mock: "<b>Los gehts</b> <div class=\"mk-tiles\"><div class=\"mk-tile hint\">Neuen Kurzbefehl erstellen</div></div> <div class=\"mk-row no\"><picture class=\"mk-app\"><source srcset=\"/bilder/icon-dunkel.png\" media=\"(prefers-color-scheme: dark)\"><img src=\"/bilder/icon.png\" width=\"22\" height=\"22\" alt=\"\"></picture><span>Monatskasse<small>Neue Ausgabe, Monatsstand</small></span></div>",
        cards: false,
      },
      {
        title: "Aktion einfügen",
        text: "Tippe unten auf „Aktionen suchen“, gib „Ausgabe erfassen“ ein und tippe auf die Aktion von Monatskasse.",
        warn: null,
        mock: "<div class=\"mk-search\">Ausgabe erfassen</div> <div class=\"mk-row hint\"><picture class=\"mk-app\"><source srcset=\"/bilder/icon-dunkel.png\" media=\"(prefers-color-scheme: dark)\"><img src=\"/bilder/icon.png\" width=\"22\" height=\"22\" alt=\"\"></picture>Ausgabe erfassen</div>",
        cards: false,
      },
      {
        title: "Felder verbinden",
        text: "Tippe in der Aktion auf das blaue „Betrag“ und dann auf „Kurzbefehleingabe“. Tippe das blaue „Kurzbefehleingabe“ noch einmal an und wähle „Betrag“. Genauso verbindest du „Händler“ mit „Händlername“ und „Karte“ mit „Karte“.",
        warn: null,
        mock: "<div class=\"mk-sentence\"><picture class=\"mk-app\"><source srcset=\"/bilder/icon-dunkel.png\" media=\"(prefers-color-scheme: dark)\"><img src=\"/bilder/icon.png\" width=\"22\" height=\"22\" alt=\"\"></picture> Ausgabe über <span class=\"mk-var\">Betrag</span> bei <span class=\"mk-var\">Händlername</span> mit <span class=\"mk-var\">Karte</span> erfassen</div>",
        cards: false,
      },
      {
        title: "Fertig",
        text: "Tippe oben rechts auf ✓. Bezahlst du das nächste Mal mit dem iPhone an der Kasse, erscheint die Zahlung in Monatskasse unter „Zu prüfen“.",
        warn: "Nicht mit ▶ ausprobieren: Ohne echte Zahlung gibt es keinen Betrag, und die Aktion meldet einen Fehler. Zum Ausprobieren gibt es in Monatskasse unter <em>Verwalten → Apple Pay automatisch erfassen</em> die Testbuchung.",
        mock: "<div class=\"mk-row\"><span><b>1 Zahlung zu prüfen</b><small>Supermarkt · 23,40 €</small></span></div>",
        cards: false,
      },
      {
        title: "Karten zuordnen",
        text: "Jede Karte, mit der du bezahlt hast, erscheint in Monatskasse unter „Deine Karten“. Wähle einmal die Zahlart – danach bucht die App jede Zahlung mit dieser Karte richtig.",
        warn: null,
        mock: "<div class=\"mk-row\">Visa Debit<span class=\"end\">Girokonto</span></div> <div class=\"mk-row\">Revolut<span class=\"end\" style=\"color: #f59e0b\">Zuordnen</span></div>",
        cards: true,
      },
    ],
  },
  help: {
    title: "Hilfe",
    intro: "Antworten auf häufige Fragen. Und wenn etwas nicht klappt, schreib uns einfach.",
    faq: [
      {
        q: "Wie kommen meine Einträge auf mein iPad?",
        a: "<p>Monatskasse gleicht deine Daten über deine iCloud ab. Dafür musst du auf beiden Geräten mit demselben Apple Account angemeldet sein, und iCloud darf für Monatskasse nicht ausgeschaltet sein (iOS-Einstellungen → dein Name → iCloud → Apps, die iCloud verwenden).</p> <p>Der erste Abgleich kann ein paar Minuten dauern. Den aktuellen Stand siehst du in der App unter <em>Verwalten → iCloud-Sync</em>.</p>",
      },
      {
        q: "Wie werden Zahlungen mit Apple Pay automatisch erfasst?",
        a: "<p>Mit einer Automation, die du einmal in der Kurzbefehle-App anlegst. Die Schritte stehen oben unter <a href=\"#apple-pay\">Apple Pay einrichten</a>; in der App führt dich <em>Verwalten → Apple Pay automatisch erfassen</em> durch dieselben Schritte.</p> <p>Unter iOS 27 kommt es auf Schritt 3 an: erst den Filter „Automation“ antippen, sonst findet die Suche den Auslöser „Wallet“ nicht. Unter iOS 26 auf Schritt 4: „Neuen Kurzbefehl erstellen“ wählen und nicht weiter unten „Monatskasse“ – sonst fehlen die verbundenen Felder.</p>",
      },
      {
        q: "Ich habe mehrere Karten – wie ordne ich sie zu?",
        a: "<p>Eine Automation reicht für alle Karten. Verbinde in der Aktion auch das Feld „Karte“. Jede Karte, mit der du bezahlst, erscheint danach unter <em>Verwalten → Apple Pay automatisch erfassen → Deine Karten</em>. Dort wählst du einmal die Zahlart, und Monatskasse bucht jede Zahlung mit dieser Karte richtig – auch die, die noch unter „Zu prüfen“ warten.</p> <p>Eine neue Karte kannst du auch direkt unter „Zu prüfen“ zuordnen.</p>",
      },
      {
        q: "Die Automation löst nicht aus – was kann ich tun?",
        a: "<ul> <li>Nur das Bezahlen mit dem iPhone an der Kasse löst die Automation aus – nicht die Apple Watch und keine Online-Käufe.</li> <li>Unter iOS 27 muss im Auslöser „Automation“ eingeschaltet sein, unter iOS 26 muss in der Automation „Sofort ausführen“ gewählt sein.</li> <li>Wallet braucht mobile Daten: iOS-Einstellungen → „Mobilfunk“ → „Wallet“ einschalten.</li> <li>In Monatskasse zeigt <em>Verwalten → Apple Pay automatisch erfassen</em> oben, wann zuletzt eine Zahlung ankam und ob Händler und Karte dabei waren.</li> </ul>",
      },
      {
        q: "Beim Ausprobieren mit ▶ kommt ein Fehler – ist etwas falsch?",
        a: "<p>Nein. Mit ▶ läuft die Automation ohne echte Zahlung, deshalb liefert Wallet keinen Betrag, und Monatskasse meldet einen Fehler. Bei einer echten Zahlung mit dem iPhone kommen Betrag, Händler und Karte mit.</p> <p>Zum Ausprobieren erzeugt <em>Verwalten → Apple Pay automatisch erfassen → Testbuchung erzeugen</em> eine Zahlung, die genauso unter „Zu prüfen“ ankommt wie eine echte.</p>",
      },
      {
        q: "Warum steht eine Zahlung unter „Zu prüfen“?",
        a: "<p>Die Automation von iOS meldet auch Zahlungen, die abgelehnt wurden. Automatisch erfasste Zahlungen landen deshalb zuerst unter „Zu prüfen“ und zählen erst nach deiner Bestätigung zur Monatssumme.</p> <p>Korrigierst du dabei Kategorie oder Zahlart, merkt sich Monatskasse den Händler und ordnet ihn beim nächsten Einkauf selbst richtig zu. Löst die Automation zweimal aus, wird derselbe Betrag beim selben Händler innerhalb von fünf Minuten nur einmal erfasst.</p>",
      },
      {
        q: "Ich habe für mehrere bezahlt – zählt nur mein Anteil?",
        a: "<p>Ja, wenn du die Buchung aufteilst: beim Erfassen über „Mit anderen geteilt“, bei Apple-Pay-Zahlungen unter „Zu prüfen“ über „Teilen“ und nachträglich bei jeder Buchung in der Detailansicht über „Aufteilen“.</p> <p>Du teilst gleichmäßig durch die Anzahl Personen oder trägst deinen Anteil ein. Fürs Budget zählt dann nur dein Anteil; was du insgesamt bezahlt hast, bleibt vermerkt, und die Aufteilung lässt sich jederzeit zurücknehmen.</p>",
      },
      {
        q: "Kann ich im Ausland in fremder Währung erfassen?",
        a: "<p>Ja. Tippe beim Erfassen unter dem Betrag auf die Währung und wähle zum Beispiel Euro, Pfund oder Dollar. Monatskasse rechnet mit dem Referenzkurs der Europäischen Zentralbank vom Tag der Ausgabe in deine Heimwährung um; was du bezahlt hast, bleibt an der Buchung stehen. Meldet die Apple-Pay-Automation eine Zahlung in fremder Währung, übernimmt Monatskasse sie ebenso.</p> <p>Am genauesten ist der Betrag auf deiner Kartenabrechnung, denn er enthält die Gebühr der Bank. Tippe auf die umgerechnete Zeile und trag ihn ein. Für Währungen, die die EZB nicht führt, trägst du den Kurs selbst ein.</p>",
      },
      {
        q: "Ich bin umgezogen – kann ich die Währung wechseln?",
        a: "<p>Ja, unter <em>Verwalten → Währung</em>. Monatskasse rechnet dabei jede Buchung zum Kurs ihres Tages und dein Budget zum heutigen Kurs um. Die bisherigen Beträge bleiben gespeichert – wechselst du zurück, stehen sie genau wieder da. Waren deine Beträge von Anfang an in der neuen Währung gemeint, wählst du „Nur Währung ändern“.</p>",
      },
      {
        q: "Kann ich Spesen für die Buchhaltung abrechnen?",
        a: "<p>Ja. Schalte unter <em>Verwalten → Spesen</em> das Modul ein. Ein eigener Reiter sammelt dann Belege und Buchungen: Beleg fotografieren, ein Foto oder PDF aus „Dateien“ hinzufügen, von Hand erfassen oder eine Apple-Pay-Zahlung unter „Zu prüfen“ als geschäftlich markieren. Ein Tipp macht daraus die Abrechnung: ein PDF mit Deckblatt, Tabelle und allen Belegen, dazu die Tabelle als CSV und die Originaldateien als ZIP – zum Teilen per Mail oder in „Dateien“.</p> <p>Spesen werden erstattet und zählen deshalb nicht zu deinem Budget; wenn du willst, doch. Was eingereicht und erstattet wurde, bleibt vermerkt, und für die nächste Reise beginnt eine neue Abrechnung.</p>",
      },
      {
        q: "Wie genau werden Kassenbelege erkannt?",
        a: "<p>Monatskasse liest den Beleg direkt auf deinem iPhone und macht eine Rechenprobe: Nur wenn die Positionen genau die Summe ergeben, bietet die App sie zum Abwählen an. So wird weder ein Steuerbetrag noch „Bar 20,00“ versehentlich zur Summe.</p> <p>Das klappt auf jedem iPhone, auf dem Monatskasse läuft. Ab iPhone 15 Pro mit eingeschalteter Apple Intelligence schlägt zusätzlich das Sprachmodell von Apple die Kategorie vor und hilft bei unübersichtlichen Belegen; auf iPhone Air, 17 Pro und 17 Pro Max mit iOS 27 sieht es auch das Foto. Nichts davon verlässt dein Gerät.</p>",
      },
      {
        q: "Wie lege ich Fixkosten wie Miete oder Abos an?",
        a: "<p>Beim Erfassen einer Ausgabe den Schalter „Als Fixkosten anlegen“ einschalten, oder unter <em>Verwalten → Fixkosten</em> auf das Plus tippen. Du wählst, ob sie täglich, wöchentlich, monatlich oder jährlich anfallen. Monatskasse bucht sie dann pünktlich von selbst.</p>",
      },
      {
        q: "Kann ich das Budget für einen einzelnen Monat ändern?",
        a: "<p>Ja. Tippe in der Übersicht auf das Regler-Symbol im Budget-Ring. Das Standardbudget für alle Monate stellst du unter <em>Verwalten → Monatsbudget</em> ein.</p>",
      },
      {
        q: "Wie sichere oder exportiere ich meine Daten?",
        a: "<p>Unter <em>Verwalten → Exportieren &amp; sichern</em>: als Tabelle für Numbers oder Excel, oder als vollständige Sicherung aller Buchungen, Kategorien, Zahlarten, Fixkosten und Budgets.</p>",
      },
      {
        q: "Wie schütze ich die App mit Face ID?",
        a: "<p>Unter <em>Verwalten → App sperren</em>. Die App verlangt dann eine Bestätigung, wenn du sie nach mehr als einer Minute im Hintergrund wieder öffnest.</p>",
      },
      {
        q: "Wie lösche ich alle meine Daten?",
        a: "<p>Löschst du die App, werden die Daten auf diesem Gerät entfernt. Die Daten in iCloud löschst du in den iOS-Einstellungen unter deinem Namen → „iCloud“ → „Speicher verwalten“ → „Monatskasse“.</p>",
      },
      {
        q: "Verbindet sich Monatskasse mit meiner Bank?",
        a: "<p>Nein. Monatskasse ist ein persönliches Haushaltsbuch. Die App braucht keine Bankzugangsdaten, verbindet sich mit keiner Bank und bewegt kein Geld.</p>",
      },
      {
        q: "Welche Geräte werden unterstützt?",
        a: "<p>iPhone und iPad ab iOS bzw. iPadOS 18.5. Auf dem iPad und dem aufgeklappten iPhone Duo zeigt Monatskasse zwei Spalten.</p>",
      },
    ],
  },
  contact: {
    title: "Fragen, Ideen oder ein Fehler?",
    text: "Schreib einfach eine E-Mail an <a href=\"mailto:maxi.ruhl@hotmail.de\">maxi.ruhl@hotmail.de</a>.",
    button: "E-Mail schreiben",
    small: "Wenn etwas nicht wie erwartet funktioniert, hilft ein Diagnosebericht: in der App unter <em>Verwalten → iCloud-Sync → Diagnose teilen</em>. Er enthält keine Inhalte deiner Buchungen.",
  },
  footer: {
    privacy: "Datenschutzerklärung",
    help: "Hilfe",
    contact: "Kontakt",
    copyright: "© 2026 Maximilian Ruhl",
    fine: "Alle Beträge in den Abbildungen sind Beispieldaten. Apple, Apple Pay, Face ID, iCloud, iPad, iPadOS, iPhone und Siri sind Marken der Apple Inc., die in den USA und weiteren Ländern eingetragen sind.",
  },
  privacyPage: {
    title: "Datenschutzerklärung – Monatskasse",
    description: "Wie Monatskasse mit deinen Daten umgeht: kein Konto, kein eigener Server, keine Werbung und kein Tracking. Deine Einträge bleiben auf deinem Gerät und in deiner privaten iCloud.",
    home: "Startseite",
  },
  notFound: {
    title: "Seite nicht gefunden",
    text: "Diese Seite gibt es nicht oder nicht mehr.",
    back: "Zur Startseite",
  },
  facts: {
    title: "Auf einen Blick",
    languages: "Sprachen",
    items: [
      "Haushaltsbuch-App für iPhone und iPad, ab iOS bzw. iPadOS 18.5",
      "Kostenlos, ohne Werbung und ohne In-App-Käufe",
      "Kein Konto und keine Verbindung zur Bank – die Einträge liegen auf dem Gerät und in der privaten iCloud",
      "Keine Analyse-, Tracking- oder Werbewerkzeuge",
      "Entwickelt von Maximilian Ruhl",
    ],
  },
};

export default de;
