import { SimpleNavbar } from "@/components/blocks/simple-navbar";
import { Badge } from "@/components/ui/badge/badge";
import { Terminal, BookOpen, Layers, Package, Zap } from "lucide-react";
import { Button } from "@/components/ui/button/button";
import Link from "next/link";

export default function DocsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background selection:bg-foreground selection:text-background font-sans">
      <SimpleNavbar />
      
      <main className="container mx-auto px-6 py-24 max-w-7xl">
        <div className="space-y-16">
          {/* Header */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-[10px] uppercase tracking-widest font-mono px-2 py-0.5">
                Design System v1.0
              </Badge>
            </div>
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">
              Get <span className="text-muted-foreground italic">Fluid</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl font-light leading-relaxed">
              O Fluidity UI é um sistema de design focado em estética e movimento. Siga os passos abaixo para integrar em seu projeto ou use nossa CLI oficial.
            </p>
          </div>

          {/* Quick Start Section */}
          <section className="space-y-8">
            <div className="flex items-center gap-3 border-b border-border pb-4">
               <Zap className="w-5 h-5 text-foreground" />
               <h2 className="text-2xl font-bold uppercase tracking-tight">Início Rápido</h2>
            </div>
            
            <div className="grid gap-12">
               <div className="space-y-4">
                  <h3 className="text-lg font-bold flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-foreground text-background text-[10px]">1</span>
                    Instalação de Dependências
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    A maioria dos nossos componentes utiliza <code className="bg-foreground/5 px-1.5 py-0.5 rounded font-mono">framer-motion</code> e <code className="bg-foreground/5 px-1.5 py-0.5 rounded font-mono">lucide-react</code>.
                  </p>
                  <div className="relative group">
                    <pre className="p-6 rounded-lg border border-border bg-muted/30 font-mono text-sm overflow-x-auto">
                      npm install framer-motion lucide-react clsx tailwind-merge
                    </pre>
                  </div>
               </div>

               <div className="space-y-4">
                  <h3 className="text-lg font-bold flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-foreground text-background text-[10px]">2</span>
                    Utilitário de Classes (cn)
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Certifique-se de ter o utilitário de fusão de classes em <code className="bg-foreground/5 px-1.5 py-0.5 rounded font-mono">src/lib/utils.ts</code>.
                  </p>
                  <div className="relative group">
                    <pre className="p-6 rounded-lg border border-border bg-muted/30 font-mono text-sm overflow-x-auto">
{`import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`}
                    </pre>
                  </div>
               </div>
            </div>
          </section>

          {/* Transform into Lib Section */}
          <section className="space-y-12 p-8 md:p-12 rounded-lg border border-border bg-foreground text-background shadow-2xl relative overflow-hidden group">
            <div className="relative z-10 space-y-8">
               <div className="flex items-center gap-3">
                  <Package className="w-8 h-8" />
                  <h2 className="text-3xl font-black uppercase tracking-tighter">Guia: Transforme em Lib NPM</h2>
               </div>
               
               <p className="text-background/70 text-lg font-medium leading-relaxed max-w-3xl">
                 O Fluidity UI não é apenas um template; é a semente de um Design System. Se você deseja publicar esses componentes como um pacote NPM ou mantê-los como sua biblioteca interna, siga o blueprint abaixo.
               </p>

               <div className="grid md:grid-cols-3 gap-12 text-sm border-t border-background/10 pt-8">
                  <div className="space-y-4">
                     <div className="flex items-center gap-2 text-background/50">
                        <Layers className="w-4 h-4" />
                        <h4 className="font-bold uppercase tracking-widest text-[10px]">1. Entry Points</h4>
                     </div>
                     <p>Crie um arquivo <code className="bg-background/10 px-1 py-0.5 rounded">src/lib/index.ts</code> para centralizar as exportações: <br/><br/>
                     <code className="text-background/40 italic">export * from '../components/blocks/text-reveal';</code>
                     </p>
                  </div>
                  
                  <div className="space-y-4">
                     <div className="flex items-center gap-2 text-background/50">
                        <Terminal className="w-4 h-4" />
                        <h4 className="font-bold uppercase tracking-widest text-[10px]">2. Build System</h4>
                     </div>
                     <p>Recomendamos o uso do <strong className="text-background">tsup</strong> para gerar bundles leves (CJS/ESM).  <br/><br/>
                     <code className="bg-background/10 px-1 py-0.5 rounded">npm install tsup -D</code>
                     </p>
                  </div>

                  <div className="space-y-4">
                     <div className="flex items-center gap-2 text-background/50">
                        <BookOpen className="w-4 h-4" />
                        <h4 className="font-bold uppercase tracking-widest text-[10px]">3. Peer Dependencies</h4>
                     </div>
                     <p>Mova <code className="bg-background/10 px-1 py-0.5 rounded">framer-motion</code> e <code className="bg-background/10 px-1 py-0.5 rounded">react</code> para <code className="italic">peerDependencies</code> para evitar duplicidade de versões no projeto final.</p>
                  </div>
               </div>

               <div className="space-y-4 bg-background/5 p-6 rounded-md border border-background/10">
                  <h4 className="font-bold uppercase tracking-widest text-[10px] text-background/50">Configuração do Tailwind v4</h4>
                  <p className="text-sm">Para que os estilos funcionem no projeto que consumir sua lib, adicione o caminho da sua lib no <code className="bg-background/10 px-1 py-0.5 rounded">globals.css</code> ou no arquivo de estilos principal do consumidor.</p>
               </div>

               <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <Link href="/components">
                    <Button variant="outline" >
                      Explorar Componentes
                    </Button>
                  </Link>
                  <Button variant="ghost" className="text-background hover:bg-background/10 font-bold uppercase tracking-widest text-[10px] px-8">
                    Ver Exemplo de package.json
                  </Button>
               </div>
            </div>
            {/* Abstract Background element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-background/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-background/10 transition-colors" />
          </section>

          {/* CLI Section */}
          <section className="space-y-8 scroll-mt-24" id="cli">
            <div className="flex items-center gap-3 border-b border-border pb-4">
               <Terminal className="w-5 h-5 text-foreground" />
               <h2 className="text-2xl font-bold uppercase tracking-tight">Fluidity CLI</h2>
            </div>
            
            <p className="text-muted-foreground text-sm">
              Use nossa ferramenta de linha de comando para automatizar a configuração e adição de novos componentes ao seu projeto.
            </p>

            <div className="grid gap-8">
               <div className="space-y-4">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Inicialização</h4>
                  <pre className="p-6 rounded-lg border border-border bg-muted/30 font-mono text-sm overflow-x-auto">
                    npx fluidity-ui init
                  </pre>
               </div>
               
               <div className="space-y-4">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Adicionar Componentes</h4>
                  <pre className="p-6 rounded-lg border border-border bg-muted/30 font-mono text-sm overflow-x-auto">
                    npx fluidity-ui add text-reveal
                  </pre>
               </div>
            </div>
          </section>

          {/* Footer Docs */}
          <div className="flex justify-between items-center border-t border-border pt-12">
             <div className="flex gap-4">
                <Link href="/" className="text-sm font-bold uppercase tracking-widest hover:underline">Home</Link>
                <Link href="/components" className="text-sm font-bold uppercase tracking-widest hover:underline">Componentes</Link>
             </div>
             <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
               Fluidity UI © 2026
             </p>
          </div>
        </div>
      </main>
    </div>
  );
}
