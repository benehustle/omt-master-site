import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import PlaceholderImage from "@/components/PlaceholderImage";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

export const metadata = {
  title: "Websites for trades  -  $997, built in 14 days",
  description:
    "Custom websites for trades businesses. $997 one-time, $100 refundable deposit, $897 on approval. Launched in 14 days. No contracts, no retainers.",
};

const included = [
  "Custom mobile-first design",
  "Under 2-second mobile load time",
  "Click-to-call phone integration",
  "Google Business Profile setup",
  "Google reviews displayed on site",
  "Contact form with email delivery",
  "Up to 6 service pages",
  "Basic local SEO (meta tags, schema, local keywords)",
  "Domain and SSL configured",
  "Launched on your domain in 14 days",
];

const steps = [
  {
    n: 1,
    t: "Pay $100 deposit",
    d: "A $100 deposit locks in your build slot on my calendar. It's fully refundable if you don't love the first design. That's not marketing talk  -  it's the deal.",
  },
  {
    n: 2,
    t: "Tell me about your business",
    d: "You get a short questionnaire. Five minutes. I want to know your services, service area, competitors, and what you want more of. Photos of your work help. No photos? I'll tell you exactly what to grab on your phone.",
  },
  {
    n: 3,
    t: "I build your custom site",
    d: "Five to seven days of actual build time. I design around your trade  -  a plumber's site looks different from a landscaper's. I don't reuse templates. I write the first draft of copy so you're not staring at a blank page.",
  },
  {
    n: 4,
    t: "You review and approve",
    d: "You get a live preview link. Walk through it on your phone. Give me feedback in whatever form is easiest  -  voice notes, scribbled screenshots, a phone call. One round of revisions is included. Most builds don't need more.",
  },
  {
    n: 5,
    t: "Pay $897, site launches",
    d: "Once the design is approved, you pay the $897 balance. I point your domain, install SSL, wire up the contact form, submit to Google. You're live within the 14-day window from day one.",
  },
];

const compare = [
  {
    title: "DIY (Wix, Squarespace)",
    price: "$20–40/mo + your time",
    pros: ["Cheap monthly fee", "You own the editor"],
    cons: [
      "40+ hours to build it yourself",
      "Template look, not a brand",
      "You're on your own for SEO",
      "Slow on mobile",
    ],
    highlight: false,
  },
  {
    title: "OutMarketThem",
    price: "$997 one-time",
    pros: [
      "Custom design, not a template",
      "14-day delivery",
      "One person builds and supports it",
      "You own the site, you can leave",
      "Refundable deposit",
    ],
    cons: [],
    highlight: true,
  },
  {
    title: "Agencies ($5k–15k)",
    price: "$5,000–15,000",
    pros: ["Good quality work", "Team of specialists"],
    cons: [
      "3–6 month timelines",
      "Contracts and retainers",
      "Account managers, not builders",
      "Surprise fees and scope creep",
    ],
    highlight: false,
  },
];

