import type { ReactNode } from "react";
import { SectionWrapper } from "../components/SectionWrapper";
import type { SectionProps } from "../types";

function FallbackButton({
  children,
  disabled = false,
  variant = "default",
}: {
  children: ReactNode;
  disabled?: boolean;
  variant?: "default" | "outline" | "ghost" | "destructive";
}) {
  const variantClasses: Record<string, string> = {
    default: "bg-primary text-primary-foreground hover:opacity-90",
    outline: "border border-border bg-background text-foreground hover:bg-muted",
    ghost: "bg-transparent text-foreground hover:bg-muted",
    destructive: "bg-destructive text-destructive-foreground hover:opacity-90",
  };
  return (
    <button
      disabled={disabled}
      className={`inline-flex items-center px-4 py-2 rounded-md text-sm font-medium
        transition-opacity disabled:opacity-50 disabled:cursor-not-allowed
        ${variantClasses[variant]}`}
    >
      {children}
    </button>
  );
}

export function ButtonsSection({ components }: SectionProps) {
  const Button = components.Button ?? FallbackButton;
  return (
    <SectionWrapper title="Buttons">
      <div className="flex flex-wrap gap-4 items-center">
        <Button>Default</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button disabled>Disabled</Button>
      </div>
    </SectionWrapper>
  );
}
