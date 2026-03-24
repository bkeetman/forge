import type { ReactNode } from "react";

export type SectionWrapperProps = {
  title: string;
  children: ReactNode;
};

export function SectionWrapper({ title, children }: SectionWrapperProps) {
  return (
    <section className="py-10">
      <div className="mb-6 border-b border-border pb-3">
        <h2 className="text-xl font-semibold text-foreground">{title}</h2>
      </div>
      {children}
    </section>
  );
}
