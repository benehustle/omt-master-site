import Image from "next/image";
import Link from "next/link";
import type { PortfolioProject } from "@/data/portfolio";
import PlaceholderImage from "@/components/PlaceholderImage";

type Props = {
  project: PortfolioProject;
  aspect?: string;
  /** When set, wraps image in a link (e.g. live site). */
  href?: string;
};

export default function ProjectCard({ project, aspect = "4 / 3", href }: Props) {
  const hasImage = Boolean(project.image);
  const isSample = hasImage ? false : project.isSample !== false;
  const flag = project.country === "USA" ? "US" : "AU";

  const media = hasImage ? (
    <div className="relative overflow-hidden" style={{ aspectRatio: aspect }}>
      <Image
        src={project.image!}
        alt={`${project.name} website preview`}
        fill
        className="object-cover object-top"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
    </div>
  ) : (
    <PlaceholderImage label={flag} tone={project.tone} aspect={aspect} sample={isSample} />
  );

  const inner = (
    <>
      {href ? (
        <Link href={href} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2">
          {media}
        </Link>
      ) : (
        media
      )}
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg">{project.name}</h3>
          {project.featured && (
            <span className="rounded-full bg-amber/40 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-ink">
              Featured
            </span>
          )}
        </div>
        <div className="mt-1 text-sm text-muted">
          {project.trade} · {project.location}
        </div>
        {project.note && (
          <p className="mt-3 border-l-2 border-clay pl-3 text-sm text-ink">{project.note}</p>
        )}
      </div>
    </>
  );

  return <article className="card overflow-hidden">{inner}</article>;
}
