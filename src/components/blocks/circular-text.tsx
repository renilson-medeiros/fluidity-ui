"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CircularTextProps {
  text: string;
  radius?: number;
  className?: string;
  textClassName?: string;
  duration?: number;
}

export function CircularText({ 
  text, 
  radius = 100, 
  className,
  textClassName,
  duration = 10 
}: CircularTextProps) {
  const characters = text.split("");
  const totalChars = characters.length;
  const degreesPerChar = 360 / totalChars;

  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: duration,
          ease: "linear",
        }}
        className="relative flex items-center justify-center p-4 rounded-full"
        style={{ 
            width: radius * 2, 
            height: radius * 2,
        }}
      >
        {characters.map((char, i) => (
          <span
            key={i}
            className={cn("absolute font-mono text-sm uppercase font-bold text-foreground", textClassName)}
            style={{
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%) rotate(${i * degreesPerChar}deg) translate(0, -${radius - 15}px)`,
              transformOrigin: "center center",
            }}
          >
            {char}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
