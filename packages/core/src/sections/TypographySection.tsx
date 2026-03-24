import { SectionWrapper } from "../components/SectionWrapper";
import type { SectionProps } from "../types";

type TagName = "h1" | "h2" | "h3" | "h4" | "p";

const TYPOGRAPHY_ITEMS: {
  tag: TagName;
  classes: string;
  classLabel: string;
  sample: string;
}[] = [
  {
    tag: "h1",
    classes: "text-4xl font-bold tracking-tight text-foreground",
    classLabel: "text-4xl font-bold tracking-tight",
    sample: "The quick brown fox jumps",
  },
  {
    tag: "h2",
    classes: "text-3xl font-semibold text-foreground",
    classLabel: "text-3xl font-semibold",
    sample: "The quick brown fox jumps",
  },
  {
    tag: "h3",
    classes: "text-2xl font-semibold text-foreground",
    classLabel: "text-2xl font-semibold",
    sample: "The quick brown fox jumps",
  },
  {
    tag: "h4",
    classes: "text-xl font-medium text-foreground",
    classLabel: "text-xl font-medium",
    sample: "The quick brown fox jumps",
  },
  {
    tag: "p",
    classes: "text-base text-foreground",
    classLabel: "text-base",
    sample: "Body text — used for paragraph content and general readable text in the interface.",
  },
  {
    tag: "p",
    classes: "text-sm text-muted-foreground",
    classLabel: "text-sm text-muted-foreground",
    sample: "Small muted text — labels, helper text, secondary content.",
  },
  {
    tag: "p",
    classes: "text-sm font-mono text-foreground",
    classLabel: "text-sm font-mono",
    sample: "monospace — code, tokens, technical values",
  },
];

export function TypographySection(_props: SectionProps) {
  return (
    <SectionWrapper title="Typography">
      <div className="space-y-8">
        {TYPOGRAPHY_ITEMS.map(({ tag: Tag, classes, classLabel, sample }) => (
          <div key={classLabel} className="space-y-1">
            <p className="text-xs text-muted-foreground font-mono">{classLabel}</p>
            <Tag className={classes}>{sample}</Tag>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