const faqs = [
  {
    q: "What platform is it built on?",
    a: "Next.js with a static export by default. If you have a reason to use WordPress, I'll build on WordPress. Either way, no proprietary platform lock-in  -  you own the code and can move whenever you want.",
  },
  {
    q: "Do I own the site?",
    a: "Yes, completely. Source code, content, domain, the lot. If we part ways tomorrow, the site and everything in it is yours. I don't hold anything hostage.",
  },
  {
    q: "What if I need changes after launch?",
    a: "You have three options. Do them yourself (I'll show you how for simple edits). Pay me hourly for bigger jobs ($150/hr). Or sign up for the $200/mo ongoing for unlimited updates. Your call.",
  },
  {
    q: "Can I move the site to another host later?",
    a: "Yes. That's the whole point of not using Wix or Squarespace  -  nothing is tied to me. Hand the codebase and domain to any developer and they can pick it up.",
  },
  {
    q: "What about hosting costs if I don't do the $200/mo?",
    a: "Static hosting runs $0–$20/mo depending on traffic. Most trades sites sit on Netlify's free tier forever. I'll hand over a hosting account in your name so you never need me for access.",
  },
  {
    q: "Do you include SEO?",
    a: "Basic local SEO is included  -  meta titles and descriptions on every page, schema markup for your business, local keyword research, Google Business Profile setup, and an XML sitemap. For ongoing SEO work, that's a separate conversation (see Rescue or Advisory).",
  },
  {
    q: "What about e-commerce?",
    a: "Most trades don't need e-commerce  -  you need leads. If you do need a booking or payment flow, I'll integrate Stripe or a booking tool. Full storefronts are out of scope at the $997 price.",
  },
  {
    q: "Can you migrate my existing site?",
    a: "Yes. I can pull over existing copy, images, reviews, and blog posts. What I can't do is keep ugly. If the existing site has problems, migrating them over defeats the point.",
  },
  {
    q: "Do you do logo design?",
    a: "Basic wordmark logos, yes, included if you don't have one. For full brand identity work with multiple concepts and brand guidelines, I'll refer you to a designer I trust.",
  },
  {
    q: "What if I need more than 6 pages?",
    a: "Six covers most trades  -  home, services overview, individual services, about, contact. If you genuinely need more (say, 10 service pages for a full plumbing business), it's $50 per additional page.",
  },
  {
    q: "Do you write the copy?",
    a: "Yes. I write a full first draft based on your questionnaire answers and a short call. You review and mark anything that sounds off. Copy in your voice is the fastest way to a site that converts.",
  },
  {
    q: "What about photos?",
    a: "Your own photos always win. Phone photos of real jobs beat any stock shot. If you don't have enough, I'll use a small number of carefully chosen stock images  -  but we'll aim to replace them over the first few months as you build a photo library.",
  },
];

const work = [
  { caption: "Bin Cleaning Co  -  Austin, Texas", tone: "warm" as const },
  { caption: "Plumbing Pro  -  Brisbane, Queensland", tone: "teal" as const },
  { caption: "Roofing Solutions  -  Sydney, NSW", tone: "amber" as const },
  { caption: "Landscape Design  -  Miami, Florida", tone: "sage" as const },
  { caption: "Electrical Services  -  Melbourne, VIC", tone: "warm" as const },
  { caption: "Pressure Washing Pros  -  San Diego, CA", tone: "teal" as const },
  { caption: "Gutter Guys  -  Phoenix, Arizona", tone: "amber" as const },
  { caption: "Fence & Deck Co  -  Perth, WA", tone: "sage" as const },
];

