"use client";

import { useMemo, useState } from "react";
import PageHero from "@/components/PageHero";
import ProjectCard from "@/components/ProjectCard";
import FinalCTA from "@/components/FinalCTA";
import { portfolioProjects, type PortfolioProject } from "@/data/portfolio";

type Filter = "All" | "Australia" | "USA" | "By Trade";

export default function WorkPage() {
  const [filter, setFilter] = useState<Filter>("All");
  const [trade, setTrade] = useState<string>("All");

  const trades = useMemo(
    () => ["All", ...Array.from(new Set(portfolioProjects.map((p) => p.trade)))],
    []
  );

  const filtered = useMemo(() => {
    let list: PortfolioProject[] = portfolioProjects;
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
        trustItems={[
          "Layout samples until screenshots are added",
          "Featured notes are from real projects where noted",
          "US + Australia delivery",
        ]}
      />

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

      <section className="pb-20">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <ProjectCard key={p.slug} project={p} aspect="4 / 3" />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-12 text-center text-muted">No projects match those filters. Try &ldquo;All&rdquo;.</p>
          )}
        </div>
      </section>

      <section className="section border-t border-border bg-cream-card">
        <div className="container-narrow text-center">
          <span className="eyebrow">And more</span>
          <h2 className="mt-3">Recent clients include</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            BinPro (Melbourne) · Melbourne Mint · Inspect Buy Drive (Sydney) · Binbutler · Inspire Energy · and 40+
            others across Australia and the United States.
          </p>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
