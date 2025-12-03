import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
  target?: string;
  rel?: string;
};

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-brand-sage text-brand-night hover:bg-brand-sage/90 shadow-soft border border-transparent",
  secondary:
    "bg-brand-moss text-brand-sand border border-brand-sage/40 hover:border-brand-sage hover:-translate-y-0.5",
  ghost:
    "bg-transparent text-brand-sand border border-brand-sage/40 hover:bg-white/5",
};

export function Button({
  href,
  variant = "primary",
  children,
  className,
  ariaLabel,
  target,
  rel,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage/60 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-night",
    variantStyles[variant],
    className,
  );

  if (href) {
    return (
      <Link
        className={classes}
        href={href}
        aria-label={ariaLabel}
        target={target}
        rel={rel}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} aria-label={ariaLabel}>
      {children}
    </button>
  );
}

export default Button;
