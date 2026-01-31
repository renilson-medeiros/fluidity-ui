"use client";
import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from "framer-motion"; 

const TravelServicesList = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const services = [
    { 
      number: '01', 
      title: 'Joy of Traveling',
      description: 'Travel opens doors to experiences that shape who we are, creating stories worth sharing for a lifetime.',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop'
    },
    { 
      number: '02', 
      title: 'Purposeful Journey',
      description: 'Every trip can teach something new, when we travel with purpose, every step feels more meaningful and alive.',
      image: 'https://images.unsplash.com/photo-1529260830199-42c24126f198?w=400&h=300&fit=crop'
    },
    { 
      number: '03', 
      title: 'Smart Trip Planning',
      description: 'Planning ahead transforms travel from stressful to seamless, letting you focus on moments that matter most.',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop'
    },
    { 
      number: '04', 
      title: 'Memories Beyond Photos',
      description: 'The best souvenirs are the connections we make and the personal growth we experience along the way.',
      image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&h=300&fit=crop'
    },
    { 
      number: '05', 
      title: 'Budget Adventures',
      description: "Incredible journeys don't require endless funds, just creativity and willingness to explore differently.",
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&h=300&fit=crop'
    }
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center px-2 md:px-0 container mx-auto">

      <div className="w-full">
        {services.map((service, index) => {
          const isHovered = hoveredIndex === index;
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                duration: 0.6, 
                ease: [0.25, 0.1, 0.25, 1],
                delay: index * 0.1 
              }}
              className={`relative border-b border-foreground/10 ease-out cursor-pointer transition-all duration-200 ${
                isHovered ? "h-[180px] md:h-[140px]" : "h-[100px] md:h-[100px]"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Estado colapsado */}
              <div 
                className="h-full px-2 flex items-center justify-between md:px-8 transition-all duration-75"
                style={{
                  opacity: isHovered ? 0 : 1,
                  transform: isHovered ? 'translateY(-10px)' : 'translateY(0)'
                }}
              >
                <div className="flex items-center gap-6 md:gap-12">
                  <span className="text-foreground text-3xl font-medium tracking-tight hidden md:inline">
                    {service.number}
                  </span>
                  <h2 className="text-foreground text-xl font-medium tracking-tight md:text-3xl">
                    {service.title}
                  </h2>
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center md:w-16 md:h-16">
                  <ArrowRight className="w-5 h-5 text-foreground md:w-7 md:h-7" strokeWidth={2} />
                </div>
              </div>
              
              {/* Estado expandido */}
              <div 
                className="absolute inset-0 transition-all duration-75"
                style={{
                  opacity: isHovered ? 1 : 0,
                  transform: isHovered ? 'translateY(0)' : 'translateY(10px)'
                }}
              >
                <div className="h-full">
                  <div className="bg-foreground/5 h-full py-10 px-4 md:px-8 flex items-center justify-between gap-6 md:gap-12">
                    <span className="text-foreground/70 text-3xl font-medium tracking-tight shrink-0 hidden md:inline">
                      {service.number}
                    </span>
                    
                    <div className="flex-1 min-w-0">
                      <h2 className="text-foreground text-lg font-medium tracking-tight leading-tight mb-1 md:text-3xl">
                        {service.title}
                      </h2>
                      <p className="text-foreground/70 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    
                    <div className="shrink-0 relative w-30 h-36 md:w-36 md:h-40">
                      <Image 
                        src={service.image}
                        alt={service.title}
                        fill
                        className={`rounded-lg shadow-none md:shadow-lg object-cover transition-transform duration-300 ease-out ${
                          isHovered ? "scale-100 md:-rotate-2" : "scale-50 md:rotate-3"
                        }`}
                      />
                    </div>
                    
                    <div className="shrink-0 hidden md:inline">
                      <div className="w-14 h-14 rounded-full border-2 border-foreground flex items-center justify-center bg-foreground text-background transition-colors group">
                        <ArrowUpRight className="w-6 h-6 group-hover:scale-110 transition-transform" strokeWidth={2} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default TravelServicesList;
