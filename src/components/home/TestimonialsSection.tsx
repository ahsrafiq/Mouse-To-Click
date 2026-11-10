'use client';

import React from 'react';
import { Quote, CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      category: 'Remote Video Monitoring',
      badge: 'Warehousing & Logistics',
      quote:
        'MouseToClick replaced our expensive night-shift guard overhead with live remote monitoring across our 18 existing warehouse cameras. We reduced our monthly security spend by 38% while actually improving after-hours response time.',
      author: 'David Sterling',
      role: 'Director of Facility Security',
      company: 'Pioneer Logistics Depot',
    },
    {
      category: 'Medical Billing',
      badge: 'Multispecialty Practice',
      quote:
        'Our clinical practice was drowning in unpaid payer denials and aging A/R exceeding 55 days. MouseToClick audited our billing pipeline. In 90 days, our clean-claim acceptance reached 98.4% and days in A/R plunged to under 24 days.',
      author: 'Dr. Evelyn Chen, MD',
      role: 'Managing Partner & Medical Director',
      company: 'MetroHealth Medical Group',
    },
    {
      category: 'Health Insurance Support',
      badge: 'Family Assistance',
      quote:
        'When our family had no health coverage for our children, the advocates at MouseToClick treated us with incredible warmth and respect, navigating every state program until full coverage was approved at zero monthly premium.',
      author: 'Amina & Tariq R.',
      role: 'Enrolled Family Beneficiaries',
      company: 'Community Care Recipient',
    },
  ];

  return (
    <section className="bg-white dark:bg-charcoal text-charcoal dark:text-white py-24 px-4 sm:px-6 lg:px-8 border-t border-charcoal/10 dark:border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="blue" withDot>
            Client Endorsements &amp; Verified Impact
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-charcoal dark:text-white">
            Proven Results Across High-Stakes Operations
          </h2>
          <p className="text-charcoal-muted dark:text-white/80 text-base sm:text-lg leading-relaxed">
            From logistics depots saving 30–40% on surveillance to surgical clinics optimizing revenue and everyday families receiving essential healthcare.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <Card
              key={index}
              variant="tech"
              withViewfinder
              className="flex flex-col justify-between space-y-6 bg-offwhite dark:bg-charcoal-card text-charcoal dark:text-white border-charcoal/10 dark:border-charcoal-border hover:border-blue-electric dark:hover:border-blue-hover/60 transition-colors shadow-sm"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-blue-electric dark:text-blue-hover uppercase tracking-wider font-semibold">
                    {t.category}
                  </span>
                  <Badge variant="outline" className="text-[10px] py-0.5 border-charcoal/20 dark:border-white/20 text-charcoal dark:text-white">
                    {t.badge}
                  </Badge>
                </div>

                <Quote className="w-8 h-8 text-blue-electric opacity-60" />

                <p className="text-sm text-charcoal/90 dark:text-white/90 leading-relaxed font-body">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-charcoal/10 dark:border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-heading font-bold text-charcoal dark:text-white">
                    {t.author}
                  </h4>
                  <p className="text-xs text-charcoal-muted font-mono">
                    {t.role}
                  </p>
                  <p className="text-xs text-blue-electric dark:text-blue-hover font-mono font-semibold">
                    {t.company}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-white dark:bg-charcoal border border-blue-electric/40 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-blue-electric" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
