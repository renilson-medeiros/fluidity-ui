"use client";

import { FeatureGrid } from "./feature-grid";
import { Layers, Box, Zap } from "lucide-react";

export function FeatureGridDemo() {
  const features = [
    {
      title: "Native Performance",
      description: "Built on Radix UI primitives for accessible, unstyled flexibility.",
      icon: <Layers className="h-6 w-6 text-muted-foreground group-hover:text-foreground transition-colors" />,
    },
    {
      title: "Visual Consistency",
      description: "Shared design tokens ensuring a cohesive look across all components.",
      icon: <Box className="h-6 w-6 text-muted-foreground group-hover:text-foreground transition-colors" />,
    },
    {
      title: "Animation Ready",
      description: "Smooth, spring-based animations powered by Framer Motion.",
      icon: <Zap className="h-6 w-6 text-muted-foreground group-hover:text-foreground transition-colors" />,
    },
  ];

  return <FeatureGrid features={features} />;
}
