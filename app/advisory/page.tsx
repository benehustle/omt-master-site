import Link from "next/link";
import { Check, Calendar, MessageCircle, Users, X } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

export const metadata = {
  title: "Weekly Advisory — $99/month group calls for trades businesses",
  description:
    "Three weekly group calls for trades businesses. Google Ads, Meta Ads, and SEO strategy. $99/month. Cancel anytime.",
};

const calls = [
  {
    day: "Monday",
    topic: "Google Ads Strategy",
    time: "45 minutes",
    body: "Live Q&A. I audit real accounts in the room, answer questions, walk through the strategy for the week. Bring your account, bring your numbers, bring the thing that isn't working.",
  },
  {
    day: "Wednesday",
    topic: "Meta Ads Strategy",
    time: "45 minutes",
    body: "Same format for Meta and Facebook. Creative angles, campaign structure, audience building, reading the data honestly. What's working now, what isn't.",
  },
  {
    day: "Friday",
    topic: "SEO & Content Strategy",
    time: "45 minutes",
    body: "Organic growth. Local SEO, content planning, Google Business Profile, reviews, technical audits. How to build traffic you don't have to pay for every month.",
  },
];

const forYou = [
  "Trades businesses already running ads who want to get better",
  "Businesses considering ads but not sure where to start",
  "Anyone paying an agency and wanting to understand if they're being ripped off",
];
const notForYou = [
  "Businesses that want done-for-you (get a Rescue instead)",
  "Marketers trying to learn (this is for business owners)",
  "Anyone wanting 1-on-1 consulting (this is a group format)",
];

const faqs = [
  {
    q: "How is this different from the Rescue?",
    a: "Rescue is done-for-you. I audit your account, rebuild it, and hand it back. Advisory is learn-to-do-it-yourself. You get three calls a week where I answer your specific questions and show you how to fix things yourself. Rescue is a one-time job. Advisory is ongoing education.",
  },
  {
    q: "What if I can't attend the live calls?",
    a: "Every call is recorded and posted in the members area within 24 hours. You can submit questions ahead of time and watch the recording later. Plenty of members never attend live and still get everything they need.",
  },
  {
    q: "How many people are in the group?",
    a: "Capped at 20 active members per cohort so Q&A stays useful. Once a cohort fills, new members join a waitlist or the next cohort.",
  },
  {
    q: "Can I pause membership?",
    a: "You can cancel any time and rejoin later. No pause feature — it's simpler to just cancel and restart. Whatever month you're paying for stays active until it ends.",
  },
  {
    q: "Do I need to have ads running already?",
    a: "No. A lot of members join before they spend a dollar on ads so they don't waste money learning on the job. If you're already running ads, you'll get more value faster — but it's not required.",
  },
];

