import Link from "next/link";
import { Mail, MapPin, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import FAQ from "@/components/FAQ";
import CheckoutOrEmail from "@/components/CheckoutOrEmail";
import {
  formspreeAction,
  siteEmail,
  stripeAdvisoryUrl,
  stripeRescueBundleUrl,
  stripeRescueGoogleUrl,
  stripeRescueMetaUrl,
  stripeRescueSeoUrl,
  stripeWebsiteDepositUrl,
} from "@/lib/site";

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
    email: siteEmail,
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
        trustItems={[
          "OutMarketThem LLC (Delaware) · USD for US clients",
          "Typical reply inside 4 business hours",
          "Stripe + Formspree: enable env vars for one-click pay and forms",
        ]}
      />

      {/* US trust strip */}
      <section className="border-b border-border bg-cream-card py-6">
        <div className="container-page">
          <p className="text-center text-sm text-muted md:text-base">
            <span className="font-medium text-ink">US clients:</span> invoiced in USD by{" "}
            <span className="text-ink">OutMarketThem LLC</span> (Delaware). Payments via Stripe when
            checkout links are live; otherwise email Ben to start. Agreements are covered by our{" "}
            <Link href="/terms" className="link-underline">
              Terms
            </Link>
            .
          </p>
        </div>
      </section>

      {/* TWO PATHS */}
      <section id="start" className="section">
        <div className="container-page grid gap-6 md:grid-cols-2">
          <div className="card flex flex-col p-8 ring-2 ring-clay/30">
            <span className="eyebrow">Website build</span>
            <h2 className="mt-3 text-2xl md:text-3xl">Ready to go? Start here.</h2>
            <p className="mt-4 text-muted leading-relaxed">
              Pay the $100 deposit. You&apos;ll get a short questionnaire within 5 minutes. I&apos;ll have a
              mockup to you within 5 business days. If the design isn&apos;t right, the deposit comes back.
              No awkward conversations.
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
            <CheckoutOrEmail
              stripeUrl={stripeWebsiteDepositUrl}
              mailtoSubject="Website build - $100 deposit"
              mailtoBody="I'd like to start a website build. Business name, trade, and city/state:"
              className="btn-primary mt-7 w-full justify-center"
              fallbackChildren={<>Email to start ($100 deposit) →</>}
            >
              Pay $100 deposit (secure checkout) →
            </CheckoutOrEmail>
            <p className="mt-3 text-center text-xs text-muted">
              {stripeWebsiteDepositUrl
                ? "Secure Stripe checkout. Refunds processed in 3–5 business days."
                : "Stripe checkout: set NEXT_PUBLIC_STRIPE_WEBSITE_DEPOSIT_URL in your environment to enable one-click pay."}
            </p>
          </div>

          <div id="ask" className="card flex flex-col p-8">
            <span className="eyebrow">Ask a question</span>
            <h2 className="mt-3 text-2xl md:text-3xl">Not sure yet? Email first.</h2>
            <p className="mt-4 text-muted leading-relaxed">
              No pressure. Send me what&apos;s on your mind and I&apos;ll get back to you within 4 business
              hours. Most people email twice, get their questions answered, then start the project.
            </p>

            {formspreeAction ? (
              <form action={formspreeAction} method="POST" className="mt-6 space-y-4">
                <input type="hidden" name="_subject" value="OutMarketThem contact form" />
                <div>
                  <label htmlFor="business" className="block text-sm font-medium text-ink">
                    Business name
                  </label>
                  <input
                    id="business"
                    name="business"
                    className="mt-1.5 w-full rounded-md border border-border bg-cream-card px-4 py-3 text-ink placeholder:text-muted focus:border-clay focus:outline-none focus:ring-2 focus:ring-clay/20"
                    placeholder="e.g. Smith Plumbing LLC"
                  />
                </div>
                <div>
                  <label htmlFor="trade" className="block text-sm font-medium text-ink">
                    Trade / industry
                  </label>
                  <input
                    id="trade"
                    name="trade"
                    className="mt-1.5 w-full rounded-md border border-border bg-cream-card px-4 py-3 text-ink placeholder:text-muted focus:border-clay focus:outline-none focus:ring-2 focus:ring-clay/20"
                    placeholder="e.g. HVAC, roofing, electrical"
                  />
                </div>
                <div>
                  <label htmlFor="service_area" className="block text-sm font-medium text-ink">
                    Service area (city & state)
                  </label>
                  <input
                    id="service_area"
                    name="service_area"
                    className="mt-1.5 w-full rounded-md border border-border bg-cream-card px-4 py-3 text-ink placeholder:text-muted focus:border-clay focus:outline-none focus:ring-2 focus:ring-clay/20"
                    placeholder="e.g. Austin, TX"
                  />
                </div>
                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-ink">
                    Current website (if any)
                  </label>
                  <input
                    id="website"
                    name="website"
                    type="url"
                    className="mt-1.5 w-full rounded-md border border-border bg-cream-card px-4 py-3 text-ink placeholder:text-muted focus:border-clay focus:outline-none focus:ring-2 focus:ring-clay/20"
                    placeholder="https://"
                  />
                </div>
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-ink">
                    Interested in
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    className="mt-1.5 w-full rounded-md border border-border bg-cream-card px-4 py-3 text-ink focus:border-clay focus:outline-none focus:ring-2 focus:ring-clay/20"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    <option value="Website ($997)">Website ($997)</option>
                    <option value="Marketing rescue">Marketing rescue</option>
                    <option value="Advisory ($99/mo)">Advisory ($99/mo)</option>
                    <option value="General question">General question</option>
                  </select>
                </div>
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
                  <label htmlFor="email-address" className="block text-sm font-medium text-ink">
                    Email
                  </label>
                  <input
                    id="email-address"
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
                  Send message
                </button>
                <p className="text-center text-xs text-muted">
                  No spam. I only use this to reply to you. See{" "}
                  <Link href="/privacy" className="link-underline">
                    Privacy
                  </Link>
                  .
                </p>
              </form>
            ) : (
              <div className="mt-6 rounded-lg border border-border bg-cream p-5 text-sm text-muted">
                <p>
                  Form endpoint not configured. Email{" "}
                  <a href={`mailto:${siteEmail}`} className="link-underline font-medium text-ink">
                    {siteEmail}
                  </a>{" "}
                  or set <code className="rounded bg-border/50 px-1 text-xs">NEXT_PUBLIC_FORMSPREE_FORM_ID</code>{" "}
                  for the contact form.
                </p>
              </div>
            )}
            <p className="mt-4 text-center text-xs text-muted">
              Or email direct:{" "}
              <a href={`mailto:${siteEmail}`} className="link-underline">
                {siteEmail}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* RESCUE + ADVISORY STARTERS */}
      <section className="section bg-cream-card border-y border-border">
        <div className="container-page">
          <SectionHeader
            eyebrow="Rescue & advisory"
            title="Start a rescue or membership."
            subtitle="Each link is the same process: deposit first, then we schedule the audit or onboarding. Use the card that matches what you want."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <RescueStartCard
              id="start-google"
              title="Google Ads Rescue"
              price="$997"
              body="$100 deposit locks the rebuild slot after the audit. If there is nothing to fix, you do not pay for the rebuild."
              stripeUrl={stripeRescueGoogleUrl}
              mailtoSubject="Google Ads Rescue - $100 deposit"
            />
            <RescueStartCard
              id="start-meta"
              title="Meta Ads Rescue"
              price="$997"
              body="Same deposit model as Google Ads Rescue."
              stripeUrl={stripeRescueMetaUrl}
              mailtoSubject="Meta Ads Rescue - $100 deposit"
            />
            <RescueStartCard
              id="start-seo"
              title="SEO Rescue"
              price="$1,497"
              body="$100 deposit to start; balance follows the same approval rhythm as other rescues."
              stripeUrl={stripeRescueSeoUrl}
              mailtoSubject="SEO Rescue - $100 deposit"
            />
            <RescueStartCard
              id="start-bundle"
              title="Full Rescue Bundle"
              price="$2,497"
              body="All three rescues together. Deposit starts the bundle the same way as a single rescue."
              stripeUrl={stripeRescueBundleUrl}
              mailtoSubject="Full Rescue Bundle - $100 deposit"
            />
            <div id="start-advisory" className="card p-8 md:col-span-2">
              <span className="eyebrow">Advisory</span>
              <h3 className="mt-2 text-2xl font-semibold text-ink md:text-3xl">Weekly Advisory membership</h3>
              <p className="mt-3 max-w-prose text-muted">
                $99/month. Cancel anytime. Use Stripe when configured, or email to join the next cohort.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <CheckoutOrEmail
                  stripeUrl={stripeAdvisoryUrl}
                  mailtoSubject="Weekly Advisory - start membership"
                  mailtoBody="I'd like to join Weekly Advisory. Business, trade, and timezone:"
                  className="btn-primary"
                  fallbackChildren={<>Email to join Advisory →</>}
                >
                  Pay / subscribe (Stripe) →
                </CheckoutOrEmail>
                <Link href="/advisory" className="btn-secondary">
                  Read details
                </Link>
              </div>
              <p className="mt-3 text-xs text-muted">
                Set <code className="rounded bg-border/40 px-1">NEXT_PUBLIC_STRIPE_ADVISORY_URL</code> for
                one-click signup.
              </p>
            </div>
          </div>
        </div>
      </section>

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
            body={
              <a href={`mailto:${siteEmail}`} className="link-underline">
                {siteEmail}
              </a>
            }
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

      <section className="section">
        <div className="container-page">
          <SectionHeader eyebrow="FAQ" title="Before you email." />
          <div className="mt-10">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-cream-card pb-16 pt-12">
        <div className="container-page grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-lg">United States</h3>
            <p className="mt-2 text-muted">
              OutMarketThem LLC
              <br />
              Delaware, USA (registered agent on file)
              <br />
              <a href={`mailto:${siteEmail}`} className="link-underline">
                {siteEmail}
              </a>
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
              <a href={`mailto:${siteEmail}`} className="link-underline">
                {siteEmail}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function RescueStartCard({
  id,
  title,
  price,
  body,
  stripeUrl,
  mailtoSubject,
}: {
  id: string;
  title: string;
  price: string;
  body: string;
  stripeUrl?: string;
  mailtoSubject: string;
}) {
  return (
    <div id={id} className="card flex flex-col p-8 scroll-mt-24">
      <h3 className="text-xl font-semibold text-ink md:text-2xl">{title}</h3>
      <p className="mt-1 font-serif text-2xl text-clay">{price}</p>
      <p className="mt-3 flex-1 text-sm text-muted">{body}</p>
      <CheckoutOrEmail
        stripeUrl={stripeUrl}
        mailtoSubject={mailtoSubject}
        mailtoBody="Business name, website or ads account context, and best email:"
        className="btn-primary mt-6 w-full justify-center"
        fallbackChildren={<>Email to start ($100 deposit) →</>}
      >
        Pay $100 deposit (Stripe) →
      </CheckoutOrEmail>
    </div>
  );
}

function InfoCard({
  icon: Icon,
  title,
  body,
}: {
  icon: React.ComponentType<{ size?: number | string; className?: string }>;
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
