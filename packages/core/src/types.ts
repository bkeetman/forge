import type { ComponentType } from "react";

export type SectionName =
  | "colors"
  | "typography"
  | "buttons"
  | "forms"
  | "cards"
  | "states";

export type DesignSystemConfig = {
  title?: string;
  components?: {
    Button?: ComponentType<any>;
    Input?: ComponentType<any>;
    Card?: ComponentType<any>;
    Badge?: ComponentType<any>;
  };
  sections?: SectionName[];
  options?: {
    darkModeToggle?: boolean;
    responsivePreview?: boolean;
  };
};

export type ResponsiveSize = "mobile" | "tablet" | "desktop";

// Props passed from DesignSystemPreview into each section
export type SectionProps = {
  components: NonNullable<DesignSystemConfig["components"]>;
};
