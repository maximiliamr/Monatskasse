import type { Language } from "@/i18n/config";
import Picture from "./Picture";

/**
 * Ein Screenshot im iPad-Rahmen (nachgebaut nach dem iPad Pro 13″, reines CSS – siehe
 * „iPad-Rahmen“ in styles/site.css). Die Breite bestimmt der Ort, an dem es steht.
 */
export default function Tablet({ lang, file, alt, sizes, className }: { lang: Language; file: string; alt: string; sizes: string; className?: string }) {
  return (
    <div className={className ? `tablet ${className}` : "tablet"}>
      <div className="tablet__screen">
        <Picture language={lang} file={file} widths={[516, 1032]} sizes={sizes} width="1032" height="1376" loading="lazy" decoding="async" alt={alt} />
      </div>
    </div>
  );
}
