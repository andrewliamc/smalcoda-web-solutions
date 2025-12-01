import { ProcessItem } from "@/data/processSteps";
import { cn } from "@/lib/utils";
import Card from "./Card";

type ProcessStepProps = {
  step: ProcessItem;
  className?: string;
  showDetails?: boolean;
};

export function ProcessStep({
  step,
  className,
  showDetails = false,
}: ProcessStepProps) {
  return (
    <Card className={cn("h-full space-y-3", className)}>
      <div className="flex items-start gap-3">
        <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-sage/10 text-sm font-semibold text-brand-sage">
          {step.title.charAt(0)}
        </span>
        <div>
          <p className="eyebrow">{step.id}</p>
          <h3 className="text-xl font-heading text-brand-sand">{step.title}</h3>
        </div>
      </div>
      <p className="text-brand-sand/80">{step.summary}</p>
      {showDetails && (
        <>
          <div className="rounded-lg bg-brand-moss/60 p-3 text-sm text-brand-sage/90">
            <p className="font-medium text-brand-sand">Your role</p>
            <p>{step.clientRole}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-brand-sage">Deliverables</p>
            <ul className="mt-2 space-y-1 text-sm text-brand-sand/80">
              {step.deliverables.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-sage/70" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </Card>
  );
}

export default ProcessStep;
