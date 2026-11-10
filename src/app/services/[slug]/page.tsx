import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  HeartPulse,
  Shield,
  TrendingUp,
  Headphones,
  Monitor,
  Database,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Sparkles,
  Layers,
  ArrowLeft,
} from 'lucide-react';
import { serviceDivisions, ServiceDivision } from '@/data/services';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';

const iconMap = {
  HeartPulse,
  Shield,
  TrendingUp,
  Headphones,
  Monitor,
  Database,
};

interface PageProps {
  params: Promise<{ slug: string }> | { slug: string };
}

export async function generateStaticParams() {
  return serviceDivisions.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const service = serviceDivisions.find((s) => s.slug === resolvedParams.slug);
  if (!service) return { title: 'Service Not Found' };

  return {
    title: `${service.title} | MouseToClick Global Solutions`,
    description: service.supportingText,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const service = serviceDivisions.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  const IconComponent = iconMap[service.iconName] || Shield;

  return (
    <div className="bg-white dark:bg-charcoal text-charcoal dark:text-white min-h-screen py-12 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Back Link */}
        <div>
          <a
            href="/#services"
            className="inline-flex items-center gap-2 text-xs font-body font-semibold text-charcoal-muted dark:text-white/70 hover:text-blue-electric dark:hover:text-blue-hover transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to All Services
          </a>
        </div>

        {/* Hero Banner for this Service */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center border-b border-charcoal/10 dark:border-white/10 pb-16">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="blue" withDot>
                {service.divisionNumber}
              </Badge>
              <span className="text-xs font-body uppercase tracking-wider text-charcoal-muted">
                {service.serviceCategory}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-charcoal dark:text-white leading-[1.15]">
              {service.title}
            </h1>

            <p className="text-lg sm:text-xl font-heading text-blue-electric dark:text-blue-hover font-semibold">
              {service.tagline}
            </p>

            <p className="text-base sm:text-lg text-charcoal-muted dark:text-white/80 font-body leading-relaxed max-w-2xl">
              {service.description}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <a href={`/contact?service=${service.slug}`}>
                <Button size="lg" variant="primary" className="font-semibold shadow-md">
                  <span>Enquire About {service.shortTitle}</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </a>
              <a href="#deliverables">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-charcoal/20 dark:border-white/20 text-charcoal dark:text-white hover:bg-charcoal/5 dark:hover:bg-white/10"
                >
                  View Deliverables
                </Button>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-offwhite dark:bg-charcoal-card border border-charcoal/10 dark:border-charcoal-border rounded-2xl p-8 space-y-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div
                  className={`w-14 h-14 rounded-xl bg-white dark:bg-charcoal border border-charcoal/10 dark:border-charcoal-border flex items-center justify-center ${service.accentColor}`}
                >
                  <IconComponent className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-charcoal dark:text-white">
                    Service Overview
                  </h3>
                  <p className="text-xs font-body text-charcoal-muted uppercase">
                    Trusted Delivery Model
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-2 border-t border-charcoal/10 dark:border-white/10">
                {service.keyBenefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-blue-electric flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-body text-charcoal/80 dark:text-white/80 leading-snug">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-white dark:bg-charcoal border border-charcoal/10 dark:border-charcoal-border rounded-xl flex items-center justify-between">
                <div>
                  <p className="text-xs font-body text-charcoal-muted uppercase">Engagement Model</p>
                  <p className="text-sm font-heading font-bold text-charcoal dark:text-white">
                    Flexible & Scalable
                  </p>
                </div>
                <Badge variant="blue">Dedicated Team</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Deliverables Grid */}
        <div id="deliverables" className="space-y-8 scroll-mt-24">
          <div className="space-y-3 max-w-2xl">
            <Badge variant="blue" withDot>
              Deliverables & Capabilities
            </Badge>
            <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-charcoal dark:text-white">
              What We Deliver
            </h2>
            <p className="text-charcoal-muted dark:text-white/80 text-sm sm:text-base font-body leading-relaxed">
              Standardized, process-driven deliverables executed by skilled professionals aligned
              with your specific workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.deliverables.map((item, index) => (
              <Card
                key={item.title}
                variant="tech"
                className="bg-offwhite dark:bg-charcoal-card border-charcoal/10 dark:border-charcoal-border p-6 space-y-3 shadow-sm hover:border-blue-electric dark:hover:border-blue-hover/50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-blue-electric dark:text-blue-hover">
                    0{index + 1}
                  </span>
                  <Sparkles className="w-4 h-4 text-charcoal-muted" />
                </div>
                <h3 className="text-lg font-heading font-bold text-charcoal dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-charcoal-muted dark:text-white/70 font-body leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* How We Support Your Business */}
        <div className="bg-offwhite dark:bg-charcoal-card border border-charcoal/10 dark:border-charcoal-border rounded-2xl p-8 sm:p-12 space-y-8 shadow-sm">
          <div className="max-w-2xl space-y-3">
            <Badge variant="blue" withDot>
              Why Choose MouseToClick
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-charcoal dark:text-white">
              How We Deliver Value in {service.shortTitle}
            </h2>
            <p className="text-sm sm:text-base text-charcoal-muted dark:text-white/80 font-body leading-relaxed">
              We align our team directly with your systems, performance expectations, and security
              controls to provide dependable support from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-charcoal border border-charcoal/10 dark:border-charcoal-border rounded-xl p-5 space-y-2">
              <ShieldCheck className="w-6 h-6 text-blue-electric" />
              <h4 className="font-heading font-bold text-charcoal dark:text-white">
                Confidentiality & Control
              </h4>
              <p className="text-xs text-charcoal-muted dark:text-white/70 font-body leading-relaxed">
                Strict data access protocols, non-disclosure agreements, and information security
                safeguards.
              </p>
            </div>
            <div className="bg-white dark:bg-charcoal border border-charcoal/10 dark:border-charcoal-border rounded-xl p-5 space-y-2">
              <Layers className="w-6 h-6 text-blue-electric" />
              <h4 className="font-heading font-bold text-charcoal dark:text-white">
                Custom Onboarding
              </h4>
              <p className="text-xs text-charcoal-muted dark:text-white/70 font-body leading-relaxed">
                Thorough process mapping, communication schedules, and tool training to integrate
                seamlessly.
              </p>
            </div>
            <div className="bg-white dark:bg-charcoal border border-charcoal/10 dark:border-charcoal-border rounded-xl p-5 space-y-2">
              <Clock className="w-6 h-6 text-blue-electric" />
              <h4 className="font-heading font-bold text-charcoal dark:text-white">
                Consistent Performance
              </h4>
              <p className="text-xs text-charcoal-muted dark:text-white/70 font-body leading-relaxed">
                Regular reviews, status reporting, and transparent metrics to ensure continuous
                quality.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action Band */}
        <div className="bg-blue-electric rounded-2xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-3 text-center md:text-left">
            <Badge variant="outline" className="border-white/30 text-white font-body text-xs">
              Let&apos;s Build a Smarter Way to Work
            </Badge>
            <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-white">
              Ready to Discuss {service.shortTitle}?
            </h2>
            <p className="text-white/90 text-sm sm:text-base max-w-xl font-body">
              Tell us what your business needs. Our team will connect with you to discuss a suitable
              outsourcing scope and delivery model.
            </p>
          </div>
          <div className="flex-shrink-0">
            <a href={`/contact?service=${service.slug}`}>
              <Button
                size="lg"
                className="bg-white text-charcoal hover:bg-offwhite border border-transparent font-bold px-8 shadow-lg"
              >
                <span>Request a Consultation</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

