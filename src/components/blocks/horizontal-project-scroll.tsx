"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, MoveUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ProjectCursor } from "@/components/ui/project-cursor";
import { CircularText } from "./circular-text";

interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  imageUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "ROXINOT",
    category: "Automotive",
    year: "2022",
    imageUrl: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "PIXELIFY",
    category: "Abstract 3D",
    year: "2023",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "SINOXA",
    category: "Digital Art",
    year: "2024",
    imageUrl: "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "TREXA",
    category: "Landscape",
    year: "2024",
    imageUrl: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "VENTORA",
    category: "Architecture",
    year: "2025",
    imageUrl: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1200&auto=format&fit=crop",
  },
];

export function HorizontalProjectScroll() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <section ref={targetRef} className="relative h-[500vh] md:h-[600vh] bg-background">
      <div className="sticky top-20 md:top-0 flex h-[calc(100vh - 200rem)] md:h-screen items-center md:items-center overflow-hidden">

        <motion.div style={{ x }} className="flex gap-12 px-6 md:px-12 pt-2 md:pt-0 items-center">
          {/* Spacer for the header if needed */}
          <div className="w-[2vw] md:w-0 shrink-0" /> 
          
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          
           {/* End Spacer */}
           <div className="w-0 md:w-0 shrink-0" />
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="group flex flex-col gap-6 shrink-0 w-[80vw] md:w-[45vw]">
      {/* Image Container with Custom Cursor */}
      <div 
        ref={containerRef}
        className="relative aspect-4/5 md:aspect-10/7 w-full overflow-hidden rounded-lg bg-muted cursor-none"
      >
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Subtle overlay for depth */}
        <div className="absolute inset-0 bg-foreground/10 group-hover:bg-foreground/20 transition-colors duration-500" />

        {/* Custom Cursor Component */}
        <ProjectCursor
            containerRef={containerRef} 
            className="w-24 h-24 bg-background/70 text-foreground text-xs font-bold border-2 border-background/10 backdrop-blur-sm">
          <ArrowUpRight className="w-6 h- 6 absolute" />

          <CircularText 
            text="VER PROJETO • VER PROJETO • "
            radius={50} 
            textClassName="text-xs font-normal tracking-widest text-foreground" 
          />
        </ProjectCursor>
      </div>

      {/* Info Below Image */}
      <div className="flex items-center gap-3">
         <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">{project.title}</h3>
         <div className="flex flex-col items-start">
            <span className="text-xs md:text-sm text-muted-foreground font-light">/ {project.year}</span>
            <span className="text-xs md:text-sm text-muted-foreground font-light">/ {project.category}</span>
         </div>
      </div>
    </div>
  );
}
