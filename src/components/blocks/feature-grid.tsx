"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface FeatureGridProps {
  features: Feature[];
  className?: string;
}

export function FeatureGrid({ features, className }: FeatureGridProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", className)}>
      {features.map((feature, i) => (
        <div 
            key={i} 
            className="group relative overflow-hidden rounded-lg border border-border bg-background p-8 transition-all hover:border-foreground/20 hover:shadow-sm"
        >
          <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-foreground/5 p-3 transition-colors group-hover:text-foreground">
            {feature.icon}
          </div>
          <h3 className="mb-2 text-lg font-semibold tracking-tight text-foreground">
            {feature.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
}
