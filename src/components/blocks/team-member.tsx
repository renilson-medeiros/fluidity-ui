"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar/avatar";
import { Button } from "@/components/ui/button/button";
import { Card } from "@/components/ui/card/card";
import { Github, Linkedin, Twitter } from "lucide-react";

export function TeamMember() {
  return (
    <Card className="p-6 border-border bg-background text-center hover:border-foreground/20 transition-colors">
        <div className="flex justify-center mb-4">
            <Avatar className="h-24 w-24 border-2 border-background ring-2 ring-border">
                <AvatarImage src="/placeholder-team.jpg" />
                <AvatarFallback className="bg-muted text-2xl font-light">JD</AvatarFallback>
            </Avatar>
        </div>
        
        <h3 className="text-lg font-semibold tracking-tight">John Developer</h3>
        <p className="text-sm text-vibrant-blue font-medium mb-4">Lead Architect</p>
        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
            Passionate about building scalable systems and clean user interfaces.
        </p>

        <div className="flex justify-center gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                <Github className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-vibrant-blue">
                <Linkedin className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-vibrant-blue">
                <Twitter className="h-4 w-4" />
            </Button>
        </div>
    </Card>
  );
}
