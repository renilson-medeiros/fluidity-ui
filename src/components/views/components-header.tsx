"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Box, Layers } from "lucide-react";
import { Button } from "@/components/ui/button/button";
import { Badge } from "@/components/ui/badge/badge";

export function ComponentsHeader() {
  return (
    <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row items-start md:items-center justify-between mb-24 pt-8 gap-8"
    >
        <div className="space-y-4">
          <div className="flex items-center gap-4">
              <Link href="/">
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-foreground/5">
                  <ArrowLeft className="w-5 h-5" />
                  </Button>
              </Link>
              <Badge variant="outline" className="text-[10px] py-1 px-3">v1.0.0</Badge>
          </div>
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
            Fluidity <span className="text-muted-foreground italic">Components</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl font-light leading-relaxed">
            A hybrid library combining <strong className="text-foreground font-medium">Creative Blocks</strong> for storytelling and interaction.
          </p>
        </div>

        <div className="flex gap-4">
            <Button variant="outline" className="uppercase tracking-widest text-xs font-bold gap-2">
                <Box className="w-4 h-4" /> Primitives
            </Button>
            <Button className="uppercase tracking-widest text-xs font-bold gap-2">
                <Layers className="w-4 h-4" /> Blocks
            </Button>
        </div>
    </motion.div>
  );
}
