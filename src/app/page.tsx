import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { serviceDivisions } from '@/data/services';
import {
  HeartPulse,
  Shield,
  TrendingUp,
  Headphones,
  Monitor,
  Database,
  ArrowRight,
  CheckCircle2,
  Users,
  Layers,
  Zap,
  Lock,
  BarChart3,
  Globe,
} from 'lucide-react';
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

const whyUs = [
  {
    icon: TrendingUp,
    title: 'Cost-Effective Solutions',
    desc: 'Support designed to help businesses manage operational costs without compromising quality.',
  },
  {
    icon: Users,
    title: 'Skilled Professionals',
    desc: 'Capable teams aligned with the requirements of each service area, delivering reliable results.',
  },
  {
    icon: Layers,
    title: 'Flexible Service Models',
    desc: 'Solutions that can be adapted to client needs, timelines, and workloads as they evolve.',
  },
  {
    icon: CheckCircle2,
    title: 'Reliable Service Delivery',
    desc: 'Clear processes, communication, and performance expectations at every stage.',
  },
  {
    icon: Zap,
    title: 'Scalable Operations',
    desc: 'The ability to expand support as your business requirements grow and change.',
  },
  {
    icon: Lock,
    title: 'Confidentiality & Professionalism',
    desc: 'Responsible handling of client information and business processes with full discretion.',
  },
];

const industries = [
  'Healthcare and Medical Practices',
  'Security Companies and CCTV Integrators',
  'Property and Facility Management',
  'Small and Medium-Sized Businesses',
  'Retail and E-commerce',
  'Professional and Corporate Services',
];

