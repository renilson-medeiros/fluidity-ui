"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button/button";

export function HeroSection() {
  return (
    <div className="relative isolate overflow-hidden bg-foreground px-4 py-16 shadow-2xl sm:rounded-lg sm:px-12 sm:py-24 xl:py-32">
      
      <div className="mx-auto max-w-2xl text-center">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6 border-b border-background/10 pb-3"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-background/50">
            Component Showcase
          </span>
        </motion.div>

        <motion.h2 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl font-black tracking-tighter text-background sm:text-6xl lg:text-8xl uppercase mb-4 sm:mb-6"
        >
          Fluidity
        </motion.h2>
        
        <motion.p 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mt-4 sm:mt-6 max-w-xl text-base sm:text-lg leading-7 sm:leading-8 text-zinc-400 px-2"
        >
          Production-ready components with smooth animations, responsive design, and clean code. Built for developers who value quality and speed.
        </motion.p>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 sm:mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center items-stretch sm:items-center px-2"
        >
          <Button size="lg" className="bg-background text-foreground hover:bg-background rounded-lg h-12 px-6 sm:px-8 font-semibold tracking-wide uppercase w-full sm:w-auto text-sm">
            Browse Components
          </Button>
          <Button variant="outline" size="lg" className="border-background text-background hover:bg-background rounded-lg h-12 px-6 sm:px-8 font-semibold tracking-wide uppercase w-full sm:w-auto text-sm">
            View on GitHub
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
