'use client';

import React, { useState } from 'react';
import {
  MonitorCheck,
  ShieldCheck,
  Clock,
  AlertTriangle,
  FileText,
  BellRing,
  CheckCircle2,
  TrendingDown,
  ArrowRight,
  Store,
  Warehouse,
  Factory,
  Building2,
  GraduationCap,
  HeartPulse,
  HardHat,
  Truck,
  Car,
  DollarSign,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ViewfinderCorner } from '@/components/ui/ViewfinderCorner';
import { Eye, Shield, Activity, Radio, Video } from 'lucide-react';

export default function CCTVPage() {
  // Interactive Operational Savings Calculator based on Proposal (30-40% savings)
  const [cameraCount, setCameraCount] = useState<number>(16);
  const [coverageHours, setCoverageHours] = useState<'night' | 'full'>('full'); // Overnight vs 24/7

  // Estimated in-house monitoring staffing cost:
  // An in-house team requires 2 to 4 full-time operators across shifts (~$8,000 - $16,000/month)
  const inHouseMonthlyCost = coverageHours === 'full' ? 12000 : 6500;
  // MouseToClick delivers ~35% operational savings
  const mouseToClickMonthly = Math.round(inHouseMonthlyCost * 0.65);
  const annualSavings = (inHouseMonthlyCost - mouseToClickMonthly) * 12;

  const whatWeDoList = [
    {
      title: 'Live Remote Surveillance',
      desc: 'Active, real-time monitoring of your existing compatible CCTV camera feeds by our dedicated surveillance team.',
      icon: MonitorCheck,
    },
    {
      title: 'Flexible Monitoring Schedules',
      desc: 'Tailored coverage hours designed around your operating needs, including full 24/7 arrangements where agreed.',
      icon: Clock,
    },
    {
      title: 'Suspicious Activity Identification',
      desc: 'Immediate detection of unusual movements, loitering, perimeter breaches, and unauthorized after-hours activity.',
      icon: AlertTriangle,
    },
    {
      title: 'Timestamped Incident Documentation',
      desc: 'Thorough incident logging with exact timestamps, camera channel references, and exported evidence snapshots.',
      icon: FileText,
    },
    {
      title: 'Direct Escalation & Alerting',
      desc: 'Instant priority notification and direct escalation to your designated site contacts, management, or local dispatch.',
      icon: BellRing,
    },
    {
      title: 'Daily Logs & Structured Reporting',
      desc: 'Comprehensive daily monitoring logs, shift handover summaries, and recurring operational reports delivered to your inbox.',
      icon: CheckCircle2,
    },
  ];

  const whyChooseUs = [
    {
      title: 'Cost-Effective Alternative',
      desc: 'Eliminates the heavy overhead, recruitment costs, management burden, and facility expenses of building an in-house monitoring operation.',
    },
    {
      title: 'Flexible Custom Coverage',
      desc: 'Designed around your specific physical locations, operating hours, peak vulnerability windows, and seasonal requirements.',
    },
    {
      title: 'Consistent Standard Procedures',
      desc: 'Rigorous standard operating procedures (SOPs), disciplined shift handovers, and clear incident escalation channels.',
    },
    {
      title: 'Scalable as Your Business Grows',
      desc: 'Seamlessly add additional cameras, multi-site locations, or expanded coverage hours with zero internal hiring delays.',
    },
  ];

  const industries = [
    { name: 'Retail', icon: Store, desc: 'Loss prevention, after-hours protection, customer safety' },
    { name: 'Warehousing', icon: Warehouse, desc: 'Loading dock visibility, asset protection, gate security' },
    { name: 'Manufacturing', icon: Factory, desc: 'Facility perimeter monitoring, safety compliance, inventory' },
    { name: 'Corporate Offices', icon: Building2, desc: 'Access point verification, lobby coverage, visitor management' },
    { name: 'Education', icon: GraduationCap, desc: 'Campus perimeter safety, after-hours deterrence, grounds' },
    { name: 'Healthcare', icon: HeartPulse, desc: 'Parking facilities, pharmacy access, sensitive medical areas' },
    { name: 'Construction', icon: HardHat, desc: 'Heavy equipment security, copper/tool theft deterrence' },
    { name: 'Logistics', icon: Truck, desc: 'Truck yard monitoring, fleet surveillance, bay management' },
    { name: 'Parking Facilities', icon: Car, desc: 'Vehicle break-in deterrence, gate operations, lot lighting' },
  ];

  return (
    <div className="bg-white dark:bg-charcoal text-charcoal dark:text-white min-h-screen py-16 px-4 sm:px-6 lg:px-8 space-y-24 transition-colors">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* =========================================================================
            HEADER & HERO: OUTSOURCED REMOTE VIDEO MONITORING
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <Badge variant="blue" withDot>
                Remote Video Monitoring Solutions
              </Badge>
              <p className="text-xs font-mono uppercase tracking-widest text-blue-electric font-semibold">
                Innovation at Your Clicks &bull; A Smarter Approach to CCTV Monitoring
              </p>
            </div>

            <h1 className="text-4xl sm:text-6xl font-heading font-extrabold tracking-tight leading-[1.1]">
              Smarter Security.{' '}
              <span className="text-blue-electric dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-white dark:via-white dark:to-blue-hover">
                Lower Operational Costs.
              </span>
            </h1>

            <p className="text-charcoal-muted dark:text-white/80 text-lg leading-relaxed font-body">
              Are you looking for a reliable and cost-effective way to manage your CCTV monitoring operations?
            </p>
            <p className="text-charcoal-muted dark:text-white/70 text-base leading-relaxed font-body">
              <strong>MouseToClick</strong> provides outsourced remote video monitoring for businesses using their <strong>existing, compatible CCTV systems</strong>. Our service helps organizations maintain continuous visibility across their premises while eliminating the workload and overhead of managing an in-house monitoring team.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="#discuss">
                <Button size="lg" variant="primary">
                  Request a Customized Service Quotation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
              <a href="#savings">
                <Button size="lg" variant="outline">
                  Calculate Potential Savings
                </Button>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-charcoal/15 dark:border-charcoal-border bg-charcoal text-white p-4 shadow-xl space-y-3">
              {/* Top status bar */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-white font-bold uppercase tracking-wider">SOC Remote Console</span>
                </div>
                <div className="flex items-center gap-3 text-white/60 text-[11px]">
                  <span>FPS: 30</span>
                  <span className="text-blue-electric font-semibold">FEED: LIVE</span>
                </div>
              </div>

              {/* 4-Camera Grid */}
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { id: 'CAM-01', loc: 'Main Loading Dock', status: 'ACTIVE' },
                  { id: 'CAM-02', loc: 'Perimeter North Gate', status: 'ACTIVE' },
                  { id: 'CAM-03', loc: 'Warehouse Bay 4', status: 'MONITORING' },
                  { id: 'CAM-04', loc: 'Server Room Entry', status: 'SECURE' },
                ].map((cam, idx) => (
                  <div
                    key={cam.id}
                    className="relative bg-charcoal-card border border-white/10 rounded-lg p-3 min-h-[110px] flex flex-col justify-between overflow-hidden"
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono text-white/70">
                      <span>{cam.id}</span>
                      <span className="flex items-center gap-1 text-emerald-400">
                        <Radio className="w-2.5 h-2.5 animate-pulse" />
                        {cam.status}
                      </span>
                    </div>

                    <div className="my-auto flex items-center justify-center py-2">
                      <Video className="w-6 h-6 text-blue-electric/70" />
                    </div>

                    <div className="text-[10px] font-mono text-white/60 truncate">
                      {cam.loc}
                    </div>

                    <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-blue-electric" />
                    <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-blue-electric" />
                    <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-blue-electric" />
                    <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-blue-electric" />
                  </div>
                ))}
              </div>

              {/* Console summary info */}
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/70">
                <span className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-blue-electric" />
                  Existing Camera Stream Compatible
                </span>
                <span className="text-emerald-400 font-semibold">100% Uptime</span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            WHAT WE DO (6 CORE PILLARS FROM PROPOSAL)
            ========================================================================= */}
        <div className="space-y-12">
          <div className="border-b border-charcoal/10 dark:border-white/10 pb-6 max-w-3xl">
            <Badge variant="blue">Our Service Scope</Badge>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-charcoal dark:text-white mt-2">
              What We Do
            </h2>
            <p className="text-charcoal-muted dark:text-white/80 text-sm mt-1">
              Comprehensive remote video monitoring delivered through standardized operational protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatWeDoList.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} variant="tech" withViewfinder className="bg-white dark:bg-charcoal-card border-charcoal/10 dark:border-charcoal-border text-charcoal dark:text-white space-y-4 flex flex-col justify-between shadow-sm">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-offwhite dark:bg-charcoal border border-charcoal/10 dark:border-charcoal-border flex items-center justify-center text-blue-electric dark:text-blue-hover">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-charcoal dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs text-charcoal-muted dark:text-white/70 font-mono leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-charcoal/10 dark:border-white/10 flex items-center gap-1.5 text-[10px] font-mono text-blue-electric dark:text-blue-hover">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Included in All Service Agreements</span>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            POTENTIAL SAVINGS OF APPROXIMATELY 30-40% (CALCULATOR)
            ========================================================================= */}
        <div id="savings" className="bg-white dark:bg-charcoal-card border border-charcoal/10 dark:border-charcoal-border rounded-xl p-6 lg:p-10 space-y-8 scroll-mt-24 shadow-sm dark:shadow-2xl relative overflow-hidden">
          <ViewfinderCorner size={16} color="blue" />

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-charcoal/10 dark:border-white/10 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-blue-electric dark:text-blue-hover font-semibold">
                Financial Efficiency Modeling
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-charcoal dark:text-white">
                Potential Savings of Approximately 30&ndash;40%
              </h3>
              <p className="text-xs font-mono text-charcoal-muted mt-1">
                Compared with equivalent in-house CCTV monitoring operations.
              </p>
            </div>
            <Badge variant="blue" className="font-mono text-xs">
              30&ndash;40% COST REDUCTION
            </Badge>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Interactive Inputs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-charcoal dark:text-white/80 uppercase">Existing Compatible Cameras</span>
                  <span className="text-blue-electric dark:text-blue-hover font-bold">{cameraCount} Cameras</span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="64"
                  step="2"
                  value={cameraCount}
                  onChange={(e) => setCameraCount(Number(e.target.value))}
                  className="w-full h-1.5 bg-offwhite dark:bg-charcoal rounded-lg appearance-none cursor-pointer accent-blue-electric"
                  aria-label="Number of Cameras"
                />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono uppercase text-charcoal dark:text-white/80 block">
                  Monitoring Coverage Window
                </span>
                <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                  <button
                    type="button"
                    onClick={() => setCoverageHours('full')}
                    className={`py-3 rounded-lg border text-left px-4 transition-all ${
                      coverageHours === 'full'
                        ? 'bg-blue-electric text-white border-blue-electric font-bold shadow-electric-subtle'
                        : 'bg-offwhite dark:bg-charcoal text-charcoal dark:text-white/80 border-charcoal/15 dark:border-charcoal-border hover:border-blue-electric'
                    }`}
                  >
                    <span className="block font-bold">24/7 Continuous Monitoring</span>
                    <span className="text-[10px] block opacity-80 mt-0.5">Full round-the-clock watch</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setCoverageHours('night')}
                    className={`py-3 rounded-lg border text-left px-4 transition-all ${
                      coverageHours === 'night'
                        ? 'bg-blue-electric text-white border-blue-electric font-bold shadow-electric-subtle'
                        : 'bg-offwhite dark:bg-charcoal text-charcoal dark:text-white/80 border-charcoal/15 dark:border-charcoal-border hover:border-blue-electric'
                    }`}
                  >
                    <span className="block font-bold">After-Hours / Night Shift</span>
                    <span className="text-[10px] block opacity-80 mt-0.5">Evenings, nights &amp; weekends</span>
                  </button>
                </div>
              </div>

              <div className="bg-offwhite dark:bg-charcoal p-4 rounded-lg border border-charcoal/10 dark:border-white/10 text-xs font-mono space-y-2 text-charcoal/90 dark:text-white/80">
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-electric dark:text-blue-hover flex-shrink-0" />
                  <span>Zero capital expenditure on new cameras — works with your existing hardware</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-electric dark:text-blue-hover flex-shrink-0" />
                  <span>No recruitment, payroll taxes, holiday pay, or night-shift turnover</span>
                </p>
              </div>
            </div>

            {/* Savings Breakdown Display */}
            <div className="lg:col-span-5 bg-offwhite dark:bg-charcoal p-6 rounded-xl border border-charcoal/10 dark:border-white/10 space-y-6 text-center">
              <span className="text-xs font-mono text-charcoal-muted uppercase block">
                Estimated Annual Operational Savings
              </span>
              <p className="text-4xl sm:text-5xl font-heading font-extrabold text-blue-electric dark:text-blue-hover">
                ${annualSavings.toLocaleString()}
                <span className="text-sm font-mono font-normal text-charcoal-muted dark:text-white/80 block mt-1">
                  / year saved
                </span>
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs font-mono border-t border-charcoal/10 dark:border-white/10 pt-4 text-left">
                <div>
                  <span className="text-charcoal-muted block text-[10px] uppercase">In-House Staffing</span>
                  <span className="text-charcoal dark:text-white font-bold">${(inHouseMonthlyCost * 12).toLocaleString()} / yr</span>
                </div>
                <div>
                  <span className="text-charcoal-muted block text-[10px] uppercase">MouseToClick Outsourced</span>
                  <span className="text-blue-electric dark:text-blue-hover font-bold">${(mouseToClickMonthly * 12).toLocaleString()} / yr</span>
                </div>
              </div>

              <a href="#discuss">
                <Button fullWidth variant="primary" size="md">
                  Request Custom Quotation
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* =========================================================================
            WHY MOUSETOCLICK (4 PILLARS FROM PROPOSAL)
            ========================================================================= */}
        <div className="space-y-12">
          <div className="border-b border-charcoal/10 dark:border-white/10 pb-4 max-w-3xl">
            <Badge variant="blue">Strategic Advantages</Badge>
            <h2 className="text-3xl font-heading font-bold text-charcoal dark:text-white mt-2">
              Why MouseToClick
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((w, idx) => (
              <Card key={idx} variant="tech" className="bg-white dark:bg-charcoal-card border-charcoal/10 dark:border-charcoal-border text-charcoal dark:text-white space-y-3 shadow-sm">
                <div className="w-8 h-8 rounded-md bg-offwhite dark:bg-charcoal border border-charcoal/10 dark:border-charcoal-border flex items-center justify-center font-mono font-bold text-xs text-blue-electric dark:text-blue-hover">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-heading font-bold text-charcoal dark:text-white">
                  {w.title}
                </h3>
                <p className="text-xs font-mono text-charcoal-muted dark:text-white/70 leading-relaxed">
                  {w.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* =========================================================================
            INDUSTRIES WE SUPPORT (EXACT LIST FROM PROPOSAL)
            ========================================================================= */}
        <div className="space-y-12">
          <div className="border-b border-charcoal/10 dark:border-white/10 pb-4 max-w-3xl">
            <Badge variant="blue">Target Sectors</Badge>
            <h2 className="text-3xl font-heading font-bold text-charcoal dark:text-white mt-2">
              Industries We Support
            </h2>
            <p className="text-charcoal-muted dark:text-white/80 text-sm mt-1">
              Customized monitoring plans tailored to the exact risk profiles of diverse commercial environments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-charcoal-card p-6 rounded-xl border border-charcoal/10 dark:border-charcoal-border hover:border-blue-electric dark:hover:border-blue-hover/60 transition-colors flex items-start gap-4 shadow-sm"
                >
                  <div className="w-11 h-11 rounded-lg bg-offwhite dark:bg-charcoal border border-charcoal/10 dark:border-white/10 flex items-center justify-center text-blue-electric dark:text-blue-hover flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-heading font-bold text-charcoal dark:text-white">
                      {ind.name}
                    </h3>
                    <p className="text-xs font-mono text-charcoal-muted leading-relaxed">
                      {ind.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            LET'S DISCUSS YOUR REQUIREMENTS (FINAL PROPOSAL SECTION)
            ========================================================================= */}
        <div id="discuss" className="bg-white dark:bg-charcoal-card border border-charcoal/10 dark:border-charcoal-border rounded-xl p-8 lg:p-12 space-y-8 scroll-mt-24 shadow-sm dark:shadow-2xl">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono text-blue-electric dark:text-blue-hover uppercase tracking-widest font-semibold">
              Get Started
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-charcoal dark:text-white">
              Let&apos;s Discuss Your Requirements
            </h2>
            <p className="text-charcoal-muted dark:text-white/80 text-base leading-relaxed font-body">
              We would welcome the opportunity to understand your monitoring needs and recommend a suitable service plan. A customized scope and commercial quotation can be prepared based on your camera count, locations, and required coverage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-charcoal/10 dark:border-white/10 font-mono text-xs">
            <div className="bg-offwhite dark:bg-charcoal p-4 rounded-lg border border-charcoal/10 dark:border-white/10 space-y-1">
              <span className="text-charcoal-muted uppercase text-[10px]">Step 1: Consultation</span>
              <p className="text-charcoal dark:text-white font-bold">Assess Camera Count &amp; Compatibility</p>
            </div>
            <div className="bg-offwhite dark:bg-charcoal p-4 rounded-lg border border-charcoal/10 dark:border-white/10 space-y-1">
              <span className="text-charcoal-muted uppercase text-[10px]">Step 2: Quotation</span>
              <p className="text-charcoal dark:text-white font-bold">Custom Scope &amp; Commercial Pricing</p>
            </div>
            <div className="bg-offwhite dark:bg-charcoal p-4 rounded-lg border border-charcoal/10 dark:border-white/10 space-y-1">
              <span className="text-charcoal-muted uppercase text-[10px]">Step 3: Deployment</span>
              <p className="text-charcoal dark:text-white font-bold">Encrypted Link &amp; Shift Activation</p>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-charcoal/10 dark:border-white/10">
            <div className="space-y-1 text-center sm:text-left">
              <p className="text-xl font-heading font-bold text-charcoal dark:text-white tracking-wide">
                LET&apos;S MAKE SECURITY SMARTER, TOGETHER.
              </p>
              <p className="text-xs font-mono text-charcoal-muted">
                contact@mousetoclick.com &bull; 24/7 Dedicated Monitoring Support
              </p>
            </div>
            <a href="/contact">
              <Button size="lg" variant="primary" className="whitespace-nowrap font-bold">
                Request Customized Quotation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
