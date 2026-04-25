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
  /** @deprecated use trustItems */
  trust?: string;
  /** Short trust bullets shown under CTAs (e.g. Delaware LLC, Stripe, response time). */
  trustItems?: string[];
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
  trustItems,
  align = "left",
}: Props) {
  const alignClass = align === "center" ? "text-center mx-auto items-center" : "text-left items-start";
  const items = trustItems?.length ? trustItems : trust ? [trust] : [];

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-24 h-[420px] bg-gradient-to-b from-amber/25 via-cream to-cream"
      />
      <div className="container-page relative pt-14 pb-10 md:pt-24 md:pb-16">
        <div className={`flex flex-col gap-6 ${alignClass}`}>
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1 className={`max-w-4xl text-balance ${align === "center" ? "mx-auto" : ""}`}>{title}</h1>
          {subtitle && (
            <p
              className={`max-w-2xl text-lg md:text-xl text-muted text-pretty ${align === "center" ? "mx-auto" : ""}`}
            >
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
          {items.length > 0 && (
            <ul
              className={`mt-1 flex max-w-3xl flex-wrap gap-x-6 gap-y-2 text-sm text-muted ${align === "center" ? "mx-auto justify-center" : ""}`}
            >
              {items.map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
