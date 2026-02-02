"use client";

import { registry } from "@/registry";
import Link from "next/link";
import { Badge } from "@/components/ui/badge/badge";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function ComponentsGallery() {
  return (
    <div className="space-y-12 pb-24">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">
          A <span className="text-muted-foreground italic">Galeria</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl font-light leading-relaxed">
          Navegue por nossa coleção de blocos criativos e primitivos interativos de alto impacto.
        </p>
      </div>

      <Link href="/preview">
        <Button
          variant="default"
          className="text-xs w-full mb-8"
        >
          Preview de todos os componentes
        </Button>
      </Link>
      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(registry).map(([slug, item], index) => (
          <Link key={slug} href={`/components/${slug}`}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="group relative h-64 overflow-hidden rounded-lg border border-border bg-muted/30 p-8 transition-all hover:border-foreground/20 hover:bg-muted/50"
            >
              <div className="flex h-full flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-[10px] uppercase tracking-widest font-mono">
                      {item.type}
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight group-hover:translate-x-1 transition-transform">
                    {item.name}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {item.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                   <span>Explorar componente</span>
                   <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
