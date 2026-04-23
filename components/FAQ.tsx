"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export type FAQItem = { q: string; a: string };

export default function FAQ({ items, startOpen = 0 }: { items: FAQItem[]; startOpen?: number | null }) {
  const [open, setOpen] = useState<number | null>(startOpen);
  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="py-5">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-start justify-between gap-6 text-left"
            >
              <span className="font-serif text-lg font-medium text-ink md:text-xl">
                {item.q}
              </span>
              <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cream border border-border text-ink">
                {isOpen ? <Minus size={15} /> : <Plus size={15} />}
              </span>
            </button>
            {isOpen && (
              <div className="mt-3 max-w-prose text-base leading-relaxed text-muted">
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