export default function AdvisoryPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Weekly Advisory Membership",
    provider: { "@type": "Organization", name: "OutMarketThem" },
    offers: {
      "@type": "Offer",
      price: "99",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "99",
        priceCurrency: "USD",
        unitCode: "MON",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <PageHero
        eyebrow="Advisory"
        title="Weekly advisory for trades businesses."
        subtitle="Three weekly group calls. $99/month. Cancel anytime."
        primaryHref="#pricing"
        primaryLabel="Start Advisory Membership"
        secondaryHref="#calls"
        secondaryLabel="See the call schedule"
      />

      {/* WHAT IT IS */}
      <section id="calls" className="section">
        <div className="container-page">
          <SectionHeader
            eyebrow="The calls"
            title="Three calls a week. Forty-five minutes each."
            subtitle="Live Q&A, real accounts, real answers. Recorded if you can't make it."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {calls.map((c) => (
              <div key={c.day} className="card p-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-teal/10 text-teal">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-teal">
                      {c.day}
                    </div>
                    <div className="text-sm text-muted">{c.time}</div>
                  </div>
                </div>
                <h3 className="mt-5">{c.topic}</h3>
                <p className="mt-3 text-muted leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMAT */}
      <section className="section bg-cream-card border-y border-border">
        <div className="container-page">
          <SectionHeader
            eyebrow="Format"
            title="How the membership actually works."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                icon: Calendar,
                t: "Recorded if you can't attend live",
                d: "Every session is recorded and in the members library within 24 hours. Submit questions ahead of time to have them answered in the recording.",
              },
              {
                icon: Users,
                t: "Small group (max 20 attendees)",
                d: "Capped so Q&A stays useful. If you show up live, you'll get your questions answered — not competing with a room of 200 people.",
              },
              {
                icon: MessageCircle,
                t: "Your specific questions get answered",
                d: "Bring your account, bring your numbers, bring the problem you're stuck on. Real accounts, real screenshares, real answers in the call.",
              },
              {
                icon: MessageCircle,
                t: "Members-only Slack channel",
                d: "Between calls, post questions in Slack. I check it daily. Other members answer too — most of them have been running ads longer than you have.",
              },
            ].map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.t} className="card flex gap-4 p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-amber/40 text-ink">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg">{f.t}</h3>
                    <p className="mt-1.5 text-muted">{f.d}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR / NOT FOR */}
      <section className="section">
        <div className="container-page">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="card p-7">
              <h3 className="flex items-center gap-3">
                <Check className="text-sage" size={22} />
                Who it&apos;s for
              </h3>
              <ul className="mt-5 space-y-3">
                {forYou.map((x) => (
                  <li key={x} className="flex items-start gap-3 text-ink">
                    <Check size={16} className="mt-1 shrink-0 text-sage" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card p-7">
              <h3 className="flex items-center gap-3">
                <X className="text-clay" size={22} />
                Who it&apos;s NOT for
              </h3>
              <ul className="mt-5 space-y-3">
                {notForYou.map((x) => (
                  <li key={x} className="flex items-start gap-3 text-muted">
                    <X size={16} className="mt-1 shrink-0 text-clay" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="section bg-cream-card border-y border-border">
        <div className="container-page flex flex-col items-center">
          <div className="w-full max-w-lg rounded-xl border-2 border-clay bg-cream-card p-10 text-center shadow-soft-lg">
            <span className="eyebrow">Membership</span>
            <div className="mt-4 flex items-baseline justify-center gap-2">
              <span className="font-serif text-6xl font-semibold text-ink">$99</span>
              <span className="text-muted">/month</span>
            </div>
            <p className="mt-3 text-muted">Cancel anytime. No contract.</p>
            <ul className="mt-7 space-y-3 text-left">
              {[
                "Three live calls per week",
                "Recordings for every session",
                "Members-only Slack channel",
                "Live account audits during calls",
                "Question submission ahead of time",
              ].map((l) => (
                <li key={l} className="flex items-start gap-3 text-ink">
                  <Check size={16} className="mt-1 text-sage" />
                  <span>{l}</span>
                </li>
              ))}
            </ul>
            <Link href="/contact#start-advisory" className="btn-primary mt-8 w-full justify-center">
              Start Advisory Membership
            </Link>
            <p className="mt-3 text-xs text-muted">
              Billed monthly. Cancel in one click any time.
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="section">
        <div className="container-narrow">
          <figure className="rounded-xl border border-border bg-amber/20 p-10 text-center">
            <blockquote className="font-serif text-2xl leading-snug text-ink md:text-3xl">
              &ldquo;Spent $30k on agencies before finding OutMarketThem. Ben delivered better work in 2 weeks than agencies did in 6 months.&rdquo;
            </blockquote>
            <figcaption className="mt-6 text-sm">
              <div className="font-medium text-ink">Melbourne Mint</div>
              <div className="text-muted">Melbourne, Australia</div>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-cream-card border-y border-border">
        <div className="container-page">
          <SectionHeader eyebrow="FAQ" title="Advisory questions, answered." />
          <div className="mt-10">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      <FinalCTA
        heading="Ready to stop guessing at your marketing?"
        subhead="$99/month. Three calls a week. Cancel anytime."
        primaryLabel="Start Advisory Membership"
        primaryHref="/contact#start-advisory"
      />
    </>
  );
}
