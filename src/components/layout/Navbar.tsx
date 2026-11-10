'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Globe, Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { cn } from '@/lib/utils';

const services = [
  { label: 'Healthcare Solutions', href: '/services/healthcare-solutions' },
  { label: 'Security Solutions', href: '/services/security-solutions' },
  { label: 'Finance & Accounting', href: '/services/finance-accounting' },
  { label: 'Customer Support & Call Center', href: '/services/customer-support' },
  { label: 'IT & Technical Support', href: '/services/it-technical-support' },
  { label: 'Digital Business Solutions', href: '/services/digital-business-solutions' },
];

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Services', href: '#services', hasDropdown: true },
  { label: 'Industries We Serve', href: '#industries' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Contact Us', href: '/contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
          isScrolled
            ? 'bg-white/95 dark:bg-charcoal/95 backdrop-blur-md border-charcoal/10 dark:border-white/10 shadow-sm py-3'
            : 'bg-white/80 dark:bg-charcoal/80 backdrop-blur-sm border-charcoal/5 dark:border-white/5 py-4'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="/"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-electric rounded"
            aria-label="MouseToClick Homepage"
          >
            <div className="relative w-9 h-9 rounded-md bg-blue-electric flex items-center justify-center transition-transform group-hover:scale-105">
              <Globe className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-lg tracking-tight text-charcoal dark:text-white">
                MouseToClick
              </span>
              <span className="text-[10px] font-body tracking-wider text-charcoal-muted uppercase">
                Global Outsourcing & Business Solutions
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      className={cn(
                        'px-3.5 py-2 text-sm font-medium rounded-md transition-colors duration-200 flex items-center gap-1',
                        'text-charcoal/80 dark:text-white/80 hover:text-blue-electric dark:hover:text-blue-hover hover:bg-charcoal/5 dark:hover:bg-white/5'
                      )}
                    >
                      {link.label}
                      <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                    </button>

                    {servicesOpen && (
                      <div className="absolute top-full left-0 mt-1 w-56 bg-white dark:bg-charcoal-card border border-charcoal/10 dark:border-charcoal-border rounded-xl shadow-lg py-2 z-50">
                        {services.map((s) => (
                          <a
                            key={s.href + s.label}
                            href={s.href}
                            className="block px-4 py-2.5 text-sm font-body text-charcoal/80 dark:text-white/80 hover:text-blue-electric dark:hover:text-blue-hover hover:bg-blue-electric/5 transition-colors"
                          >
                            {s.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-3.5 py-2 text-sm font-medium rounded-md transition-colors duration-200',
                    isActive
                      ? 'text-blue-electric dark:text-white bg-blue-electric/10 dark:bg-white/10 font-semibold'
                      : 'text-charcoal/80 dark:text-white/80 hover:text-blue-electric dark:hover:text-blue-hover hover:bg-charcoal/5 dark:hover:bg-white/5'
                  )}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <a href="/contact">
              <Button size="sm" variant="primary" className="font-semibold shadow-sm">
                <span>Get a Free Consultation</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md bg-offwhite dark:bg-charcoal-card border border-charcoal/15 dark:border-charcoal-border text-charcoal dark:text-white hover:text-blue-electric focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-electric"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-charcoal/60 dark:bg-charcoal/80 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-[65px] right-0 bottom-0 w-full max-w-sm bg-white dark:bg-charcoal border-l border-charcoal/10 dark:border-white/10 p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-200">
            <div className="space-y-6">
              <div className="pb-3 border-b border-charcoal/10 dark:border-white/10 flex items-center justify-between">
                <p className="text-xs font-body uppercase tracking-widest text-charcoal-muted">
                  Navigation
                </p>
                <ThemeToggle />
              </div>
              <nav className="flex flex-col space-y-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        'flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                        isActive
                          ? 'bg-blue-electric text-white'
                          : 'text-charcoal dark:text-white/90 hover:bg-offwhite dark:hover:bg-white/5'
                      )}
                    >
                      <span>{link.label}</span>
                    </a>
                  );
                })}
                <div className="pt-2 pb-1">
                  <p className="px-4 text-[10px] font-body uppercase tracking-wider text-charcoal-muted mb-1">
                    Our Services
                  </p>
                  {services.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-charcoal/80 dark:text-white/70 hover:bg-offwhite dark:hover:bg-white/5 transition-colors"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </nav>
            </div>
            <div className="pt-6 border-t border-charcoal/10 dark:border-white/10 space-y-3">
              <a href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button fullWidth size="md" variant="primary">
                  Get a Free Consultation
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </a>
              <p className="text-center text-xs font-body text-charcoal-muted">
                MouseToClick &bull; Global Outsourcing & Business Solutions
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
