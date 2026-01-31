
import { ArrowUpRight } from 'lucide-react';

interface AnimatedButtonProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'link';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function AnimatedButton({ 
  children, 
  variant = 'default', 
  size = 'md',
  href,
  onClick,
  className = ''
}: AnimatedButtonProps) {
  
  // Size configurations
  const sizeConfig = {
    sm: {
      text: 'px-4 py-2 text-sm',
      icon: 'w-8 h-8',
      iconInner: 'w-4 h-4'
    },
    md: {
      text: 'px-6 py-3 text-base',
      icon: 'w-12 h-12',
      iconInner: 'w-5 h-5'
    },
    lg: {
      text: 'px-8 py-4 text-lg',
      icon: 'w-14 h-14',
      iconInner: 'w-6 h-6'
    }
  };

  // Variant configurations
  const variantConfig = {
    default: {
      textBg: 'bg-foreground',
      textColor: 'text-background',
      iconBg: 'bg-foreground',
      iconColor: 'text-background',
      hover: 'hover:opacity-90'
    },
    outline: {
      textBg: 'bg-transparent border border-foreground',
      textColor: 'text-foreground',
      iconBg: 'bg-transparent border border-foreground',
      iconColor: 'text-foreground',
      hover: 'hover:bg-foreground/5'
    },
    link: {
      textBg: 'bg-transparent',
      textColor: 'text-foreground',
      iconBg: 'bg-transparent',
      iconColor: 'text-foreground',
      hover: 'hover:opacity-70'
    }
  };

  const size_class = sizeConfig[size];
  const variant_class = variantConfig[variant];

  const Component = href ? 'a' : 'button';

  return (
    <Component
      href={href}
      onClick={onClick}
      className={`group inline-flex items-center gap-4 hover:gap-0 transition-all duration-700 cursor-pointer ${className}`}
      style={{ willChange: 'transform' }}
    >

      <div 
        className={`
          ${size_class.text}
          ${variant_class.textBg}
          ${variant_class.textColor}
          ${variant_class.hover}
          rounded-lg
          group-hover:rounded-r-none
          font-medium
          transition-all
          duration-500
          flex
          items-center
          justify-center
        `}
        style={{ 
          outline: 'none',
          opacity: 1
        }}
      >
        {children}
      </div>

      <div 
        className={`
          ${size_class.icon}
          ${variant_class.iconBg}
          ${variant_class.iconColor}
          rounded-full
          group-hover:rounded-l-none
          group-hover:rounded-r-lg
          group-hover:pr-2
          group-hover:-ml-4
          duration-200
          flex
          items-center
          justify-center
          shrink-0
          transition-all
        `}
        style={{ opacity: 1 }}
      >
        <ArrowUpRight 
          className={`${size_class.iconInner} transition-transform duration-500 rotate-45 group-hover:rotate-0`}
          strokeWidth={2.5}
        />
      </div>
    </Component>
  );
}
