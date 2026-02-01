"use client";

import { registry } from "@/registry";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { SimpleNavbar } from "@/components/blocks/simple-navbar";
import { ScrollArea } from "@/components/ui/scroll-area/scroll-area";
import { ArrowDown, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sidebarRef.current) return;
      
      const { scrollTop, scrollHeight, clientHeight } = sidebarRef.current;
      // Mostra o indicador apenas se houver conteúdo para rolar abaixo
      // Adicionamos uma pequena margem (10px) para evitar problemas de arredondamento
      const hasMoreToScroll = scrollHeight > clientHeight + 5;
      const isAtBottom = scrollHeight - scrollTop <= clientHeight + 10;
      
      setShowScrollIndicator(hasMoreToScroll && !isAtBottom);
    };

    const sidebar = sidebarRef.current;
    if (sidebar) {
      sidebar.addEventListener("scroll", handleScroll, { passive: true });
      // Verificação inicial
      // Usamos um pequeno timeout para garantir que o DOM foi renderizado
      const timeoutId = setTimeout(handleScroll, 100);
      
      // Observer para mudanças de conteúdo (ex: carregamento da registry)
      const observer = new MutationObserver(handleScroll);
      observer.observe(sidebar, { childList: true, subtree: true });

      return () => {
        sidebar.removeEventListener("scroll", handleScroll);
        clearTimeout(timeoutId);
        observer.disconnect();
      };
    }
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-background selection:bg-foreground selection:text-background">
      <SimpleNavbar />
      
      <div className="container-fluid flex flex-1 items-start px-6 md:px-12">
        {/* Fixed Sidebar */}
        <aside 
          ref={sidebarRef}
          className="fixed h-[500px] top-24 left-6 md:left-12 z-30 hidden [&::-webkit-scrollbar]:hidden w-64 shrink-0 overflow-y-auto rounded-lg border border-border bg-background/50 backdrop-blur-xl transition-all hover:bg-background/80 lg:block no-scrollbar shadow-2xl shadow-foreground/5"
        >
          <div className="flex flex-col gap-2 p-4">
            <div className="mb-4">
               <h4 className="px-2 text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                 Componentes
               </h4>
            </div>
            {Object.entries(registry)
              .sort(([, a], [, b]) => {
                // Primeiro ordena por estrelas (descendente)
                const starsA = a.stars || 0;
                const starsB = b.stars || 0;
                if (starsB !== starsA) return starsB - starsA;
                // Depois por nome (ascendente)
                return a.name.localeCompare(b.name);
              })
              .map(([slug, item]) => (
              <Link
                key={slug}
                href={`/components/${slug}`}
                className={cn(
                  "flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-all hover:bg-foreground/5 active:scale-95",
                  pathname === `/components/${slug}`
                    ? "bg-foreground text-background hover:bg-foreground/90 shadow-lg"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <span>{item.name}</span>
                {item.stars && item.stars > 100 && (
                   <div className="flex items-center gap-1 opacity-60">
                     <span className="text-[10px] font-mono">{item.stars}</span>
                     <motion.span
                       animate={{ scale: [1, 1.2, 1] }}
                       transition={{ repeat: Infinity, duration: 2 }}
                     >
                       ⭐
                     </motion.span>
                   </div>
                )}
              </Link>
            ))}
            
            <AnimatePresence>
              {showScrollIndicator && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="sticky bottom-2 flex justify-center py-2"
                >
                  <div className="bg-foreground/5 backdrop-blur-md rounded-full px-4 py-1 w-full flex items-center justify-center gap-2">
                    <span className="text-[8px] font-mono uppercase tracking-widest text-muted-foreground">Scroll</span>
                    <ChevronDown className="w-2 h-2 animate-bounce" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="relative flex-1 py-12 lg:pl-80">
          <div className="mx-auto max-w-7xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
