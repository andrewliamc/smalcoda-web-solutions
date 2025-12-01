import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "glass rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-md",
        className,
      )}
    >
      {children}
    </div>
  );
}

export default Card;
