"use client";

import { useState, useMemo } from "react";
import PageHero from "@/components/PageHero";
import PlaceholderImage from "@/components/PlaceholderImage";
import FinalCTA from "@/components/FinalCTA";

type Project = {
  name: string;
  location: string;
  country: "Australia" | "USA";
  trade: string;
  note?: string;
  featured?: boolean;
  tone: "warm" | "teal" | "amber" | "sage";
};

const projects: Project[] = [
  { name: "BinPro", location: "Melbourne, VIC", country: "Australia", trade: "Bin Cleaning", note: "2 → 8 enquiries/week in first month", featured: true, tone: "warm" },
  { name: "Melbourne Mint", location: "Melbourne, VIC", country: "Australia", trade: "Cleaning", featured: true, tone: "amber" },
  { name: "Inspect Buy Drive", location: "Sydney, NSW", country: "Australia", trade: "Vehicle Inspection", note: "$4k/mo wasted spend found & fixed", featured: true, tone: "teal" },
  { name: "Plumbing Pro", location: "Brisbane, QLD", country: "Australia", trade: "Plumbing", tone: "teal" },
  { name: "Roofing Solutions", location: "Sydney, NSW", country: "Australia", trade: "Roofing", tone: "amber" },
  { name: "Electrical Services", location: "Melbourne, VIC", country: "Australia", trade: "Electrical", tone: "warm" },
  { name: "Fence & Deck Co", location: "Perth, WA", country: "Australia", trade: "Landscaping", tone: "sage" },
  { name: "Binbutler", location: "Gold Coast, QLD", country: "Australia", trade: "Bin Cleaning", tone: "warm" },
  { name: "Inspire Energy", location: "Adelaide, SA", country: "Australia", trade: "Solar/Electrical", tone: "amber" },
  { name: "Gutter Masters", location: "Newcastle, NSW", country: "Australia", trade: "Gutter Cleaning", tone: "sage" },
  { name: "Bin Cleaning Co", location: "Austin, TX", country: "USA", trade: "Bin Cleaning", tone: "warm" },
  { name: "Landscape Design", location: "Miami, FL", country: "USA", trade: "Landscaping", tone: "sage" },
  { name: "Pressure Washing Pros", location: "San Diego, CA", country: "USA", trade: "Pressure Washing", tone: "teal" },
  { name: "Gutter Guys", location: "Phoenix, AZ", country: "USA", trade: "Gutter Cleaning", tone: "amber" },
  { name: "Dallas Roofing", location: "Dallas, TX", country: "USA", trade: "Roofing", tone: "warm" },
  { name: "Atlantic Plumbing", location: "Charleston, SC", country: "USA", trade: "Plumbing", tone: "teal" },
];

type Filter = "All" | "Australia" | "USA" | "By Trade";

export default function WorkPage() {
  const [filter, setFilter] = useState<Filter>("All");
  const [trade, setTrade] = useState<string>("All");

  const trades = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.trade)))],
    []
  );

  const filtered = useMemo(() => {
    let list = projects;
    if (filter === "Australia" || filter === "USA") {
      list = list.filter((p) => p.country === filter);
    }
    if (filter === "By Trade" && trade !== "All") {
      list = list.filter((p) => p.trade === trade);
    }
    return list;
  }, [filter, trade]);

  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Fifty-plus trades sites across two countries."
        subtitle="A sample of recent builds. Tap any filter to narrow it down."
      />

      {/* FILTERS */}
      <section className="pb-6">
        <div className="container-page">
          <div className="flex flex-wrap gap-2">
            {(["All", "Australia", "USA", "By Trade"] as Filter[]).map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  filter === f
                    ? "border-clay bg-clay text-white"
                    : "border-border bg-cream-card text-ink hover:border-clay/60"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          {filter === "By Trade" && (
            <div className="mt-4 flex flex-wrap gap-2">
              {trades.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTrade(t)}
                  className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                    trade === t
                      ? "border-teal bg-teal text-white"
                      : "border-border bg-cream-card text-muted hover:border-teal/60"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* GALLERY */}
      <section className="pb-20">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <article key={p.name + p.location} className="card overflow-hidden">
                <PlaceholderImage
                  label={p.country === "USA" ? "🇺🇸 USA" : "🇦🇺 AU"}
                  tone={p.tone}
                  aspect="4 / 3"
                />
                <div className="p-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg">{p.name}</h3>
                    {p.featured && (
                      <span className="rounded-full bg-amber/40 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-ink">
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="mt-1 text-sm text-muted">
                    {p.trade} · {p.location}
                  </div>
                  {p.note && (
                    <p className="mt-3 text-sm text-ink border-l-2 border-clay pl-3">
                      {p.note}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-12 text-center text-muted">
              No projects match those filters. Try &ldquo;All&rdquo;.
            </p>
          )}
        </div>
      </section>

      {/* CLIENT LOGOS (text) */}
      <section className="section border-t border-border bg-cream-card">
        <div className="container-narrow text-center">
          <span className="eyebrow">And more</span>
          <h2 className="mt-3">Recent clients include</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            BinPro (Melbourne) · Melbourne Mint · Inspect Buy Drive (Sydney) · Binbutler · Inspire Energy · and 40+ others across Australia and the USA.
          </p>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
