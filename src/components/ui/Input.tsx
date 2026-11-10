import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  success?: boolean;
  helperText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', label, error, success, helperText, id, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-xs uppercase tracking-wider font-mono font-medium text-charcoal dark:text-white/90"
          >
            {label}
            {props.required && <span className="text-blue-electric ml-1">*</span>}
          </label>
        )}
        <div className="relative">
          <input
            id={inputId}
            type={type}
            ref={ref}
            className={cn(
              'w-full bg-white dark:bg-charcoal-card text-charcoal dark:text-white text-sm px-4 py-3 rounded-md border border-charcoal/20 dark:border-charcoal-border transition-colors duration-200 placeholder:text-charcoal-muted/60 focus:outline-none focus:border-blue-electric focus:ring-2 focus:ring-blue-electric focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-charcoal',
              error && 'border-charcoal dark:border-white focus:border-charcoal dark:focus:border-white',
              success && 'border-blue-electric',
              className
            )}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? `${inputId}-error` : undefined}
            {...props}
          />
          {error && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-charcoal dark:text-white">
              <AlertCircle className="w-4 h-4 stroke-[2]" aria-hidden="true" />
            </div>
          )}
          {success && !error && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-blue-electric dark:text-blue-hover">
              <CheckCircle2 className="w-4 h-4 stroke-[2]" aria-hidden="true" />
            </div>
          )}
        </div>
        {error && (
          <p id={`${inputId}-error`} className="text-xs text-charcoal dark:text-white/90 font-mono flex items-center gap-1.5 pt-0.5">
            <span className="font-bold uppercase tracking-wider underline">[Error]</span> {error}
          </p>
        )}
        {!error && helperText && (
          <p className="text-xs text-charcoal-muted font-mono">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
