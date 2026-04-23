import Link from "next/link";
import Monogram from "./Monogram";

export default function Logo({ href = "/" }: { href?: string }) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-2.5"
      aria-label="OutMarketThem home"
    >
      <Monogram size={36} />
      <span className="font-serif text-[1.15rem] font-semibold tracking-tight text-ink">
        OutMarketThem
      </span>
    </Link>
  );
}
