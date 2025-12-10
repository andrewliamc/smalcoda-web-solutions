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
  className?: string;
}

export function ProjectCard({
  title,
  category,
  description,
  tags,
  tech,
  href,
  className,
}: ProjectCardProps) {
  return (
    <Link
      href={href}
      className="group block h-full focus-visible:outline-none"
      aria-label={`View case study for ${title}`}
    >
      <Card
        className={cn(
          "flex h-full flex-col gap-4 transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-card focus-visible:-translate-y-1 focus-visible:shadow-card group-focus-visible:ring-2 group-focus-visible:ring-brand-sage/40 group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-brand-night",
          className,
        )}
      >
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-2xl font-heading text-brand-sand">{title}</h3>
          <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-brand-sage md:self-start">
            {category}
          </span>
        </div>
        <p className="text-brand-sand/80">{description}</p>
        <div className="flex flex-wrap gap-2 text-xs text-brand-sand/70">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-brand-sage/30 px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex flex-col gap-3 pt-2 md:flex-row md:items-center md:justify-between md:gap-0">
          <div className="flex flex-wrap gap-2 text-xs text-brand-sand/70">
            {tech.map((item) => (
              <span key={item} className="rounded bg-brand-moss/60 px-2 py-1">
                {item}
              </span>
            ))}
          </div>
          <span className="whitespace-nowrap text-sm font-medium text-brand-sage transition group-hover:text-brand-sand group-focus-visible:text-brand-sand">
            View case study →
          </span>
        </div>
      </Card>
    </Link>
  );
}

export default ProjectCard;
