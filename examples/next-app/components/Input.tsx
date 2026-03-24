import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ className = "", ...props }: InputProps) {
  return (
    <input
      className={`flex h-10 w-full rounded-md border border-border bg-background
        px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground
        focus:outline-none focus:ring-2 focus:ring-primary
        disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
  );
}
