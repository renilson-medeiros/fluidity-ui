"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar/avatar";
import { Card } from "@/components/ui/card/card";
import { Quote, Star } from "lucide-react";

export function TestimonialCard() {
  return (
    <Card className="p-8 border-border bg-background relative overflow-hidden">
        <Quote className="absolute top-8 right-8 h-12 w-12 text-muted/20 rotate-180" />
        
        <div className="flex gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-vibrant-yellow text-vibrant-yellow" />
            ))}
        </div>

        <blockquote className="text-lg font-medium leading-relaxed mb-6">
            "This design system completely transformed how we build products. The attention to detail and performance is simply unmatched."
        </blockquote>

        <div className="flex items-center gap-4">
            <Avatar className="h-10 w-10 border border-border">
                <AvatarImage src="/placeholder-avatar.jpg" />
                <AvatarFallback className="bg-muted text-muted-foreground">JD</AvatarFallback>
            </Avatar>
            <div>
                <p className="font-semibold text-sm">Jane Doe</p>
                <p className="text-xs text-muted-foreground">CTO at TechCorp</p>
            </div>
        </div>
    </Card>
  );
}
