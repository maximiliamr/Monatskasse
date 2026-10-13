/** Das App-Symbol in der Grösse, in der es steht – der Browser lädt nur so viel wie nötig. */
export default function AppIcon({ size, className }: { size: number; className?: string }) {
  return (
    <img
      className={className}
      src="/bilder/icon.png"
      srcSet="/bilder/icon-64.png 64w, /bilder/icon-128.png 128w, /bilder/icon.png 256w"
      sizes={`${size}px`}
      width={size}
      height={size}
      alt=""
    />
  );
}
