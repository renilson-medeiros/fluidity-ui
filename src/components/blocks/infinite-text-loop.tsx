"use client";

import {
  motion,
  useTransform,
  useMotionValue,
  useAnimationFrame,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface InfiniteTextLoopProps {
  text: string;
  baseVelocity?: number;
  className?: string;
}

// Utility to wrap value within a range
const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export function InfiniteTextLoop({ text, baseVelocity = 0.5, className }: InfiniteTextLoopProps) {
  const baseX = useMotionValue(0);

  // Wrap content between -20% and -45% to create infinite loop illusion
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  useAnimationFrame((t, delta) => {
    // Constant movement: baseVelocity * delta
    // Adjusted speed for constant flow
    const moveBy = baseVelocity * (delta / 1000); 
    
    // Always move in one direction (negative to move left)
    baseX.set(baseX.get() - moveBy); // Changed to minus for natural reading direction (leftward)
  });

  return (
    <div className="overflow-hidden whitespace-nowrap flex flex-nowrap py-8">
      <motion.div className={cn("flex flex-nowrap gap-8 text-6xl md:text-9xl font-black uppercase tracking-tighter", className)} style={{ x }}>
        {/* Repeating text to ensure it covers the screen width for the loop */}
        <span className="block mr-8">{text}</span>
        <span className="block mr-8">{text}</span>
        <span className="block mr-8">{text}</span>
        <span className="block mr-8">{text}</span>
        <span className="block mr-8">{text}</span>
        <span className="block mr-8">{text}</span>
        <span className="block mr-8">{text}</span>
        <span className="block mr-8">{text}</span>
      </motion.div>
    </div>
  );
}
