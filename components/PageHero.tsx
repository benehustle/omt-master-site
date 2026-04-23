import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  trust?: string;
  align?: "left" | "center";
};

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  trust,
  align = "left",
}: Props) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-24 h-[420px] bg-gradient-to-b from-amber/25 via-cream to-cream"
      />
      <div className="container-page relative pt-14 pb-10 md:pt-24 md:pb-16">
        <div className={`flex flex-col gap-6 ${alignClass}`}>
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1 className={`max-w-4xl ${align === "center" ? "mx-auto" : ""}`}>{title}</h1>
          {subtitle && (
            <p className={`max-w-2xl text-lg md:text-xl text-muted ${align === "center" ? "mx-auto" : ""}`}>
              {subtitle}
            </p>
          )}
          {(primaryHref || secondaryHref) && (
            <div className="flex flex-wrap gap-3">
              {primaryHref && primaryLabel && (
                <Link href={primaryHref} className="btn-primary">
                  {primaryLabel}
                </Link>
              )}
              {secondaryHref && secondaryLabel && (
                <Link href={secondaryHref} className="btn-secondary">
                  {secondaryLabel}
                </Link>
              )}
            </div>
          )}
          {trust && <p className="text-sm text-muted">{trust}</p>}
        </div>
      </div>
    </section>
  );
}
