import { Check } from "lucide-react";

export type TrustItem = string;

export default function TrustStrip({ items }: { items: TrustItem[] }) {
  return (
    <div className="border-y border-border bg-cream-card">
      <div className="container-page flex flex-wrap justify-center gap-x-8 gap-y-3 py-4 text-sm text-muted md:py-5">
        {items.map((text) => (
          <span key={text} className="inline-flex max-w-[20rem] items-start gap-2 md:max-w-none">
            <Check size={16} className="mt-0.5 shrink-0 text-sage" aria-hidden />
            <span className="leading-snug">{text}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
