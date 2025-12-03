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
    <Card className={cn("flex h-full flex-col gap-4", className)}>
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-2xl font-heading text-brand-sand">{title}</h3>
        <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-brand-sage">
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
        <Link
          href={href}
          className="whitespace-nowrap text-sm font-medium text-brand-sage transition hover:text-brand-sand"
        >
          View case study →
        </Link>
      </div>
    </Card>
  );
}

export default ProjectCard;
