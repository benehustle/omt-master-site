import Link from "next/link";
import { ArrowRight, Hammer, LifeBuoy, Users, Check } from "lucide-react";
import PlaceholderImage from "@/components/PlaceholderImage";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import SectionHeader from "@/components/SectionHeader";

export const metadata = {
  title: "Custom websites for trades businesses. $997. 14 days.",
  description:
    "$997 one-time. Built in 14 days. Refundable deposit. No contracts. Web design and marketing rescue for trades in the US and Australia.",
};

const stats = [
  { big: "50+", small: "sites built" },
  { big: "14-day", small: "delivery" },
  { big: "100%", small: "deposit refund if you don't love it" },
];

const services = [
  {
    icon: Hammer,
    title: "New Websites",
    body: "Custom site, built in 14 days, launched on your domain. $997 one-time.",
    link: "/websites",
    linkLabel: "See pricing",
    featured: true,
  },
  {
    icon: LifeBuoy,
    title: "Marketing Rescue",
    body: "Your Google Ads, Meta Ads, or SEO aren't working? I'll audit and rebuild them. From $997.",
    link: "/rescue",
    linkLabel: "See rescue options",
  },
  {
    icon: Users,
    title: "Weekly Advisory",
    body: "Three weekly group calls. $99/month. Cancel anytime.",
    link: "/advisory",
    linkLabel: "Learn more",
  },
];

const steps = [
  { n: 1, t: "Pay $100 deposit", d: "Locks in your build slot. Refundable if the design isn't right." },
  { n: 2, t: "Tell me about your business", d: "Five minute form. Services, service area, photos if you have them." },
  { n: 3, t: "I build your custom site", d: "Five to seven days. No templates. Designed around your trade." },
  { n: 4, t: "You review and approve", d: "One round of revisions included. Plain-English feedback is fine." },
  { n: 5, t: "Pay $897, site launches", d: "Live on your domain within 14 days of the deposit." },
];

const testimonials = [
  {
    quote:
      "Ben rebuilt our site and we went from 2 enquiries a week to 8 in the first month.",
    name: "BinPro",
    location: "Melbourne, Australia",
  },
  {
    quote:
      "Spent $30k on agencies before finding OutMarketThem. Ben delivered better work in 2 weeks than agencies did in 6 months.",
    name: "Melbourne Mint",
    location: "Melbourne, Australia",
  },
  {
    quote:
      "The rescue audit of our Google Ads found $4k/month of wasted spend in 20 minutes. Changed everything.",
    name: "Inspect Buy Drive",
    location: "Sydney, Australia",
  },
];

const work = [
  { caption: "Bin Cleaning Co — Texas", tone: "warm" as const },
  { caption: "Plumbing Pro — Queensland", tone: "teal" as const },
  { caption: "Roofing Solutions — Sydney", tone: "amber" as const },
  { caption: "Landscape Design — Florida", tone: "sage" as const },
  { caption: "Electrical Services — Melbourne", tone: "warm" as const },
  { caption: "Pressure Washing Pros — California", tone: "teal" as const },
];

const faqs = [
  {
    q: "How long does it actually take?",
    a: "Fourteen days from the day you pay the deposit. Most builds are done in 7–10 days and the rest is review and revisions. If I miss the 14-day window because of me, I refund the build in full.",
  },
  {
    q: "What if I don't like the design?",
    a: "The $100 deposit is fully refundable until you approve the design. If the first round isn't right, I do one revision. If it's still not right after that, you get your deposit back and we part ways. No drama.",
  },
  {
    q: "Do I have to pay the $200/mo ongoing?",
    a: "No. The $997 buys you the site. You can host it yourself, move it to your own hosting, or hand it to anyone else. The $200/mo is optional and covers hosting, unlimited updates, and monthly SEO check-ins.",
  },
  {
    q: "What platform do you build on?",
    a: "Next.js with a static export, or WordPress if you specifically want it. Either way, you own the code and can move hosts whenever you want. No proprietary platform lock-in like Wix or Squarespace.",
  },
  {
    q: "Do you serve my country/state?",
    a: "Yes. I'm registered in Delaware (USA) and Queensland (Australia). I've built for trades across both countries. Time zones aren't a problem — I work hours that cover both.",
  },
  {
    q: "How is this different from Wix or an agency?",
    a: "Wix and Squarespace are templates you assemble. Agencies are ten people and a $15k price tag. I'm one person who actually designs and builds the site, priced at $997, shipped in 14 days. You get agency-quality work without the agency overhead.",
  },
];

