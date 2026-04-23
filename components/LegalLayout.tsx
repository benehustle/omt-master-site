import { ReactNode } from "react";

export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-24 h-[320px] bg-gradient-to-b from-amber/20 via-cream to-cream"
        />
        <div className="container-narrow relative pt-14 pb-6 md:pt-20">
          <span className="eyebrow">Legal</span>
          <h1 className="mt-3">{title}</h1>
          <p className="mt-4 text-sm text-muted">Last updated: {updated}</p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-narrow">
          <article className="prose-legal space-y-6 text-muted leading-relaxed">
            {children}
          </article>
          <div className="mt-16 border-t border-border pt-6 text-xs text-muted">
            <p>
              OutMarketThem LLC  -  Delaware, USA &nbsp;|&nbsp; EHUSTLE PTY LTD  -  Queensland, Australia, ABN 21 679 259 440
            </p>
            <p className="mt-2">
              Questions about this policy? Email{" "}
              <a href="mailto:ben@outmarketthem.com" className="link-underline">
                ben@outmarketthem.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
