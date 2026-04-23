import Link from "next/link";

export const metadata = {
  title: "Page not found",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-24 h-[420px] bg-gradient-to-b from-amber/25 via-cream to-cream"
      />
      <div className="container-narrow relative py-24 text-center md:py-32">
        <div className="font-serif text-7xl font-semibold text-clay md:text-8xl">404</div>
        <h1 className="mt-6">That page doesn&apos;t exist.</h1>
        <p className="mt-5 text-lg text-muted">
          The link is probably old, or there&apos;s a typo in the URL. Try one of these instead:
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary">Home</Link>
          <Link href="/websites" className="btn-secondary">Websites</Link>
          <Link href="/rescue" className="btn-secondary">Rescue</Link>
          <Link href="/contact" className="btn-ghost">Contact</Link>
        </div>
        <p className="mt-10 text-sm text-muted">
          If you got here from a link on our own site, email{" "}
          <a href="mailto:ben@outmarketthem.com" className="link-underline">
            ben@outmarketthem.com
          </a>{" "}
          so we can fix it.
        </p>
      </div>
    </section>
  );
}