export default function WebsitesPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Custom Website for Trades",
    provider: { "@type": "Organization", name: "OutMarketThem" },
    areaServed: ["United States", "Australia"],
    offers: {
      "@type": "Offer",
      price: "997",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <PageHero
        eyebrow="Websites"
        title="Custom websites for trades businesses."
        subtitle="$997 one-time. Built in 14 days. No contracts, no retainers."
        primaryHref="/contact#start"
        primaryLabel="Start with $100 Deposit"
        secondaryHref="#pricing"
        secondaryLabel="See what's included"
      />

      {/* WHAT'S INCLUDED */}
      <section className="section">
        <div className="container-page">
          <SectionHeader
            eyebrow="What's included"
            title="Everything you need on day one."
            subtitle="No upsells. No 'pro tier'. Every build ships with all of this."
          />
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {included.map((item) => (
              <li key={item} className="card flex items-start gap-3 p-5">
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sage/20 text-sage">
                  <Check size={14} />
                </div>
                <span className="text-ink">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PRICING BOX */}
      <section id="pricing" className="section bg-cream-card border-y border-border">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <span className="eyebrow">The price</span>
            <h2 className="mt-3">Fixed price. No surprises.</h2>
            <p className="mt-5 text-lg text-muted max-w-prose">
              The price is $997. That&apos;s the whole thing. A refundable deposit to start, a balance when you approve the design, a live site within 14 days. Nothing added on later.
            </p>
          </div>
          <div className="rounded-xl border-2 border-clay bg-cream-card p-8 shadow-soft-lg md:p-10">
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-5xl font-semibold text-ink md:text-6xl">$997</span>
              <span className="text-muted">one-time</span>
            </div>
            <ul className="mt-7 space-y-3">
              {[
                "$100 refundable deposit to start",
                "$897 on design approval",
                "14-day delivery from deposit",
                "One round of revisions included",
                "Launched on your domain",
              ].map((l) => (
                <li key={l} className="flex items-start gap-3 text-ink">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-clay/15 text-clay">
                    <Check size={12} />
                  </div>
                  <span>{l}</span>
                </li>
              ))}
            </ul>
            <Link href="/contact#start" className="btn-primary mt-8 w-full justify-center">
              Pay $100 Deposit
            </Link>
            <p className="mt-3 text-center text-xs text-muted">
              Secure checkout. Refundable if the design isn&apos;t right.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS (DETAILED) */}
      <section className="section">
        <div className="container-page">
          <SectionHeader
            eyebrow="Process"
            title="How a build actually runs."
            subtitle="Day by day. No mystery."
          />
          <div className="mt-14 space-y-12">
            {steps.map((s) => (
              <div key={s.n} className="grid gap-5 md:grid-cols-[140px_1fr] md:gap-10">
                <div className="font-serif text-6xl font-semibold text-clay md:text-7xl leading-none">
                  0{s.n}
                </div>
                <div>
                  <h3>{s.t}</h3>
                  <p className="mt-3 max-w-prose text-lg leading-relaxed text-muted">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPTIONAL ONGOING */}
      <section className="section bg-cream-card border-y border-border">
        <div className="container-page grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div>
            <span className="eyebrow">Optional</span>
            <h2 className="mt-3">Want me on retainer? Optional $200/mo.</h2>
            <p className="mt-5 text-lg text-muted max-w-prose">
              Most trades don&apos;t need this. Some want it. The monthly covers hosting, unlimited updates, and a monthly SEO check-in. Cancel any time, no contract.
            </p>
            <p className="mt-4 text-lg text-muted max-w-prose">
              Skip the monthly and host it yourself  -  your choice. I&apos;ll hand over a hosting account in your name either way.
            </p>
          </div>
          <div className="card p-7">
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-4xl font-semibold text-ink">$200</span>
              <span className="text-muted">/month · cancel anytime</span>
            </div>
            <ul className="mt-6 space-y-3 text-ink">
              {[
                "Hosting, domain, and SSL handled",
                "Unlimited small content updates",
                "New photos, reviews, services added",
                "Monthly SEO check-in and report",
                "Priority email support (4-hour response)",
              ].map((l) => (
                <li key={l} className="flex items-start gap-3">
                  <Check size={16} className="mt-1 text-sage" />
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* WORK GALLERY */}
      <section className="section">
        <div className="container-page">
          <SectionHeader eyebrow="Recent work" title="Eight recent builds." />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {work.map((w) => (
              <PlaceholderImage key={w.caption} caption={w.caption} tone={w.tone} aspect="4 / 5" />
            ))}
          </div>
          <div className="mt-8">
            <Link href="/work" className="link-underline font-medium">
              See the full gallery →
            </Link>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="section bg-cream-card border-y border-border">
        <div className="container-page">
          <SectionHeader
            eyebrow="How it compares"
            title="The three ways trades get a website."
            subtitle="I'm the middle option  -  agency-quality work, DIY-level price."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {compare.map((c) => (
              <div
                key={c.title}
                className={`relative rounded-xl border p-7 ${
                  c.highlight
                    ? "border-clay bg-clay/[0.04] shadow-soft-lg ring-1 ring-clay/30"
                    : "border-border bg-cream-card shadow-soft"
                }`}
              >
                {c.highlight && (
                  <div className="absolute -top-3 left-6 rounded-full bg-clay px-3 py-1 text-xs font-medium text-white">
                    Recommended
                  </div>
                )}
                <h3 className="text-xl">{c.title}</h3>
                <p className="mt-2 text-sm text-muted">{c.price}</p>
                <ul className="mt-6 space-y-2.5 text-sm">
                  {c.pros.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-ink">
                      <Check size={14} className="mt-1 text-sage shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                  {c.cons.map((x) => (
                    <li key={x} className="flex items-start gap-2 text-muted">
                      <span className="mt-1 inline-block h-3.5 w-3.5 shrink-0 rounded-full border border-muted/40" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-page">
          <SectionHeader eyebrow="FAQ" title="Website questions, answered." />
          <div className="mt-10">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
