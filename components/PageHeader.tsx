import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Container from "./Container";

type PageHeaderProps = {
  title: string;
  eyebrow?: string;
  description?: ReactNode;
  actions?: ReactNode;
  className?: string;
};

export function PageHeader({
  title,
  eyebrow,
  description,
  actions,
  className,
}: PageHeaderProps) {
  return (
    <header className={cn("py-14 md:py-16", className)}>
      <Container className="flex flex-col gap-6">
        <div className="space-y-3">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1 className="text-4xl font-heading text-brand-sand md:text-5xl">
            {title}
          </h1>
          {description ? (
            <div className="max-w-3xl text-lg text-brand-sand/80">
              {description}
            </div>
          ) : null}
        </div>
        {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
      </Container>
    </header>
  );
}

export default PageHeader;