const howItWorks = [
  {
    step: '01',
    title: 'Understand Your Requirements',
    desc: 'We learn about your business, goals, and operational needs in detail.',
  },
  {
    step: '02',
    title: 'Recommend a Solution',
    desc: 'We propose a suitable service scope and delivery model tailored to your needs.',
  },
  {
    step: '03',
    title: 'Onboarding & Setup',
    desc: 'We agree on workflows, communication, access, and expectations together.',
  },
  {
    step: '04',
    title: 'Service Delivery',
    desc: 'Our team carries out the agreed tasks and provides regular updates.',
  },
  {
    step: '05',
    title: 'Review & Improve',
    desc: 'We review performance and refine the process where needed for continuous improvement.',
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-charcoal text-charcoal dark:text-white transition-colors">
      {/* HERO */}
      <HeroSection />

      {/* WHO WE ARE */}
      <section className="bg-offwhite dark:bg-charcoal-card py-20 px-4 sm:px-6 lg:px-8 border-b border-charcoal/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge variant="blue" withDot>
              Who We Are
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-charcoal dark:text-white tracking-tight">
              A Global Outsourcing & Business Solutions Partner
            </h2>
            <p className="text-charcoal-muted dark:text-white/80 text-base leading-relaxed font-body">
              MouseToClick is a global outsourcing and business solutions company committed to
              helping organisations manage essential business operations through skilled
              professionals, dependable processes, and flexible service models. We aim to become a
              trusted extension of our clients&apos; teams by delivering practical support that
              improves efficiency and allows businesses to focus on growth.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="bg-white dark:bg-charcoal border border-charcoal/10 dark:border-charcoal-border rounded-xl p-6 space-y-2 shadow-sm">
              <BarChart3 className="w-8 h-8 text-blue-electric" />
              <h3 className="font-heading font-bold text-charcoal dark:text-white">Our Mission</h3>
              <p className="text-sm text-charcoal-muted dark:text-white/70 font-body leading-relaxed">
                To deliver dependable, innovative, and cost-effective outsourcing solutions that help
                businesses operate more efficiently and achieve sustainable growth.
              </p>
            </div>
            <div className="bg-white dark:bg-charcoal border border-charcoal/10 dark:border-charcoal-border rounded-xl p-6 space-y-2 shadow-sm">
              <Globe className="w-8 h-8 text-blue-electric" />
              <h3 className="font-heading font-bold text-charcoal dark:text-white">Our Vision</h3>
              <p className="text-sm text-charcoal-muted dark:text-white/70 font-body leading-relaxed">
                To become a trusted global business solutions partner, recognised for service
                quality, innovation, and long-term client relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR SERVICES */}
      <section
        id="services"
        className="bg-white dark:bg-charcoal py-20 px-4 sm:px-6 lg:px-8 border-b border-charcoal/10 dark:border-white/10"
      >
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <Badge variant="blue" withDot>
              Our Services
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-charcoal dark:text-white tracking-tight">
              Six Service Divisions. One Trusted Partner.
            </h2>
            <p className="text-charcoal-muted dark:text-white/80 text-base font-body leading-relaxed">
              From healthcare administration to IT support, we provide flexible outsourcing solutions
              tailored to your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceDivisions.map((service) => {
              const Icon = iconMap[service.iconName] || Shield;
              return (
                <Card
                  key={service.slug}
                  variant="tech"
                  className="bg-offwhite dark:bg-charcoal-card border-charcoal/10 dark:border-charcoal-border shadow-sm hover:border-blue-electric dark:hover:border-blue-hover/50 transition-all duration-200 hover:shadow-md group flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div
                      className={`w-11 h-11 rounded-lg bg-white dark:bg-charcoal border border-charcoal/10 dark:border-charcoal-border flex items-center justify-center ${service.accentColor}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-charcoal-muted">
                        {service.divisionNumber}
                      </span>
                      <h3 className="text-lg font-heading font-bold text-charcoal dark:text-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-charcoal-muted dark:text-white/70 font-body leading-relaxed mb-4">
                        {service.supportingText}
                      </p>
                      <ul className="space-y-1.5">
                        {service.deliverables.slice(0, 5).map((item) => (
                          <li key={item.title} className="flex items-start gap-2 text-sm font-body text-charcoal/80 dark:text-white/80">
                            <CheckCircle2 className="w-4 h-4 text-blue-electric flex-shrink-0 mt-0.5" />
                            {item.title}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="pt-4 mt-4 border-t border-charcoal/10 dark:border-white/10">
                    <a
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-body font-semibold text-blue-electric dark:text-blue-hover hover:underline underline-offset-2 group-hover:gap-2.5 transition-all"
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section
        id="why-us"
        className="bg-offwhite dark:bg-charcoal-card py-20 px-4 sm:px-6 lg:px-8 border-b border-charcoal/10 dark:border-white/10"
      >
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <Badge variant="blue" withDot>
              Why Choose MouseToClick
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-charcoal dark:text-white tracking-tight">
              Built to Support Your Business Growth
            </h2>
            <p className="text-charcoal-muted dark:text-white/80 text-base font-body leading-relaxed">
              We combine skilled professionals, flexible models, and reliable delivery to become a
              trusted extension of your team.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white dark:bg-charcoal border border-charcoal/10 dark:border-charcoal-border rounded-xl p-6 space-y-3 shadow-sm hover:border-blue-electric dark:hover:border-blue-hover/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-electric/10 flex items-center justify-center text-blue-electric">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-charcoal dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-charcoal-muted dark:text-white/70 font-body leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section
        id="industries"
        className="bg-white dark:bg-charcoal py-20 px-4 sm:px-6 lg:px-8 border-b border-charcoal/10 dark:border-white/10"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge variant="blue" withDot>
              Industries We Serve
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-charcoal dark:text-white tracking-tight">
              Supporting Businesses Across Multiple Sectors
            </h2>
            <p className="text-charcoal-muted dark:text-white/80 text-base font-body leading-relaxed">
              MouseToClick works with a diverse range of industries, delivering tailored outsourcing
              solutions that meet the unique needs of each sector.
            </p>
            <a href="/contact">
              <Button size="md" variant="primary">
                Discuss Your Industry Needs
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {industries.map((industry) => (
              <div
                key={industry}
                className="flex items-center gap-3 bg-offwhite dark:bg-charcoal-card border border-charcoal/10 dark:border-charcoal-border rounded-xl px-4 py-3.5 shadow-sm"
              >
                <CheckCircle2 className="w-5 h-5 text-blue-electric flex-shrink-0" />
                <span className="text-sm font-body font-medium text-charcoal dark:text-white">
                  {industry}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-offwhite dark:bg-charcoal-card py-20 px-4 sm:px-6 lg:px-8 border-b border-charcoal/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <Badge variant="blue" withDot>
              How It Works
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-charcoal dark:text-white tracking-tight">
              A Simple, Transparent Process
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {howItWorks.map((step, i) => (
              <div
                key={step.step}
                className="relative bg-white dark:bg-charcoal border border-charcoal/10 dark:border-charcoal-border rounded-xl p-5 shadow-sm text-center space-y-3"
              >
                <div className="w-10 h-10 rounded-full bg-blue-electric text-white font-heading font-bold text-sm flex items-center justify-center mx-auto">
                  {step.step}
                </div>
                <h3 className="font-heading font-bold text-charcoal dark:text-white text-sm">
                  {step.title}
                </h3>
                <p className="text-xs text-charcoal-muted dark:text-white/70 font-body leading-relaxed">
                  {step.desc}
                </p>
                {i < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-3 text-charcoal-muted">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL APPROACH */}
      <section className="bg-white dark:bg-charcoal py-16 px-4 sm:px-6 lg:px-8 border-b border-charcoal/10 dark:border-white/10">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <Badge variant="blue" withDot>
            Global Approach
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-charcoal dark:text-white tracking-tight">
            Supporting International Businesses
          </h2>
          <p className="text-charcoal-muted dark:text-white/80 text-base font-body leading-relaxed max-w-2xl mx-auto">
            MouseToClick aims to support clients across international markets, initially prioritising
            the United States, followed by the United Kingdom, Canada, and Australia. We use clear
            international business language and make it easy for overseas visitors to connect with
            our team.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            {['United States', 'United Kingdom', 'Canada', 'Australia'].map((country) => (
              <span
                key={country}
                className="px-5 py-2 bg-offwhite dark:bg-charcoal-card border border-charcoal/10 dark:border-charcoal-border rounded-full text-sm font-body font-medium text-charcoal dark:text-white"
              >
                🌍 {country}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="bg-blue-electric text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
          <div className="space-y-3">
            <Badge variant="outline" className="border-white/30 text-white font-body text-xs">
              Let&apos;s Build a Smarter Way to Work
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
              Ready to Streamline Your Business Operations?
            </h2>
            <p className="text-white/90 text-base sm:text-lg max-w-xl font-body">
              Tell us what your business needs. Our team will connect with you to discuss a suitable
              outsourcing solution.
            </p>
          </div>
          <div className="flex-shrink-0 flex flex-col sm:flex-row items-center gap-4">
            <a href="/contact">
              <Button
                size="lg"
                className="bg-white text-charcoal hover:bg-offwhite border border-transparent font-bold px-8 shadow-xl"
              >
                <span>Get a Free Consultation</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
