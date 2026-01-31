import { LazyExoticComponent, ComponentType } from "react";

export interface RegistryComponent {
  name: string;
  description: string;
  component: React.ComponentType<any>;
  file: string;
  dependencies?: string[];
  type: "block" | "ui";
  props?: Record<string, any>;
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
  // UI PRIMITIVES
  "button": {
    name: "Button",
    description: "Botão base com múltiplas variantes e suporte a animações.",
    component: require("@/components/ui/button/button").Button,
    file: "src/components/ui/button/button.tsx",
    type: "ui",
    dependencies: ["class-variance-authority"],
    installationSteps: ["Instale CVA: `npm install class-variance-authority`"]
  },
  "badge": {
    name: "Badge",
    description: "Indicador visual de status ou categoria.",
    component: require("@/components/ui/badge/badge").Badge,
    file: "src/components/ui/badge/badge.tsx",
    type: "ui",
    dependencies: ["class-variance-authority"]
  },
  "card": {
    name: "Card",
    description: "Container básico para estruturar conteúdo.",
    component: require("@/components/ui/card/card").Card,
    file: "src/components/ui/card/card.tsx",
    type: "ui"
  },
  "avatar": {
    name: "Avatar",
    description: "Componente de imagem de perfil com fallback.",
    component: require("@/components/ui/avatar/avatar").Avatar,
    file: "src/components/ui/avatar/avatar.tsx",
    type: "ui",
    dependencies: ["@radix-ui/react-avatar"]
  },
  "input": {
    name: "Input",
    description: "Campo de entrada de texto estilizado.",
    component: require("@/components/ui/input/input").Input,
    file: "src/components/ui/input/input.tsx",
    type: "ui"
  },
  "label": {
    name: "Label",
    description: "Rótulo acessível para campos de formulário.",
    component: require("@/components/ui/label/label").Label,
    file: "src/components/ui/label/label.tsx",
    type: "ui",
    dependencies: ["@radix-ui/react-label"]
  },
  "sheet": {
    name: "Sheet",
    description: "Painel lateral (drawer) para navegação ou formulários.",
    component: require("@/components/ui/sheet/sheet").Sheet,
    file: "src/components/ui/sheet/sheet.tsx",
    type: "ui",
    dependencies: ["@radix-ui/react-dialog", "framer-motion"]
  },
  "utils": {
    name: "Utils",
    description: "Utilitário cn para merge de classes Tailwind.",
    component: null as any,
    file: "src/lib/utils.ts",
    type: "ui",
    dependencies: ["clsx", "tailwind-merge"]
  }
};
