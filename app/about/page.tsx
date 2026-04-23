import { Check, Scale, Clock, Handshake, ShieldCheck } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import PlaceholderImage from "@/components/PlaceholderImage";
import FinalCTA from "@/components/FinalCTA";

export const metadata = {
  title: "About OutMarketThem  -  One operator, two countries, 50+ websites",
  description:
    "The story of OutMarketThem. Founded by Ben Wake in Queensland, Australia in 2024. Expanded to US operations in 2026. Honest marketing for trades businesses.",
};

const values = [
  {
    icon: ShieldCheck,
    title: "Honest diagnosis first",
    body: "We show you the problem before we sell you the solution. If nothing is broken, we tell you  -  even when there's money in pretending otherwise.",
  },
  {
    icon: Scale,
    title: "Fixed prices, no surprises",
    body: "What you're quoted is what you pay. No scope creep, no 'strategy sessions' tacked on later, no change orders that triple the invoice.",
  },
  {
    icon: Clock,
    title: "Speed over ceremony",
    body: "Fourteen days to launch, not three months of meetings. If you're waiting on me, I've failed. Trades businesses don't have time to be a project.",
  },
  {
    icon: Handshake,
    title: "Built to outlast me",
    body: "You own the work. You own the code, the domain, the hosting, the analytics, the ad accounts. If we part ways tomorrow, you take all of it with you.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="One operator, two countries, 50+ websites."
        subtitle="The story of OutMarketThem."
      />

      {/* FOUNDER STORY */}
      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <PlaceholderImage
              label="Ben Wake"
              caption="Founder  -  Queensland, Australia"
              tone="amber"
              aspect="4 / 5"
            />
            <div className="mt-5 grid grid-cols-3 gap-3">
              <PlaceholderImage caption="At work" tone="warm" aspect="1 / 1" />
              <PlaceholderImage caption="Build #38" tone="teal" aspect="1 / 1" />
              <PlaceholderImage caption="Brisbane" tone="sage" aspect="1 / 1" />
            </div>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-muted max-w-prose">
            <p>
              OutMarketThem started because I watched trades businesses with good reputations  -  guys who showed up on time, did quality work, treated customers well  -  lose out to competitors whose only advantage was a better website and a functional Google Ads account.
            </p>
            <p>
              I started the first version of this in Queensland in 2024. One plumber, one electrician, a bin cleaner, a landscaper. Word-of-mouth referrals kept the builds coming. By the end of the first year I&apos;d shipped 20 sites and heard the same story from every single client: &ldquo;The last agency took four months and $8,000 and gave us something we can&apos;t even update ourselves.&rdquo;
            </p>
            <p>
              The model wasn&apos;t complicated. Pick one trade-friendly price. Ship in two weeks. Use platforms the client can own and move. Don&apos;t charge a retainer for work you aren&apos;t doing. Most of what people call &ldquo;innovation&rdquo; in the web industry is just getting out of the client&apos;s way.
            </p>
            <p>
              Year two was about finding out whether the model holds at scale. It does. I shipped another 30+ sites across Australia, added the Rescue services for ad accounts, and kept working as one person because adding employees breaks the price.
            </p>
            <p>
              In 2026 I opened US operations. Same model, same price, same promise. Delaware LLC for the US, the existing Australian entity for AU work. Time zones actually help  -  I work a split schedule that covers most of the business hours in both markets.
            </p>
            <p className="font-medium text-ink">
              Two years. 50+ sites. One person. That&apos;s the entire pitch.
            </p>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="section bg-cream-card border-y border-border">
        <div className="container-page">
          <SectionHeader
            eyebrow="Team"
            title="Who's behind OutMarketThem?"
            subtitle="One person. That's not a bug, it's the product."
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <PlaceholderImage
              label="Ben Wake"
              caption="Founder & Builder"
              tone="warm"
              aspect="4 / 5"
            />
            <div className="space-y-5 text-lg leading-relaxed text-muted max-w-prose">
              <h3 className="text-ink">Ben Wake  -  Founder & Builder</h3>
              <p>
                I grew up around small businesses in regional Australia. Trade people were my family, my neighbours, the guys who fixed things when they broke. They were also the people most often ripped off by &ldquo;digital marketers&rdquo; who sold fancy decks and delivered nothing.
              </p>
              <p>
                Before OutMarketThem I spent seven years in software product and growth  -  shipping, testing, measuring, fixing. The same instincts carry over: find what&apos;s broken, fix the root cause, measure what changed, move on. No mystique, no jargon, no ceremony.
              </p>
              <p className="font-medium text-ink">
                No team, no hierarchy, no account managers. Just me.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section">
        <div className="container-page">
          <SectionHeader
            eyebrow="Values"
            title="Four things I won't compromise on."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="card p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal/10 text-teal">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5">{v.title}</h3>
                  <p className="mt-3 text-muted leading-relaxed">{v.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY AU + USA */}
      <section className="section bg-cream-card border-y border-border">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <span className="eyebrow">Australia & USA</span>
            <h2 className="mt-3">Two countries, one operation.</h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted max-w-prose">
              <p>
                The Australian business was built first, in Queensland, starting 2024. It still runs under EHUSTLE PTY LTD (ABN 21 679 259 440). In 2026 I opened US operations under OutMarketThem LLC, registered in Delaware.
              </p>
              <p>
                Same founder, same process, same price. The only difference is which entity invoices you  -  Australian clients are invoiced in AUD by the Australian entity, US clients in USD by the US entity. That keeps tax and consumer law clean on both sides.
              </p>
              <p>
                Time zones are actually the easy part. I work a split schedule: US afternoons and Australian mornings. Whichever country you&apos;re in, you&apos;ll get a reply inside normal business hours.
              </p>
            </div>
          </div>
          <div className="space-y-5">
            <EntityCard
              country="United States"
              legal="OutMarketThem LLC"
              detail="Delaware, USA · Since 2026"
              items={["US-entity invoicing in USD", "Operates across all 50 states", "US consumer protection compliance"]}
            />
            <EntityCard
              country="Australia"
              legal="EHUSTLE PTY LTD"
              detail="Queensland · Since 2024 · ABN 21 679 259 440"
              items={["AU-entity invoicing in AUD", "Australia-wide service", "Australian Consumer Law compliance"]}
            />
          </div>
        </div>
      </section>

      <FinalCTA
        heading="Want to work together?"
        subhead="Start with a $100 deposit. Or ask a question first  -  I read every email."
      />
    </>
  );
}

function EntityCard({
  country,
  legal,
  detail,
  items,
}: {
  country: string;
  legal: string;
  detail: string;
  items: string[];
}) {
  return (
    <div className="card p-6">
      <div className="text-xs font-semibold uppercase tracking-wider text-teal">{country}</div>
      <div className="mt-2 font-serif text-xl font-semibold text-ink">{legal}</div>
      <div className="text-sm text-muted">{detail}</div>
      <ul className="mt-4 space-y-2">
        {items.map((i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm text-ink">
            <Check size={14} className="mt-1 shrink-0 text-sage" />
            <span>{i}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
