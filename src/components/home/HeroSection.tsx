'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  CheckCircle2,
  HeartPulse,
  Shield,
  TrendingUp,
  Headphones,
  Monitor,
  Database,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export interface HeroSlide {
  id: string;
  divisionNumber: string;
  badge: string;
  title: string;
  shortTitle: string;
  imageTagline: string;
  headline: string;
  subtext: string;
  imageSrc: string;
  imageAlt: string;
  buttonLabel: string;
  buttonHref: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  accentBg: string;
  accentBorder: string;
  keyHighlights: string[];
  metrics: {
    value: string;
    label: string;
  }[];
}

export const slides: HeroSlide[] = [
  {
    id: 'healthcare',
    divisionNumber: 'Division 01',
    badge: 'Division 01 • Healthcare Solutions',
    title: 'Healthcare Solutions',
    shortTitle: 'Healthcare',
    imageTagline: 'Better Care. Healthier Tomorrow.',
    headline: 'Smarter Support for Healthcare Operations',
    subtext:
      'Reliable administrative support, medical billing, claims processing, and patient coordination to help healthcare providers reduce overhead and focus on patient care.',
    imageSrc: '/images/slides/healthcare.jpg',
    imageAlt: 'Healthcare Solutions - Better Care. Healthier Tomorrow',
    buttonLabel: 'Explore Healthcare Solutions',
    buttonHref: '/services/healthcare-solutions',
    category: 'Healthcare Support',
    icon: HeartPulse,
    accentColor: 'text-rose-500',
    accentBg: 'bg-rose-500/10',
    accentBorder: 'border-rose-500/25',
    keyHighlights: [
      'Medical Billing Support & Coding',
      'Medical Claims & Denial Follow-up',
      'Pre-Visit Insurance Verification',
      'Patient Scheduling & EHR Maintenance',
    ],
    metrics: [
      { value: '99.2%', label: 'Billing Accuracy' },
      { value: '35%+', label: 'Overhead Reduction' },
      { value: 'HIPAA', label: 'Compliant & Secure' },
    ],
  },
  {
    id: 'security',
    divisionNumber: 'Division 02',
    badge: 'Division 02 • Security Solutions',
    title: 'Security Solutions',
    shortTitle: 'Security',
    imageTagline: 'Monitor. Protect. Stay Secure.',
    headline: 'Professional Remote Security & Surveillance',
    subtext:
      'Remote CCTV monitoring and live surveillance support linking seamlessly into your existing commercial cameras to protect properties, assets, and personnel 24/7.',
    imageSrc: '/images/slides/security-solutions.jpg',
    imageAlt: 'Security Solutions - Monitor. Protect. Stay Secure',
    buttonLabel: 'Explore Security Solutions',
    buttonHref: '/services/security-solutions',
    category: 'Surveillance & Guarding',
    icon: Shield,
    accentColor: 'text-blue-electric',
    accentBg: 'bg-blue-electric/10',
    accentBorder: 'border-blue-electric/25',
    keyHighlights: [
      '24/7 Remote CCTV Monitoring',
      'Live Video Perimeter Watch',
      'Immediate Incident Detection & Logs',
      'Standardized Escalation Chains',
    ],
    metrics: [
      { value: '24/7/365', label: 'Continuous Watch' },
      { value: '<90s', label: 'Incident Alert SLA' },
      { value: 'Up to 60%', label: 'Security Cost Savings' },
    ],
  },
  {
    id: 'finance',
    divisionNumber: 'Division 03',
    badge: 'Division 03 • Finance & Accounting',
    title: 'Finance & Accounting',
    shortTitle: 'Finance',
    imageTagline: 'Smarter Finances. Stronger Business.',
    headline: 'Reliable Support for Financial Operations',
    subtext:
      'Organised bookkeeping, bank reconciliations, accounts payable and receivable tracking, and reporting assistance to keep your books balanced and audit-ready.',
    imageSrc: '/images/slides/finance-accounting.jpg',
    imageAlt: 'Finance & Accounting - Smarter Finances. Stronger Business',
    buttonLabel: 'Explore Finance Solutions',
    buttonHref: '/services/finance-accounting',
    category: 'Financial Operations',
    icon: TrendingUp,
    accentColor: 'text-emerald-500',
    accentBg: 'bg-emerald-500/10',
    accentBorder: 'border-emerald-500/25',
    keyHighlights: [
      'General Ledger Bookkeeping',
      'Accounts Payable & Receivable Tracking',
      '3-Way Invoice Matching & Approvals',
      'Audit-Ready Financial Documentation',
    ],
    metrics: [
      { value: '100%', label: 'Reconciled Ledgers' },
      { value: '2x Faster', label: 'Invoice Processing' },
      { value: 'Strict', label: 'Confidentiality Controls' },
    ],
  },
  {
    id: 'customer-support',
    divisionNumber: 'Division 04',
    badge: 'Division 04 • Customer Support',
    title: 'Customer Support & Call Center',
    shortTitle: 'Support',
    imageTagline: 'Always Here. Always Supportive.',
    headline: 'Better Customer Experiences, Every Day',
    subtext:
      'Empathetic, responsive, and multilingual customer service specialists covering inbound calls, website live chat, email helpdesks, and dedicated virtual assistance.',
    imageSrc: '/images/slides/customer-support.jpg',
    imageAlt: 'Customer Support & Call Center - Always Here. Always Supportive',
    buttonLabel: 'Explore Customer Support',
    buttonHref: '/services/customer-support',
    category: 'Customer Experience',
    icon: Headphones,
    accentColor: 'text-violet-500',
    accentBg: 'bg-violet-500/10',
    accentBorder: 'border-violet-500/25',
    keyHighlights: [
      'Inbound & Outbound Call Support',
      'Omnichannel Live Chat & Email Tickets',
      'Customer Service SLA Management',
      'Dedicated Virtual Assistants',
    ],
    metrics: [
      { value: '<60s', label: 'Live Chat Response' },
      { value: '95%+', label: 'CSAT Rating' },
      { value: '24/7', label: 'Multichannel Coverage' },
    ],
  },
  {
    id: 'it-support',
    divisionNumber: 'Division 05',
    badge: 'Division 05 • IT & Technical Support',
    title: 'IT & Technical Support',
    shortTitle: 'IT Support',
    imageTagline: 'Your IT Partner for Seamless Operations.',
    headline: 'Technology Support That Moves You Forward',
    subtext:
      'Practical remote IT troubleshooting, help desk assistance, and technical monitoring for growing businesses seeking dependable tech operations without heavy in-house overhead.',
    imageSrc: '/images/slides/it-support.jpg',
    imageAlt: 'IT & Technical Support - Your IT Partner for Seamless Operations',
    buttonLabel: 'Explore IT & Technical Support',
    buttonHref: '/services/it-technical-support',
    category: 'Information Technology',
    icon: Monitor,
    accentColor: 'text-amber-500',
    accentBg: 'bg-amber-500/10',
    accentBorder: 'border-amber-500/25',
    keyHighlights: [
      'Remote Desktop Troubleshooting',
      'Help Desk Ticketing & User Setup',
      'Network Connectivity & VPN Support',
      'System Uptime & Incident Monitoring',
    ],
    metrics: [
      { value: 'Tier 1-3', label: 'Helpdesk Coverage' },
      { value: '99.9%', label: 'Uptime Monitoring' },
      { value: 'Rapid', label: 'Issue Resolution SLA' },
    ],
  },
  {
    id: 'digital-solutions',
    divisionNumber: 'Division 06',
    badge: 'Division 06 • Digital Business Solutions',
    title: 'Digital Business Solutions',
    shortTitle: 'Digital',
    imageTagline: 'Innovate. Automate. Grow.',
    headline: 'Digital Operations & Data Support for Modern Growth',
    subtext:
      'Accelerate business velocity with high-accuracy data entry, document indexing, digital catalog management, repetitive workflow automation, and operational back-office support.',
    imageSrc: '/images/slides/digital-business-solutions.jpg',
    imageAlt: 'Digital Business Solutions - Innovate. Automate. Grow',
    buttonLabel: 'Explore Digital Solutions',
    buttonHref: '/services/digital-business-solutions',
    category: 'Digital Operations',
    icon: Database,
    accentColor: 'text-cyan-500',
    accentBg: 'bg-cyan-500/10',
    accentBorder: 'border-cyan-500/25',
    keyHighlights: [
      'Data Cleansing & Database Hygiene',
      'High-Accuracy Data Entry & Processing',
      'Digital Catalog & CMS Maintenance',
      'Business Process & SOP Execution',
    ],
    metrics: [
      { value: '99.8%', label: 'Data Precision SLA' },
      { value: '40%+', label: 'Productivity Boost' },
      { value: 'Scalable', label: 'On-Demand Capacity' },
    ],
  },
];

