import Link from "next/link";
import { Check, Search, Target, Rocket, TrendingUp } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

export const metadata = {
  title: "Marketing Rescue  -  Google Ads, Meta Ads, SEO audits and rebuilds",
  description:
    "Google Ads Rescue $997. Meta Ads Rescue $997. SEO Rescue $1,497. Full Bundle $2,497. Audit and rebuild of your broken marketing  -  fixed price, fast turnaround.",
};

const rescues = [
  {
    icon: Target,
    title: "Google Ads Rescue",
    price: "$997",
    badge: "7-day rebuild",
    wrong:
      "Wasted spend on broad-match garbage keywords. Bidding strategies that optimize for the wrong goal. No negative keyword lists. Conversion tracking that doesn't actually track conversions. Campaigns that haven't been touched in a year.",
    what: [
      "20-minute live audit (I screen-share and show you exactly what's broken)",
      "Full rebuild of campaigns, ad groups, and ad copy",
      "Keyword refinement and negative keyword lists",
      "Conversion tracking verified and installed properly",
      "Bidding strategy aligned to your actual goal (calls, not clicks)",
    ],
    deliverable:
      "Completely rebuilt account within 7 days, plus a 30-day check-in to refine based on results.",
    href: "/contact#start-google",
  },
  {
    icon: Rocket,
    title: "Meta Ads Rescue",
    price: "$997",
    badge: "7-day rebuild",
    wrong:
      "Boosted posts instead of real campaigns. One creative running for six months. Audiences so broad they're useless, or so narrow they don't deliver. Pixel installed but not firing events. A catalog of ad accounts nobody is sure which to use.",
    what: [
      "20-minute live audit of the ad account and Business Manager",
      "Full rebuild of campaigns with modern structure (ASC + interest stacks)",
      "Audience research and creative angles that match your trade",
      "Pixel and Conversions API installed and verified",
      "Creative brief: exactly what video and photo to shoot next",
    ],
    deliverable:
      "Rebuilt ad account live within 7 days. Creative brief so your next shoot is on purpose.",
    href: "/contact#start-meta",
  },
  {
    icon: Search,
    title: "SEO Rescue",
    price: "$1,497",
    badge: "14-day delivery",
    wrong:
      "Thin service pages that rank nowhere. Missing schema. Slow mobile load. No Google Business Profile optimization. Content written for Google, not people. Technical issues hiding pages from being indexed at all.",
    what: [
      "Full technical SEO audit (indexing, speed, mobile, schema, Core Web Vitals)",
      "On-page fixes across every existing page",
      "Local SEO setup: GBP, citations, review strategy",
      "90-day content strategy with a specific list of pages to publish",
      "Internal linking rebuild",
    ],
    deliverable:
      "Everything technical fixed, every page on-page optimized, and a content plan you can execute yourself or hire out.",
    href: "/contact#start-seo",
  },
];

const faqs = [
  {
    q: "Do you take over ongoing ad management?",
    a: "No, and that's on purpose. Most trades get fleeced by agencies charging $1,500/mo to babysit a Google Ads account. I rebuild it properly, hand it back, and show you how to keep it healthy. If you want ongoing eyes on it, the $99/mo Advisory covers that.",
  },
  {
    q: "What if you can't fix my ads?",
    a: "If the 20-minute audit shows there's nothing meaningful to improve  -  which happens maybe once in twenty  -  I tell you that in the audit call, don't charge you, and send you on your way. Honesty is cheaper than pretending.",
  },
  {
    q: "Does the $997 include the rebuild?",
    a: "Yes. Audit + full rebuild + 30-day check-in, all included. No upsells for 'strategy sessions' or 'optimization packages'. One price, complete job.",
  },
  {
    q: "How long does the audit take?",
    a: "20 minutes on a screen-share call. I'll spot the biggest leaks in real time. You'll leave the call knowing exactly what's broken even if you never hire me for the rebuild.",
  },
  {
    q: "Do I keep my ad accounts?",
    a: "Always. I work inside your Google Ads, Meta Business Manager, Google Search Console, and analytics tools. Nothing is ever in my name. If we part ways, there's nothing to transfer  -  it's already yours.",
  },
  {
    q: "Can I cancel after the rescue?",
    a: "There's nothing to cancel. The rescue is a one-time job with a fixed price. No subscription, no ongoing fees. You pay once, I deliver, we're done.",
  },
  {
    q: "What's the $200/mo for if I already did the rescue?",
    a: "The $200/mo is only for website hosting and ongoing site updates  -  it's tied to the Websites service, not the Rescue. The rescue stands on its own and doesn't require anything monthly.",
  },
];

