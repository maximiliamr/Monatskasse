import type { Language } from "@/i18n/config";
import Picture from "./Picture";

/**
 * Ein Screenshot im iPhone-Rahmen (nachgebaut nach dem iPhone 17 Pro, reines CSS –
 * siehe „iPhone-Rahmen“ in styles/site.css). Die Breite bestimmt der Ort, an dem das
 * Telefon steht; alle Masse des Rahmens hängen daran.
 */
export default function Phone({
  lang,
  file,
  alt,
  sizes,
  className,
  priority = false,
}: {
  lang: Language;
  file: string;
  alt: string;
  sizes: string;
  className?: string;
  priority?: boolean;
}) {
  const loading = priority ? { fetchPriority: "high" as const } : { loading: "lazy" as const, decoding: "async" as const };
  return (
    <div className={className ? `phone ${className}` : "phone"}>
      <div className="phone__screen">
        <Picture language={lang} file={file} widths={[330, 660]} sizes={sizes} width="660" height="1434" alt={alt} {...loading} />
      </div>
    </div>
  );
}
