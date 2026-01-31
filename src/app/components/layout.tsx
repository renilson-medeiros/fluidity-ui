"use client";

import { registry } from "@/registry";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { SimpleNavbar } from "@/components/blocks/simple-navbar";
import { ScrollArea } from "@/components/ui/scroll-area/scroll-area";

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen flex-col bg-background selection:bg-foreground selection:text-background">
      <SimpleNavbar />
      
      <div className="container-fluid flex flex-1 items-start px-6 md:px-12">
        {/* Fixed Sidebar */}
        <aside className="fixed top-24 left-6 md:left-12 z-30 hidden h-fit w-64 shrink-0 overflow-y-auto rounded-lg border border-border bg-background/50 backdrop-blur-xl transition-all hover:bg-background/80 lg:block no-scrollbar shadow-2xl shadow-foreground/5">
          <div className="flex flex-col gap-2 p-4">
            <div className="mb-4">
               <h4 className="px-2 text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                 Componentes
               </h4>
            </div>
            {Object.entries(registry).map(([slug, item]) => (
              <Link
                key={slug}
                href={`/components/${slug}`}
                className={cn(
                  "flex w-full items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-all hover:bg-foreground/5 active:scale-95",
                  pathname === `/components/${slug}`
                    ? "bg-foreground text-background hover:bg-foreground/90"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
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
