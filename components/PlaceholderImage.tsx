type Props = {
  label?: string;
  caption?: string;
  aspect?: string;
  tone?: "warm" | "teal" | "amber" | "sage";
  className?: string;
  /** When true, shows a small badge so placeholders are not mistaken for live screenshots. */
  sample?: boolean;
};

const toneMap: Record<NonNullable<Props["tone"]>, string> = {
  warm: "from-[#F4D47C]/60 to-[#E07856]/45",
  teal: "from-[#2D5F5D]/25 to-[#2D5F5D]/55",
  amber: "from-[#F4D47C]/80 to-[#E07856]/30",
  sage: "from-[#5A8A5B]/30 to-[#2D5F5D]/45",
};

export default function PlaceholderImage({
  label,
  caption,
  aspect = "4 / 3",
  tone = "warm",
  className = "",
  sample = false,
}: Props) {
  return (
    <div
      role="img"
      aria-label={label || caption || "Project preview"}
      className={`relative overflow-hidden rounded-lg border border-border bg-cream-card ${className}`}
      style={{ aspectRatio: aspect }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${toneMap[tone]}`} />
      <div className="absolute inset-0 opacity-40 mix-blend-soft-light"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, #fff 0, transparent 45%), radial-gradient(circle at 80% 70%, #2A2520 0, transparent 55%)",
        }}
      />
      <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2">
        {label && (
          <div className="rounded bg-cream-card/90 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-ink">
            {label}
          </div>
        )}
        {sample && (
          <div className="rounded bg-ink/80 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-cream">
            Layout sample
          </div>
        )}
      </div>
      {caption && (
        <div className="absolute bottom-4 left-4 right-4 rounded-md bg-ink/75 px-3 py-2 text-sm text-cream">
          {caption}
        </div>
      )}
    </div>
  );
}
