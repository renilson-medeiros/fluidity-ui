"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import AnimatedButton from "../ui/animated-button/animated-button";

const images = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&h=500&fit=crop",
];

// Double the images to create a seamless loop
const scrollImages = [...images, ...images];

export function ScrollingGallery() {
  return (
    <section className="bg-background border border-border rounded-lg overflow-hidden">
      <div className="container mx-auto md:px-4">
        <div className="flex flex-col lg:flex-row md:gap-12 lg:gap-24 items-center">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-8 md:pl-20 py-12 text-center lg:text-left z-10">
            <h2 className="text-4xl md:text-4xl font-semibold tracking-tighter leading-tight">
              Fluidity UI
            </h2>
            <p className="text-md text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 px-4 md:px-0">
               A complete design system with production-ready components. Built with Next.js, Tailwind CSS, and Framer Motion animations. Copy, customize, and ship faster.
            </p>
            <AnimatedButton>Default Button</AnimatedButton>
          </div>

          {/* Scrolling Gallery Container */}
          <div className="w-full lg:w-1/2 flex flex-col lg:flex-row gap-4 h-[500px] relative overflow-hidden">
             
             {/* DESKTOP VIEW (Vertical Scroll) */}
             <div className="hidden lg:flex gap-6 h-full w-full">
                {/* Column 1 - Up */}
                <div className="w-1/2 h-full relative">
                    <motion.div
                        className="flex flex-col gap-6 absolute top-0 left-0 w-full"
                        animate={{ y: ["0%", "-50%"] }}
                        transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
                    >
                         {scrollImages.map((src, i) => (
                            <div key={i} className="relative w-full aspect-4/3 rounded-lg overflow-hidden bg-muted">
                                <Image src={src} alt="Gallery" fill className="object-cover" />
                            </div>
                        ))}
                    </motion.div>
                </div>
                {/* Column 2 - Down */}
                <div className="w-1/2 h-full relative">
                    <motion.div
                        className="flex flex-col gap-6 absolute -top-[50%] left-0 w-full"
                        animate={{ y: ["-50%", "0%"] }}
                        transition={{ repeat: Infinity, duration: 85, ease: "linear" }}
                    >
                        {scrollImages.map((src, i) => (
                            <div key={i} className="relative w-full aspect-4/3 rounded-lg overflow-hidden bg-muted">
                                <Image src={src} alt="Gallery" fill className="object-cover" />
                            </div>
                        ))}
                    </motion.div>
                </div>
             </div>

             {/* MOBILE VIEW (Horizontal Scroll) */}
             <div className="lg:hidden flex flex-col gap-4 mb-4 h-full w-full">
                 {/* Row 1 - Left */}
                 <div className="h-1/2 w-full relative">
                    <motion.div
                        className="flex gap-4 absolute top-0 left-0 h-full"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ repeat: Infinity, duration: 85, ease: "linear" }}
                    >
                         {scrollImages.map((src, i) => (
                            <div key={i} className="relative h-full aspect-3/2 rounded-lg overflow-hidden bg-muted shrink-0">
                                <Image src={src} alt="Gallery" fill className="object-cover" />
                            </div>
                        ))}
                    </motion.div>
                 </div>
                 {/* Row 2 - Right */}
                 <div className="h-1/2 w-full relative">
                     <motion.div
                        className="flex gap-4 absolute top-0 -left-[50%] h-full"
                        animate={{ x: ["-50%", "0%"] }}
                        transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
                    >
                         {scrollImages.map((src, i) => (
                            <div key={i} className="relative h-full aspect-3/2 rounded-lg overflow-hidden bg-muted shrink-0">
                                <Image src={src} alt="Gallery" fill className="object-cover" />
                            </div>
                        ))}
                    </motion.div>
                 </div>
             </div>

          </div>
        </div>
      </div>
    </section>
  );
}
