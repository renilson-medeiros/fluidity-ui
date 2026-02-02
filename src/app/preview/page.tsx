"use client";

import { useRef, useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator/separator";

// Components Imports
import { FloatingNav } from "@/components/blocks/floating-nav";
import { TextReveal } from "@/components/blocks/text-reveal";
import { InfiniteTextLoop } from "@/components/blocks/infinite-text-loop";
import { FeatureGridShowcase } from "@/components/blocks/feature-grid-showcase";
import ProjectShowcase from "@/components/blocks/project-showcase";
import { HorizontalProjectScroll } from "@/components/blocks/horizontal-project-scroll";
import { InteractiveCursor } from "@/components/blocks/interactive-cursor";
import { InteractiveTestimonials } from "@/components/blocks/interactive-testimonials";
import { ScrollingGallery } from "@/components/blocks/scrolling-gallery";
import { CircularText } from "@/components/blocks/circular-text";
import ExpandableServices from "@/components/blocks/expandable-services";
import { FAQSection } from "@/components/blocks/faq-section";
import { ServicesAccordion } from "@/components/blocks/services-accordion";
import { FlipTextAvatar } from "@/components/blocks/flip-text-avatar";
import { PricingTable } from "@/components/blocks/pricing-table";
import { TeamMember } from "@/components/blocks/team-member";

export default function Preview() {
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div ref={containerRef} className="relative min-h-screen bg-background">
      

      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-8 space-y-32 py-24 pt-48">

        <FloatingNav />
        
        <InteractiveCursor 
          containerRef={containerRef} 
          text="FLUIDITY UI"
        />

        <section id="marquee">
          <InfiniteTextLoop text="DESIGN IMPACTANTE • FLUIDITY UI • INTERATIVIDADE • " />
        </section>

        <section id="hero">
          <TextReveal text="Fluidity UI: Experiências Digitais que Fluem no Ritmo da sua Criatividade" />
        </section>

        <section id="expandable">
          <ExpandableServices />
        </section>

        <section id="services">
          <ServicesAccordion />
        </section>

        <section id="showcase">
          <ProjectShowcase  />
        </section>

        <section id="gallery">
          <ScrollingGallery />
        </section>

        <section id="horizontal">
          <HorizontalProjectScroll />
        </section>

        <section id="testimonials">
          <InteractiveTestimonials />
        </section>

        <section id="pricing">
          <PricingTable />
        </section>

        <section id="faq">
          <FAQSection />
        </section>

        <section id="team">
          <TeamMember />
        </section>

        <section id="features">
          <FeatureGridShowcase />
        </section>

        {/* Decorative Footer Area */}
        <section id="footer-decor" className="flex flex-col items-center gap-16 py-4 pb-4">
          <div className="flex flex-wrap justify-center gap-24 items-center w-full">
            <FlipTextAvatar 
              imageUrl="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop"
              text="TRANSFORME SUA INTERFACE • " alt={""} 
            />

            <CircularText 
                text="CRIADO COM FLUIDITY UI • " 
                radius={100}
                duration={25}
            />
          </div>
          
          
        </section>

      </main>

      <div className="text-center py-10 space-y-4">
        <h2 className="text-4xl font-black uppercase tracking-tighter">Fluidity UI</h2>
        <p className="text-muted-foreground font-mono text-sm uppercase tracking-widest">
          © 2026 - All Rights Reserved
        </p>
      </div>
    </div>
  );
}
