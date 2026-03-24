import { useState } from "react";
import type { ComponentType } from "react";
import type { DesignSystemConfig, SectionName, SectionProps, ResponsiveSize } from "../types";
import { Toolbar } from "./Toolbar";
import { ColorsSection } from "../sections/ColorsSection";
import { TypographySection } from "../sections/TypographySection";
import { ButtonsSection } from "../sections/ButtonsSection";
import { FormsSection } from "../sections/FormsSection";
import { CardsSection } from "../sections/CardsSection";
import { StatesSection } from "../sections/StatesSection";

const DEFAULT_SECTIONS: SectionName[] = ["colors", "typography", "buttons", "forms", "cards", "states"];

const SECTION_MAP: Record<SectionName, ComponentType<SectionProps>> = {
  colors: ColorsSection,
  typography: TypographySection,
  buttons: ButtonsSection,
  forms: FormsSection,
  cards: CardsSection,
  states: StatesSection,
};

export function DesignSystemPreview(config: DesignSystemConfig) {
  const [isDark, setIsDark] = useState(false);
  const [responsiveSize, setResponsiveSize] = useState<ResponsiveSize>("desktop");

  const {
    title = "Design System",
    sections = DEFAULT_SECTIONS,
    components = {},
    options = {},
  } = config;

  const { darkModeToggle = true, responsivePreview = true } = options;

  const widthClass =
    responsiveSize === "mobile"
      ? "max-w-sm"
      : responsiveSize === "tablet"
        ? "max-w-2xl"
        : "max-w-none";

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="bg-background text-foreground min-h-screen">
        <Toolbar
          title={title}
          isDark={isDark}
          onDarkToggle={() => setIsDark((d) => !d)}
          showDarkToggle={darkModeToggle}
          responsiveSize={responsiveSize}
          onResponsiveChange={setResponsiveSize}
          showResponsive={responsivePreview}
        />
        <main className={`mx-auto px-6 py-4 ${widthClass}`}>
          {sections.map((name) => {
            const SectionComponent = SECTION_MAP[name];
            return <SectionComponent key={name} components={components} />;
          })}
        </main>
      </div>
    </div>
  );
}
