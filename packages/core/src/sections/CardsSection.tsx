import type { ReactNode } from "react";
import { SectionWrapper } from "../components/SectionWrapper";
import { FallbackButton } from "../components/internal/FallbackButton";
import type { SectionProps } from "../types";

function FallbackCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-lg border border-border bg-card text-card-foreground shadow-sm p-6 ${className}`}>
      {children}
    </div>
  );
}

function FallbackBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-primary px-2.5 py-0.5 text-xs font-medium text-primary-foreground">
      {children}
    </span>
  );
}

export function CardsSection({ components }: SectionProps) {
  const CardComponent = components.Card ?? FallbackCard;
  const BadgeComponent = components.Badge ?? FallbackBadge;
  const ButtonComponent = components.Button ?? FallbackButton;
  return (
    <SectionWrapper title="Cards">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <CardComponent>
          <h3 className="text-lg font-semibold text-card-foreground mb-2">Basic Card</h3>
          <p className="text-sm text-muted-foreground">A simple card with title and body text for general content display.</p>
        </CardComponent>

        <CardComponent>
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg font-semibold text-card-foreground">With Badge</h3>
            <BadgeComponent>New</BadgeComponent>
          </div>
          <p className="text-sm text-muted-foreground">Card with a status badge in the header area.</p>
        </CardComponent>

        <CardComponent>
          <h3 className="text-lg font-semibold text-card-foreground mb-2">With Action</h3>
          <p className="text-sm text-muted-foreground mb-4">Card with a call-to-action button at the bottom.</p>
          <ButtonComponent className="w-full">Take Action</ButtonComponent>
        </CardComponent>
      </div>
    </SectionWrapper>
  );
}
