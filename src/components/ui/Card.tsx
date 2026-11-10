import React from 'react';
import { cn } from '@/lib/utils';
import { ViewfinderCorner } from './ViewfinderCorner';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'tech' | 'gentle' | 'light' | 'dark';
  withViewfinder?: boolean;
  isInteractive?: boolean;
}

export const Card: React.FC<CardProps> = ({
  className,
  variant = 'tech',
  withViewfinder = false,
  isInteractive = false,
  children,
  ...props
}) => {
  const variantStyles = {
    // Technical card (CCTV & Medical Billing): precise 1px border, adapts to light/dark
    tech: 'relative bg-white dark:bg-charcoal-card border border-charcoal/10 dark:border-charcoal-border rounded-lg p-6 text-charcoal dark:text-white overflow-hidden',
    // Gentle card (Health Insurance): approachable, rounded-2xl, soft appearance
    gentle: 'relative bg-white dark:bg-charcoal-card border border-charcoal/10 dark:border-white/10 rounded-2xl p-8 text-charcoal dark:text-white shadow-sm transition-shadow',
    // Pure dark card
    dark: 'relative bg-charcoal text-white dark:bg-charcoal-card border border-charcoal-border dark:border-white/10 rounded-xl p-6',
    // Light card on offwhite background
    light: 'relative bg-white dark:bg-charcoal-card border border-charcoal/10 dark:border-white/10 rounded-xl p-6 text-charcoal dark:text-white',
  };

  const interactiveStyles = isInteractive
    ? 'transition-all duration-300 hover:border-blue-hover/60 hover:-translate-y-1 cursor-pointer'
    : '';

  return (
    <div
      className={cn(variantStyles[variant], interactiveStyles, className)}
      {...props}
    >
      {withViewfinder && variant === 'tech' && <ViewfinderCorner size={14} color="blue" />}
      {children}
    </div>
  );
};

