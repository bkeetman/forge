import { SectionWrapper } from "../components/SectionWrapper";
import type { SectionProps } from "../types";

const SWATCHES = [
  { bg: "bg-background", label: "Background" },
  { bg: "bg-foreground", label: "Foreground" },
  { bg: "bg-primary", label: "Primary" },
  { bg: "bg-primary-foreground", label: "Primary Foreground" },
  { bg: "bg-muted", label: "Muted" },
  { bg: "bg-muted-foreground", label: "Muted Foreground" },
  { bg: "bg-border", label: "Border" },
  { bg: "bg-card", label: "Card" },
  { bg: "bg-card-foreground", label: "Card Foreground" },
  { bg: "bg-destructive", label: "Destructive" },
  { bg: "bg-destructive-foreground", label: "Destructive Foreground" },
];

export function ColorsSection(_props: SectionProps) {
  return (
    <SectionWrapper title="Colors">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {SWATCHES.map(({ bg, label }) => (
          <div key={label}>
            <div className={`h-16 rounded-md ${bg} border border-border`} />
            <p className="mt-2 text-xs text-muted-foreground">{label}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
