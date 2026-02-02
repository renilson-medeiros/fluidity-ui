"use client";

import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProjectCursorProps {
  text?: string;
  children?: React.ReactNode;
  className?: string;
  containerRef: React.RefObject<HTMLElement | null>;
}

export function ProjectCursor({ text, children, className, containerRef }: ProjectCursorProps) {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const moveCursor = (e: MouseEvent) => {
      // Get container position to calculate relative coordinates
      const rect = container.getBoundingClientRect();
      
      // Calculate position relative to the container
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      cursorX.set(x);
      cursorY.set(y);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    container.addEventListener("mousemove", moveCursor);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", moveCursor);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [containerRef, cursorX, cursorY]);

  return (
    <motion.div
      className={cn(
        "pointer-events-none absolute z-50 flex items-center justify-center rounded-full bg-background text-foreground font-bold uppercase tracking-widest text-[10px]",
        className
      )}
      style={{
        left: 0,
        top: 0,
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: "-50%", // Center the cursor on the mouse
        translateY: "-50%",
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: isVisible ? 1 : 0, 
        opacity: isVisible ? 1 : 0 
      }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <div className="px-2 text-center flex items-center justify-center">
        {children ? children : text || " "}
      </div>
    </motion.div>
  );
}
