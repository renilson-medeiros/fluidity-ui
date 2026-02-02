"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button/button";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Features", href: "#features" },
  { label: "Benefits", href: "#benefits" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export function FloatingNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 pointer-events-none p-4 md:p-6 flex justify-center">
        <motion.nav
            layout
            initial={{ width: "100%", height: "auto" }}
            animate={{ 
                width: isScrolled ? "60%" : "100%", 
                y: isScrolled ? 0 : 0,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className={cn(
                "relative pointer-events-auto bg-background/80 backdrop-blur-lg border border-border/50 shadow-lg/2 rounded-lg overflow-hidden",
                "min-w-[95%] md:min-w-[600px] flex flex-col" 
            )}
            style={{
               maxWidth: "1200px" 
            }}
        >
            {/* Top Bar: Logo + Toggle */}
            <div className="flex items-center justify-between p-3 pl-6 pr-3">
                 {/* Logo */}
                <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
                    Fluidity UI
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a 
                            key={item.label} 
                            href={item.href}
                            className="relative group overflow-hidden h-5 text-sm font-medium"
                        >
                            <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                                {item.label}
                            </span>
                            <span className="absolute top-0 left-0 block translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                                {item.label}
                            </span>
                        </a>
                    ))}
                </div>

                {/* Desktop Action & Mobile Toggle */}
                <div className="flex items-center gap-2">
                    <Button size="sm" className="hidden md:flex rounded-md px-6 group">
                        Purchase <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </Button>
                    
                    <Button 
                        size="icon" 
                        variant="ghost" 
                        className="md:hidden rounded-full"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            {isMobileMenuOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <X className="w-5 h-5" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Menu className="w-5 h-5" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </Button>
                </div>
            </div>

            {/* Mobile Menu Content - Expands Height */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="overflow-hidden md:hidden border-t border-border/50"
                    >
                        <div className="p-4 flex flex-col gap-2">
                            {navItems.map((item, i) => (
                                <motion.a
                                    key={item.label}
                                    href={item.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="p-3 hover:bg-muted rounded-lg text-sm font-medium flex justify-between group"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </motion.a>
                            ))}
                            <div className="h-px bg-border my-2" />
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <Button className="w-full rounded-lg group justify-between">
                                    Purchase <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    </div>
  );
}
