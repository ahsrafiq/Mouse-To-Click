'use client';

import React, { useState } from 'react';
import {
  FileText,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  RefreshCw,
  Clock,
  DollarSign,
  AlertCircle,
  BarChart3,
  FileCheck2,
  HelpCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { InteractiveClaimPipeline } from '@/components/home/InteractiveClaimPipeline';
import { ViewfinderCorner } from '@/components/ui/ViewfinderCorner';

export default function MedicalBillingPage() {
  // Practice Revenue Leakage Calculator
  const [monthlyCollections, setMonthlyCollections] = useState<number>(120000);
  const [currentDenialRate, setCurrentDenialRate] = useState<number>(12); // in percent

  // Mouse To Click reduces denials down to < 2% and recovers ~85% of existing denials
  const annualUncollectedDenials = (monthlyCollections * 12 * (currentDenialRate / 100));
  const estimatedRecoveredAnnual = Math.round(annualUncollectedDenials * 0.85);

  const benefits = [
    {
      title: 'Accelerated Cash Velocity (< 26 Days A/R)',
      desc: 'We compress accounts receivable turnaround from the national average of 54+ days down to under 26 days through same-day electronic batch submission.',
      metric: '< 26 Days',
      metricLabel: 'Average A/R Aging',
      icon: TrendingUp,
    },
    {
      title: '98.4% Clean Claim First-Pass Acceptance',
      desc: 'Our certified AAPC/AHIMA billing coders pre-scrub every ICD-10 diagnosis code, CPT modifier, and payer rule before clearinghouse transmission.',
      metric: '98.4%',
      metricLabel: 'Clean Submission Rate',
      icon: CheckCircle2,
    },
    {
      title: 'Aggressive 72-Hour Denial Escalation',
      desc: 'Denials are never ignored or written off. Our dedicated denial resolution team analyzes root cause reasons and refiles appeals within 72 hours.',
      metric: '85%+',
      metricLabel: 'Denials Overturned',
      icon: RefreshCw,
    },
    {
      title: 'Complete HIPAA Title II Security Safeguards',
      desc: 'Full end-to-end 256-bit encryption across all EDI 837 claim files, EDI 835 remittance posting, and clearinghouse transactions.',
      metric: '100%',
      metricLabel: 'HIPAA Audited Compliant',
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="bg-white dark:bg-charcoal text-charcoal dark:text-white min-h-screen py-16 px-4 sm:px-6 lg:px-8 space-y-24 transition-colors">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* =========================================================================
            HEADER & HERO
            ========================================================================= */}
        <div className="space-y-6 max-w-4xl">
          <Badge variant="blue" withDot>
            Revenue Cycle Management &bull; Zero-Leakage Medical Billing
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-heading font-extrabold tracking-tight leading-[1.1]">
            Maximized Practice Reimbursements.{' '}
            <span className="text-blue-electric dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-white dark:via-white dark:to-blue-hover">
              Zero Ignored Denials.
            </span>
          </h1>
          <p className="text-charcoal-muted dark:text-white/80 text-lg sm:text-xl leading-relaxed font-body">
            Stop losing 10% to 18% of your clinical revenue to billing friction, coding errors, and unworked insurance denials. Mouse To Click provides certified end-to-end revenue cycle logistics for outpatient clinics, surgical practices, and healthcare groups.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a href="#calculator">
              <Button size="lg" variant="primary">
                Calculate Practice Leakage
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
            <a href="/contact">
              <Button size="lg" variant="outline">
                Request Practice Revenue Audit
              </Button>
            </a>
          </div>
        </div>

        {/* =========================================================================
            INTERACTIVE 4-STAGE CLAIM FLOW DIAGRAM
            ========================================================================= */}
        <div className="space-y-6">
          <div className="border-b border-charcoal/10 dark:border-white/10 pb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-electric dark:text-blue-hover font-semibold">
              Live Pipeline Architecture
            </span>
            <h2 className="text-3xl font-heading font-bold text-charcoal dark:text-white mt-1">
              The 4-Stage Accelerated Claim Flow
            </h2>
          </div>

          <InteractiveClaimPipeline />
        </div>

        {/* =========================================================================
            CORE PRACTICE BENEFITS MATRIX
            ========================================================================= */}
        <div className="space-y-12">
          <div className="border-b border-charcoal/10 dark:border-white/10 pb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-electric dark:text-blue-hover font-semibold">
              Quantifiable Impact
            </span>
            <h2 className="text-3xl font-heading font-bold text-charcoal dark:text-white mt-1">
              Why Healthcare Providers Choose Mouse To Click
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((b, idx) => {
              const Icon = b.icon;
              return (
                <Card key={idx} variant="tech" withViewfinder className="bg-white dark:bg-charcoal-card border-charcoal/10 dark:border-charcoal-border text-charcoal dark:text-white space-y-6 flex flex-col justify-between shadow-sm">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-lg bg-offwhite dark:bg-charcoal border border-charcoal/10 dark:border-charcoal-border flex items-center justify-center text-blue-electric dark:text-blue-hover">
                        <Icon className="w-5 h-5" />
                      </div>
                      <Badge variant="blue" className="font-mono text-xs">
                        VERIFIED SLA
                      </Badge>
                    </div>
                    <h3 className="text-xl font-heading font-bold text-charcoal dark:text-white">
                      {b.title}
                    </h3>
                    <p className="text-sm text-charcoal-muted dark:text-white/80 font-body leading-relaxed">
                      {b.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-charcoal/10 dark:border-white/10 flex items-center justify-between bg-offwhite dark:bg-charcoal p-4 rounded-lg">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-charcoal-muted block">
                        {b.metricLabel}
                      </span>
                      <span className="text-2xl font-mono font-bold text-blue-electric dark:text-blue-hover">
                        {b.metric}
                      </span>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-blue-electric dark:text-blue-hover" />
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            INTERACTIVE PRACTICE REVENUE LEAKAGE CALCULATOR
            ========================================================================= */}
        <div id="calculator" className="bg-white dark:bg-charcoal-card border border-charcoal/10 dark:border-charcoal-border rounded-xl p-6 lg:p-10 space-y-8 scroll-mt-24 shadow-sm dark:shadow-2xl relative overflow-hidden">
          <ViewfinderCorner size={16} color="blue" />

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-charcoal/10 dark:border-white/10 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-blue-electric dark:text-blue-hover font-semibold">
                Financial Impact Modeling
              </span>
              <h3 className="text-2xl font-heading font-bold text-charcoal dark:text-white">
                Practice Denial Recovery Calculator
              </h3>
            </div>
            <Badge variant="blue" className="font-mono text-xs">
              ESTIMATE RECOVERABLE REVENUE
            </Badge>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Inputs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-charcoal dark:text-white/80 uppercase">Monthly Practice Collections</span>
                  <span className="text-blue-electric dark:text-blue-hover font-bold">${monthlyCollections.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="20000"
                  max="1000000"
                  step="10000"
                  value={monthlyCollections}
                  onChange={(e) => setMonthlyCollections(Number(e.target.value))}
                  className="w-full h-1.5 bg-offwhite dark:bg-charcoal rounded-lg appearance-none cursor-pointer accent-blue-electric"
                  aria-label="Monthly Practice Collections"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-charcoal dark:text-white/80 uppercase">Estimated Payer Denial Rate</span>
                  <span className="text-blue-electric dark:text-blue-hover font-bold">{currentDenialRate}%</span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="25"
                  step="1"
                  value={currentDenialRate}
                  onChange={(e) => setCurrentDenialRate(Number(e.target.value))}
                  className="w-full h-1.5 bg-offwhite dark:bg-charcoal rounded-lg appearance-none cursor-pointer accent-blue-electric"
                  aria-label="Estimated Payer Denial Rate"
                />
              </div>

              <div className="bg-offwhite dark:bg-charcoal p-4 rounded-lg border border-charcoal/10 dark:border-white/10 text-xs font-mono space-y-2 text-charcoal/90 dark:text-white/80">
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-electric dark:text-blue-hover flex-shrink-0" />
                  <span>National average clinic denial rate: 10% to 15%</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-electric dark:text-blue-hover flex-shrink-0" />
                  <span>Up to 60% of payer denials are never refiled by overworked in-house staff</span>
                </p>
              </div>
            </div>

            {/* Recovery Output */}
            <div className="lg:col-span-5 bg-offwhite dark:bg-charcoal p-6 rounded-xl border border-charcoal/10 dark:border-white/10 space-y-6 text-center">
              <span className="text-xs font-mono text-charcoal-muted uppercase block">
                Estimated Annual Revenue Recovered
              </span>
              <p className="text-4xl sm:text-5xl font-heading font-extrabold text-blue-electric dark:text-blue-hover">
                +${estimatedRecoveredAnnual.toLocaleString()}
              </p>
              <p className="text-xs font-mono text-charcoal-muted dark:text-white/80">
                Based on reducing clean-claim errors and capturing 85% of previously written-off payer rejections.
              </p>

              <a href="/contact">
                <Button fullWidth variant="primary" size="md">
                  Request Detailed Practice Revenue Audit
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* =========================================================================
            FINAL CALLOUT
            ========================================================================= */}
        <div className="bg-offwhite dark:bg-charcoal-card border border-charcoal/10 dark:border-charcoal-border rounded-xl p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
          <div className="space-y-2">
            <span className="text-xs font-mono text-blue-electric dark:text-blue-hover uppercase tracking-widest font-semibold">
              Zero Upfront Migration Cost
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-charcoal dark:text-white">
              Seamless Integration with Your Existing EHR / EMR
            </h3>
            <p className="text-charcoal-muted dark:text-white/80 text-sm max-w-xl">
              We connect directly with Epic, Cerner, eClinicalWorks, AthenaHealth, Kareo, AdvancedMD, and all standard clearinghouses with zero software disruption.
            </p>
          </div>
          <div className="flex-shrink-0">
            <a href="/contact">
              <Button size="lg" variant="primary">
                Book a Confidential Practice Audit
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
