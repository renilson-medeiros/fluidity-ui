"use client";

import Image from 'next/image';
import Link from 'next/link';
import AnimatedButton from '@/components/ui/animated-button/animated-button';
import { Badge } from '../ui/badge/badge';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: Array<{ label: string;  }>;
  images: string[];
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Budget Planner Finance App",
    description: "With user-centered approach, the goals was to create an intuitive interface for effortless financial management while incorporating gamification.",
    tags: [
      { label: "Digital Brand Assets" },
      { label: "Brand Strategy"},
      { label: "UX/UI design" }
    ],
    images: [
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    ],
    link: "/"
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "A modern e-commerce solution built with Next.js and Stripe integration. Features include real-time inventory management, advanced search filters, and seamless checkout experience.",
    tags: [
      { label: "Web Development" },
      { label: "E-Commerce" },
      { label: "Full Stack" }
    ],
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80"
    ],
    link: "/"
  },
  {
    id: 3,
    title: "AI Travel Assistant",
    description: "An intelligent travel planning application that uses machine learning to suggest personalized itineraries based on user preferences and budget constraints.",
    tags: [
      { label: "Artificial Intelligence" },
      { label: "Mobile App" },
      { label: "Machine Learning" }
    ],
    images: [
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80"
    ],
    link: "/"
  },
  {
    id: 4,
    title: "Real Estate Dashboard",
    description: "Comprehensive property management system with advanced analytics, tenant management, and automated maintenance scheduling for property managers.",
    tags: [
      { label: "Dashboard Design" },
      { label: "Data Visualization" },
      { label: "SaaS Platform"}
    ],
    images: [
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80"
    ],
    link: "/"
  }
];

export default function ProjectCard() {
  return (
    <div className="w-full flex flex-col gap-10 space-y-0 px-0 md:px-4">
      {projects.map((project, index) => (
        <div 
          key={project.id}
          className="sticky px-16 w-full border border-foreground/10 bg-background backdrop-blur-sm rounded-lg overflow-hidden transition-all duration-300"
          style={{ 
            top: `${100 + (index * 10)}px`,
            zIndex: index + 1
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 min-h-[500px] lg:min-h-[600px]">
            {/* Left Content */}
            <div className="flex flex-col justify-between py-16">
              <div className="space-y-6 lg:space-y-8">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground leading-tight">
                  {project.title}
                </h2>
                
                <p className="text-base md:text-lg lg:text-lg text-foreground/70 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-col gap-3">
                  {project.tags.map((tag, i) => (
                    <div 
                      key={i}
                      className="flex"
                    >
                      <Badge className='flex gap-3 py-3'>
                        <div className={`w-4.5 h-4.5 rounded-full bg-linear-to-br from-foreground to-foreground/60`} />
                        <span className="text-foreground text-xs font-normal font-sans">
                          {tag.label}
                        </span>
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <Link href={project.link} className="mt-8">
                    <AnimatedButton 
                      variant="link" 
                      size="md"
                    >
                        Ver Projeto
                    </AnimatedButton>
                </Link>
              </div>

            </div>

            {/* Right Images */}
            <div className="relative h-[300px] lg:h-full flex-col gap-2 p-2 lg:p-0 hidden md:flex">
              <div className="relative flex-1 overflow-hidden">
                <Image
                  src={project.images[0]}
                  alt={`${project.title} - Image 1`}
                  fill
                  className="object-cover rounded-t-xl mt-36"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
