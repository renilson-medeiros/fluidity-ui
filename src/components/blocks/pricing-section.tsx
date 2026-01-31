"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button/button";
import { cn } from "@/lib/utils";

interface PricingPlan {
  name: string;
  description: string;
  price: string;
  credits: string;
  features: string[];
  highlighted?: boolean;
}

const plans: PricingPlan[] = [
  {
    name: "Free",
    description: "Ideal for testing and evaluation or small-scale deployments.",
    price: "$0.00",
    credits: "Up to 250 credits per month",
    features: ["Essential features", "Essential features", "Essential features"],
    highlighted: false,
  },
  {
    name: "Basic",
    description: "Perfect for small teams looking to enhance their operations.",
    price: "$24.99",
    credits: "1000 credits per month",
    features: ["Essential features", "Basic support options", "Community resources"],
    highlighted: true,
  },
  {
    name: "Pro",
    description: "Designed for larger teams and advanced projects.",
    price: "$49.00",
    credits: "Unlimited credits per month",
    features: ["Full access to all features", "Dedicated support", "Custom resources"],
    highlighted: false,
  },
];

export function PricingSection() {
  return (
    <section className="py-24 bg-background text-foreground">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Choose the Plan That Fits Your Needs
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Whether you're just starting out or looking to expand your capabilities, our plans provide the perfect solution for your needs.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={cn(
                "relative flex flex-col p-8 rounded-lg transition-all duration-300",
                plan.highlighted
                  ? "bg-foreground text-background shadow-2xl scale-105 z-10"
                  : "bg-background border border-border hover:shadow-lg"
              )}
            >
              <div className="mb-8 space-y-4">
                <h3 className="text-xl font-medium">{plan.name}</h3>
                <p className={cn("text-sm leading-relaxed", plan.highlighted ? "text-background/80" : "text-muted-foreground")}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-center gap-2">
                  <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                   <span className={cn("text-xs max-w-[100px] leading-tight", plan.highlighted ? "text-background/70" : "text-muted-foreground")}>
                    {plan.credits}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className={cn(
                        "flex items-center justify-center w-5 h-5 rounded-full",
                         plan.highlighted ? "bg-background text-foreground" : "bg-muted text-foreground"
                    )}>
                        <Check className="w-3 h-3" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={cn(
                    "w-full py-6 rounded-lg font-medium transition-transform active:scale-95",
                    plan.highlighted 
                        ? "bg-background text-foreground hover:bg-background/90" 
                        : "bg-foreground text-background hover:bg-foreground/90"
                )}
              >
                Get started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
