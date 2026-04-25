"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const links = [
  { href: "/websites", label: "Websites" },
  { href: "/rescue", label: "Rescue" },
  { href: "/advisory", label: "Advisory" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 ${
        scrolled ? "bg-cream/90 backdrop-blur-md border-b border-border/70" : "bg-cream"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <Logo />

        <nav aria-label="Primary" className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[0.95rem] font-medium text-ink/80 hover:text-clay"
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact#start" className="btn-primary !py-2.5 !px-5 text-sm">
            Start - $100 deposit
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-ink"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-cream">
          <nav aria-label="Mobile" className="container-page flex flex-col py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-ink border-b border-border/60 last:border-b-0"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact#start"
              onClick={() => setOpen(false)}
              className="btn-primary mt-4 w-full"
            >
              Start - $100 deposit
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
