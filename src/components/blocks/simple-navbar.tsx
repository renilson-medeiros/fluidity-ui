"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button/button";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";

export function SimpleNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="border-b border-border bg-background/80 backdrop-blur-md px-2 md:px-22  sticky top-0 z-50">
        <div className="flex h-16 items-center justify-between px-6 mx-auto">
          <div className="flex items-center gap-8">
              <Link href="/" className="font-bold text-lg tracking-tight">Fluidity UI</Link>
              <nav className="hidden md:flex gap-6 text-sm font-medium">
                  <Link href="/components" className="text-muted-foreground hover:text-foreground transition-colors">Components</Link>
                  <Link href="/design-system" className="text-muted-foreground hover:text-foreground transition-colors">Design System</Link>
                  <Link href="/docs" className="text-muted-foreground hover:text-foreground transition-colors">Docs</Link>
              </nav>
          </div>
          
          <div className="flex items-center gap-4">
              <div className="hidden md:flex gap-2">
                <Link href="https://github.com/renilson-medeiros/fluidity-ui.git" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Button variant="default">
                    GitHub
                    <ArrowUpRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                  
              </div>
               <Button 
                 variant="ghost" 
                 size="icon" 
                 className="md:hidden"
                 onClick={() => setIsOpen(!isOpen)}
               >
                  {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 right-0 bottom-0 w-full bg-background border-l border-border z-40 md:hidden transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col p-6 gap-4">
          <Link href="/components" className="text-lg font-medium py-3 border-b border-border" onClick={() => setIsOpen(false)}>
            Componentes
          </Link>
          <Link href="/design-system" className="text-lg font-medium py-3 border-b border-border" onClick={() => setIsOpen(false)}>
            Design System
          </Link>
          <Link href="/docs" className="text-lg font-medium py-3 border-b border-border" onClick={() => setIsOpen(false)}>
            Documentação
          </Link>
          <div className="flex flex-col gap-3 mt-6">
            <Button variant="outline" className="w-full">GitHub</Button>
            <Button className="w-full font-bold uppercase tracking-tight">Começar Agora</Button>
          </div>
        </nav>
      </div>
    </>
  );
}
