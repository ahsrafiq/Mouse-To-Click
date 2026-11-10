'use client';

import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { cn } from '@/lib/utils';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        'p-2 rounded-lg transition-colors border flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-electric',
        theme === 'dark'
          ? 'bg-charcoal-card border-charcoal-border text-white hover:text-blue-hover'
          : 'bg-white border-charcoal/15 text-charcoal hover:text-blue-electric hover:border-blue-electric',
        className
      )}
      aria-label={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
      title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
    >
      {theme === 'light' ? (
        <Moon className="w-4 h-4" />
      ) : (
        <Sun className="w-4 h-4 text-blue-hover" />
      )}
    </button>
  );
};

