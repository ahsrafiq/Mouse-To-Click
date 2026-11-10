import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', fullWidth = false, children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-md tracking-wide select-none disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-electric focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal';

    const variants = {
      // Solid Electric Blue with white text, hover turns to lighter blue #5B8CFF
      primary:
        'bg-blue-electric text-white hover:bg-blue-hover active:scale-[0.98] shadow-electric-subtle hover:shadow-electric-glow',
      // Outline: clean charcoal border on light background, white border on dark
      outline:
        'border border-charcoal/20 dark:border-white/20 text-charcoal dark:text-white hover:bg-charcoal/5 dark:hover:bg-white/10 hover:border-charcoal/40 dark:hover:border-white/40 active:scale-[0.98]',
      // Secondary: subtle card styling with adaptive contrast
      secondary:
        'bg-offwhite dark:bg-charcoal-card text-charcoal dark:text-white border border-charcoal/15 dark:border-charcoal-border hover:border-blue-electric dark:hover:border-blue-hover/50 hover:bg-white dark:hover:bg-charcoal-card/80',
      // Ghost: text button with high-contrast hover
      ghost:
        'text-blue-electric dark:text-blue-hover hover:text-charcoal dark:hover:text-white hover:bg-charcoal/5 dark:hover:bg-white/5',
    };

    const sizes = {
      sm: 'text-xs px-3.5 py-1.5 h-8 gap-1.5',
      md: 'text-sm px-5 py-2.5 h-11 gap-2',
      lg: 'text-base px-7 py-3.5 h-13 gap-2.5 font-semibold',
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

