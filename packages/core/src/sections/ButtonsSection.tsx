import { SectionWrapper } from "../components/SectionWrapper";
import { FallbackButton } from "../components/internal/FallbackButton";
import type { SectionProps } from "../types";

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
