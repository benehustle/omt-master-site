import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Thank you  -  deposit received",
  description: "Deposit received. Check your email for next steps.",
  robots: { index: false, follow: false },
};

const steps = [
  {
    n: 1,
    t: "Check your email (within 5 minutes)",
    d: "A questionnaire arrives from ben@outmarketthem.com. If you don't see it, check spam and whitelist the address.",
  },
  {
    n: 2,
    t: "Answer 5 quick questions (10 minutes)",
    d: "Your services, service area, competitors, photos, and anything you definitely want or don't want on the site.",
  },
  {
    n: 3,
    t: "I build your mockup (within 5 business days)",
    d: "You get a live preview link. Review it on your phone, send feedback in whatever form is easiest.",
  },
  {
    n: 4,
    t: "You approve, or request changes",
    d: "One round of revisions included. Most builds don't need more than a tweak or two.",
  },
  {
    n: 5,
    t: "Pay $897 balance, site launches",
    d: "Live on your domain within 14 days of the deposit. SSL, contact form, and Google setup all included.",
  },
];

export default function ThankYouPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-24 h-[420px] bg-gradient-to-b from-sage/20 via-cream to-cream"
        />
        <div className="container-narrow relative py-20 md:py-28 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sage/20 text-sage">
            <CheckCircle2 size={32} />
          </div>
          <h1 className="mt-6">Deposit received.</h1>
          <p className="mt-5 text-lg text-muted">
            Check your email for next steps (arriving in the next 5 minutes).
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-narrow">
          <h2 className="text-2xl md:text-3xl">What happens next</h2>
          <ol className="mt-8 space-y-4">
            {steps.map((s) => (
              <li key={s.n} className="card flex gap-5 p-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-amber/40 font-serif text-lg font-semibold text-ink">
                  {s.n}
                </div>
                <div>
                  <h3 className="text-lg">{s.t}</h3>
                  <p className="mt-1.5 text-muted">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10 rounded-lg border border-border bg-cream-card p-6 text-sm text-muted">
            Didn&apos;t receive the questionnaire? Email{" "}
            <a href="mailto:ben@outmarketthem.com" className="link-underline">
              ben@outmarketthem.com
            </a>{" "}
            and I&apos;ll resend it immediately.
          </div>

          <div className="mt-8 text-center">
            <Link href="/" className="link-underline text-sm">
              ← Back to home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
