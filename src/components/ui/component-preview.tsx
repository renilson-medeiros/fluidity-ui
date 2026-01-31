"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CopyButton } from "@/components/ui/copy-button";
import { RotateCw } from "lucide-react";

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  code: string;
  align?: "center" | "start" | "end";
  children: React.ReactNode;
  isScrollComponent?: boolean;
}

export function ComponentPreview({
  name,
  children,
  code,
  align = "center",
  isScrollComponent = false,
  className,
  ...props
}: ComponentPreviewProps) {
  const [key, setKey] = React.useState(0);

  return (
    <div
      className={cn("group relative my-4 flex flex-col space-y-2", className)}
      {...props}
    >
      <Tabs defaultValue="preview" className="relative mr-auto w-full">
        <div className="flex items-center justify-between pb-3">
          <TabsList className="w-full justify-start rounded-none border-b border-border bg-transparent p-0">
            <TabsTrigger
              value="preview"
              className="cursor-pointer relative h-9 border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-foreground data-[state=active]:text-foreground data-[state=active]:shadow-none"
            >
              Preview
            </TabsTrigger>
            <TabsTrigger
              value="code"
              className="cursor-pointer relative h-9 border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-foreground data-[state=active]:text-foreground data-[state=active]:shadow-none"
            >
              Code
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="preview" className="relative">
          <div className="flex items-center justify-end p-4">
             <div className="flex items-center  bg-muted hover:bg-muted/80 rounded-full gap-2">
                 <button 
                    onClick={() => setKey((prev) => prev + 1)}
                    className="p-2 cursor-pointer hover:rotate-360 text-muted-foreground transition-all duration-500"
                    title="Reload Preview"
                 >
                    <RotateCw className="w-3 h-3" />
                 </button>
             </div>
          </div>
          <div
            className={cn(
              "preview flex w-full justify-center items-center overflow-x-hidden",
              isScrollComponent ? "h-[400vh]" : "min-h-[350px]",
              {
                "items-center": align === "center",
                "items-start": align === "start",
                "items-end": align === "end",
              }
            )}
          >
            <React.Suspense fallback={<div className="text-sm text-muted-foreground">Loading...</div>}>
                {/* Key forces re-render for animations */}
                <div key={key} className="w-full">
                    {children}
                </div>
            </React.Suspense>
          </div>
        </TabsContent>
        <TabsContent value="code">
          <div className="flex flex-col space-y-4">
            <div className="w-full rounded-md border bg-background p-4 relative">
              <div className="absolute right-4 top-4">
                  <CopyButton className="[&_svg]:h-4 [&_svg]:w-4" value={code} />
              </div>
              <pre className="h-[450px] [&::-webkit-scrollbar]:hidden overflow-x-auto bg-background rounded-md p-4">
                <code className="relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm text-foreground">
                  {code}
                </code>
              </pre>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
