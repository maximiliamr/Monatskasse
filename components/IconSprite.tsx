// Die Symbole der Seite als SVG-Sprite; eingebunden mit <Icon name="check" /> o. Ä.
const symbols = [
  '<symbol id="i-check" viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></symbol>',
  '<symbol id="i-plus" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><path d="M12 8.5v7M8.5 12h7"/></symbol>',
  '<symbol id="i-bolt" viewBox="0 0 24 24"><path d="M13 3L5.5 13.5H12L11 21l7.5-10.5H12z"/></symbol>',
  '<symbol id="i-chart" viewBox="0 0 24 24"><path d="M4 20h16"/><path d="M7 16.5V11M12 16.5V6.5M17 16.5v-4"/></symbol>',
  '<symbol id="i-list" viewBox="0 0 24 24"><path d="M9 7h11M9 12h11M9 17h11"/><circle cx="4.8" cy="7" r=".9"/><circle cx="4.8" cy="12" r=".9"/><circle cx="4.8" cy="17" r=".9"/></symbol>',
  '<symbol id="i-widget" viewBox="0 0 24 24"><rect x="3.5" y="3.5" width="7.5" height="7.5" rx="2"/><rect x="13" y="3.5" width="7.5" height="7.5" rx="2"/><rect x="3.5" y="13" width="17" height="7.5" rx="2"/></symbol>',
  '<symbol id="i-devices" viewBox="0 0 24 24"><rect x="3" y="4" width="13" height="16" rx="2"/><rect x="14" y="9" width="7" height="12" rx="1.6"/></symbol>',
  '<symbol id="i-ring" viewBox="0 0 24 24"><path d="M12 4a8 8 0 1 1-8 8"/></symbol>',
  '<symbol id="i-bell" viewBox="0 0 24 24"><path d="M6 16.5V11a6 6 0 1 1 12 0v5.5l1.5 1.5h-15z"/><path d="M10 20.5a2.2 2.2 0 0 0 4 0"/></symbol>',
  '<symbol id="i-mic" viewBox="0 0 24 24"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21"/></symbol>',
  '<symbol id="i-tag" viewBox="0 0 24 24"><path d="M3.5 12.3V5A1.5 1.5 0 0 1 5 3.5h7.3a1.5 1.5 0 0 1 1 .4l7.3 7.3a1.5 1.5 0 0 1 0 2.1l-7.3 7.3a1.5 1.5 0 0 1-2.1 0l-7.3-7.3a1.5 1.5 0 0 1-.4-1z"/><circle cx="8.3" cy="8.3" r="1.4"/></symbol>',
  '<symbol id="i-share" viewBox="0 0 24 24"><path d="M12 14.5V3.5M8 7.5l4-4 4 4"/><path d="M7.5 10.5H6A1.5 1.5 0 0 0 4.5 12v7A1.5 1.5 0 0 0 6 20.5h12a1.5 1.5 0 0 0 1.5-1.5v-7a1.5 1.5 0 0 0-1.5-1.5h-1.5"/></symbol>',
  '<symbol id="i-moon" viewBox="0 0 24 24"><path d="M20 14.8A8.3 8.3 0 1 1 9.2 4a6.6 6.6 0 0 0 10.8 10.8z"/></symbol>',
  '<symbol id="i-person" viewBox="0 0 24 24"><circle cx="12" cy="8" r="3.6"/><path d="M5 20c.8-3.6 3.6-5.6 7-5.6s6.2 2 7 5.6"/></symbol>',
  '<symbol id="i-cloud" viewBox="0 0 24 24"><path d="M7.5 18.5h9.8a4.2 4.2 0 0 0 .5-8.37A6 6 0 0 0 6.2 9.4a4.6 4.6 0 0 0 1.3 9.1z"/></symbol>',
  '<symbol id="i-eyeoff" viewBox="0 0 24 24"><path d="M3.5 3.5l17 17"/><path d="M10.4 5.2c.5-.1 1-.2 1.6-.2 5 0 8.6 4.4 9.5 7-.3.9-1 2.1-2 3.3M6.7 6.8C4.7 8.1 3.1 10.2 2.5 12c.9 2.6 4.5 7 9.5 7 1.6 0 3-.4 4.3-1.1"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/></symbol>',
  '<symbol id="i-faceid" viewBox="0 0 24 24"><path d="M4 8.5v-2A2.5 2.5 0 0 1 6.5 4h2M15.5 4h2A2.5 2.5 0 0 1 20 6.5v2M20 15.5v2a2.5 2.5 0 0 1-2.5 2.5h-2M8.5 20h-2A2.5 2.5 0 0 1 4 17.5v-2"/><path d="M9 9v1.5M15 9v1.5M12 9v4h-1M9 15.5c1.7 1.4 4.3 1.4 6 0"/></symbol>',
  '<symbol id="i-mail" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M3.5 7l8.5 6 8.5-6"/></symbol>',
  '<symbol id="i-arrow" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></symbol>',
  '<symbol id="i-globe" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.3 2.4 3.4 5.2 3.4 8.5s-1.1 6.1-3.4 8.5c-2.3-2.4-3.4-5.2-3.4-8.5s1.1-6.1 3.4-8.5z"/></symbol>',
  '<symbol id="i-chevron" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5"/></symbol>',
].join("");

export default function IconSprite() {
  return (
    <svg className="sprite" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" dangerouslySetInnerHTML={{ __html: symbols }} />
  );
}

export type IconName =
  | "check" | "plus" | "bolt" | "chart" | "list" | "widget" | "devices" | "ring" | "bell" | "mic"
  | "tag" | "share" | "moon" | "person" | "cloud" | "eyeoff" | "faceid" | "mail" | "arrow" | "globe" | "chevron";

export function Icon({ name, className = "i" }: { name: IconName; className?: string }) {
  return (
    <svg className={className} aria-hidden="true">
      <use href={`#i-${name}`} />
    </svg>
  );
}
