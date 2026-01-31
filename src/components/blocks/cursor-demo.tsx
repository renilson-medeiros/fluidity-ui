"use client";

import { useRef } from "react";
import { ProjectCursor } from "@/components/ui/project-cursor";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function CursorDemo() {
  const containerRef1 = useRef<HTMLDivElement>(null);
  const containerRef2 = useRef<HTMLDivElement>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
      {/* Demo 1: Basic View Project */}
      <div 
        ref={containerRef1}
        className="relative aspect-video bg-muted rounded-lg overflow-hidden flex items-center justify-center cursor-none group"
      >
        <div className="absolute inset-0 bg-linear-to-br from-vibrant-blue/20 to-vibrant-purple/20" />
        <p className="text-muted-foreground font-mono text-sm uppercase tracking-widest z-10">Hover me</p>
        
        <ProjectCursor 
            containerRef={containerRef1} 
            className="w-20 h-20 bg-foreground text-background"
        >
            <ArrowUpRight className="w-8 h-8" />
        </ProjectCursor>
      </div>

      {/* Demo 2: Image Hover with custom text */}
      <div 
        ref={containerRef2}
        className="relative aspect-video bg-muted rounded-lg overflow-hidden cursor-none group"
      >
        <Image 
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop"
            alt="Demo"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20" />
        
        <ProjectCursor 
            containerRef={containerRef2} 
            text="Discover" 
            className="w-24 h-24 bg-white/20 backdrop-blur-md text-white border-2 border-white/50"
        />
      </div>
    </div>
  );
}
