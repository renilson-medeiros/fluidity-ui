import { LazyExoticComponent, ComponentType } from "react";

export interface RegistryComponent {
  name: string;
  description: string;
  component: React.ComponentType<any>;
  file: string;
  dependencies?: string[];
  type: "block" | "ui";
  props?: Record<string, any>;
  stars?: number;
  installationSteps?: string[];
  usageExample?: string;
}

export const registry: Record<string, RegistryComponent> = {
  "text-reveal": {
    name: "Text Reveal",
    description: "Animação de letras surgindo ao fazer scroll, ideal para frases de impacto.",
    component: require("@/components/blocks/text-reveal").TextReveal,
    file: "src/components/blocks/text-reveal.tsx",
    type: "block",
    stars: 120,
    dependencies: ["framer-motion"],
    props: {
      text: "O Fluidity UI é uma biblioteca de componentes práticos para criar interfaces de alta qualidade e acessíveis.",
    },
    installationSteps: [
      "Instale o Framer Motion: `npm install framer-motion`",
      "Copie o arquivo `src/components/blocks/text-reveal.tsx`.",
      "Certifique-se de ter o utilitário `cn` para merge de classes."
    ],
    usageExample: "import { TextReveal } from '@/components/blocks/text-reveal';\n\nexport default function Demo() {\n  return (\n    <div className='min-h-[200vh] py-24'>\n      <TextReveal \n        text='Sua mensagem aqui' \n        className='text-vibrant-blue'\n      />\n    </div>\n  );\n}"
  },
  "infinite-text-loop": {
    name: "Infinite Text Loop",
    description: "Um marquee de texto que desliza infinitamente baseado na posição do scroll.",
    component: require("@/components/blocks/infinite-text-loop").InfiniteTextLoop,
    file: "src/components/blocks/infinite-text-loop.tsx",
    type: "block",
    stars: 85,
    dependencies: ["framer-motion"],
    props: {
      text: "LOOP INFINITO • FLUIDITY UI • NEXT.JS • ",
    },
    installationSteps: [
      "Instale o Framer Motion: `npm install framer-motion`",
      "Copie `src/components/blocks/infinite-text-loop.tsx`.",
      "Garanta que o container pai tenha `overflow-hidden`."
    ],
    usageExample: "import { InfiniteTextLoop } from '@/components/blocks/infinite-text-loop';\n\n<InfiniteTextLoop \n  text='TEXTO EM MOVIMENTO • ' \n  direction={1} \n  baseVelocity={5} \n/>"
  },
  "horizontal-project-scroll": {
    name: "Horizontal Project Scroll",
    description: "Layout de scroll horizontal em tela cheia para apresentações de portfólio premium.",
    component: require("@/components/blocks/horizontal-project-scroll").HorizontalProjectScroll,
    file: "src/components/blocks/horizontal-project-scroll.tsx",
    type: "block",
    stars: 150,
    dependencies: ["framer-motion", "lucide-react"],
    installationSteps: [
      "Instale: `npm install framer-motion lucide-react`",
      "Copie: `horizontal-project-scroll.tsx`, `project-cursor.tsx` e `circular-text.tsx`.",
      "Adicione as imagens dos seus projetos no array dentro do componente."
    ],
    usageExample: "import { HorizontalProjectScroll } from '@/components/blocks/horizontal-project-scroll';\n\n// A altura do container controla a velocidade do scroll\n<div className='h-[300vh]'>\n  <HorizontalProjectScroll />\n</div>"
  },
  "cursor-demo": {
    name: "Cursor Demo",
    description: "Seguidor de cursor personalizado projetado para containers específicos.",
    component: require("@/components/blocks/cursor-demo").CursorDemo,
    file: "src/components/blocks/cursor-demo.tsx",
    type: "block",
    stars: 42,
    dependencies: ["framer-motion"],
    installationSteps: [
      "Copie `src/components/ui/project-cursor.tsx`.",
      "Use `useRef` para capturar o container onde o cursor deve atuar.",
      "Passe a ref para o componente `<ProjectCursor containerRef={ref} />`."
    ],
    usageExample: "import { ProjectCursor } from '@/components/ui/project-cursor';\nimport { useRef } from 'react';\n\nconst containerRef = useRef(null);\n\n<div ref={containerRef} className='cursor-none relative h-[400px]'>\n  <ProjectCursor \n     containerRef={containerRef} \n     text='VER'\n     className='bg-black text-white'\n  />\n</div>"
  },
  "hero-section": {
    name: "Hero Section",
    description: "Seção de impacto com layout dividido e animações sincronizadas.",
    component: require("@/components/blocks/hero-section").HeroSection,
    file: "src/components/blocks/hero-section.tsx",
    type: "block",
    stars: 200,
    dependencies: ["framer-motion", "lucide-react"],
    installationSteps: [
      "Instale: `npm install framer-motion lucide-react`",
      "Copie `src/components/blocks/hero-section.tsx`.",
      "Configure as cores secundárias no seu `tailwind.config.js` se necessário."
    ],
    usageExample: "import { HeroSection } from '@/components/blocks/hero-section';\n\n<HeroSection />"
  },
  "project-showcase": {
    name: "Project Showcase",
    description: "Grade adaptativa para exibir projetos profissionais com badges.",
    component: require("@/components/blocks/project-showcase").default,
    file: "src/components/blocks/project-showcase.tsx",
    type: "block",
    dependencies: ["framer-motion"],
    installationSteps: [
      "Copie `src/components/blocks/project-showcase.tsx`.",
      "Atualize a constante `PROJECTS` com seus dados reais."
    ],
    usageExample: "import ProjectShowcase from '@/components/blocks/project-showcase';\n\n<ProjectShowcase />"
  },
  "feature-grid": {
    name: "Feature Grid",
    description: "Layout inspirado em bento-grids para destaques de produto.",
    component: require("@/components/blocks/feature-grid-demo").FeatureGridDemo,
    file: "src/components/blocks/feature-grid-demo.tsx",
    type: "block",
    dependencies: ["framer-motion", "lucide-react"],
    installationSteps: [
      "Copie `src/components/blocks/feature-grid.tsx`.",
      "Passe um array de objetos respeitando a interface `Feature`."
    ],
    usageExample: "import { FeatureGrid } from '@/components/blocks/feature-grid';\nimport { Box } from 'lucide-react';\n\nconst recursos = [\n  { title: 'Core', description: '...', icon: <Box /> }\n];\n\n<FeatureGrid features={recursos} />"
  },
  "interactive-testimonials": {
    name: "Interactive Testimonials",
    description: "Carrossel de depoimentos com suporte a drag e animações suaves.",
    component: require("@/components/blocks/interactive-testimonials").InteractiveTestimonials,
    file: "src/components/blocks/interactive-testimonials.tsx",
    type: "block",
    dependencies: ["framer-motion"],
    installationSteps: [
      "Instale: `npm install framer-motion`.",
      "Copie `src/components/blocks/interactive-testimonials.tsx`."
    ],
    usageExample: "import { InteractiveTestimonials } from '@/components/blocks/interactive-testimonials';\n\n<InteractiveTestimonials />"
  },
  "pricing-section": {
    name: "Pricing Section",
    description: "Tabelas de preços modernas e claras.",
    component: require("@/components/blocks/pricing-section").PricingSection,
    file: "src/components/blocks/pricing-section.tsx",
    type: "block",
    dependencies: ["framer-motion", "lucide-react"],
    installationSteps: [
      "Copie `src/components/blocks/pricing-section.tsx`.",
      "Ajuste os valores e planos no array de dados do componente."
    ],
    usageExample: "import { PricingSection } from '@/components/blocks/pricing-section';\n\n<PricingSection />"
  },
  "floating-nav": {
    name: "Floating Nav",
    description: "Barra de navegação inteligente que reage à rolagem.",
    component: require("@/components/blocks/floating-nav").FloatingNav,
    file: "src/components/blocks/floating-nav.tsx",
    type: "block",
    dependencies: ["framer-motion", "lucide-react"],
    installationSteps: [
      "Copie `src/components/blocks/floating-nav.tsx`.",
      "Renderize no seu arquivo principal de Layout."
    ],
    usageExample: "import { FloatingNav } from '@/components/blocks/floating-nav';\n\n<FloatingNav />"
  },
  "scrolling-gallery": {
    name: "Scrolling Gallery",
    description: "Galeria de imagens imersiva com efeitos de profundidade.",
    component: require("@/components/blocks/scrolling-gallery").ScrollingGallery,
    file: "src/components/blocks/scrolling-gallery.tsx",
    type: "block",
    dependencies: ["framer-motion"],
    installationSteps: [
      "Copie `src/components/blocks/scrolling-gallery.tsx`.",
      "Use imagens em alta definição para um melhor efeito de profundidade."
    ],
    usageExample: "import { ScrollingGallery } from '@/components/blocks/scrolling-gallery';\n\n<ScrollingGallery />"
  },
  "circular-text": {
    name: "Circular Text",
    description: "Animação de texto em círculo baseada em SVG.",
    component: require("@/components/blocks/circular-text").CircularText,
    file: "src/components/blocks/circular-text.tsx",
    type: "block",
    dependencies: ["framer-motion"],
    props: {
      text: "TEXTO CIRCULAR • ANIMAÇÃO • ",
      radius: 80,
    },
    installationSteps: [
      "Copie `src/components/blocks/circular-text.tsx`.",
      "Ajuste o `radius` e `duration` conforme a necessidade da sua UI."
    ],
    usageExample: "import { CircularText } from '@/components/blocks/circular-text';\n\n<CircularText \n  text='RECURSO ORGANIZADO • ' \n  radius={100} \n  duration={20}\n/>"
  },
  "contact-form": {
    name: "Contact Form",
    description: "Cartão de contato elegante com inputs validados e layout responsivo.",
    component: require("@/components/blocks/contact-form").ContactForm,
    file: "src/components/blocks/contact-form.tsx",
    type: "block",
    installationSteps: [
      "Copie `src/components/blocks/contact-form.tsx`.",
      "Certifique-se de ter os componentes de UI: `Button`, `Input`, `Label`, `Card`."
    ],
    usageExample: "import { ContactForm } from '@/components/blocks/contact-form';\n\n<ContactForm />"
  },
  "expandable-services": {
    name: "Expandable Services",
    description: "Lista de serviços interativa que expande ao passar o mouse, revelando detalhes e imagens.",
    component: require("@/components/blocks/expandable-services").default,
    file: "src/components/blocks/expandable-services.tsx",
    type: "block",
    dependencies: ["framer-motion", "lucide-react"],
    installationSteps: [
      "Instale: `npm install framer-motion lucide-react`.",
      "Copie `src/components/blocks/expandable-services.tsx`."
    ],
    usageExample: "import ExpandableServices from '@/components/blocks/expandable-services';\n\n<ExpandableServices />"
  },
  "faq-section": {
    name: "FAQ Section",
    description: "Seção de perguntas frequentes baseada em Accordion, limpa e funcional.",
    component: require("@/components/blocks/faq-section").FAQSection,
    file: "src/components/blocks/faq-section.tsx",
    type: "block",
    installationSteps: [
      "Copie `src/components/blocks/faq-section.tsx`.",
      "Certifique-se de ter o componente de UI `Accordion`."
    ],
    usageExample: "import { FAQSection } from '@/components/blocks/faq-section';\n\n<FAQSection />"
  },
  "flip-text-avatar": {
    name: "Flip Text Avatar",
    description: "Avatar que rotaciona para revelar um texto circular animado no verso.",
    component: require("@/components/blocks/flip-text-avatar").FlipTextAvatar,
    file: "src/components/blocks/flip-text-avatar.tsx",
    type: "block",
    dependencies: ["framer-motion"],
    props: {
        imageUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop",
        alt: "Avatar",
        text: "FLUIDITY UI • AVATAR ANIMADO • ",
    },
    installationSteps: [
      "Instale `framer-motion`.",
      "Copie `src/components/blocks/flip-text-avatar.tsx`."
    ],
    usageExample: "import { FlipTextAvatar } from '@/components/blocks/flip-text-avatar';\n\n<FlipTextAvatar \n  imageUrl='...' \n  text='TEXTO CIRCULAR • ' \n/>"
  },
  "minimal-footer": {
    name: "Minimal Footer",
    description: "Rodapé clean com links sociais, copyright e navegação essencial.",
    component: require("@/components/blocks/minimal-footer").MinimalFooter,
    file: "src/components/blocks/minimal-footer.tsx",
    type: "block",
    dependencies: ["lucide-react"],
    installationSteps: [
      "Copie `src/components/blocks/minimal-footer.tsx`."
    ],
    usageExample: "import { MinimalFooter } from '@/components/blocks/minimal-footer';\n\n<MinimalFooter />"
  },
  "pricing-table": {
    name: "Pricing Table",
    description: "Grade de preços com destaque para planos populares e lista de recursos.",
    component: require("@/components/blocks/pricing-table").PricingTable,
    file: "src/components/blocks/pricing-table.tsx",
    type: "block",
    dependencies: ["lucide-react"],
    installationSteps: [
      "Copie `src/components/blocks/pricing-table.tsx`.",
      "Instale `lucide-react`."
    ],
    usageExample: "import { PricingTable } from '@/components/blocks/pricing-table';\n\n<PricingTable />"
  },
  "simple-navbar": {
    name: "Simple Navbar",
    description: "Navegação fixa com suporte a menu mobile e efeito de blur glassmorphism.",
    component: require("@/components/blocks/simple-navbar").SimpleNavbar,
    file: "src/components/blocks/simple-navbar.tsx",
    type: "block",
    dependencies: ["lucide-react"],
    installationSteps: [
      "Copie `src/components/blocks/simple-navbar.tsx`."
    ],
    usageExample: "import { SimpleNavbar } from '@/components/blocks/simple-navbar';\n\n<SimpleNavbar />"
  },
  "stats-card": {
    name: "Stats Card",
    description: "Seção de métricas e números importantes para destacar conquistas.",
    component: require("@/components/blocks/stats-card").StatsCard,
    file: "src/components/blocks/stats-card.tsx",
    type: "block",
    installationSteps: [
      "Copie `src/components/blocks/stats-card.tsx`."
    ],
    usageExample: "import { StatsCard } from '@/components/blocks/stats-card';\n\n<StatsCard />"
  },
  "team-member": {
    name: "Team Member",
    description: "Card de perfil de membro da equipe com biografia e links sociais.",
    component: require("@/components/blocks/team-member").TeamMember,
    file: "src/components/blocks/team-member.tsx",
    type: "block",
    dependencies: ["lucide-react"],
    installationSteps: [
      "Copie `src/components/blocks/team-member.tsx`."
    ],
    usageExample: "import { TeamMember } from '@/components/blocks/team-member';\n\n<TeamMember />"
  },
  "testimonial-card": {
    name: "Testimonial Card",
    description: "Card de depoimento individual com avaliação por estrelas e citação.",
    component: require("@/components/blocks/testimonial-card").TestimonialCard,
    file: "src/components/blocks/testimonial-card.tsx",
    type: "block",
    dependencies: ["lucide-react"],
    installationSteps: [
      "Copie `src/components/blocks/testimonial-card.tsx`."
    ],
    usageExample: "import { TestimonialCard } from '@/components/blocks/testimonial-card';\n\n<TestimonialCard />"
  }
};
