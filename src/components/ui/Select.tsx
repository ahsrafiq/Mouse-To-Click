import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown, AlertCircle } from 'lucide-react';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
  helperText?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, options, helperText, id, ...props }, ref) => {
    const selectId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label
            htmlFor={selectId}
            className="block text-xs uppercase tracking-wider font-mono font-medium text-charcoal dark:text-white/90"
          >
            {label}
            {props.required && <span className="text-blue-electric ml-1">*</span>}
          </label>
        )}
        <div className="relative">
          <select
            id={selectId}
            ref={ref}
            className={cn(
              'w-full appearance-none bg-white dark:bg-charcoal-card text-charcoal dark:text-white text-sm px-4 py-3 rounded-md border border-charcoal/20 dark:border-charcoal-border transition-colors duration-200 focus:outline-none focus:border-blue-electric focus:ring-2 focus:ring-blue-electric focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-charcoal cursor-pointer',
              error && 'border-charcoal dark:border-white focus:border-charcoal dark:focus:border-white',
              className
            )}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? `${selectId}-error` : undefined}
            {...props}
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value} className="bg-white dark:bg-charcoal text-charcoal dark:text-white py-2">
                {opt.label}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-charcoal-muted dark:text-white/70">
            {error ? (
              <AlertCircle className="w-4 h-4 stroke-[2] text-charcoal dark:text-white" aria-hidden="true" />
            ) : (
              <ChevronDown className="w-4 h-4" aria-hidden="true" />
            )}
          </div>
        </div>
        {error && (
          <p id={`${selectId}-error`} className="text-xs text-charcoal dark:text-white/90 font-mono flex items-center gap-1.5 pt-0.5">
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

Select.displayName = 'Select';
