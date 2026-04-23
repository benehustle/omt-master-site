import LegalLayout from "@/components/LegalLayout";

export const metadata = {
  title: "Refund Policy",
  description: "How refunds work at OutMarketThem. Deposits are refundable. Final payments after approval are not.",
};

export default function RefundsPage() {
  return (
    <LegalLayout title="Refund Policy" updated="April 2026">
      <p>
        We keep refunds simple and in plain English. This policy applies to all services provided by OutMarketThem LLC (Delaware, USA) and EHUSTLE PTY LTD (Queensland, Australia, ABN 21 679 259 440).
      </p>

      <h2>Website builds — the short version</h2>
      <ul>
        <li><strong>$100 deposit:</strong> fully refundable until you approve the design.</li>
        <li><strong>$897 balance:</strong> not refundable once you approve the design and the site goes live.</li>
      </ul>

      <h2>The longer version</h2>
      <h3>When you get a full deposit refund</h3>
      <p>
        You get your US$100 deposit back, in full, in any of these situations:
      </p>
      <ul>
        <li>You don&apos;t like the first design and, after one revision, still don&apos;t like it. You tell us, we refund you.</li>
        <li>We miss our 14-day delivery window for reasons that are our fault (the clock pauses if we&apos;re waiting on your feedback).</li>
        <li>You change your mind and cancel before we&apos;ve started work.</li>
        <li>We can&apos;t agree on the scope of your project and one of us walks away.</li>
      </ul>
      <p>
        Refunds are processed within 3–5 business days to the original payment method. We don&apos;t make you ask twice.
      </p>

      <h3>When the balance payment is not refundable</h3>
      <p>
        Once you have approved the design in writing (email counts) and we&apos;ve launched the site on your domain, the US$897 balance payment is non-refundable. At that point the work is done and the deliverable is yours.
      </p>
      <p>
        If something is factually wrong on the finished site — a typo, a broken link, a detail we got wrong — that&apos;s a fix, not a refund situation. We fix it fast and free.
      </p>

      <h2>Ongoing hosting & support ($200/month)</h2>
      <p>
        You can cancel the monthly plan at any time with 7 days&apos; notice. The current month stays active to the end of the billing period. No partial-month refunds.
      </p>

      <h2>Advisory Membership ($99/month)</h2>
      <p>
        Cancel any time. The current month stays active until the end of the billing period. No partial-month refunds.
      </p>

      <h2>Rescue Services</h2>
      <p>
        Rescue Services (Google Ads Rescue, Meta Ads Rescue, SEO Rescue, or the Full Bundle) are paid with a US$100 deposit and a balance on delivery. The deposit is refundable in either of these cases:
      </p>
      <ul>
        <li>During the initial audit call we determine there&apos;s no material improvement to make, and we won&apos;t proceed.</li>
        <li>You cancel before the audit call takes place.</li>
      </ul>
      <p>
        Once the rebuild work begins, the engagement cannot be refunded pro-rata — the work is done inside your accounts and can&apos;t be &ldquo;un-done.&rdquo;
      </p>

      <h2>Chargebacks</h2>
      <p>
        Please email us before opening a chargeback with your bank. We&apos;d rather refund you directly and quickly than dispute a chargeback. In practice, almost every refund is handled by email within the same business day.
      </p>

      <h2>Australian Consumer Law</h2>
      <p>
        If you&apos;re an Australian customer, the Australian Consumer Law provides you with consumer guarantees that can&apos;t be excluded. This refund policy is in addition to, not in place of, those rights. If you think we&apos;ve failed a consumer guarantee, tell us and we&apos;ll make it right.
      </p>

      <h2>US customers</h2>
      <p>
        US consumer protection laws vary by state. This policy is the baseline we offer everywhere; any state-specific rights that apply to you are preserved.
      </p>

      <h2>Contact</h2>
      <p>
        To request a refund or ask about this policy, email <a href="mailto:ben@outmarketthem.com">ben@outmarketthem.com</a>. We respond within 4 business hours.
      </p>
    </LegalLayout>
  );
}
