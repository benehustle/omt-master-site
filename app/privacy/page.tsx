import LegalLayout from "@/components/LegalLayout";

export const metadata = {
  title: "Privacy Policy",
  description: "How OutMarketThem collects, uses, and protects your data.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="April 2026">
      <p>
        This Privacy Policy explains how OutMarketThem LLC (Delaware, USA) and EHUSTLE PTY LTD (Queensland, Australia, ABN 21 679 259 440) (together, <strong>&ldquo;OutMarketThem&rdquo;</strong>, <strong>&ldquo;we&rdquo;</strong>, <strong>&ldquo;us&rdquo;</strong>) collect, use, and protect your information when you visit outmarketthem.com or engage us for services.
      </p>
      <p>
        By using the website or engaging our services, you agree to this policy.
      </p>

      <h2>Who controls your data</h2>
      <p>
        If you are a US customer, your data controller is OutMarketThem LLC. If you are an Australian customer, your data controller is EHUSTLE PTY LTD. If you contact us and we&apos;re not sure which entity applies, we&apos;ll route the inquiry based on your address.
      </p>

      <h2>What we collect</h2>
      <ul>
        <li><strong>Contact details</strong> — name, email, phone, business name, and address when you email us or fill out a form.</li>
        <li><strong>Project information</strong> — the content, images, and details you provide to us for your website or marketing services.</li>
        <li><strong>Payment details</strong> — processed by our payment provider (Stripe). We do not store card numbers.</li>
        <li><strong>Website analytics</strong> — standard aggregated metrics (page views, referrer, approximate location, device type) via Google Analytics 4.</li>
        <li><strong>Cookies</strong> — minimal first-party cookies to remember site preferences and anonymous analytics cookies.</li>
      </ul>

      <h2>How we use your data</h2>
      <ul>
        <li>To deliver the services you have hired us for.</li>
        <li>To reply to questions you send us.</li>
        <li>To process payments and refunds.</li>
        <li>To improve our services and our website.</li>
        <li>To comply with tax, accounting, and legal obligations.</li>
      </ul>
      <p>
        We do not sell your data, and we do not use it to train AI models.
      </p>

      <h2>Who we share data with</h2>
      <p>We share the minimum necessary data with trusted vendors:</p>
      <ul>
        <li><strong>Stripe</strong> — payment processing.</li>
        <li><strong>Google</strong> — analytics, Google Workspace email, Google Ads (when relevant to your project).</li>
        <li><strong>Netlify / Vercel / similar</strong> — website hosting.</li>
        <li><strong>Formspree or similar</strong> — contact form delivery.</li>
      </ul>
      <p>
        Each of these vendors has its own privacy policy. We only share what is needed for them to do their job.
      </p>

      <h2>How long we keep your data</h2>
      <p>
        Project files and invoices are kept for 7 years for tax and accounting reasons. Contact form submissions from people who did not become clients are deleted within 12 months. You can request deletion at any time.
      </p>

      <h2>Your rights — US customers</h2>
      <p>
        If you live in the United States, you may have additional rights under state privacy laws (for example, CCPA in California). You have the right to know what personal data we hold, request deletion, and opt out of any sale of personal data (we don&apos;t sell any).
      </p>

      <h2>Your rights — Australian customers</h2>
      <p>
        If you live in Australia, the Australian Privacy Principles under the Privacy Act 1988 (Cth) apply. You have the right to access your personal information, correct it, and make a complaint if you think we&apos;ve breached the APPs. Contact us first; if you&apos;re not satisfied, you can contact the Office of the Australian Information Commissioner (OAIC).
      </p>

      <h2>Security</h2>
      <p>
        We use industry-standard security practices — encrypted connections, two-factor authentication on our accounts, access control on project files. No system is perfectly secure; we do our best and we notify you promptly if anything goes wrong.
      </p>

      <h2>Children</h2>
      <p>
        Our services are for business owners. We do not knowingly collect data from anyone under 16.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The &ldquo;Last updated&rdquo; date at the top reflects the most recent revision. For material changes, we&apos;ll notify active clients by email.
      </p>

      <h2>Contact</h2>
      <p>
        Email <a href="mailto:ben@outmarketthem.com">ben@outmarketthem.com</a> with any privacy question. We answer within 4 business hours.
      </p>
    </LegalLayout>
  );
}
