import Link from "next/link";
import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import Card from "./Card";

type ProjectCardProps = {
  project: Project;
  className?: string;
};

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <Card className={cn("flex h-full flex-col gap-4", className)}>
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-2xl font-heading text-brand-sand">
          {project.title}
        </h3>
        <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-brand-sage">
          {project.tags[0]}
        </span>
      </div>
      <p className="text-brand-sand/80">{project.description}</p>
      <div className="flex flex-wrap gap-2 text-xs text-brand-sand/70">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-brand-sage/30 px-3 py-1"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-auto flex items-center justify-between pt-2">
        <div className="flex flex-wrap gap-2 text-xs text-brand-sand/70">
          {project.stack.slice(0, 3).map((tech) => (
            <span key={tech} className="rounded bg-brand-moss/60 px-2 py-1">
              {tech}
            </span>
          ))}
        </div>
        <Link
          href={`/work/${project.slug}`}
          className="text-sm font-medium text-brand-sage hover:text-brand-sand"
        >
          View case study →
        </Link>
      </div>
    </Card>
  );
}

export default ProjectCard;
