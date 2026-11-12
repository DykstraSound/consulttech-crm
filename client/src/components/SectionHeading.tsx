/* Section heading: bold condensed h2 with an optional supporting line. */
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: ReactNode;
  sub?: string;
  align?: "center" | "left";
}

export default function SectionHeading({ title, sub, align = "center" }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", align === "center" && "text-center")}>
      <h2 className="font-display uppercase font-extrabold text-4xl lg:text-5xl leading-none text-white mb-4">
        {title}
      </h2>
      {sub && (
        <p className={cn("text-lg text-muted-foreground leading-relaxed max-w-3xl", align === "center" && "mx-auto")}>
          {sub}
        </p>
      )}
    </div>
  );
}
