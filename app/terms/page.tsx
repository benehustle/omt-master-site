import LegalLayout from "@/components/LegalLayout";

export const metadata = {
  title: "Terms of Service",
  description: "The terms that govern OutMarketThem services.",
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" updated="April 2026">
      <p>
        These Terms apply to services provided by OutMarketThem LLC (Delaware, USA) or EHUSTLE PTY LTD (Queensland, Australia, ABN 21 679 259 440) — together referred to as <strong>&ldquo;OutMarketThem&rdquo;</strong>, <strong>&ldquo;we&rdquo;</strong>, or <strong>&ldquo;us&rdquo;</strong>. The entity that invoices you is the contracting entity for these Terms.
      </p>
      <p>
        By paying a deposit, subscribing to a service, or engaging us in writing, you agree to these Terms.
      </p>

      <h2>Services offered</h2>
      <ul>
        <li><strong>Website builds</strong> — custom website design and build for a one-time fee of US$997 (or AUD equivalent), paid as a US$100 deposit and US$897 balance.</li>
        <li><strong>Ongoing hosting and support</strong> — optional monthly service at US$200/month, cancellable at any time.</li>
        <li><strong>Marketing Rescue</strong> — one-time audit and rebuild services at fixed fees (US$997 for Google Ads, US$997 for Meta Ads, US$1,497 for SEO, US$2,497 for the full bundle).</li>
        <li><strong>Advisory Membership</strong> — monthly group-call membership at US$99/month.</li>
      </ul>
      <p>
        For Australian customers, invoices are issued in AUD by EHUSTLE PTY LTD at the prevailing AUD-equivalent price and include GST where applicable.
      </p>

      <h2>Deposit and balance (website builds)</h2>
      <p>
        To start a website build, you pay a US$100 deposit. The deposit holds your build slot and is fully refundable up until the point you approve the design. The US$897 balance is due upon approval of the design. Once you approve the design, the US$897 balance is non-refundable (see the <a href="/refunds">Refunds Policy</a>).
      </p>

      <h2>Turnaround</h2>
      <p>
        Website builds are delivered within 14 calendar days from receipt of the deposit and completed questionnaire, assuming you respond to design review requests within 48 hours. If we miss the 14-day window because of us, we refund the build in full. If delays are caused by waiting on your feedback, the 14-day clock pauses.
      </p>

      <h2>Revisions</h2>
      <p>
        Each website build includes one round of revisions on the initial design. Additional revision rounds are billed at US$150/hour, in 30-minute increments, quoted and approved in writing before we start.
      </p>

      <h2>Ownership</h2>
      <p>
        Upon full payment, you own the final website files, content, and designs we deliver. We grant you a perpetual, unlimited license to the work. We retain the right to display the project in our portfolio and case studies unless you ask in writing for us not to.
      </p>

      <h2>Hosting and ongoing support</h2>
      <p>
        If you subscribe to the US$200/month ongoing plan, it includes hosting, SSL, unlimited small content updates, and a monthly SEO check-in. The plan is billed monthly and can be cancelled at any time with 7 days&apos; notice. On cancellation, we hand over the hosting account and any domain registrations in your name.
      </p>

      <h2>Advisory Membership</h2>
      <p>
        The US$99/month Advisory Membership grants access to three weekly live group calls, their recordings, and the members-only Slack channel, for the month that is paid for. It can be cancelled at any time. No refunds are issued for partial months.
      </p>

      <h2>Rescue Services</h2>
      <p>
        Rescue Services are one-time engagements. The fixed fee includes the audit, the rebuild, and a 30-day post-rebuild check-in. Ongoing management is not included. If during the initial audit we determine there is no material improvement to be made, we will not proceed with the rebuild and will refund the deposit.
      </p>

      <h2>Your responsibilities</h2>
      <ul>
        <li>Provide accurate business information, copy, images, and account access as needed.</li>
        <li>Respond to review and feedback requests within 48 hours to meet delivery windows.</li>
        <li>Maintain the legal right to any content, images, or assets you supply to us.</li>
      </ul>

      <h2>Warranties and liability</h2>
      <p>
        We warrant that we will perform the services with reasonable skill and care. We do not warrant specific business outcomes (rankings, ad performance, leads, revenue) — too many factors are outside our control. To the maximum extent permitted by law, our total aggregate liability to you for any claim is limited to the total fees you paid us in the 12 months preceding the claim.
      </p>
      <p>
        Nothing in these Terms excludes or limits any consumer rights you have that cannot be excluded under applicable law, including the Australian Consumer Law for Australian customers and US state consumer protection statutes for US customers.
      </p>

      <h2>Termination</h2>
      <p>
        Either party may terminate an ongoing engagement (hosting plan or Advisory Membership) at any time with notice. For one-time engagements (website builds, Rescue Services), refund entitlements are governed by the <a href="/refunds">Refunds Policy</a>.
      </p>

      <h2>Governing law</h2>
      <p>
        For US customers, these Terms are governed by the laws of the State of Delaware, and the courts of Delaware have exclusive jurisdiction. For Australian customers, these Terms are governed by the laws of Queensland, Australia, and the courts of Queensland have exclusive jurisdiction.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these Terms? Email <a href="mailto:ben@outmarketthem.com">ben@outmarketthem.com</a>.
      </p>
    </LegalLayout>
  );
}
