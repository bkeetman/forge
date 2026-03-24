# Forge

A reusable design system preview page for Next.js + Tailwind projects.

Drop it into any route to instantly visualize your design tokens, validate UI consistency, and give AI tooling a clear reference for generating consistent components.

## Packages

| Package | Description |
|---------|-------------|
| `@forge/core` | Framework-agnostic React components |
| `@forge/next` | Next.js adapter with `createDesignSystemPage` |

## Quick Start

### Install

```bash
npm install @forge/next
# or
pnpm add @forge/next
```

### Add a page

```tsx
// app/design-system/page.tsx
"use client";
import { createDesignSystemPage } from "@forge/next";

export default createDesignSystemPage({
  title: "My Project UI",
});
```

Navigate to `/design-system` and you'll see a live preview of your design tokens.

### Inject your own components

```tsx
"use client";
import { createDesignSystemPage } from "@forge/next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export default createDesignSystemPage({
  title: "My Project UI",
  components: { Button, Input, Card },
  options: {
    darkModeToggle: true,
    responsivePreview: true,
  },
});
```

Or use the component directly:

```tsx
"use client";
import { DesignSystemPreview } from "@forge/next";

export default function Page() {
  return <DesignSystemPreview title="My Project UI" />;
}
```

## Tailwind Setup (required)

Forge uses semantic Tailwind tokens. Your project must define them.

### 1. Add the `@source` directive

In your global CSS file, tell Tailwind to scan the package for class names:

```css
@source "../node_modules/@forge";
```

### 2. Define the tokens

```css
/* globals.css */
@import "tailwindcss";
@source "../node_modules/@forge";

@layer base {
  :root {
    --background: oklch(1 0 0);
    --foreground: oklch(0.145 0 0);
    --primary: oklch(0.205 0 0);
    --primary-foreground: oklch(0.985 0 0);
    --muted: oklch(0.97 0 0);
    --muted-foreground: oklch(0.556 0 0);
    --border: oklch(0.922 0 0);
    --card: oklch(1 0 0);
    --card-foreground: oklch(0.145 0 0);
    --destructive: oklch(0.577 0.245 27.325);
    --destructive-foreground: oklch(0.985 0 0);
  }

  .dark {
    --background: oklch(0.145 0 0);
    --foreground: oklch(0.985 0 0);
    --primary: oklch(0.985 0 0);
    --primary-foreground: oklch(0.205 0 0);
    --muted: oklch(0.269 0 0);
    --muted-foreground: oklch(0.708 0 0);
    --border: oklch(1 0 0 / 10%);
    --card: oklch(0.205 0 0);
    --card-foreground: oklch(0.985 0 0);
    --destructive: oklch(0.704 0.191 22.216);
    --destructive-foreground: oklch(0.985 0 0);
  }
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-border: var(--border);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
}
```

> **Note:** This package requires Tailwind CSS v4.

## Config API

```ts
type DesignSystemConfig = {
  title?: string;

  components?: {
    Button?: React.ComponentType<any>;
    Input?: React.ComponentType<any>;
    Card?: React.ComponentType<any>;
    Badge?: React.ComponentType<any>;
  };

  sections?: Array<
    "colors" | "typography" | "buttons" | "forms" | "cards" | "states"
  >;

  options?: {
    darkModeToggle?: boolean;
    responsivePreview?: boolean;
  };
};
```

All fields are optional. Without any config, the page renders all sections with fallback demo components.

## Sections

| Section | What it shows |
|---------|---------------|
| `colors` | Swatches for all semantic tokens |
| `typography` | Text scale: h1–h4, body, small, mono |
| `buttons` | Default, outline, ghost, destructive, disabled variants |
| `forms` | Input, textarea, checkbox, select |
| `cards` | Basic card, card with badge, card with action |
| `states` | Loading skeleton, empty state, error state |

## Development

```bash
# Install dependencies
pnpm install

# Build packages
pnpm build

# Typecheck all packages
pnpm typecheck

# Run the example app
cd examples/next-app
pnpm dev
```

Then open `http://localhost:3000/design-system`.

## Repository Structure

```
foundry/
├── packages/
│   ├── core/          # @forge/core — React components
│   └── next/          # @forge/next — Next.js adapter
└── examples/
    └── next-app/      # Example Next.js 15 app
```
