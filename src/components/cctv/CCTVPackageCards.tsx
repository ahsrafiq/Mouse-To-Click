import React from 'react';
import { CheckCircle2, Shield, ArrowRight, Zap, Eye, Server } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export const CCTVPackageCards: React.FC = () => {
  const packages = [
    {
      name: 'Essential Commercial',
      badge: 'Small Business / Retail',
      popular: false,
      cameraCount: '4 - 8 Cameras',
      resolution: '4K Ultra HD (8MP)',
      storage: '30 Days Local RAID Vault',
      features: [
        'High-resolution day/night infrared sensors',
        'Secure mobile app & browser live streaming',
        'Commercial PoE network installation',
        'Basic perimeter motion alerting',
        '1-Year hardware warranty & maintenance',
      ],
      idealFor: 'Retail storefronts, medical clinics, and branch offices.',
    },
    {
      name: 'Industrial Compound',
      badge: 'Most Popular',
      popular: true,
      cameraCount: '16 - 32 Cameras',
      resolution: '4K Starlight Optics + PTZ Domes',
      storage: '60 Days Dual Local + Cloud Hybrid',
      features: [
        'Motorized optical zoom & 360° pan-tilt coverage',
        'AI perimeter intrusion & vehicle plate recognition',
        '24/7 central monitoring station integration',
        'Tamper alert & wire-cross electronic tripwires',
        'Quarterly on-site lens cleaning & tuning',
        '3-Year enterprise priority support SLA',
      ],
      idealFor: 'Logistics hubs, warehouses, and manufacturing plants.',
    },
    {
      name: 'Enterprise Multi-Site',
      badge: 'Campus / Corporate',
      popular: false,
      cameraCount: '64+ High-Density Array',
      resolution: '4K UHD + Thermal Optical Arrays',
      storage: '90 - 365 Days Redundant Server Vault',
      features: [
        'Multi-facility centralized video management (VMS)',
        'Thermal perimeter leak & heat signature sensors',
        'Access control & automated gate integration',
        'Custom automated incident dispatch workflows',
        'Dedicated security engineer account manager',
        '5-Year full hardware replacement SLA',
      ],
      idealFor: 'Corporate headquarters, critical infrastructure, and hospitals.',
    },
  ];

  return (
    <div className="space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <Badge variant="blue" withDot>
          Commercial Surveillance Tiers
        </Badge>
        <h3 className="text-3xl sm:text-5xl font-heading font-extrabold text-charcoal dark:text-white tracking-tight">
          Turnkey Optical Deployment Packages
        </h3>
        <p className="text-charcoal-muted dark:text-white/80 text-base sm:text-lg leading-relaxed">
          Every package includes on-site optical engineering, certified cabling, secure configuration, and ongoing preventative maintenance.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {packages.map((pkg, idx) => (
          <div
            key={idx}
            className={`relative rounded-xl p-8 flex flex-col justify-between transition-all duration-300 ${
              pkg.popular
                ? 'bg-white dark:bg-charcoal-card border-2 border-blue-electric shadow-lg dark:shadow-electric-glow lg:-translate-y-2'
                : 'bg-white dark:bg-charcoal border border-charcoal/10 dark:border-charcoal-border hover:border-blue-electric dark:hover:border-white/20'
            }`}
          >
            {pkg.popular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="bg-blue-electric text-white text-[11px] font-mono uppercase tracking-widest px-3 py-1 rounded-full font-bold shadow-md">
                  Most Deployed Architecture
                </span>
              </div>
            )}

            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-blue-electric dark:text-blue-hover font-semibold">
                  {pkg.badge}
                </span>
                <h4 className="text-2xl font-heading font-bold text-charcoal dark:text-white">
                  {pkg.name}
                </h4>
                <p className="text-xs font-mono text-charcoal-muted">
                  {pkg.idealFor}
                </p>
              </div>

              {/* Hardware Highlights */}
              <div className="space-y-2.5 py-4 border-y border-charcoal/10 dark:border-white/10 font-mono text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-charcoal-muted uppercase">Capacity</span>
                  <span className="text-charcoal dark:text-white font-bold">{pkg.cameraCount}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-charcoal-muted uppercase">Optics</span>
                  <span className="text-charcoal dark:text-white font-bold">{pkg.resolution}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-charcoal-muted uppercase">Retention</span>
                  <span className="text-blue-electric dark:text-blue-hover font-bold">{pkg.storage}</span>
                </div>
              </div>

              {/* Feature Checklist */}
              <ul className="space-y-3 text-xs text-charcoal/90 dark:text-white/90">
                {pkg.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-electric dark:text-blue-hover mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8">
              <a href="/contact">
                <Button
                  fullWidth
                  variant={pkg.popular ? 'primary' : 'outline'}
                  size="md"
                  className="font-mono text-xs"
                >
                  Request Proposal for {pkg.name}
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

