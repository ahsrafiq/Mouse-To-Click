'use client';

import React, { useState } from 'react';
import { HeartPulse, CheckCircle2, ArrowRight, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const InteractiveInsuranceTeaser: React.FC = () => {
  const [householdSize, setHouseholdSize] = useState<string>('2-3');
  const [incomeRange, setIncomeRange] = useState<string>('low');

  return (
    <div className="bg-white dark:bg-charcoal-card text-charcoal dark:text-white rounded-3xl p-8 lg:p-12 border border-charcoal/10 dark:border-charcoal-border shadow-sm dark:shadow-2xl space-y-10 transition-colors">
      {/* Gentle, Warm Header */}
      <div className="max-w-2xl mx-auto text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-offwhite dark:bg-charcoal border border-charcoal/10 dark:border-white/10 text-xs font-medium text-charcoal dark:text-white">
          <Heart className="w-3.5 h-3.5 text-blue-electric fill-blue-electric" />
          <span>Compassionate Community Care</span>
        </div>
        <h3 className="text-3xl sm:text-4xl font-heading font-extrabold text-charcoal dark:text-white tracking-tight">
          Find Subsidized Healthcare for Your Family
        </h3>
        <p className="text-charcoal-muted dark:text-white/80 text-base leading-relaxed">
          No complicated legal jargon or bureaucratic obstacles. Answer two brief questions to preview qualifying assistance programs.
        </p>
      </div>

      {/* Interactive Micro-Selector */}
      <div className="max-w-xl mx-auto bg-offwhite dark:bg-charcoal p-6 sm:p-8 rounded-2xl border border-charcoal/10 dark:border-white/10 space-y-6">
        {/* Question 1: Household size */}
        <div className="space-y-3">
          <label className="text-xs font-semibold uppercase tracking-wider text-charcoal dark:text-white block">
            How many people live in your home?
          </label>
          <div className="grid grid-cols-4 gap-2.5">
            {['1', '2-3', '4-5', '6+'].map((val) => (
              <button
                key={val}
                type="button"
                onClick={() => setHouseholdSize(val)}
                className={`py-3 rounded-xl font-medium text-sm transition-all duration-200 border ${
                  householdSize === val
                    ? 'bg-blue-electric text-white border-blue-electric shadow-sm'
                    : 'bg-white dark:bg-charcoal-card text-charcoal dark:text-white border-charcoal/15 dark:border-charcoal-border hover:border-blue-electric'
                }`}
              >
                {val} {val === '1' ? 'Person' : 'People'}
              </button>
            ))}
          </div>
        </div>

        {/* Question 2: Estimated Income */}
        <div className="space-y-3">
          <label className="text-xs font-semibold uppercase tracking-wider text-charcoal dark:text-white block">
            Estimated Monthly Household Income
          </label>
          <div className="grid grid-cols-3 gap-2.5">
            {[
              { id: 'low', label: 'Under $2,500' },
              { id: 'mid', label: '$2,500 - $4,200' },
              { id: 'custom', label: 'Unsure / Seasonal' },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setIncomeRange(item.id)}
                className={`py-3 px-2 text-center rounded-xl font-medium text-xs transition-all duration-200 border ${
                  incomeRange === item.id
                    ? 'bg-blue-electric text-white border-blue-electric shadow-sm'
                    : 'bg-white dark:bg-charcoal-card text-charcoal dark:text-white border-charcoal/15 dark:border-charcoal-border hover:border-blue-electric'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Live Evaluation Box */}
        <div className="bg-white dark:bg-charcoal-card p-5 rounded-xl border border-charcoal/10 dark:border-charcoal-border space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-charcoal dark:text-white">
            <CheckCircle2 className="w-4 h-4 text-blue-electric" />
            <span>High Probability of 100% Subsidized or Low-Cost Coverage</span>
          </div>
          <p className="text-xs text-charcoal-muted dark:text-white/80 leading-relaxed">
            Based on a household of {householdSize} members, your family qualifies for zero-premium medicaid programs, essential health benefits, and preventative doctor visits.
          </p>
        </div>

        {/* Direct Action */}
        <div className="pt-2">
          <a href="/health-insurance">
            <Button
              fullWidth
              size="lg"
              variant="primary"
              className="rounded-full shadow-md font-semibold text-sm"
            >
              <span>Begin Free Confidential Application</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </a>
          <p className="text-center text-[11px] text-charcoal-muted mt-3">
            100% Free Service &bull; Zero Fees &bull; No Impact on Credit Score
          </p>
        </div>
      </div>
    </div>
  );
};

