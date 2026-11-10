import React from 'react';
import { ShieldCheck, Lock, Award, Cpu } from 'lucide-react';

export const PartnersBar: React.FC = () => {
  const certifications = [
    {
      icon: ShieldCheck,
      name: 'HIPAA Compliant',
      detail: 'Title II Security Rule Adherence',
    },
    {
      icon: Lock,
      name: 'SOC 2 Type II',
      detail: 'Enterprise Data Confidentiality',
    },
    {
      icon: Cpu,
      name: 'ONVIF Profile S/G/T',
      detail: 'Interoperable Optical Standards',
    },
    {
      icon: Award,
      name: 'ISO/IEC 27001',
      detail: 'Information Security Governance',
    },
  ];

  return (
    <section className="bg-offwhite dark:bg-charcoal-card border-y border-charcoal/10 dark:border-white/10 py-12 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-charcoal-muted">
            Certified Security &amp; Healthcare Compliance Frameworks
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-charcoal p-5 rounded-lg border border-charcoal/10 dark:border-charcoal-border flex items-center gap-4 hover:border-blue-electric dark:hover:border-blue-hover/50 transition-colors shadow-sm"
              >
                <div className="w-10 h-10 rounded-md bg-offwhite dark:bg-charcoal-card border border-charcoal/10 dark:border-white/10 flex items-center justify-center flex-shrink-0 text-blue-electric dark:text-blue-hover">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-heading font-bold text-charcoal dark:text-white flex items-center gap-1.5">
                    {item.name}
                  </h4>
                  <p className="text-[11px] font-mono text-charcoal-muted mt-0.5">
                    {item.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
