"use client";

import { Button } from "@/components/ui/button/button";
import { Github, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

export function MinimalFooter() {
  return (
    <footer className="border-t border-border bg-muted/20 py-12">
      <div className="mx-auto px-28 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-bold text-lg tracking-tight">Fluidity UI</span>
            <p className="text-sm text-muted-foreground text-center md:text-left">
                © 2026 Fluidity UI. All rights reserved. <br/> Built with precision and care.
            </p>
        </div>
        
        <div className="flex gap-4">
             <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 text-muted-foreground hover:text-foreground hover:bg-background">
                <Github className="h-5 w-5" />
            </Button>
             <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 text-muted-foreground hover:text-foreground hover:bg-background">
                <Twitter className="h-5 w-5" />
            </Button>
             <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 text-muted-foreground hover:text-foreground hover:bg-background">
                <Linkedin className="h-5 w-5" />
            </Button>
        </div>
        
        <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
