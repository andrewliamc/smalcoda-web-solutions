import Link from "next/link";
import { cn } from "@/lib/utils";
import Card from "./Card";

export interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  tags: string[];
  tech: string[];
  href: string;
  liveUrl?: string;
  className?: string;
}

export function ProjectCard({
  title,
  category,
  description,
  tags,
  tech,
  href,
  liveUrl,
  className,
}: ProjectCardProps) {
  return (
    <Card className={cn("flex h-full flex-col gap-4", className)}>
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-2xl font-heading text-brand-sand">{title}</h3>
        <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-brand-sage md:self-start">
          {category}
        </span>
      </div>
      <p className="text-brand-sand/80">{description}</p>
      <div className="flex flex-wrap gap-2 text-xs text-brand-sand/70">
        {tags.map((tag) => (
          <span key={tag} className="rounded-full border border-brand-sage/30 px-3 py-1">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-auto flex flex-col gap-3 pt-2">
        <div className="flex flex-wrap gap-2 text-xs text-brand-sand/70">
          {tech.map((item) => (
            <span
              key={item}
              className="rounded-md border border-white/5 bg-brand-night/60 px-3 py-1 text-brand-sand/80"
            >
              {item}
            </span>
          ))}
        </div>
        <Link
          href={href}
          className="inline-flex items-center whitespace-nowrap text-sm font-medium text-brand-sage transition hover:text-brand-sand focus-visible:text-brand-sand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage/40 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-night"
          aria-label={`View case study for ${title}`}
        >
          View case study →
        </Link>
        {liveUrl ? (
          <Link
            href={liveUrl}
            className="inline-flex items-center whitespace-nowrap text-sm font-medium text-brand-sage transition hover:text-brand-sand focus-visible:text-brand-sand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage/40 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-night"
            target="_blank"
            rel="noreferrer"
            aria-label={`View live site for ${title}`}
          >
            View live site →
          </Link>
        ) : null}
      </div>
    </Card>
  );
}

export default ProjectCard;