export default function HomePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "OutMarketThem",
    description:
      "Custom websites and marketing rescue for trades businesses in the US and Australia.",
    priceRange: "$$",
    areaServed: ["United States", "Australia"],
    url: "https://outmarketthem.com",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-24 h-[520px] bg-gradient-to-b from-amber/30 via-cream to-cream"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute right-[-10%] top-20 h-72 w-72 rounded-full bg-clay/15 blur-3xl"
        />
        <div className="container-page relative pt-16 pb-10 md:pt-28 md:pb-20">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center">
            <div>
              <span className="eyebrow">US & Australia · Trades web design</span>
              <h1 className="mt-4 max-w-3xl">
                Custom websites for trades businesses.
              </h1>
              <p className="mt-5 max-w-xl text-lg md:text-xl text-muted">
                $997. Built in 14 days. Refundable deposit. No contracts.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact#start" className="btn-primary">
                  Start with $100 Deposit
                </Link>
                <Link href="#how-it-works" className="btn-secondary">
                  See How It Works
                </Link>
              </div>
              <p className="mt-5 text-sm text-muted">
                2 years. 50+ sites. Australia and USA.
              </p>
            </div>

            <div className="relative">
              <PlaceholderImage
                label="Recent build"
                caption="Plumbing Pro — Queensland"
                tone="warm"
                aspect="4 / 3"
                className="shadow-soft-lg"
              />
              <div className="absolute -bottom-6 -left-6 hidden rounded-lg border border-border bg-cream-card p-4 shadow-soft md:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sage/20 text-sage">
                    <Check size={18} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-ink">Live in 14 days</div>
                    <div className="text-xs text-muted">From deposit to domain</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CREDIBILITY STRIP */}
      <section className="border-y border-border bg-cream-card">
        <div className="container-page grid grid-cols-1 gap-6 py-10 md:grid-cols-3">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`flex flex-col items-start md:items-center md:text-center ${
                i !== 0 ? "md:border-l md:border-border md:pl-6" : ""
              }`}
            >
              <div className="font-serif text-3xl font-semibold text-ink md:text-4xl">
                {s.big}
              </div>
              <div className="mt-1 text-sm text-muted">{s.small}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT BEN */}
      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="order-2 lg:order-1">
            <PlaceholderImage
              label="Ben Wake"
              caption="Founder, OutMarketThem"
              tone="amber"
              aspect="4 / 5"
            />
          </div>
          <div className="order-1 lg:order-2">
            <span className="eyebrow">Meet the founder</span>
            <h2 className="mt-3">Hi, I&apos;m Ben.</h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted max-w-prose">
              <p>
                I started OutMarketThem to solve a specific problem — trades businesses with great reputations and terrible websites.
              </p>
              <p>
                After two years building for Australian trades, I expanded to the US in 2026. Same offer, same process, same commitment. No agency layers. No account managers. You deal with me directly.
              </p>
            </div>
            <Link href="/about" className="mt-7 inline-flex items-center gap-1.5 text-clay font-medium hover:gap-2.5 transition-all">
              More about OMT <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="section bg-cream-card border-y border-border">
        <div className="container-page">
          <SectionHeader
            eyebrow="What I do"
            title="Three ways I help trades businesses."
            subtitle="Pick one. Or start with a site and add the rest later. No packages."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.title}
                  href={s.link}
                  className={`card group flex flex-col p-7 hover:-translate-y-1 hover:shadow-soft-lg transition-all ${
                    s.featured ? "ring-2 ring-clay/30" : ""
                  }`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-clay/10 text-clay">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-6">{s.title}</h3>
                  <p className="mt-3 text-muted">{s.body}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-clay font-medium group-hover:gap-2.5 transition-all">
                    {s.linkLabel} <ArrowRight size={15} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="section">
        <div className="container-page">
          <SectionHeader
            eyebrow="How it works"
            title="Five steps. Fourteen days."
            subtitle="No meetings you don't need. No ceremony. Just a build."
          />
          <ol className="mt-12 space-y-4">
            {steps.map((s) => (
              <li
                key={s.n}
                className="card flex gap-6 p-6 md:p-7"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-amber/40 font-serif text-xl font-semibold text-ink">
                  {s.n}
                </div>
                <div>
                  <h3 className="text-lg md:text-xl">{s.t}</h3>
                  <p className="mt-1.5 text-muted">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-8 rounded-lg border border-border bg-amber/20 px-5 py-4 text-sm text-ink">
            Don&apos;t love what I build? Deposit refunded in full. No questions.
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section bg-cream-card border-y border-border">
        <div className="container-page">
          <SectionHeader
            eyebrow="In their words"
            title="What Australian trades say."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="card flex h-full flex-col p-7">
                <blockquote className="font-serif text-lg leading-snug text-ink">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 text-sm">
                  <div className="font-medium text-ink">{t.name}</div>
                  <div className="text-muted">{t.location}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* RECENT WORK */}
      <section className="section">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeader eyebrow="Recent work" title="A sample of recent builds." />
            <Link href="/work" className="link-underline text-sm font-medium">
              See all work →
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {work.map((w) => (
              <PlaceholderImage
                key={w.caption}
                caption={w.caption}
                tone={w.tone}
                aspect="4 / 3"
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-cream-card border-y border-border">
        <div className="container-page">
          <SectionHeader eyebrow="FAQ" title="Common questions." align="left" />
          <div className="mt-10">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
