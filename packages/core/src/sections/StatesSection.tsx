import type { ReactNode } from "react";
import { SectionWrapper } from "../components/SectionWrapper";
import type { SectionProps } from "../types";

function LocalFallbackButton({ children }: { children: ReactNode }) {
  return (
    <button className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity">
      {children}
    </button>
  );
}

export function StatesSection({ components }: SectionProps) {
  const ButtonComponent = components.Button ?? LocalFallbackButton;
  return (
    <SectionWrapper title="States">
      <div className="space-y-8">
        <div className="space-y-4">
          <p className="text-sm font-medium text-muted-foreground">Loading</p>
          <div className="space-y-3">
            <div className="h-4 bg-muted rounded w-3/4 animate-pulse" />
            <div className="h-4 bg-muted rounded w-1/2 animate-pulse" />
            <div className="h-4 bg-muted rounded w-5/6 animate-pulse" />
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-sm font-medium text-muted-foreground">Empty State</p>
          <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border py-16 px-6 text-center">
            <div className="mb-4 text-4xl text-muted-foreground">○</div>
            <h3 className="text-lg font-semibold text-foreground mb-2">No items found</h3>
            <p className="text-sm text-muted-foreground mb-6">Get started by creating your first item.</p>
            <ButtonComponent>Create Item</ButtonComponent>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-sm font-medium text-muted-foreground">Error State</p>
          <div className="rounded-md border border-destructive/30 bg-destructive/10 p-4">
            <h3 className="text-sm font-semibold text-destructive mb-1">Something went wrong</h3>
            <p className="text-sm text-destructive/80">An unexpected error occurred. Please try again or contact support if the problem persists.</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
