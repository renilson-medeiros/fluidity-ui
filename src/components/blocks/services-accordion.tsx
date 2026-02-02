"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface ServiceItemProps {
  title: string;
  services: string[];
  link: string;
  image: string;
  isOpen: boolean;
  onClick: () => void;
}

function ServiceItem({ title, services, link, image, isOpen, onClick }: ServiceItemProps) {
  return (
    <div>
      <button
        onClick={onClick}
        className="w-full cursor-pointer bg-background py-2 md:py-8 flex items-center justify-between group transition-all duration-300"
      >
        <h2 className={cn(
          "text-2xl md:text-6xl font-bold uppercase tracking-tighter transition-colors duration-300 text-left",
          isOpen ? "text-foreground" : "text-foreground group-hover:text-foreground/60"
        )}>
          {title}
        </h2>
        
        <div className={cn(
          "w-12 h-12 md:w-16 md:h-16 rounded-full border border-foreground/20 flex items-center justify-center transition-all duration-500",
          isOpen ? "border-foreground text-foreground rotate-45" : "bg-transparent hover:border-foreground"
        )}>
          <Plus className={cn(
            "w-6 h-6 md:w-8 md:h-8 transition-colors duration-300",
            isOpen ? "text-foreground" : "text-foreground"
          )} />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, y: 50 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: 25 }}
            transition={{ 
              duration: 1, 
              ease: [0.23, 1, 0.32, 1],
              opacity: { duration: 0.4 }
            }}
            className="overflow-hidden"
          >
            <div className="pb-12 space-y-8">
              <Link className="flex flex-col gap-6 md:gap-8" href={link}>
                {/* Sub-services list */}
                <div className="flex flex-col md:flex-row md:items-center w-full gap-2 md:gap-0">
                    {services.map((service, index) => (
                    <div key={index} className={cn(
                        "flex flex-col md:flex-row md:items-center",
                        index < services.length - 1 ? "md:flex-1" : "md:flex-none"
                    )}>
                        <span className="text-foreground font-medium whitespace-nowrap py-2 md:py-0">
                        {service}
                        </span>
                        {index < services.length - 1 && (
                        <>
                            <div className="hidden md:block h-px flex-1 bg-foreground/10 mx-10" />
                            <div className="block md:hidden w-full h-px bg-foreground/10 my-2" />
                        </>
                        )}
                    </div>
                    ))}
                </div>

                {/* Service Image */}
                <div className="relative w-full aspect-video md:aspect-21/9 rounded-lg overflow-hidden">
                    <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="100vw"
                    />
                </div>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const DEFAULT_SERVICES = [
  {
    title: "Brand Identity Design",
    services: ["Brand Strategy", "Logo Design", "Visual Identity", "Brand Guidelines"],
    link: "/components/services-accordion",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "UI UX Design",
    services: ["User Research", "Design Mockups", "UX/UI", "UX Testing"],
    link: "/components/services-accordion",
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "Web Development",
    services: ["Frontend Dev", "Backend Dev", "CMS Integration", "E-commerce"],
    link: "/components/services-accordion",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "Digital Marketing",
    services: ["SEO Audit", "Social Media", "Content Strategy", "PPC Campaigns"],
    link: "/components/services-accordion",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop"
  }
];

export function ServicesAccordion({ items = DEFAULT_SERVICES }: { items?: typeof DEFAULT_SERVICES }) {
  const [openIndex, setOpenIndex] = useState<number | null>(); // UI UX Design open by default like image

  return (
    <div className="w-full bg-background text-foreground py-4 px-1">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col">
          {items.map((item, index) => (
            <ServiceItem
              key={index}
              {...item}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
