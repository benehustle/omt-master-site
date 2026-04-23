import Link from "next/link";
import { Mail, MapPin, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import FAQ from "@/components/FAQ";

export const metadata = {
  title: "Contact  -  Ask a question or start a project",
  description:
    "Email Ben directly at ben@outmarketthem.com, or start a project with a $100 refundable deposit. Response within 4 business hours.",
};

const faqs = [
  {
    q: "How quickly will I hear back?",
    a: "Most emails get a reply within 4 business hours. Emails sent overnight in your timezone usually have a reply by the time you're back at your desk.",
  },
  {
    q: "Should I email or pay the deposit?",
    a: "If you've decided you want a site, pay the deposit. It's refundable and it saves a back-and-forth. If you're not sure yet, email. I'm happy to answer questions without any pressure to buy.",
  },
  {
    q: "Do you do phone calls?",
    a: "Yes, but I prefer email for the first exchange so I have a record of what you need. Once the project starts, we'll set up calls as needed  -  usually one at the start, one to walk the preview, one to launch.",
  },
  {
    q: "What time zone are you in?",
    a: "Queensland, Australia (AEST)  -  but I work a split schedule covering US afternoons and Australian mornings. Either way, you'll get a reply inside normal business hours for your time zone.",
  },
];

export default function ContactPage() {
  const localBiz = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "OutMarketThem",
    email: "ben@outmarketthem.com",
    url: "https://outmarketthem.com",
    address: [
      { "@type": "PostalAddress", addressCountry: "US", addressRegion: "DE" },
      { "@type": "PostalAddress", addressCountry: "AU", addressRegion: "QLD" },
    ],
    areaServed: ["United States", "Australia"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBiz) }}
      />

      <PageHero
        eyebrow="Contact"
        title="Questions? I read every email."
        subtitle="For site builds, skip the email and start with a deposit."
      />

      {/* TWO PATHS */}
      <section id="start" className="section">
        <div className="container-page grid gap-6 md:grid-cols-2">
          {/* Start a project */}
          <div className="card flex flex-col p-8 ring-2 ring-clay/30">
            <span className="eyebrow">Start a project</span>
            <h2 className="mt-3 text-2xl md:text-3xl">Ready to go? Start here.</h2>
            <p className="mt-4 text-muted leading-relaxed">
              Pay the $100 deposit. You&apos;ll get a short questionnaire within 5 minutes. I&apos;ll have a mockup to you within 5 business days. If the design isn&apos;t right, the deposit comes back. No awkward conversations.
            </p>
            <div className="mt-6 space-y-2 text-sm text-ink">
              <div className="flex items-center gap-2">
                <span className="font-serif text-base font-semibold">$100</span>
                <span className="text-muted">refundable deposit</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-base font-semibold">$897</span>
                <span className="text-muted">on design approval</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-base font-semibold">14 days</span>
                <span className="text-muted">from deposit to live site</span>
              </div>
            </div>
            {/* Placeholder Stripe checkout link */}
            <a
              href="https://buy.stripe.com/test_deposit_placeholder"
              className="btn-primary mt-7 w-full justify-center"
            >
              Pay $100 Deposit →
            </a>
            <p className="mt-3 text-center text-xs text-muted">
              Secure Stripe checkout. Refunds processed in 3–5 business days.
            </p>
          </div>

          {/* Ask a question */}
          <div className="card flex flex-col p-8">
            <span className="eyebrow">Ask a question</span>
            <h2 className="mt-3 text-2xl md:text-3xl">Not sure yet? Email first.</h2>
            <p className="mt-4 text-muted leading-relaxed">
              No pressure. Send me what&apos;s on your mind and I&apos;ll get back to you within 4 business hours. Most people email twice, get their questions answered, then start the project.
            </p>

            <form
              action="https://formspree.io/f/REPLACE_WITH_FORM_ID"
              method="POST"
              className="mt-6 space-y-4"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-ink">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="mt-1.5 w-full rounded-md border border-border bg-cream-card px-4 py-3 text-ink placeholder:text-muted focus:border-clay focus:outline-none focus:ring-2 focus:ring-clay/20"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-ink">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="mt-1.5 w-full rounded-md border border-border bg-cream-card px-4 py-3 text-ink placeholder:text-muted focus:border-clay focus:outline-none focus:ring-2 focus:ring-clay/20"
                  placeholder="you@yourbusiness.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-ink">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="mt-1.5 w-full rounded-md border border-border bg-cream-card px-4 py-3 text-ink placeholder:text-muted focus:border-clay focus:outline-none focus:ring-2 focus:ring-clay/20"
                  placeholder="What's going on?"
                />
              </div>
              <button type="submit" className="btn-secondary w-full justify-center">
                Send Message
              </button>
              <p className="text-center text-xs text-muted">
                Or email direct: <a href="mailto:ben@outmarketthem.com" className="link-underline">ben@outmarketthem.com</a>
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* RESPONSE TIME + DETAILS */}
      <section className="section bg-cream-card border-y border-border">
        <div className="container-page grid gap-6 md:grid-cols-3">
          <InfoCard
            icon={Clock}
            title="Response time"
            body="I respond to most emails within 4 business hours."
          />
          <InfoCard
            icon={Mail}
            title="Direct email"
            body={<a href="mailto:ben@outmarketthem.com" className="link-underline">ben@outmarketthem.com</a>}
          />
          <InfoCard
            icon={MapPin}
            title="Where I work"
            body={
              <>
                Queensland, Australia (HQ)
                <br />
                Delaware, USA (LLC)
              </>
            }
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-page">
          <SectionHeader eyebrow="FAQ" title="Before you email." />
          <div className="mt-10">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS FOOTER */}
      <section className="border-t border-border bg-cream-card pb-16 pt-12">
        <div className="container-page grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-lg">United States</h3>
            <p className="mt-2 text-muted">
              OutMarketThem LLC
              <br />
              Delaware, USA (registered agent on file)
              <br />
              <a href="mailto:ben@outmarketthem.com" className="link-underline">ben@outmarketthem.com</a>
            </p>
          </div>
          <div>
            <h3 className="text-lg">Australia</h3>
            <p className="mt-2 text-muted">
              EHUSTLE PTY LTD
              <br />
              Queensland, Australia
              <br />
              ABN 21 679 259 440
              <br />
              <a href="mailto:ben@outmarketthem.com" className="link-underline">ben@outmarketthem.com</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function InfoCard({
  icon: Icon,
  title,
  body,
}: {
  icon: React.ComponentType<{ size?: number }>;
  title: string;
  body: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-teal/10 text-teal">
        <Icon size={20} />
      </div>
      <div>
        <div className="font-serif text-lg font-semibold text-ink">{title}</div>
        <div className="mt-1 text-muted">{body}</div>
      </div>
    </div>
  );
}
