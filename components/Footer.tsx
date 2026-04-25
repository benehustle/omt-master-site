import Link from "next/link";
import Logo from "./Logo";

const services = [
  { href: "/websites", label: "Websites" },
  { href: "/rescue", label: "Rescue" },
  { href: "/advisory", label: "Advisory" },
];
const company = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];
const legal = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/refunds", label: "Refunds" },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-cream-card">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted">
              Custom websites and marketing rescue for trades businesses in the US and Australia. Built by one
              person, on purpose.
            </p>
            <p className="mt-4 text-xs text-muted">
              US payments via Stripe when enabled. Questions:{" "}
              <a href="mailto:ben@outmarketthem.com" className="link-underline">
                ben@outmarketthem.com
              </a>
            </p>
          </div>

          <FooterCol title="Services" links={services} />
          <FooterCol title="Company" links={company} />
          <FooterCol title="Legal" links={legal} />
        </div>

        <div className="mt-12 grid gap-6 border-t border-border pt-8 text-xs text-muted md:grid-cols-2">
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-wider text-teal">United States</div>
            <p className="mt-2 leading-relaxed">
              <span className="font-medium text-ink">OutMarketThem LLC</span>
              <br />
              Delaware, USA (registered agent on file)
              <br />
              USD invoicing for US clients
            </p>
          </div>
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-wider text-teal">Australia</div>
            <p className="mt-2 leading-relaxed">
              <span className="font-medium text-ink">EHUSTLE PTY LTD</span>
              <br />
              Queensland, Australia · ABN 21 679 259 440
              <br />
              AUD invoicing for Australian clients
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} OutMarketThem</p>
          <p className="flex flex-wrap gap-x-4 gap-y-1">
            <Link href="/privacy" className="link-underline">
              Privacy
            </Link>
            <Link href="/terms" className="link-underline">
              Terms
            </Link>
            <Link href="/refunds" className="link-underline">
              Refunds
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-teal">{title}</h4>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-sm text-ink/85 hover:text-clay">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
