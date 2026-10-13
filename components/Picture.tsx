import type { ImgHTMLAttributes } from "react";
import { responsive, type Language } from "@/i18n/config";

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "srcSet" | "sizes"> & {
  language: Language;
  /** Datei in public/bilder/<sprache>/, etwa „overview.jpg“. */
  file: string;
  /** Breiten der AVIF-Fassungen, etwa [330, 660]. */
  widths: number[];
  /** Wie breit das Bild auf der Seite steht – damit wählt der Browser die passende Fassung. */
  sizes: string;
};

/**
 * Ein Bild der Seite: AVIF in passender Grösse, wo der Browser es kann, sonst das Original.
 * <picture> erzeugt keine eigene Box (display: contents), das Layout bleibt wie beim <img>.
 */
export default function Picture({ language, file, widths, sizes, alt, ...img }: Props) {
  const { src, avif } = responsive(language, file, widths);
  const element = <img src={src} alt={alt} {...img} />;
  if (!avif) return element;
  return (
    <picture>
      <source type="image/avif" srcSet={avif} sizes={sizes} />
      {element}
    </picture>
  );
}
