import { promises as fs } from "fs";
import path from "path";
import Link from "next/link";
import { notFound } from "next/navigation";
import { registry } from "@/registry";
import { Badge } from "@/components/ui/badge/badge";
import { Terminal, Copy, ArrowLeft, Info, Code2, Play } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CopyButton } from "@/components/ui/copy-button";
import { Button } from "@/components/ui/button/button";
import { ThemeToggle } from "@/components/theme-toggle";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ComponentPage({ params }: PageProps) {
  const { slug } = await params;
  const item = registry[slug];

  if (!item) {
    notFound();
  }

  // Read component code
  let code = "// Error reading file";
  try {
    const fullPath = path.join(process.cwd(), item.file);
    code = await fs.readFile(fullPath, "utf-8");
  } catch (error) {
    console.error(error);
  }

  const Component = item.component;

  return (
    <div className="space-y-8 pb-24">

    <div className="fixed bottom-8 right-8 z-50">
      <ThemeToggle />
    </div>

      {/* Mobile Back Button */}
      <div className="lg:hidden -ml-4">
        <Link href="/components">
          <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-4 h-4" /> Voltar para Componentes
          </Button>
        </Link>
      </div>

      {/* Header & CLI */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="space-y-4 max-w-2xl">
          <div className="flex items-center gap-2">
             <Badge variant="outline" className="text-[10px] uppercase tracking-widest px-2 py-0.5 font-mono">
               {item.type}
             </Badge>
             {item.dependencies?.map(dep => (
               <Badge key={dep} variant="secondary" className="text-[10px] lowercase font-mono">
                 {dep}
               </Badge>
             ))}
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-foreground">
            {item.name}
          </h1>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            {item.description}
          </p>
        </div>
        
        <div className="flex flex-col gap-2 min-w-[300px]">
           <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground ml-1">Instalação via CLI</span>
           <div className="flex items-center justify-between px-4 py-3 rounded-lg border border-border bg-muted/30 font-mono text-sm group">
             <span className="text-muted-foreground group-hover:text-foreground transition-colors">npx fluidity-ui add {slug}</span>
             <CopyButton value={`npx fluidity-ui add ${slug}`} className="h-4 w-4" />
           </div>
        </div>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="preview" className="w-full">
        <div className="flex items-center justify-between border-b border-border mb-6 overflow-x-auto no-scrollbar">
          <TabsList className="bg-transparent p-0 h-auto gap-6 rounded-none border-none">
            <TabsTrigger 
              value="preview" 
              className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-foreground border-b-2 border-transparent rounded-none px-0 py-2 uppercase tracking-widest text-[10px] font-bold gap-2"
            >
              <Play className="w-3 h-3" /> Visualização
            </TabsTrigger>
            <TabsTrigger 
              value="installation" 
              className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-foreground border-b-2 border-transparent rounded-none px-0 py-2 uppercase tracking-widest text-[10px] font-bold gap-2"
            >
              <Terminal className="w-3 h-3" /> Instalação & Uso
            </TabsTrigger>
            <TabsTrigger 
              value="code" 
              className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-foreground border-b-2 border-transparent rounded-none px-0 py-2 uppercase tracking-widest text-[10px] font-bold gap-2"
            >
              <Code2 className="w-3 h-3" /> Código
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Preview Tab - Pure Rendering */}
        <TabsContent value="preview" className="mt-0 outline-none">
           <div className="relative min-h-[500px] flex items-start justify-start overflow-visible bg-background/50 backdrop-blur-sm shadow-foreground/5">
              {/* Pure Component Rendering */}
              <div className="w-full">
                <Component {...item.props} />
              </div>
           </div>
        </TabsContent>

        {/* Installation & Usage Tab */}
        <TabsContent value="installation" className="space-y-12 mt-0 outline-none animate-in fade-in slide-in-from-bottom-2 duration-500">
           {/* Section: Installation */}
           <div className="space-y-6">
             <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-muted-foreground">
                <Terminal className="w-4 h-4" /> 01. Instalação
             </div>
             <div className="space-y-4">
                {item.installationSteps ? (
                   item.installationSteps.map((step, i) => (
                     <div key={i} className="flex gap-4 items-start group">
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border bg-background text-[10px] font-bold transition-colors group-hover:border-foreground group-hover:bg-foreground group-hover:text-background">
                           {i + 1}
                        </div>
                        <p className="text-sm text-foreground pt-0.5 leading-relaxed" dangerouslySetInnerHTML={{ __html: step.replace(/`([^`]+)`/g, '<code class="bg-foreground/5 px-1.5 py-0.5 rounded font-mono text-xs text-foreground">$1</code>') }} />
                     </div>
                   ))
                ) : (
                   <p className="text-sm text-muted-foreground italic">Nenhum passo de instalação fornecido.</p>
                )}
             </div>
           </div>

           {/* Section: Usage */}
           <div className="space-y-6">
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-muted-foreground">
                <Copy className="w-4 h-4" /> 02. Exemplo de Uso
              </div>
              <div className="relative group rounded-lg border border-border bg-muted/30 overflow-hidden transition-all hover:bg-muted/50">
                <div className="absolute right-4 top-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                   <CopyButton value={item.usageExample || ""} />
                </div>
                <pre className="p-6 text-sm font-mono leading-relaxed overflow-x-auto [&::-webkit-scrollbar]:hidden">
                   {item.usageExample || `import { ${item.name.replace(/\s+/g, '')} } from "@/components/blocks/${slug}";\n\n<${item.name.replace(/\s+/g, '')} />`}
                </pre>
              </div>
           </div>
        </TabsContent>

        {/* Full Code Tab */}
        <TabsContent value="code" className="mt-0 outline-none animate-in fade-in slide-in-from-bottom-2 duration-500">
           <div className="relative group rounded-lg border border-border bg-muted/30 overflow-hidden transition-all hover:bg-muted/50">
              <div className="absolute right-4 top-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                 <span className="text-[10px] font-mono text-muted-foreground bg-foreground/5 backdrop-blur-sm px-2 py-1 rounded">
                   {item.file}
                 </span>
                 <CopyButton value={code} />
              </div>
              <pre className="p-6 text-xs font-mono leading-relaxed max-h-[700px] overflow-auto [&::-webkit-scrollbar]:hidden">
                 {code}
              </pre>
           </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
