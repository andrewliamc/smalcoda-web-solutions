import Link from "next/link";
import { Service } from "@/data/services";
import { cn } from "@/lib/utils";
import Card from "./Card";
import Button from "./Button";

type ServiceCardProps = {
  service: Service;
  compact?: boolean;
  className?: string;
};

export function ServiceCard({
  service,
  compact = false,
  className,
}: ServiceCardProps) {
  return (
    <Card className={cn("h-full flex flex-col gap-4", className)}>
      <div className="space-y-2">
        <h3 className="text-2xl font-heading text-brand-sand">{service.title}</h3>
        <p className="text-brand-sand/80">{service.summary}</p>
      </div>

      {!compact && (
        <div className="space-y-3">
          <p className="text-sm text-brand-sage/90">{service.who}</p>
          <ul className="space-y-2 text-sm text-brand-sand/80">
            {service.includes.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-sage/70" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-auto flex items-center justify-between text-sm text-brand-sand/80">
        <span>{service.timeline}</span>
        <span className="font-medium text-brand-sage">{service.price}</span>
      </div>

      {!compact && (
        <div className="pt-2">
          <Button href="/contact" variant="secondary" className="w-full justify-center">
            Talk about this
          </Button>
        </div>
      )}

      {compact && (
        <div className="pt-2">
          <Link
            href="/services"
            className="text-sm font-medium text-brand-sage hover:text-brand-sand"
          >
            Explore services →
          </Link>
        </div>
      )}
    </Card>
  );
}

export default ServiceCard;
