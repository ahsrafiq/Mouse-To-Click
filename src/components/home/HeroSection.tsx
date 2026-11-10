'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

const slides = [
  {
    badge: 'Global Outsourcing Partner',
    headline: 'Your Global Partner in Smarter Business Solutions',
    subtext:
      'We help businesses streamline operations with reliable, flexible, and cost-effective outsourcing solutions.',
    buttonLabel: 'Explore Our Services',
    buttonHref: '#services',
    accent: 'bg-blue-electric/10',
  },
  {
    badge: 'Healthcare Solutions',
    headline: 'Smarter Support for Healthcare Operations',
    subtext:
      'Reliable administrative and process support to help healthcare providers focus on patient care.',
    buttonLabel: 'Explore Healthcare Solutions',
    buttonHref: '/services/healthcare-solutions',
    accent: 'bg-blue-electric/8',
  },
  {
    badge: 'Security Solutions',
    headline: 'Professional Remote Security Support',
    subtext:
      'Remote CCTV monitoring and surveillance support designed to strengthen security operations.',
    buttonLabel: 'Explore Security Solutions',
    buttonHref: '/services/security-solutions',
    accent: 'bg-blue-electric/10',
  },
  {
    badge: 'Finance & Accounting',
    headline: 'Reliable Support for Your Financial Operations',
    subtext:
      'Organised finance and accounting assistance to help businesses manage everyday processes efficiently.',
    buttonLabel: 'Explore Finance Solutions',
    buttonHref: '/services/finance-accounting',
    accent: 'bg-blue-electric/8',
  },
  {
    badge: 'Customer Support & Call Center',
    headline: 'Better Customer Experiences, Every Day',
    subtext:
      'Flexible customer support services that help businesses stay responsive and connected with their customers.',
    buttonLabel: 'Explore Customer Support',
    buttonHref: '/services/customer-support',
    accent: 'bg-blue-electric/10',
  },
  {
    badge: 'IT & Digital Business Solutions',
    headline: 'Technology and Digital Support That Moves You Forward',
    subtext:
      'Practical IT, technical, and digital operations support for growing businesses.',
    buttonLabel: 'Explore IT & Digital Solutions',
    buttonHref: '/services/it-technical-support',
    accent: 'bg-blue-electric/8',
  },
];

