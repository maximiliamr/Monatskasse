/**
 * Ein Screenshot im iPhone-Rahmen (nachgebaut nach dem iPhone 17 Pro, reines CSS –
 * siehe „iPhone-Rahmen“ in styles/site.css). Die Breite bestimmt der Ort, an dem das
 * Telefon steht; alle Masse des Rahmens hängen daran.
 */
export default function Phone({
  src,
  alt,
  className,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={className ? `phone ${className}` : "phone"}>
      <div className="phone__screen">
        {priority ? (
          <img src={src} width="660" height="1434" fetchPriority="high" alt={alt} />
        ) : (
          <img src={src} width="660" height="1434" loading="lazy" decoding="async" alt={alt} />
        )}
      </div>
    </div>
  );
}
