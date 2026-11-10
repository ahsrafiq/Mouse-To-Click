import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'blue' | 'outline' | 'dark' | 'light';
  withDot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = 'blue',
  withDot = false,
  children,
  ...props
}) => {
  const variants = {
    // Electric blue subtle badge with high contrast on both light and dark modes
    blue: 'bg-blue-electric/10 dark:bg-blue-electric/15 text-blue-electric dark:text-blue-hover border border-blue-electric/25 dark:border-blue-electric/30',
    // Minimal outline: dark text/border on light, white on dark
    outline: 'border border-charcoal/20 dark:border-white/20 text-charcoal dark:text-white',
    // Dark badge on light background, charcoal-card on dark
    dark: 'bg-charcoal text-white border border-charcoal dark:bg-charcoal-card dark:border-charcoal-border',
    // Light badge
    light: 'bg-offwhite text-charcoal border border-charcoal/10 dark:bg-charcoal-card dark:text-white dark:border-charcoal-border',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide uppercase',
        variants[variant],
        className
      )}
      {...props}
    >
      {withDot && (
        <span className="w-1.5 h-1.5 rounded-full bg-blue-electric animate-beacon inline-block" />
      )}
      {children}
    </span>
  );
};

