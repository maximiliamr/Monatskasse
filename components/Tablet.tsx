/**
 * Ein Screenshot im iPad-Rahmen (nachgebaut nach dem iPad Pro 13″, reines CSS – siehe
 * „iPad-Rahmen“ in styles/site.css). Die Breite bestimmt der Ort, an dem es steht.
 */
export default function Tablet({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <div className={className ? `tablet ${className}` : "tablet"}>
      <div className="tablet__screen">
        <img src={src} width="1032" height="1376" loading="lazy" decoding="async" alt={alt} />
      </div>
    </div>
  );
}
