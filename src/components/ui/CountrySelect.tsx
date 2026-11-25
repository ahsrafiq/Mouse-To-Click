import React, { useState, useRef, useEffect, useMemo } from 'react';
import { ChevronDown, Search, Check, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { COUNTRIES } from '@/data/countries';

export interface CountrySelectProps {
  label?: string;
  name?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  error?: string;
  placeholder?: string;
  className?: string;
}

export const CountrySelect: React.FC<CountrySelectProps> = ({
  label = 'Country',
  name = 'country',
  value,
  onChange,
  required = false,
  error,
  placeholder = 'Select your country...',
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    } else {
      setSearchQuery('');
    }
  }, [isOpen]);

  const filteredCountries = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return COUNTRIES;

    return COUNTRIES.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.code.toLowerCase().startsWith(q) ||
        c.name.toLowerCase().startsWith(q)
    );
  }, [searchQuery]);

  const selectedCountry = useMemo(() => {
    return COUNTRIES.find((c) => c.name === value || c.code.toLowerCase() === value.toLowerCase());
  }, [value]);

  const handleSelect = (countryName: string) => {
    onChange(countryName);
    setIsOpen(false);
  };

  return (
    <div className={cn('w-full space-y-1.5 relative', className)} ref={containerRef}>
      {label && (
        <label className="block text-xs uppercase tracking-wider font-mono font-medium text-charcoal dark:text-white/90">
          {label}
          {required && <span className="text-blue-electric ml-1">*</span>}
        </label>
      )}

      {/* Hidden input for standard form serialization */}
      <input type="hidden" name={name} value={value} />

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={cn(
          'w-full flex items-center justify-between bg-white dark:bg-charcoal-card text-charcoal dark:text-white text-sm px-4 py-3 rounded-md border border-charcoal/20 dark:border-charcoal-border transition-colors duration-200 text-left focus:outline-none focus:border-blue-electric focus:ring-2 focus:ring-blue-electric focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-charcoal',
          error && 'border-charcoal dark:border-white',
          !selectedCountry && 'text-charcoal-muted dark:text-white/50'
        )}
      >
        <span className="truncate">
          {selectedCountry ? `${selectedCountry.name} (${selectedCountry.code})` : placeholder}
        </span>
        <ChevronDown
          className={cn(
            'w-4 h-4 ml-2 flex-shrink-0 text-charcoal-muted dark:text-white/70 transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
        />
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-1 w-full bg-white dark:bg-charcoal-card border border-charcoal/20 dark:border-charcoal-border rounded-lg shadow-xl overflow-hidden animate-in fade-in-50 zoom-in-95">
          <div className="p-2 border-b border-charcoal/10 dark:border-charcoal-border bg-offwhite/50 dark:bg-charcoal/50">
            <div className="relative">
              <Search className="w-4 h-4 text-charcoal-muted absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search country or type initials (e.g. US, UK, PK)..."
                className="w-full bg-white dark:bg-charcoal text-charcoal dark:text-white text-xs pl-9 pr-3 py-2 rounded-md border border-charcoal/20 dark:border-charcoal-border focus:outline-none focus:border-blue-electric font-body"
              />
            </div>
          </div>

          <ul className="max-h-60 overflow-y-auto py-1 divide-y divide-charcoal/5 dark:divide-white/5 text-sm font-body">
            {filteredCountries.length === 0 ? (
              <li className="p-3 text-center text-xs text-charcoal-muted">
                No matching country found
              </li>
            ) : (
              filteredCountries.map((c) => {
                const isSelected = selectedCountry?.code === c.code;
                return (
                  <li key={c.code}>
                    <button
                      type="button"
                      onClick={() => handleSelect(c.name)}
                      className={cn(
                        'w-full flex items-center justify-between px-3 py-2 text-left text-xs transition-colors hover:bg-blue-electric/10 hover:text-blue-electric dark:hover:bg-white/10 dark:hover:text-white',
                        isSelected && 'bg-blue-electric/15 text-blue-electric dark:text-blue-hover font-semibold'
                      )}
                    >
                      <span className="flex items-center gap-2">
                        <span className="font-mono text-[10px] uppercase font-bold text-charcoal-muted dark:text-white/60 w-7">
                          {c.code}
                        </span>
                        <span>{c.name}</span>
                      </span>
                      {isSelected && <Check className="w-3.5 h-3.5 flex-shrink-0" />}
                    </button>
                  </li>
                );
              })
            )}
          </ul>
        </div>
      )}

      {error && (
        <p className="text-xs text-charcoal dark:text-white/90 font-mono flex items-center gap-1.5 pt-0.5">
          <AlertCircle className="w-3.5 h-3.5 stroke-[2]" />
          <span>{error}</span>
        </p>
      )}
    </div>
  );
};
