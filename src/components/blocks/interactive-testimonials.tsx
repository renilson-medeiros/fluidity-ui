"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "This changed everything for me.",
    name: "Sarah Chen",
    role: "Designer at Frames",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
  },
  {
    id: "2",
    quote: "The best developer experience I've ever had.",
    name: "Marcus Rodriguez",
    role: "Tech Lead at Vercel",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
  },
  {
    id: "3",
    quote: "Clean, performant, and absolutely stunning.",
    name: "Emma Watson",
    role: "Product Manager",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop"
  }
];

export function InteractiveTestimonials() {
  const [activeId, setActiveId] = useState(testimonials[0].id);
  const activeTestimonial = testimonials.find(t => t.id === activeId) || testimonials[0];

  return (
    <div className="w-full py-24 flex flex-col items-center justify-center bg-background text-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-12">
            
            {/* Quote Section */}
            <div className="relative min-h-[200px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTestimonial.id}
                        initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -20, filter: "blur(5px)" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="relative"
                    >
                         {/* Large Quote Marks */}
                        <span className="absolute -top-12 -left-12 text-8xl text-muted-foreground/10 font-serif leading-none hidden md:block">
                            &ldquo;
                        </span>
                         <span className="absolute -bottom-12 -right-12 text-8xl text-muted-foreground/10 font-serif leading-none hidden md:block">
                            &rdquo;
                        </span>

                        <h2 className="text-3xl md:text-5xl lg:text-7xl font-sans tracking-tight leading-tight">
                            {activeTestimonial.quote}
                        </h2>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Role Label */}
            <motion.p 
                key={activeTestimonial.role}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xs md:text-sm uppercase tracking-[0.2em] text-muted-foreground font-mono"
            >
                {activeTestimonial.role}
            </motion.p>

            {/* Interactive Selector */}
            <div className="flex items-center justify-center gap-4 pt-8">
                {testimonials.map((t) => {
                    const isActive = activeId === t.id;
                    return (
                        <motion.button
                            key={t.id}
                            layout
                            onClick={() => setActiveId(t.id)}
                            className={cn(
                                "relative cursor-pointer flex items-center gap-3 p-1.5 rounded-full transition-colors duration-300",
                                isActive ? "bg-foreground pr-6" : "bg-muted hover:bg-muted/80"
                            )}
                            animate={{
                                backgroundColor: isActive ? "var(--foreground)" : "var(--muted)",
                            }}
                            transition={{
                                layout: { type: "spring", stiffness: 300, damping: 30 },
                                duration: 0.1
                            }}
                            exit={{ opacity: 0, width: 0 }}
                        >
                            <motion.div 
                                layout="position" 
                                className="relative w-10 h-10 rounded-full overflow-hidden"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            >
                                <Image
                                    src={t.image}
                                    alt={t.name}
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>

                            <AnimatePresence mode="popLayout">
                                {isActive && (
                                    <motion.span
                                        initial={{ opacity: 0, width: 0, filter: "blur(4px)" }}
                                        animate={{ opacity: 1, width: "auto", filter: "blur(0px)" }}
                                        exit={{ opacity: 0, width: 0, filter: "blur(4px)" }}
                                        transition={{ 
                                            type: "spring", 
                                            stiffness: 500, 
                                            damping: 30,
                                            mass: 0.8
                                        }}
                                        className="text-background font-medium whitespace-nowrap overflow-hidden"
                                    >
                                        {t.name}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    );
                })}
            </div>

        </div>
    </div>
  );
}
