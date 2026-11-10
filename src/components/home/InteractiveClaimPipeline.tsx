'use client';

import React, { useState } from 'react';
import { CheckCircle2, Clock, ShieldCheck, ArrowRight, DollarSign, FileCheck, RefreshCw } from 'lucide-react';
import { ViewfinderCorner } from '@/components/ui/ViewfinderCorner';
import { Badge } from '@/components/ui/Badge';

export const InteractiveClaimPipeline: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(1);

  const stages = [
    {
      id: 0,
      number: 'STAGE 01',
      title: 'Claim Scrubbing',
      tag: 'ICD-10 / CPT Check',
      duration: 'Hours 0 - 6',
      description:
        'Automated AI and certified coder cross-verification eliminating missing modifiers, diagnostic mismatches, and format anomalies.',
      stat: '98.4% Clean Rate',
    },
    {
      id: 1,
      number: 'STAGE 02',
      title: 'Payer Adjudication',
      tag: 'EDI 837 Transmission',
      duration: 'Hours 6 - 24',
      description:
        'Direct clearinghouse transmission with immediate electronic delivery confirmation and payer front-end acceptance receipts.',
      stat: 'Zero Clearinghouse Rejections',
    },
    {
      id: 2,
      number: 'STAGE 03',
      title: 'Denial Interception',
      tag: '72h Resolution Loop',
      duration: 'Hours 24 - 72',
      description:
        'Immediate appeal escalation for any payer queries. Rapid submission of clinical records and medical necessity documentation.',
      stat: '85%+ Denials Overturned',
    },
    {
      id: 3,
      number: 'STAGE 04',
      title: 'Electronic Settlement',
      tag: 'ERA / EFT Reconciliation',
      duration: 'Day 14 - 21',
      description:
        'Automated Electronic Remittance Advice (ERA) auto-posting directly into practice management accounting ledgers.',
      stat: '< 26 Days in A/R',
    },
  ];

  const current = stages[activeStage];

  return (
    <div className="relative bg-white dark:bg-charcoal-card border border-charcoal/10 dark:border-charcoal-border rounded-xl p-6 lg:p-8 overflow-hidden shadow-sm dark:shadow-2xl transition-colors">
      <ViewfinderCorner size={16} color="blue" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-charcoal/10 dark:border-white/10 gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-electric animate-beacon" />
            <span className="text-xs font-mono uppercase tracking-widest text-blue-electric dark:text-blue-hover font-semibold">
              Live Medical Claim Flow Architecture
            </span>
          </div>
          <h3 className="text-xl font-heading font-bold text-charcoal dark:text-white">
            End-to-End Revenue Cycle Pipeline
          </h3>
        </div>
        <Badge variant="blue" className="font-mono text-xs">
          HIPAA TITLE II ENCRYPTED
        </Badge>
      </div>

      {/* Interactive 4-Stage Step Bar */}
      <div className="pt-8 pb-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {stages.map((stage) => {
            const isCurrent = stage.id === activeStage;
            const isCompleted = stage.id < activeStage;
            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => setActiveStage(stage.id)}
                className={`p-4 rounded-lg text-left transition-all relative border ${
                  isCurrent
                    ? 'bg-blue-electric/10 dark:bg-charcoal border-blue-electric shadow-sm'
                    : 'bg-offwhite dark:bg-charcoal/50 border-charcoal/10 dark:border-charcoal-border hover:border-blue-electric/40'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-[10px] font-mono tracking-wider font-semibold ${
                      isCurrent ? 'text-blue-electric dark:text-blue-hover' : 'text-charcoal-muted'
                    }`}
                  >
                    {stage.number}
                  </span>
                  {isCompleted ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-electric" />
                  ) : isCurrent ? (
                    <span className="w-2 h-2 rounded-full bg-blue-electric animate-beacon" />
                  ) : null}
                </div>
                <p className="text-sm font-heading font-bold text-charcoal dark:text-white leading-tight">
                  {stage.title}
                </p>
                <p className="text-[10px] font-mono text-charcoal-muted mt-1 truncate">
                  {stage.tag}
                </p>
              </button>
            );
          })}
        </div>

        {/* Dynamic Progress Bar */}
        <div className="w-full bg-offwhite dark:bg-charcoal h-1.5 rounded-full mt-4 overflow-hidden border border-charcoal/10 dark:border-white/5">
          <div
            className="bg-blue-electric h-full transition-all duration-500 ease-out shadow-sm"
            style={{ width: `${((activeStage + 1) / stages.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Stage Detail Card */}
      <div className="bg-offwhite dark:bg-charcoal rounded-lg p-6 border border-charcoal/10 dark:border-white/10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-8 space-y-3">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-blue-electric dark:text-blue-hover font-semibold">
              // ACTIVE STAGE SPECIFICATIONS
            </span>
            <span className="text-xs font-mono text-charcoal-muted flex items-center gap-1">
              <Clock className="w-3 h-3 text-blue-electric" />
              {current.duration}
            </span>
          </div>
          <h4 className="text-xl font-heading font-bold text-charcoal dark:text-white">
            {current.title}
          </h4>
          <p className="text-sm text-charcoal/90 dark:text-white/80 leading-relaxed font-body">
            {current.description}
          </p>
        </div>

        <div className="md:col-span-4 bg-white dark:bg-charcoal-card p-4 rounded-lg border border-charcoal/10 dark:border-charcoal-border text-center space-y-1 shadow-sm">
          <span className="text-[10px] font-mono uppercase tracking-widest text-charcoal-muted block">
            Target SLA Metric
          </span>
          <p className="text-lg font-mono font-bold text-blue-electric">
            {current.stat}
          </p>
          <span className="text-[10px] font-mono text-charcoal-muted dark:text-white/60 block pt-1">
            Real-time audit logged
          </span>
        </div>
      </div>
    </div>
  );
};
