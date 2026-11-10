import React from 'react';
import {
  Globe,
  TrendingUp,
  Users,
  Layers,
  CheckCircle2,
  Zap,
  Lock,
  BarChart3,
  ArrowRight,
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const whyUsPillars = [
  {
    icon: TrendingUp,
    title: 'Cost-Effective Solutions',
    desc: 'Support designed to help businesses manage operational costs without sacrificing quality or speed.',
  },
  {
    icon: Users,
    title: 'Skilled Professionals',
    desc: 'Capable teams thoroughly trained and aligned with the requirements of each service division.',
  },
  {
    icon: Layers,
    title: 'Flexible Service Models',
    desc: 'Solutions that adapt seamlessly to client needs, specific schedules, and fluctuating workloads.',
  },
  {
    icon: CheckCircle2,
    title: 'Reliable Service Delivery',
    desc: 'Clear processes, active communication, and accountable performance expectations from day one.',
  },
  {
    icon: Zap,
    title: 'Scalable Operations',
    desc: 'The agility to expand support coverage smoothly as your organization grows and evolves.',
  },
  {
    icon: Lock,
    title: 'Confidentiality & Professionalism',
    desc: 'Responsible handling of client information, sensitive data, and confidential business operations.',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-charcoal text-charcoal dark:text-white min-h-screen py-16 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Intro */}
        <div className="space-y-6 max-w-3xl">
          <Badge variant="blue" withDot>
            Who We Are
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-heading font-extrabold tracking-tight">
            About MouseToClick
          </h1>
          <p className="text-xl font-heading text-blue-electric dark:text-blue-hover font-semibold">
            Innovating the Way Businesses Work.
          </p>
          <p className="text-charcoal-muted dark:text-white/80 text-base sm:text-lg font-body leading-relaxed">
            MouseToClick is a global outsourcing and business solutions company committed to helping
            organisations manage essential business operations through skilled professionals,
            dependable processes, and flexible service models. We aim to become a trusted extension
            of our clients&apos; teams by delivering practical support that improves efficiency and
            allows businesses to focus on growth.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card
            variant="tech"
            className="bg-offwhite dark:bg-charcoal-card border-charcoal/10 dark:border-charcoal-border p-8 space-y-4 shadow-sm"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-electric/10 border border-blue-electric/20 flex items-center justify-center text-blue-electric">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-heading font-bold text-charcoal dark:text-white">
              Our Mission
            </h2>
            <p className="text-charcoal-muted dark:text-white/80 text-sm sm:text-base font-body leading-relaxed">
              To deliver dependable, innovative, and cost-effective outsourcing solutions that help
              businesses operate more efficiently and achieve sustainable growth.
            </p>
          </Card>

          <Card
            variant="tech"
            className="bg-offwhite dark:bg-charcoal-card border-charcoal/10 dark:border-charcoal-border p-8 space-y-4 shadow-sm"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-electric/10 border border-blue-electric/20 flex items-center justify-center text-blue-electric">
              <Globe className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-heading font-bold text-charcoal dark:text-white">
              Our Vision
            </h2>
            <p className="text-charcoal-muted dark:text-white/80 text-sm sm:text-base font-body leading-relaxed">
              To become a trusted global business solutions partner, recognised for service quality,
              innovation, and long-term client relationships.
            </p>
          </Card>
        </div>

        {/* Why Choose MouseToClick */}
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <Badge variant="blue" withDot>
              Why Choose MouseToClick
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-charcoal dark:text-white">
              Built on Trust, Delivery, and Value
            </h2>
            <p className="text-charcoal-muted dark:text-white/80 text-base font-body">
              Everything we do is focused on delivering practical support that frees your business to
              grow.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUsPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="bg-offwhite dark:bg-charcoal-card border border-charcoal/10 dark:border-charcoal-border rounded-xl p-6 space-y-3 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-electric/10 flex items-center justify-center text-blue-electric">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-charcoal dark:text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-charcoal-muted dark:text-white/70 font-body leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Global Approach Section */}
        <div className="bg-offwhite dark:bg-charcoal-card border border-charcoal/10 dark:border-charcoal-border rounded-2xl p-8 sm:p-12 space-y-6 shadow-sm">
          <Badge variant="blue" withDot>
            Global Approach
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-charcoal dark:text-white">
            Supporting Clients Across International Markets
          </h2>
          <p className="text-charcoal-muted dark:text-white/80 text-base font-body leading-relaxed max-w-3xl">
            MouseToClick aims to support clients across international markets, initially prioritising
            the United States, followed by the United Kingdom, Canada, and Australia. We use clear
            international business language and make it easy for overseas businesses to establish
            dependable outsourcing operations with us.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-charcoal/10 dark:border-white/10">
            {['United States', 'United Kingdom', 'Canada', 'Australia'].map((c) => (
              <div
                key={c}
                className="bg-white dark:bg-charcoal border border-charcoal/10 dark:border-charcoal-border rounded-xl p-4 text-center"
              >
                <p className="text-2xl mb-1">🌍</p>
                <p className="text-sm font-heading font-bold text-charcoal dark:text-white">{c}</p>
                <p className="text-[11px] font-body text-charcoal-muted">Target Market</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-blue-electric rounded-2xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-3 text-center md:text-left">
            <Badge variant="outline" className="border-white/30 text-white font-body text-xs">
              Let&apos;s Build a Smarter Way to Work
            </Badge>
            <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-white">
              Ready to Explore an Outsourcing Partnership?
            </h2>
            <p className="text-white/90 text-sm sm:text-base max-w-xl font-body">
              Connect with our team today to discuss how MouseToClick can support your business
              functions.
            </p>
          </div>
          <div className="flex-shrink-0">
            <a href="/contact">
              <Button
                size="lg"
                className="bg-white text-charcoal hover:bg-offwhite border border-transparent font-bold px-8 shadow-lg"
              >
                <span>Get a Free Consultation</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
