"use client";

import { Button } from "@/components/ui/button/button";
import { Card } from "@/components/ui/card/card";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge/badge";

export function PricingTable() {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      description: "For individuals just getting started.",
      features: ["Up to 3 projects", "Community support", "Basic analytics"],
      featured: false,
    },
    {
      name: "Pro",
      price: "$29",
      description: "For professionals requiring more power.",
      features: ["Unlimited projects", "Priority support", "Advanced analytics", "Custom domains"],
      featured: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large teams and organizations.",
      features: ["SSO Enforcement", "Dedicated success manager", "SLA Guarantee", "Audit logs"],
      featured: false,
    },
  ];

  return (
    <div className="grid mt-4 grid-cols-1 md:grid-cols-3 gap-8">
      {plans.map((plan) => (
        <Card 
            key={plan.name} 
            className={`p-8 relative flex flex-col ${plan.featured ? 'border-primary shadow-lg md:scale-105 z-10' : 'border-border'}`}
        >
          {plan.featured && (
             <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Badge variant="default" className="bg-background text-primary-foreground">Most Popular</Badge>
             </div>
          )}
          
          <div className="mb-8">
            <h3 className="text-lg font-semibold">{plan.name}</h3>
            <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-muted-foreground">/mo</span>}
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
          </div>

          <ul className="space-y-3 mb-8 flex-1">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                <Check className="h-4 w-4 text-primary" />
                {feature}
              </li>
            ))}
          </ul>

          <Button variant={plan.featured ? "default" : "outline"} className="w-full">
            {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
          </Button>
        </Card>
      ))}
    </div>
  );
}