export default function RescuePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Marketing Rescue",
    provider: { "@type": "Organization", name: "OutMarketThem" },
    areaServed: ["United States", "Australia"],
    offers: [
      { "@type": "Offer", name: "Google Ads Rescue", price: "997", priceCurrency: "USD" },
      { "@type": "Offer", name: "Meta Ads Rescue", price: "997", priceCurrency: "USD" },
      { "@type": "Offer", name: "SEO Rescue", price: "1497", priceCurrency: "USD" },
      { "@type": "Offer", name: "Full Rescue Bundle", price: "2497", priceCurrency: "USD" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <PageHero
        eyebrow="Rescue"
        title="Your marketing is broken. I can prove it and fix it."
        subtitle="Google Ads, Meta Ads, SEO  -  audited and rebuilt. From $997."
        primaryHref="#services"
        primaryLabel="See Rescue Options"
        secondaryHref="/contact#ask"
        secondaryLabel="Ask a question"
        trustItems={[
          "Work stays inside your ad accounts (never mine)",
          "Fixed-price rebuilds · no retainers",
          "US + Australia",
        ]}
      />

      {/* EMPATHY / STORY */}
      <section className="section">
        <div className="container-narrow">
          <h2 className="text-3xl font-medium leading-tight md:text-4xl lg:text-5xl">
            If you&apos;re here, you&apos;ve probably been burned before.
          </h2>
          <div className="mt-7 space-y-5 text-lg leading-relaxed text-muted">
            <p>
              Maybe an agency sold you on Google Ads and quietly lit $2,000 a month on fire while they sent you PDF reports full of impressions and clicks. Maybe you paid an SEO company for &ldquo;content&rdquo; that read like it was written by a robot, and you&apos;re still on page 4 of Google for the one search that matters.
            </p>
            <p>
              Maybe you tried Meta Ads yourself, spent $600 on boosted posts, got no calls, and quietly gave up. Or maybe you&apos;re paying someone right now, you don&apos;t really know what they do, and you&apos;re afraid to ask because it sounds stupid.
            </p>
            <p>
              It&apos;s not stupid. The industry is built to keep trades confused. The longer you&apos;re confused, the longer someone collects a retainer. Most of what&apos;s sold as &ldquo;digital marketing&rdquo; for trades is either broken, neglected, or never worked in the first place.
            </p>
            <p className="font-medium text-ink">
              I don&apos;t sell you a fix before I show you the problem. The audit comes first, the rebuild comes second, and both have a fixed price you can see on this page.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section bg-cream-card border-y border-border">
        <div className="container-page">
          <SectionHeader
            eyebrow="Three rescues"
            title="Pick one. Or pick the bundle."
            subtitle="Each is a fixed price. Each includes the full rebuild, not just an audit."
          />

          <div className="mt-12 space-y-8">
            {rescues.map((r) => {
              const Icon = r.icon;
              return (
                <article
                  key={r.title}
                  className="card overflow-hidden p-8 md:p-10"
                >
                  <div className="grid gap-8 md:grid-cols-[1fr_1.4fr]">
                    <div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-clay/10 text-clay">
                        <Icon size={22} />
                      </div>
                      <h3 className="mt-5 text-2xl md:text-3xl">{r.title}</h3>
                      <div className="mt-3 flex items-baseline gap-3">
                        <span className="font-serif text-4xl font-semibold text-ink">{r.price}</span>
                        <span className="text-sm text-muted">{r.badge}</span>
                      </div>
                      <Link href={r.href} className="btn-primary mt-6 w-full justify-center md:w-auto">
                        Start  -  $100 Deposit
                      </Link>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <div className="text-sm font-semibold uppercase tracking-wider text-teal">
                          What&apos;s wrong with most accounts
                        </div>
                        <p className="mt-2 text-muted leading-relaxed">{r.wrong}</p>
                      </div>
                      <div>
                        <div className="text-sm font-semibold uppercase tracking-wider text-teal">
                          What I do
                        </div>
                        <ul className="mt-2 space-y-2">
                          {r.what.map((w) => (
                            <li key={w} className="flex items-start gap-3 text-ink">
                              <Check size={16} className="mt-1 shrink-0 text-sage" />
                              <span>{w}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="text-sm font-semibold uppercase tracking-wider text-teal">
                          Deliverable
                        </div>
                        <p className="mt-2 text-muted leading-relaxed">{r.deliverable}</p>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* BUNDLE BANNER */}
          <div className="mt-10 overflow-hidden rounded-xl border-2 border-clay bg-gradient-to-br from-amber/30 via-cream-card to-clay/10 p-8 md:p-10">
            <div className="grid gap-6 md:grid-cols-[1.2fr_auto] md:items-center">
              <div>
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-clay px-3 py-1 text-xs font-medium uppercase tracking-wider text-white">
                    Best value
                  </span>
                  <span className="text-xs font-medium uppercase tracking-wider text-teal">
                    Save $994
                  </span>
                </div>
                <h3 className="mt-3 text-2xl md:text-3xl">Full Rescue Bundle  -  $2,497</h3>
                <p className="mt-2 text-muted">
                  All three rescues. Google Ads, Meta Ads, and SEO  -  audited and rebuilt together, because they all need to work as one system. Total value $3,491. You save $994.
                </p>
              </div>
              <Link href="/contact#start-bundle" className="btn-primary whitespace-nowrap">
                Start the Bundle
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDY */}
      <section className="section">
        <div className="container-page">
          <SectionHeader eyebrow="Case study" title="Inspect Buy Drive  -  Sydney." />
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="space-y-5 text-lg leading-relaxed text-muted max-w-prose">
              <p>
                Inspect Buy Drive is an independent pre-purchase vehicle inspection service in Sydney. They&apos;d been running Google Ads through a local agency for 14 months with steady but unspectacular results  -  and a $6,000/mo ad budget.
              </p>
              <p>
                The 20-minute audit surfaced $4,000/mo in wasted spend: broad-match bidding on terms like &ldquo;car inspection&rdquo; nationally when their service area was Sydney metro only, no negative keyword list, and conversion tracking that was counting page views as conversions  -  which meant the whole bidding algorithm had been optimizing toward the wrong signal for over a year.
              </p>
              <p className="font-medium text-ink">
                After the rebuild, the account ran the same campaigns with a $2,000/mo budget and delivered more inquiries than the previous $6,000/mo setup. The $4,000/mo saving paid for the rescue in week one.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Stat big="$4k/mo" small="wasted spend found in the audit" tone="amber" />
              <Stat big="20 min" small="to identify every leak" tone="teal" />
              <Stat big="66%" small="budget reduction, same results" tone="sage" />
              <Stat big="Week 1" small="paid for itself" tone="clay" />
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="section bg-cream-card border-y border-border">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Why this price</span>
            <h2 className="mt-3">Same depth. Same fix. A fraction of the price.</h2>
            <p className="mt-5 text-lg text-muted">
              Most agencies charge $3,000–$8,000 for an audit and rebuild. Mine costs $997–$1,497. Nothing is left out; the difference is I&apos;m one person with no sales team to pay.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <div className="rounded-full border border-border bg-cream-card px-5 py-2 text-sm text-muted">
                Agency audit: <span className="font-medium text-ink line-through">$3,000–$8,000</span>
              </div>
              <div className="rounded-full border border-clay bg-clay/10 px-5 py-2 text-sm font-medium text-clay">
                OMT rescue: $997–$1,497
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-page">
          <SectionHeader eyebrow="FAQ" title="Rescue questions, answered." />
          <div className="mt-10">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      <FinalCTA
        heading="Ready to see what's actually broken?"
        subhead="Start with a $100 deposit and a 20-minute audit call. If there's nothing to fix, you get the deposit back."
        primaryHref="/contact#start-google"
        primaryLabel="Start a Rescue"
      />
    </>
  );
}

function Stat({
  big,
  small,
  tone,
}: {
  big: string;
  small: string;
  tone: "amber" | "teal" | "sage" | "clay";
}) {
  const toneBg: Record<string, string> = {
    amber: "bg-amber/30",
    teal: "bg-teal/10",
    sage: "bg-sage/15",
    clay: "bg-clay/10",
  };
  return (
    <div className={`rounded-lg border border-border ${toneBg[tone]} p-6`}>
      <div className="font-serif text-3xl font-semibold text-ink md:text-4xl">{big}</div>
      <div className="mt-1 text-sm text-muted">{small}</div>
    </div>
  );
}