export const HeroSection: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setIsAnimating(false);
    }, 200);
  };

  const next = () => goTo((current + 1) % slides.length);
  const prev = () => goTo((current - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(next, 5500);
    return () => clearInterval(timer);
  }, [current]);

  const slide = slides[current];

  return (
    <section className="relative bg-white dark:bg-charcoal text-charcoal dark:text-white min-h-[88vh] flex items-center overflow-hidden pt-8 pb-20 px-4 sm:px-6 lg:px-8 transition-colors">
      {/* Ambient glow */}
      <div className="absolute top-1/3 right-1/4 w-[520px] h-[520px] bg-blue-electric/8 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[320px] h-[320px] bg-blue-electric/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: Content */}
        <div className="space-y-8">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2.5">
              <Badge variant="blue" withDot>
                {slide.badge}
              </Badge>
              <span className="text-xs font-body text-blue-electric dark:text-blue-hover tracking-wide uppercase font-semibold inline-flex items-center gap-1.5 bg-blue-electric/10 px-3 py-1 rounded-full border border-blue-electric/25">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-electric animate-beacon" />
                Innovating the Way Businesses Work
              </span>
            </div>
            <p className="text-xs font-body uppercase tracking-widest text-charcoal-muted">
              Global Outsourcing &bull; Business Solutions &bull; Trusted Partner
            </p>
          </div>

          <div
            className={`space-y-5 transition-opacity duration-200 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal dark:text-white">
              {slide.headline.includes('Smarter') ? (
                <>
                  {slide.headline.split('Smarter')[0]}
                  <span className="text-blue-electric dark:text-blue-hover">Smarter</span>
                  {slide.headline.split('Smarter')[1]}
                </>
              ) : (
                slide.headline
              )}
            </h1>
            <p className="text-base sm:text-lg text-charcoal-muted dark:text-white/80 font-body leading-relaxed max-w-lg">
              {slide.subtext}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <a href={slide.buttonHref}>
              <Button size="lg" variant="primary" className="font-semibold shadow-md">
                <span>{slide.buttonLabel}</span>
                <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
            </a>
            <a href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-charcoal/20 dark:border-white/20 text-charcoal dark:text-white hover:bg-charcoal/5 dark:hover:bg-white/10"
              >
                Get a Free Consultation
              </Button>
            </a>
          </div>

          {/* Stats Bar */}
          <div className="pt-6 border-t border-charcoal/10 dark:border-white/10 grid grid-cols-3 gap-6 font-body">
            <div>
              <p className="text-2xl font-bold font-heading text-charcoal dark:text-white">6+</p>
              <p className="text-xs text-charcoal-muted uppercase tracking-wide">Service Divisions</p>
            </div>
            <div>
              <p className="text-2xl font-bold font-heading text-charcoal dark:text-white">Global</p>
              <p className="text-xs text-charcoal-muted uppercase tracking-wide">Market Reach</p>
            </div>
            <div>
              <p className="text-2xl font-bold font-heading text-charcoal dark:text-white">Flexible</p>
              <p className="text-xs text-charcoal-muted uppercase tracking-wide">Service Models</p>
            </div>
          </div>
        </div>

        {/* Right: Slideshow visual panel */}
        <div className="relative">
          <div className="relative bg-offwhite dark:bg-charcoal-card border border-charcoal/10 dark:border-charcoal-border rounded-2xl overflow-hidden shadow-lg">
            {/* Top bar */}
            <div className="bg-white dark:bg-charcoal border-b border-charcoal/10 dark:border-charcoal-border px-5 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-charcoal/15 dark:bg-white/15" />
                <span className="w-3 h-3 rounded-full bg-charcoal/15 dark:bg-white/15" />
                <span className="w-3 h-3 rounded-full bg-blue-electric/50" />
              </div>
              <span className="text-xs font-body text-charcoal-muted uppercase tracking-wider">
                mousetoclick.com — Our Services
              </span>
              <span className="text-xs font-body text-blue-electric font-semibold">
                {current + 1} / {slides.length}
              </span>
            </div>

            {/* Slide content */}
            <div
              className={`p-8 sm:p-10 min-h-[320px] flex flex-col justify-between transition-opacity duration-200 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
            >
              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 bg-blue-electric/10 border border-blue-electric/20 rounded-full px-4 py-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-electric animate-beacon" />
                  <span className="text-xs font-body font-semibold text-blue-electric dark:text-blue-hover uppercase tracking-wide">
                    {slide.badge}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-charcoal dark:text-white leading-snug">
                  {slide.headline}
                </h2>
                <p className="text-sm text-charcoal-muted dark:text-white/70 font-body leading-relaxed">
                  {slide.subtext}
                </p>
              </div>

              <div className="pt-6 flex items-center justify-between">
                <a
                  href={slide.buttonHref}
                  className="inline-flex items-center gap-2 text-sm font-body font-semibold text-blue-electric dark:text-blue-hover hover:underline underline-offset-2"
                >
                  {slide.buttonLabel}
                  <ArrowRight className="w-4 h-4" />
                </a>
                <div className="flex gap-2">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      aria-label={`Go to slide ${i + 1}`}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        i === current
                          ? 'bg-blue-electric w-5'
                          : 'bg-charcoal/20 dark:bg-white/20 hover:bg-blue-electric/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 left-3">
              <button
                onClick={prev}
                aria-label="Previous slide"
                className="w-8 h-8 rounded-full bg-white dark:bg-charcoal border border-charcoal/15 dark:border-charcoal-border flex items-center justify-center text-charcoal dark:text-white hover:border-blue-electric hover:text-blue-electric transition-colors shadow-sm"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-3">
              <button
                onClick={next}
                aria-label="Next slide"
                className="w-8 h-8 rounded-full bg-white dark:bg-charcoal border border-charcoal/15 dark:border-charcoal-border flex items-center justify-center text-charcoal dark:text-white hover:border-blue-electric hover:text-blue-electric transition-colors shadow-sm"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Floating trust badge */}
          <div className="absolute -bottom-4 -left-4 bg-white dark:bg-charcoal-card border border-charcoal/10 dark:border-charcoal-border rounded-xl px-4 py-3 shadow-md flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-electric/10 border border-blue-electric/20 flex items-center justify-center">
              <span className="text-blue-electric text-sm">✓</span>
            </div>
            <div>
              <p className="text-xs font-heading font-bold text-charcoal dark:text-white">
                Trusted Globally
              </p>
              <p className="text-[11px] font-body text-charcoal-muted">
                US · UK · Canada · Australia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
