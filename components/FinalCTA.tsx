import Link from "next/link";

type Props = {
  heading?: string;
  subhead?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export default function FinalCTA({
  heading = "Ready to get a website that actually works?",
  subhead = "14 days from deposit to live site. $100 refundable. No contracts.",
  primaryHref = "/contact#start",
  primaryLabel = "Start with $100 Deposit",
  secondaryHref = "/contact",
  secondaryLabel = "Prefer to ask questions first? →",
}: Props) {
  return (
    <section className="section">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-xl border border-border bg-cream-card px-6 py-16 text-center shadow-soft md:py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[80%] -translate-x-1/2 rounded-full bg-amber/35 blur-3xl"
          />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl">{heading}</h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted">{subhead}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4">
              <Link href={primaryHref} className="btn-primary text-base md:text-lg !px-8 !py-4">
                {primaryLabel}
              </Link>
              <Link href={secondaryHref} className="link-underline text-sm">
                {secondaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
