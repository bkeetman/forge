import type { ResponsiveSize } from "../types";

type ToolbarProps = {
  title: string;
  isDark: boolean;
  onDarkToggle: () => void;
  showDarkToggle: boolean;
  responsiveSize: ResponsiveSize;
  onResponsiveChange: (size: ResponsiveSize) => void;
  showResponsive: boolean;
};

const RESPONSIVE_SIZES: { label: string; value: ResponsiveSize }[] = [
  { label: "Mobile", value: "mobile" },
  { label: "Tablet", value: "tablet" },
  { label: "Desktop", value: "desktop" },
];

const activeClasses = "bg-primary text-primary-foreground";
const inactiveClasses =
  "bg-muted text-muted-foreground hover:bg-muted/80";
const buttonBaseClasses =
  "px-3 py-1.5 rounded-md text-sm font-medium transition-colors";

export function Toolbar({
  title,
  isDark,
  onDarkToggle,
  showDarkToggle,
  responsiveSize,
  onResponsiveChange,
  showResponsive,
}: ToolbarProps) {
  return (
    <header className="sticky top-0 z-10 bg-background border-b border-border">
      <div className="px-6 py-3 flex items-center justify-between">
        <h1 className="text-lg font-semibold text-foreground">{title}</h1>
        <div className="flex items-center gap-3">
          {showResponsive &&
            RESPONSIVE_SIZES.map(({ label, value }) => (
              <button
                key={value}
                onClick={() => onResponsiveChange(value)}
                className={`${buttonBaseClasses} ${
                  responsiveSize === value ? activeClasses : inactiveClasses
                }`}
              >
                {label}
              </button>
            ))}
          {showDarkToggle && (
            <button
              onClick={onDarkToggle}
              className={`${buttonBaseClasses} ${inactiveClasses}`}
            >
              {isDark ? "Light" : "Dark"}
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
