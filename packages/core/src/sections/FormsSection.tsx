import type { InputHTMLAttributes } from "react";
import { SectionWrapper } from "../components/SectionWrapper";
import type { SectionProps } from "../types";

function FallbackInput({
  disabled = false,
  placeholder,
  type = "text",
  ...props
}: {
  disabled?: boolean;
  placeholder?: string;
  type?: string;
  [key: string]: unknown;
}) {
  return (
    <input
      type={type}
      disabled={disabled}
      placeholder={placeholder}
      className="flex h-10 w-full rounded-md border border-border bg-background
        px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground
        focus:outline-none focus:ring-2 focus:ring-primary
        disabled:cursor-not-allowed disabled:opacity-50"
      {...(props as InputHTMLAttributes<HTMLInputElement>)}
    />
  );
}

export function FormsSection({ components }: SectionProps) {
  const InputComponent = components.Input ?? FallbackInput;
  return (
    <SectionWrapper title="Forms">
      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Text Input</label>
          <InputComponent placeholder="Enter text..." />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Disabled Input</label>
          <InputComponent disabled placeholder="Disabled" />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Textarea</label>
          <textarea
            className="flex min-h-24 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Enter longer text..."
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-border text-primary"
          />
          <span className="text-sm text-foreground">Checkbox label</span>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Select</label>
          <select className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>
      </div>
    </SectionWrapper>
  );
}
