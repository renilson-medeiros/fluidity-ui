"use client";

import React from "react";
import { Button } from "@/components/ui/button/button";
import { Card } from "@/components/ui/card/card";
import { Badge } from "@/components/ui/badge/badge";
import { Input, Textarea } from "@/components/ui/input/input";
import { 
  Label, 
  Checkbox, 
  Switch 
} from "@/components/ui/selection/selection";
import { 
  RadioGroup, 
  RadioGroupItem 
} from "@/components/ui/selection/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/selection/select";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion/accordion";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu/dropdown-menu";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar/menubar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet/sheet";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination/pagination";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar/avatar";
import { AspectRatio } from "@/components/ui/aspect-ratio/aspect-ratio";
import { Separator } from "@/components/ui/separator/separator";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area/scroll-area";
import { Slider } from "@/components/ui/slider/slider";
import { Calendar } from "@/components/ui/calendar/calendar";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table/table";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel/carousel";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form/form";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command/command";
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuPortal,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu/context-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible/collapsible";
import { Toggle } from "@/components/ui/toggle/toggle";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group/toggle-group";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip/tooltip";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover/popover";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card/hover-card";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert/alert";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog/alert-dialog";
import { Skeleton } from "@/components/ui/skeleton/skeleton";
import { Progress } from "@/components/ui/progress/progress";
import { ThemeToggle } from "@/components/theme-toggle";
import { toast } from "sonner";
import { motion } from "framer-motion";
import AnimatedButton from "@/components/ui/animated-button/animated-button";
import { 
  Info, 
  AlertCircle, 
  Terminal, 
  HelpCircle, 
  Activity, 
  Calendar as CalendarIcon,
  Settings,
  Star,
  Plus,
  Rocket,
  ArrowLeft
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import { HorizontalProjectScroll } from "@/components/blocks/horizontal-project-scroll";

export default function DesignSystemPage() {
  const [progress, setProgress] = React.useState(13);
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const FormSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast.success("Form Submitted", {
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(98), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background p-4 md:p-12 lg:p-24 space-y-24">
      {/* Floating Theme Toggle */}
      <div className="fixed -bottom-8 right-8 z-100">
        <ThemeToggle />
      </div>

      <div>
        {/* Header */}
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto flex items-center justify-between mb-8 pt-8"
        >
            <div className="flex items-center gap-4">
            <Link href="/">
                <Button variant="ghost" size="icon" className="rounded-full">
                <ArrowLeft className="w-5 h-5" />
                </Button>
            </Link>
            <h1 className="text-2xl font-bold tracking-tight">Design System</h1>
            </div>
        </motion.div>
      </div>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl"
      >
        <span className="text-xs uppercase tracking-widest text-muted-foreground mb-4 block">
          Design System v2.0 • Soft Tech
        </span>
        <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold tracking-tighter mb-8 leading-[0.8]">
          SOFT <br /> TECH
        </h1>
        <p className="text-xl text-muted-foreground max-w-xl">
          A modern component library with refined aesthetics, smooth animations, and accessible interactions. Built for production.
        </p>
      </motion.header>

      {/* 01. Typography */}
      <section className="space-y-12">
        <h2 className="text-xs uppercase tracking-[0.3em] font-light border-b border-border pb-4">
          01. Typography
        </h2>
        <div className="space-y-8 text-foreground">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h3 className="text-4xl md:text-6xl font-bold tracking-tighter italic">Display Large</h3>
            <span className="text-muted-foreground font-mono text-[10px] uppercase">Geist Sans Bold / -0.05em tracking</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-t border-border/50 pt-8">
            <h3 className="text-2xl md:text-4xl font-bold tracking-tight">Heading Medium</h3>
            <span className="text-muted-foreground font-mono text-[10px] uppercase">Geist Sans Semibold / -0.02em tracking</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-t border-border/50 pt-8">
            <p className="text-base md:text-lg leading-relaxed max-w-lg">
              Body text designed for high legibility at all sizes. Geist Sans optimized for digital screens.
            </p>
            <span className="text-muted-foreground font-mono text-[10px] uppercase">Geist Sans Regular / 1.6 line-height</span>
          </div>
        </div>
      </section>

      {/* 02. Buttons & Actions */}
      <section className="space-y-12">
        <h2 className="text-xs uppercase tracking-[0.3em] font-light border-b border-border pb-4">
          02. Buttons & Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 font-foreground">
          <div className="space-y-8">
            <h3 className="text-[10px] uppercase tracking-widest font-mono opacity-40">// Interactive Buttons</h3>
            <div className="flex flex-col gap-4">
                 <div className="flex flex-wrap gap-4 items-center">
                    <AnimatedButton>Animated Button</AnimatedButton>
                    <AnimatedButton variant="link">Animated Link</AnimatedButton>
                 </div>
                 <div className="flex flex-wrap gap-4">
                    <Button variant="default">Primary CTA</Button>
                    <Button variant="outline">Outline Action</Button>
                    <Button variant="ghost">Ghost Link</Button>
                    <Button variant="link">Link</Button>
                 </div>
                 <div className="flex flex-wrap gap-4 items-center mt-2">
                    <Button size="lg">Large Button</Button>
                    <Button size="sm">Small</Button>
                 </div>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-[10px] uppercase tracking-widest font-mono opacity-40">// Identity</h3>
            <div className="flex flex-wrap gap-4">
              <Badge>Default</Badge>
              <Badge className="border-vibrant-green bg-vibrant-green/10 text-vibrant-green">Development</Badge>
              <Badge className="border-vibrant-blue bg-vibrant-blue/10 text-vibrant-blue">Architecture</Badge>
              <Badge className="border-vibrant-red bg-vibrant-red/10 text-vibrant-red">Internal</Badge>
              <Badge className="border-vibrant-yellow bg-vibrant-yellow/10 text-vibrant-yellow">Maintenance</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* 03. Navigation & Structure */}
      <section className="space-y-12">
        <h2 className="text-xs uppercase tracking-[0.3em] font-light border-b border-border pb-4">
          03. Navigation & Structure
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Tabs & Accordion */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-[10px] uppercase tracking-widest font-mono opacity-40">// Interactive Tabs</h3>
              <Tabs defaultValue="account" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="account">Base.System</TabsTrigger>
                  <TabsTrigger value="password">Auth.Secure</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                  <div className="p-4 border border-border rounded-md bg-muted/20">
                    <p className="text-xs font-mono opacity-70 italic leading-relaxed">
                      [INFO] SYSTEM_LOG: ACCESS_GRANTED. <br/>
                      Initializing data synchronization with primary node.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="password">
                  <div className="p-4 border border-border rounded-md bg-muted/20">
                    <p className="text-xs font-mono opacity-70 italic leading-relaxed">
                      [SECURITY] ENCRYPTION_ACTIVE. <br/>
                      All outgoing streams are currently masked.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="space-y-4">
              <h3 className="text-[10px] uppercase tracking-widest font-mono opacity-40">// Structured Accordion</h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Neural Interface</AccordionTrigger>
                  <AccordionContent>
                    Advanced synaptic bridging technology for direct digital-to-neurological data transfer. 
                    Latency is currently at 0.4ms.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Quantum Storage</AccordionTrigger>
                  <AccordionContent>
                    Highly stable entangled particle storage with zero-point energy containment. 
                    Encryption keys rotate every 128 cycles.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          {/* Menus & Structure */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-[10px] uppercase tracking-widest font-mono opacity-40">// Breadcrumbs</h3>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Architecture</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            <div className="space-y-4">
              <h3 className="text-[10px] uppercase tracking-widest font-mono opacity-40">// Command Menus</h3>
              <div className="flex flex-wrap gap-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="uppercase text-[10px] tracking-widest">Execute Options</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Core Commands</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <span>Sync Repository</span>
                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span>Deploy Neural Link</span>
                        <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <span>Terminate Process</span>
                      <DropdownMenuShortcut>ESC</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <Menubar>
                  <MenubarMenu>
                    <MenubarTrigger>System</MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem>Reboot Core</MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem>Diagnostics</MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                  <MenubarMenu>
                    <MenubarTrigger>Grid</MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem>View Nodes</MenubarItem>
                      <MenubarItem>Map Traffic</MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                </Menubar>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-[10px] uppercase tracking-widest font-mono opacity-40">// Overlays & Paging</h3>
              <div className="flex items-center gap-4">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="uppercase text-[10px] tracking-widest accent">Open Sidebar</Button>
                  </SheetTrigger>
                  <SheetContent side="left">
                    <SheetHeader>
                      <SheetTitle>Neural Dashboard</SheetTitle>
                      <SheetDescription>
                        Real-time telemetry and system parameters for the active session.
                      </SheetDescription>
                    </SheetHeader>
                    <div className="py-8 space-y-8">
                      <div className="space-y-3">
                        <Label className="text-[10px] opacity-40 uppercase tracking-widest">Bandwidth Consumption</Label>
                        <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                          <div className="h-full w-2/3 bg-vibrant-blue transition-all duration-500" />
                        </div>
                        <p className="text-xs text-muted-foreground font-mono">67% utilized</p>
                      </div>
                      
                      <div className="space-y-3">
                        <Label className="text-[10px] opacity-40 uppercase tracking-widest">Active Nodes</Label>
                        <p className="text-3xl font-mono font-bold">12.04k</p>
                        <p className="text-xs text-vibrant-green font-mono">↑ 8.2% from last hour</p>
                      </div>

                      <div className="space-y-3">
                        <Label className="text-[10px] opacity-40 uppercase tracking-widest">System Status</Label>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-vibrant-green animate-pulse" />
                          <span className="text-sm font-mono">Operational</span>
                        </div>
                      </div>

                      <div className="space-y-3 pt-4 border-t border-border">
                        <Label className="text-[10px] opacity-40 uppercase tracking-widest">Quick Actions</Label>
                        <div className="flex flex-col gap-2">
                          <Button variant="outline" size="sm" className="w-full justify-start text-xs">
                            Refresh Data
                          </Button>
                          <Button variant="outline" size="sm" className="w-full justify-start text-xs">
                            Export Logs
                          </Button>
                        </div>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>

                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationItem>
                        <PaginationEllipsis />
                      </PaginationItem>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04. Vibrant Palette */}
      <section className="space-y-12">
        <h2 className="text-xs uppercase tracking-[0.3em] font-light border-b border-border pb-4">
          04. Vibrant Palette
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {[
            { name: "Red", class: "bg-vibrant-red" },
            { name: "Green", class: "bg-vibrant-green" },
            { name: "Blue", class: "bg-vibrant-blue" },
            { name: "Purple", class: "bg-vibrant-purple" },
            { name: "Pink", class: "bg-vibrant-pink" },
            { name: "Yellow", class: "bg-vibrant-yellow" },
            { name: "Orange", class: "bg-vibrant-orange" },
          ].map((color) => (
            <div key={color.name} className="space-y-3">
              <div className={cn("aspect-square rounded-md border border-border shadow-sm transition-transform hover:scale-105", color.class)} />
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest font-bold font-mono">{color.name}</span>
                <span className="text-[10px] text-muted-foreground uppercase font-mono">Strong</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 05. Content & Media */}
      <section className="space-y-12">
        <h2 className="text-xs uppercase tracking-[0.3em] font-light border-b border-border pb-4">
          05. Content & Media
        </h2>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
          {/* Media & Table */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h3 className="text-[10px] uppercase tracking-widest font-mono opacity-40">// Media Primitives</h3>
              <div className="flex gap-4 items-center">
                <Avatar className="h-16 w-16 border-2">
                  <AvatarImage src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop" />
                  <AvatarFallback className="text-lg">JD</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold uppercase tracking-widest italic">User.001</h4>
                  <p className="text-xs opacity-60 font-mono">STATUS: UPLINK_ACTIVE</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <AspectRatio ratio={16 / 9} className="bg-muted rounded-md overflow-hidden border border-border">
                  <div className="flex items-center justify-center h-full text-[10px] font-mono opacity-20 uppercase">
                    16:9 Aspect
                  </div>
                </AspectRatio>
                <AspectRatio ratio={1} className="bg-muted rounded-md overflow-hidden border border-border">
                  <div className="flex items-center justify-center h-full text-[10px] font-mono opacity-20 uppercase">
                    1:1 Aspect
                  </div>
                </AspectRatio>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-[10px] uppercase tracking-widest font-mono opacity-40">// Technical Matrix</h3>
              <div className="rounded-md border border-border overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Node ID</TableHead>
                      <TableHead>Frequency</TableHead>
                      <TableHead className="text-right">Resonance</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-mono">NX-204</TableCell>
                      <TableCell>12.4 GHz</TableCell>
                      <TableCell className="text-right">0.84</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono">LX-901</TableCell>
                      <TableCell>44.1 GHz</TableCell>
                      <TableCell className="text-right">0.99</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono">VX-002</TableCell>
                      <TableCell>3.2 GHz</TableCell>
                      <TableCell className="text-right">0.12</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>

          {/* Carousel & interactions */}
          <div className="space-y-12">
             <div className="space-y-6">
                <h3 className="text-[10px] uppercase tracking-widest font-mono opacity-40">// Content Swiper</h3>
                <div className="px-12">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {[1, 2, 3, 4, 5].map((_, index) => (
                        <CarouselItem key={index} className="md:basis-1/2">
                          <div className="p-1">
                            <Card className="flex aspect-square items-center justify-center p-6 bg-muted/20 border-dashed">
                              <span className="text-2xl font-bold font-mono opacity-40">0{index + 1}</span>
                            </Card>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>
             </div>

             <div className="space-y-6">
                <h3 className="text-[10px] uppercase tracking-widest font-mono opacity-40">// Range & Volume</h3>
                <div className="p-6 border border-border rounded-md space-y-8">
                  <div className="space-y-4">
                    <Label className="uppercase text-[10px]">Signal Intensity</Label>
                    <Slider defaultValue={[50]} max={100} step={1} />
                  </div>
                  <div className="space-y-4">
                    <Label className="uppercase text-[10px]">Frequency Modulation</Label>
                    <Slider defaultValue={[20, 80]} max={100} step={1} />
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 06. Selection & Inputs */}
      <section className="space-y-12">
        <h2 className="text-xs uppercase tracking-[0.3em] font-light border-b border-border pb-4">
          06. Selection & Inputs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16">
          {/* Form Fields */}
          <div className="space-y-8 col-span-full lg:col-span-1">
            <h3 className="text-[10px] uppercase tracking-widest font-mono opacity-40">// Inputs</h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" placeholder="hello@fluidityui.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Summary</Label>
                <Textarea id="bio" placeholder="Describe your vision..." className="min-h-[120px]" />
              </div>
            </div>
          </div>

          {/* Selection Controls */}
          <div className="space-y-10">
            <h3 className="text-[10px] uppercase tracking-widest font-mono opacity-40">// Selection</h3>
            <div className="flex items-center space-x-3">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="lowercase italic tracking-normal">Accept terms and conditions</Label>
            </div>
            <div className="flex items-center space-x-4">
              <Switch id="airplane" />
              <Label htmlFor="airplane">Airplane Mode</Label>
            </div>
            <div className="space-y-4">
              <Label>System Options</Label>
              <RadioGroup defaultValue="one">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="one" id="r1" />
                  <Label htmlFor="r1" className="font-normal lowercase">Technical Architecture</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="two" id="r2" />
                  <Label htmlFor="r2" className="font-normal lowercase">User Experience</Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          {/* Select & Complex */}
          <div className="space-y-10">
            <h3 className="text-[10px] uppercase tracking-widest font-mono opacity-40">// Complex</h3>
            <div className="space-y-4">
              <Label>Project Scale</Label>
              <Select defaultValue="medium">
                <SelectTrigger>
                  <SelectValue placeholder="Select scale" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="small">Small (1-5 units)</SelectItem>
                  <SelectItem value="medium">Medium (5-20 units)</SelectItem>
                  <SelectItem value="large">Large (20+ units)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="pt-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full">Open Dialog System</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>System Access</DialogTitle>
                    <DialogDescription>
                      You are about to access the core architectural layers of the design system. Please verify tokens before proceeding.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-6 space-y-4">
                    <Input placeholder="Enter Token ID" />
                    <div className="flex items-center space-x-2">
                      <Checkbox id="verify" />
                      <Label htmlFor="verify" className="text-xs">Confirm visual compliance</Label>
                    </div>
                  </div>
                  <div className="flex justify-end gap-3">
                    <Button variant="ghost" size="sm">Cancel</Button>
                    <Button size="sm">Aprovar Mudanças</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>

      {/* 07. Feedback & Overlays */}
      <section className="space-y-12">
        <h2 className="text-xs uppercase tracking-[0.3em] font-light border-b border-border pb-4">
          07. Feedback & Overlays
        </h2>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
          {/* Overlays */}
          <div className="space-y-10">
            <h3 className="text-[10px] uppercase tracking-widest font-mono opacity-40">// Overlays</h3>
            <div className="flex flex-wrap gap-6 items-center">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="sm">Hover Tooltip</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Archival Layer 01</p>
                </TooltipContent>
              </Tooltip>

              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="sm">Open Popover</Button>
                </PopoverTrigger>
                <PopoverContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-bold uppercase tracking-tight italic">System Config</h4>
                    <p className="text-xs text-muted-foreground">Adjust the resonance of the design tokens.</p>
                  </div>
                  <Button size="sm" className="w-full">Apply Tokens</Button>
                </PopoverContent>
              </Popover>

              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="ghost" size="sm" className="underline underline-offset-4 font-mono">@fluidityui</Button>
                </HoverCardTrigger>
                <HoverCardContent className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="h-10 w-10 bg-foreground rounded-full" />
                    <Badge variant="outline">Verified</Badge>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold">Fluidity UI</h4>
                    <p className="text-xs text-muted-foreground">The premier platform for digital excellence.</p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Button 
                variant="default" 
                size="sm"
                onClick={() => toast("System update successful", {
                  description: "All design tokens have been synchronized.",
                  action: {
                    label: "Undo",
                    onClick: () => console.log("Undo"),
                  },
                })}
              >
                Trigger Success Toast
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => toast.error("Verification failed", {
                  description: "Checksum mismatch in the typography layer.",
                })}
              >
                Trigger Error Toast
              </Button>
            </div>
          </div>

          {/* Feedback & Indicators */}
          <div className="space-y-10">
            <h3 className="text-[10px] uppercase tracking-widest font-mono opacity-40">// Indicators</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-border rounded-md bg-muted/30">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <div className="absolute inset-0 h-2 w-2 rounded-full bg-emerald-500 blur-sm opacity-50" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest">Global Status: Active</span>
                </div>
                <Activity className="h-4 w-4 text-emerald-500" />
              </div>

              <Alert>
                <Terminal className="h-4 w-4" />
                <AlertTitle>System Core</AlertTitle>
                <AlertDescription>
                  Accessing technical architecture layers...
                </AlertDescription>
              </Alert>

              <Alert variant="accent">
                <Info className="h-4 w-4" />
                <AlertTitle>Information</AlertTitle>
                <AlertDescription>
                  Node synchronization at optimal levels.
                </AlertDescription>
              </Alert>

              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Hardware Fail</AlertTitle>
                <AlertDescription>
                  Critical voltage drop in neural subsystem.
                </AlertDescription>
              </Alert>
            </div>

            <div className="space-y-4 pt-4">
              <div className="flex justify-between items-end mb-1">
                <Label className="text-[10px] opacity-40 uppercase tracking-widest">Latency Optimization</Label>
                <span className="text-[10px] font-mono">{progress}MS</span>
              </div>
              <Progress value={progress} className="h-1.5" />
            </div>

            <div className="flex items-center space-x-4 pt-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-4 w-[150px]" />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive" className="w-full md:w-auto">Wipe System Data</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete your
                  account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90 border-destructive">
                  Execute Wipe
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </section>

      {/* 08. Advanced Flow */}
      <section className="space-y-12">
        <h2 className="text-xs uppercase tracking-[0.3em] font-light border-b border-border pb-4">
          08. Advanced Flow
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Form Section */}
          <div className="space-y-8 col-span-1 md:col-span-1 border border-border p-6 rounded-md">
            <h3 className="text-[10px] uppercase tracking-widest font-mono opacity-40">// Validated Schema</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Identity Token</FormLabel>
                      <FormControl>
                        <Input placeholder="u-X204" {...field} />
                      </FormControl>
                      <FormDescription>
                        This is your public identifier within the grid.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">Initialize Access</Button>
              </form>
            </Form>
          </div>

          {/* Context & Command */}
          <div className="space-y-12">
             <div className="space-y-6">
                <h3 className="text-[10px] uppercase tracking-widest font-mono opacity-40">// Contextual Triggers</h3>
                <ContextMenu>
                  <ContextMenuTrigger className="flex h-[120px] w-full items-center justify-center rounded-md border border-dashed border-border bg-muted/10 text-xs font-mono opacity-60 uppercase italic">
                    Right-click for secure logs
                  </ContextMenuTrigger>
                  <ContextMenuContent className="w-64">
                    <ContextMenuLabel>Node Operations</ContextMenuLabel>
                    <ContextMenuSeparator />
                    <ContextMenuItem inset>
                      View Metadata
                      <ContextMenuShortcut>⌘M</ContextMenuShortcut>
                    </ContextMenuItem>
                    <ContextMenuItem inset>
                      Audit Stream
                      <ContextMenuShortcut>⌘A</ContextMenuShortcut>
                    </ContextMenuItem>
                    <ContextMenuSub>
                      <ContextMenuSubTrigger inset>Advanced</ContextMenuSubTrigger>
                      <ContextMenuSubContent className="w-48">
                        <ContextMenuItem>Flush Cache</ContextMenuItem>
                        <ContextMenuItem>Rotate Keys</ContextMenuItem>
                      </ContextMenuSubContent>
                    </ContextMenuSub>
                  </ContextMenuContent>
                </ContextMenu>
             </div>

             <div className="space-y-6">
                <h3 className="text-[10px] uppercase tracking-widest font-mono opacity-40">// Interaction Toggles</h3>
                <div className="flex items-center gap-4">
                  <Toggle variant="outline" aria-label="Toggle star">
                    <Star className="h-4 w-4 mr-2" />
                    Secure
                  </Toggle>
                  
                  <ToggleGroup type="multiple" variant="outline">
                    <ToggleGroupItem value="bold" aria-label="Toggle bold">
                      <Rocket className="h-4 w-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="italic" aria-label="Toggle italic">
                      <Settings className="h-4 w-4" />
                    </ToggleGroupItem>
                  </ToggleGroup>
                </div>
             </div>
          </div>

          {/* Collapsible & Calendar */}
          <div className="space-y-12">
             <div className="space-y-6">
                <h3 className="text-[10px] uppercase tracking-widest font-mono opacity-40">// Data Timeline</h3>
                <div className="rounded-md relative border border-border w-full flex justify-center p-2 bg-muted/5">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border-none"
                  />
                </div>
             </div>

             <div className="space-y-4">
                <h3 className="text-[10px] uppercase tracking-widest font-mono opacity-40">// Technical Details</h3>
                <Collapsible className="w-full space-y-2">
                  <div className="flex items-center justify-between space-x-4 px-4 py-2 border border-border rounded-md">
                    <h4 className="text-xs font-bold uppercase tracking-widest italic">
                      View Raw Logs
                    </h4>
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" size="sm" className="w-9 p-0">
                        <Plus className="h-4 w-4" />
                        <span className="sr-only">Toggle</span>
                      </Button>
                    </CollapsibleTrigger>
                  </div>
                  <CollapsibleContent className="space-y-2">
                    <div className="rounded-md border border-border px-4 py-3 font-mono text-xs opacity-60 bg-muted/20">
                      [SEC] NODE_VERIFIED_AUTH <br/>
                      [SEC] SYNC_COMPLETE_MASTER
                    </div>
                  </CollapsibleContent>
                </Collapsible>
             </div>
          </div>
        </div>
      </section>

      {/* 09. Containers */}
      <section className="space-y-12">
        <h2 className="text-xs uppercase tracking-[0.3em] font-light border-b border-border pb-4">
          09. Containers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="group cursor-pointer">
              <span className="text-xs font-mono mb-4 block opacity-40">ITEM_0{i}</span>
              <h4 className="text-3xl font-bold mb-4 transition-all uppercase tracking-tighter">Feature Architecture</h4>
              <p className="text-sm text-muted-foreground mb-8">
                Refined soft containers with internal transition triggers and fluid depth.
              </p>
              <div className="flex justify-between items-center text-[10px] uppercase tracking-widest opacity-60">
                <span>System Verified</span>
                <span className="px-2 py-0.5 border border-border rounded-full">Active</span>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <footer className="pt-24 border-t border-border text-muted-foreground flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.2em]">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <span>© 2026 Fluidity UI v1.0</span>
          <span className="opacity-40 italic">Final Delivery Protocol: PHASE_COMPLETE</span>
        </div>
        <div className="flex gap-12">
          <a href="#" className="hover:text-foreground transition-colors">Digital Archive</a>
          <a href="#" className="hover:text-foreground transition-colors">Manifesto</a>
          <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
        </div>
      </footer>
    </div>
  );
}
