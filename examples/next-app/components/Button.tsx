import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost" | "destructive";
};

export function Button({
  variant = "default",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const variantClasses: Record<string, string> = {
    default: "bg-primary text-primary-foreground hover:opacity-90",
    outline: "border border-border bg-background text-foreground hover:bg-muted",
    ghost: "bg-transparent text-foreground hover:bg-muted",
    destructive: "bg-destructive text-destructive-foreground hover:opacity-90",
  };

  return (
    <button
      className={[
          "inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium",
          "transition-opacity disabled:opacity-50 disabled:cursor-not-allowed",
          variantClasses[variant],
          className,
        ].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}