const AUTOPLAY_DURATION = 6000; // 6 seconds per slide

export const HeroSection: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setProgress(0);
      setTimeout(() => {
        setCurrent(index);
        setIsAnimating(false);
      }, 220);
    },
    [isAnimating]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, goTo]);

  // Handle Autoplay & Progress Bar
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      return;
    }

    setProgress(0);
    const tickTime = 50; // update every 50ms
    const totalTicks = AUTOPLAY_DURATION / tickTime;
    let ticks = 0;

    progressIntervalRef.current = setInterval(() => {
      ticks += 1;
      setProgress(Math.min(100, (ticks / totalTicks) * 100));
    }, tickTime);

    timerRef.current = setInterval(() => {
      next();
    }, AUTOPLAY_DURATION);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [current, isPaused, next]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [next, prev]);

  const slide = slides[current];
  const IconComponent = slide.icon;

  return (
    <section className="relative bg-white dark:bg-charcoal text-charcoal dark:text-white min-h-[90vh] flex items-center overflow-hidden pt-8 pb-16 px-4 sm:px-6 lg:px-8 transition-colors">
      {/* Preload all slide images */}
      <div className="hidden">
        {slides.map((s) => (
          <Image
            key={s.id}
            src={s.imageSrc}
            alt={s.imageAlt}
            width={685}
            height={253}
            priority
          />
        ))}
      </div>

      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-1/4 w-[550px] h-[550px] bg-blue-electric/10 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 left-5 w-[360px] h-[360px] bg-blue-electric/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">
        {/* ========================================================= */}
        {/* LEFT COLUMN: Business Information Changing with Picture  */}
        {/* ========================================================= */}
        <div className="lg:col-span-6 space-y-7">
          {/* Top badges & Tagline */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2.5">
              <Badge variant="blue" withDot className="font-semibold">
                {slide.divisionNumber}
              </Badge>
              <span
                className={`text-xs font-body tracking-wide font-semibold inline-flex items-center gap-2 px-3 py-1 rounded-full border transition-all duration-300 ${slide.accentBg} ${slide.accentColor} ${slide.accentBorder}`}
              >
                <IconComponent className="w-3.5 h-3.5" />
                <span>{slide.title}</span>
              </span>
              <span className="text-xs font-body text-blue-electric dark:text-blue-hover tracking-wide uppercase font-semibold inline-flex items-center gap-1.5 bg-blue-electric/10 px-3 py-1 rounded-full border border-blue-electric/25">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-electric animate-beacon" />
                {slide.imageTagline}
              </span>
            </div>

            <p className="text-xs font-body uppercase tracking-widest text-charcoal-muted">
              Global Outsourcing &bull; Dedicated Business Teams &bull; SLA-Backed
            </p>
          </div>

          {/* Dynamic Headline & Description */}
          <div
            className={`space-y-4 transition-all duration-300 ease-out ${
              isAnimating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
            }`}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight leading-[1.15] text-charcoal dark:text-white">
              {slide.headline.includes('Support') ? (
                <>
                  {slide.headline.split('Support')[0]}
                  <span className="text-blue-electric dark:text-blue-hover">Support</span>
                  {slide.headline.split('Support')[1]}
                </>
              ) : slide.headline.includes('Solutions') ? (
                <>
                  {slide.headline.split('Solutions')[0]}
                  <span className="text-blue-electric dark:text-blue-hover">Solutions</span>
                  {slide.headline.split('Solutions')[1]}
                </>
              ) : (
                slide.headline
              )}
            </h1>

            <p className="text-base sm:text-lg text-charcoal-muted dark:text-white/80 font-body leading-relaxed max-w-xl">
              {slide.subtext}
            </p>
          </div>

          {/* Key Deliverables Checklist (changing with division) */}
          <div
            className={`transition-all duration-300 ease-out ${
              isAnimating ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <p className="text-xs font-body font-semibold uppercase tracking-wider text-charcoal-muted mb-2.5">
              Core Capabilities in this Division:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {slide.keyHighlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-xs sm:text-sm font-body text-charcoal dark:text-white/90 bg-offwhite/80 dark:bg-charcoal-card/60 border border-charcoal/10 dark:border-charcoal-border rounded-lg px-3 py-2"
                >
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-500 dark:text-emerald-400" />
                  <span className="truncate">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
            <a href={slide.buttonHref}>
              <Button size="lg" variant="primary" className="font-semibold shadow-md w-full sm:w-auto">
                <span>{slide.buttonLabel}</span>
                <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
            </a>
            <a href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-charcoal/20 dark:border-white/20 text-charcoal dark:text-white hover:bg-charcoal/5 dark:hover:bg-white/10 w-full sm:w-auto"
              >
                Get a Free Consultation
              </Button>
            </a>
          </div>

          {/* Dynamic Business Metrics Stats Bar */}
          <div className="pt-5 border-t border-charcoal/10 dark:border-white/10 grid grid-cols-3 gap-4 font-body">
            {slide.metrics.map((metric, idx) => (
              <div
                key={idx}
                className={`transition-all duration-300 ${
                  isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                }`}
              >
                <p className="text-xl sm:text-2xl font-bold font-heading text-charcoal dark:text-white">
                  {metric.value}
                </p>
                <p className="text-[11px] sm:text-xs text-charcoal-muted uppercase tracking-wide">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* RIGHT COLUMN: Picture Slideshow Showcase                  */}
        {/* ========================================================= */}
        <div
          className="lg:col-span-6 relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Visual Display Frame */}
          <div className="relative bg-white dark:bg-charcoal-card border border-charcoal/15 dark:border-charcoal-border rounded-2xl overflow-hidden shadow-2xl transition-all">
            {/* Top Browser Bar */}
            <div className="bg-offwhite dark:bg-charcoal border-b border-charcoal/10 dark:border-charcoal-border px-4 sm:px-5 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-xs font-mono text-charcoal-muted hidden sm:inline-block">
                  mousetoclick.com{slide.buttonHref}
                </span>
              </div>

              <div className="flex items-center gap-2">
                {/* Play/Pause Button */}
                <button
                  onClick={() => setIsPaused(!isPaused)}
                  aria-label={isPaused ? 'Resume slideshow' : 'Pause slideshow'}
                  className="p-1 rounded-md text-charcoal-muted hover:text-charcoal dark:hover:text-white transition-colors"
                  title={isPaused ? 'Resume autoplay' : 'Pause autoplay'}
                >
                  {isPaused ? <Play className="w-3.5 h-3.5 text-blue-electric" /> : <Pause className="w-3.5 h-3.5" />}
                </button>
                <span className="text-xs font-mono font-bold text-blue-electric bg-blue-electric/10 px-2 py-0.5 rounded">
                  0{current + 1} / 0{slides.length}
                </span>
              </div>
            </div>

            {/* Picture Viewport */}
            <div className="relative overflow-hidden bg-slate-950 group">
              {/* The Picture Image with Transition */}
              <div
                className={`relative w-full aspect-[685/253] overflow-hidden transition-all duration-300 ease-out ${
                  isAnimating ? 'opacity-20 scale-[0.99]' : 'opacity-100 scale-100'
                }`}
              >
                <Image
                  src={slide.imageSrc}
                  alt={slide.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  priority
                />

                {/* Subtle vignette / shine */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />

                {/* Floating Service Category Tag */}
                <div className="absolute top-3 right-3 z-10">
                  <span className="text-[11px] font-body font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 shadow-sm flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-blue-electric" />
                    {slide.category}
                  </span>
                </div>

                {/* Floating Tagline Banner on Image */}
                <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between">
                  <div className="bg-black/70 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-lg text-white">
                    <p className="text-[10px] uppercase font-mono tracking-wider text-blue-hover">
                      Division Motto
                    </p>
                    <p className="text-xs sm:text-sm font-heading font-bold text-white drop-shadow">
                      {slide.imageTagline}
                    </p>
                  </div>

                  <a
                    href={slide.buttonHref}
                    className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-blue-electric hover:bg-blue-hover text-white transition-all shadow-md"
                  >
                    <span>View Division</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Progress Bar (Autoplay countdown) */}
              <div className="w-full h-1 bg-charcoal/30 dark:bg-charcoal-border overflow-hidden">
                <div
                  className="h-full bg-blue-electric transition-all duration-75 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Left Chevron Button */}
              <button
                onClick={prev}
                aria-label="Previous slide"
                className="absolute top-1/2 -translate-y-1/2 left-3 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all shadow-lg active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Right Chevron Button */}
              <button
                onClick={next}
                aria-label="Next slide"
                className="absolute top-1/2 -translate-y-1/2 right-3 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all shadow-lg active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Interactive Division Navigation Bar */}
            <div className="p-4 sm:p-5 bg-white dark:bg-charcoal-card border-t border-charcoal/10 dark:border-charcoal-border space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-body font-semibold uppercase tracking-wider text-charcoal-muted">
                  Select Division to View Picture & Details:
                </span>
                <span className="text-xs font-mono text-charcoal-muted">
                  {isPaused ? 'Paused' : 'Auto-advancing'}
                </span>
              </div>

              {/* 6 Division Selection Buttons */}
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {slides.map((s, idx) => {
                  const SIcon = s.icon;
                  const isActive = idx === current;
                  return (
                    <button
                      key={s.id}
                      onClick={() => goTo(idx)}
                      className={`flex flex-col items-center justify-center p-2 rounded-xl text-xs font-body transition-all border ${
                        isActive
                          ? 'bg-blue-electric text-white border-blue-electric shadow-electric-subtle font-semibold scale-100'
                          : 'bg-offwhite dark:bg-charcoal border-charcoal/10 dark:border-charcoal-border text-charcoal dark:text-white/80 hover:border-blue-electric/50 hover:bg-white dark:hover:bg-charcoal/80'
                      }`}
                    >
                      <SIcon className={`w-4 h-4 mb-1 ${isActive ? 'text-white' : s.accentColor}`} />
                      <span className="text-[10px] font-mono opacity-80 leading-none">
                        0{idx + 1}
                      </span>
                      <span className="text-[11px] truncate w-full text-center mt-0.5">
                        {s.shortTitle}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Bottom Quick Bar */}
              <div className="pt-2 flex items-center justify-between border-t border-charcoal/10 dark:border-charcoal-border text-xs">
                <a
                  href={slide.buttonHref}
                  className="inline-flex items-center gap-1.5 font-semibold text-blue-electric dark:text-blue-hover hover:underline"
                >
                  <span>Explore {slide.title} Division</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <span className="text-charcoal-muted text-[11px] font-mono hidden sm:inline">
                  Click any division or use &larr; &rarr; keys
                </span>
              </div>
            </div>
          </div>

          {/* Floating Trust Badge */}
          <div className="absolute -bottom-5 -left-3 sm:-left-5 bg-white dark:bg-charcoal-card border border-charcoal/10 dark:border-charcoal-border rounded-xl px-4 py-2.5 shadow-xl flex items-center gap-3 z-20">
            <div className="w-8 h-8 rounded-full bg-blue-electric/10 border border-blue-electric/25 flex items-center justify-center">
              <span className="text-blue-electric font-bold text-sm">✓</span>
            </div>
            <div>
              <p className="text-xs font-heading font-bold text-charcoal dark:text-white">
                Global Outsourcing Partner
              </p>
              <p className="text-[11px] font-body text-charcoal-muted">
                Serving Clients Across US · UK · Canada · Australia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
