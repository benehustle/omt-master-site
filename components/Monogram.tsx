type Props = { size?: number; className?: string };

export default function Monogram({ size = 36, className = "" }: Props) {
  return (
    <span
      aria-hidden
      className={`inline-flex items-center justify-center rounded-lg bg-clay text-white font-serif font-semibold ${className}`}
      style={{ width: size, height: size, fontSize: size * 0.36, letterSpacing: "0.02em" }}
    >
      OMT
    </span>
  );
}
