/* Header band for subpages: kicker, the page's h1, and an intro line over a blueprint grid. */
import type { ReactNode } from "react";

interface PageHeaderProps {
  kicker: string;
  title: ReactNode;
  intro: string;
}

export default function PageHeader({ kicker, title, intro }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-border py-16 lg:py-24">
      <div className="blueprint-grid absolute inset-0" aria-hidden="true" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="kicker mb-3">{kicker}</p>
        <h1 className="font-display uppercase font-extrabold text-5xl lg:text-7xl leading-[0.95] text-white mb-6">
          {title}
        </h1>
        <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl">{intro}</p>
      </div>
      <div className="safety-stripe absolute bottom-0 inset-x-0 h-1.5" aria-hidden="true" />
    </section>
  );
}
