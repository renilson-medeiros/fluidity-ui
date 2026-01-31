"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { TooltipProvider } from "@/components/ui/tooltip/tooltip";
import { Toaster } from "@/components/ui/sonner/sonner";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <TooltipProvider delayDuration={0}>
        {children}
        <Toaster position="bottom-right" />
      </TooltipProvider>
    </NextThemesProvider>
  );
}
