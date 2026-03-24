"use client";

import { DesignSystemPreview } from "@forge/core";
import type { DesignSystemConfig } from "@forge/core";

// Re-export named types from core (wildcard re-exports are unsupported in Next.js client boundaries)
export type {
  DesignSystemConfig,
  DesignSystemPreviewProps,
  SectionName,
  ResponsiveSize,
  SectionProps,
  SectionWrapperProps,
  ToolbarProps,
} from "@forge/core";
export { SectionWrapper, Toolbar, DesignSystemPreview } from "@forge/core";

/**
 * Creates a Next.js page component pre-configured with a design system preview.
 *
 * Usage:
 * ```tsx
 * // app/design-system/page.tsx
 * import { createDesignSystemPage } from "@forge/next";
 * export default createDesignSystemPage({ title: "My UI" });
 * ```
 */
export function createDesignSystemPage(config: DesignSystemConfig = {}) {
  function DesignSystemPage() {
    return <DesignSystemPreview {...config} />;
  }
  DesignSystemPage.displayName = "DesignSystemPage";
  return DesignSystemPage;
}
