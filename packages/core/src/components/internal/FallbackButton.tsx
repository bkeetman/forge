import type { ReactNode } from "react";

type FallbackButtonProps = {
  children?: ReactNode;
  disabled?: boolean;
  variant?: "default" | "outline" | "ghost" | "destructive";
  className?: string;
};

const VARIANT_CLASSES: Record<string, string> = {
  default: "bg-primary text-primary-foreground hover:opacity-90",
  outline: "border border-border bg-background text-foreground hover:bg-muted",
  ghost: "bg-transparent text-foreground hover:bg-muted",
  destructive: "bg-destructive text-destructive-foreground hover:opacity-90",
};

export function FallbackButton({
  children,
  disabled = false,
  variant = "default",
  className = "",
}: FallbackButtonProps) {
  return (
    <button
      disabled={disabled}
      className={[
        "inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium",
        "transition-opacity disabled:opacity-50 disabled:cursor-not-allowed",
        VARIANT_CLASSES[variant],
        className,
      ].join(" ")}
    >
      {children}
    </button>
  );
}
