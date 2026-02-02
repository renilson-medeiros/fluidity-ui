"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FlipTextAvatarProps {
  imageUrl: string;
  alt: string;
  text: string;
  size?: number;
  className?: string;
}

export function FlipTextAvatar({ 
  imageUrl, 
  alt, 
  text, 
  size = 200,
  className 
}: FlipTextAvatarProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const characters = text.split("");
  const totalChars = characters.length;
  const degreesPerChar = 360 / totalChars;
  const radius = size / 2;

  return (
    <div 
      className={cn("relative perspective-1000", className)}
      style={{ width: size, height: size }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="w-full cursor-pointer h-full relative preserve-3d transition-all duration-200"
        animate={{ rotateY: isHovered ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 5000, damping: 100 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front: Image */}
        <div 
          className="rounded-full inset-0 w-full h-full backface-hidden overflow-hidden border-4 border-background shadow-xl"
          style={{ backfaceVisibility: "hidden" }}
        >
          <Image
            src={imageUrl}
            alt={alt}
            fill
            className="object-cover rounded-full"
          />
        </div>

        {/* Back: Circular Text */}
        <div 
          className="absolute inset-0 w-full h-full backface-hidden rounded-full bg-foreground text-background flex items-center justify-center overflow-hidden"
          style={{ 
            backfaceVisibility: "hidden", 
            transform: "rotateY(180deg)" 
          }}
        >
             {/* Spinning Text Container */}
             <motion.div
                animate={{ rotate: 360 }}
                transition={{
                repeat: Infinity,
                duration: 10,
                ease: "linear",
                }}
                className="w-full h-full relative"
            >
                {characters.map((char, i) => (
                    <span
                        key={i}
                        className="absolute font-mono text-xs font-bold uppercase"
                        style={{
                        top: '50%',
                        left: '50%',
                        transform: `translate(-50%, -50%) rotate(${i * degreesPerChar}deg) translate(0, -${radius - 20}px)`,
                        transformOrigin: "center center",
                        }}
                    >
                        {char}
                    </span>
                 ))}
             </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
