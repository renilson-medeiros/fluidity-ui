"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button/button";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { SimpleNavbar } from "@/components/blocks/simple-navbar";
import { CopyButton } from "@/components/ui/copy-button";
import { ArrowRight, Terminal } from "lucide-react";
import AnimatedButton from "@/components/ui/animated-button/animated-button";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col overflow-x-hidden">
      
      {/* Navigation */}
      <SimpleNavbar />

      <div className="fixed bottom-8 right-8 z-50">
        <ThemeToggle />
      </div>

      <div className="flex-1 flex flex-col items-center">
        {/* Hero Section */}
        <section className="min-h-[90vh] flex flex-col items-center justify-center p-8 relative w-full overflow-hidden">
          {/* Background Text / Aesthetic Layer */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none overflow-hidden">
            <h1 className="text-[20vw] font-bold tracking-tighter leading-none whitespace-nowrap">
              FLUIDITY
            </h1>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center space-y-12 max-w-5xl">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <h2 className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter leading-[0.85] uppercase">
                Fluidity <span className="bg-clip-text text-transparent bg-linear-to-b from-foreground to-foreground/50">UI</span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
                Eleve o nível dos seus projetos com componentes <strong className="text-foreground font-medium">high-end</strong>. <br className="hidden md:block" />
                Animações fluidas, design premium e performance impecável.
              </p>
            </motion.div>

            {/* Install Snippet */}
            <motion.div
               initial={{ scale: 0.9, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{ duration: 0.5, delay: 0.3 }}
               className="w-full max-w-sm mx-auto"
            >
               <div className="flex items-center justify-between px-4 py-3 rounded-lg border border-foreground/10 bg-foreground/10 text-foreground font-mono text-sm shadow-2xl backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                      <Terminal className="w-4 h-4 text-foreground" />
                      <span>npx fluidity-ui init</span>
                  </div>
                  <CopyButton value="npx fluidity-ui init" className="w-4 h-4 text-foreground hover:text-foreground/90" />
               </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto justify-center"
            >
              <Link href="/components" className="w-full sm:w-auto">
                <Button variant="default" className="w-full min-w-[200px] h-14 text-base font-bold uppercase tracking-tight">
                  Explorar Componentes 
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/docs" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full min-w-[200px] h-14 text-base font-bold uppercase tracking-tight">
                  Ver Documentação
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Features / Why Section */}
        <section className="w-full py-32 border-t border-border bg-muted/20">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid md:grid-cols-3 gap-16">
               <div className="space-y-4">
                  <div className="h-12 w-12 rounded-full bg-foreground flex items-center justify-center text-background">
                     <span className="font-bold">01</span>
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter">Foco em Performance</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Componentes otimizados para tempo de carregamento e FPS estável em todas as animações usando framer-motion.
                  </p>
               </div>
               <div className="space-y-4">
                  <div className="h-12 w-12 rounded-full border border-foreground flex items-center justify-center">
                     <span className="font-bold">02</span>
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter">Aesthetic First</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Design inspirado nas tendências mais modernas do Awwwards e Linear. Limpo, premium e direto ao ponto.
                  </p>
               </div>
               <div className="space-y-4">
                  <div className="h-12 w-12 rounded-full bg-foreground/10 flex items-center justify-center text-foreground">
                     <span className="font-bold">03</span>
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter">Copiar & Colar</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Não é uma biblioteca de componentes NPM tradicional. O código é seu. Copie, ajuste e sinta-se em casa.
                  </p>
               </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-32 relative overflow-hidden flex flex-col items-center text-center px-6">
           <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="space-y-6 relative z-10"
           >
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter max-w-2xl mx-auto">Pronto para elevar o <span className="text-muted-foreground italic">nível</span> do seu UI?</h2>
              <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                 <Link href="/components">
                   <AnimatedButton>
                      Começar
                   </AnimatedButton>
                 </Link>
              </div>
           </motion.div>
           
           {/* Abstract shapes for visual interest */}
           <div className="absolute top-1/2 left-0 -translate-y-1/2 w-48 h-48 bg-foreground/5 blur-3xl rounded-full" />
           <div className="absolute top-1/2 right-0 -translate-y-1/2 w-48 h-48 bg-foreground/5 blur-3xl rounded-full" />
        </section>
      </div>

      {/* Footer Info */}
      <footer className="w-full py-16 px-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-12">
         <div className="flex flex-col items-center md:items-start gap-4">
            <h2 className="text-2xl font-black uppercase tracking-tighter italic">Fluid Interfaces</h2>
            <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.3em]">Built for the elite developers.</p>
         </div>
         <div className="flex gap-12 text-[10px] uppercase tracking-widest text-muted-foreground font-mono">
            <Link href="/" className="hover:text-foreground transition-colors border-b border-transparent hover:border-foreground py-1">Início</Link>
            <Link href="/docs" className="hover:text-foreground transition-colors border-b border-transparent hover:border-foreground py-1">Documentação</Link>
            <Link href="/components" className="hover:text-foreground transition-colors border-b border-transparent hover:border-foreground py-1">Componentes</Link>
         </div>
         <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
            Fluidity UI © 2026 
         </div>
      </footer>
    </main>
  );
}
