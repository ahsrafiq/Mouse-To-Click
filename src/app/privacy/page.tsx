import React from 'react';
import { ShieldCheck, Lock, Eye, FileText, MonitorCheck } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

export default function PrivacyPage() {
  return (
    <div className="bg-white dark:bg-charcoal text-charcoal dark:text-white min-h-screen py-16 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4">
          <Badge variant="blue" withDot>
            Compliance &amp; Governance
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight">
            Privacy Policy &amp; Security Standards
          </h1>
          <p className="text-charcoal-muted text-sm font-mono">
            Last updated: November 2026 &bull; MouseToClick Information Security Office
          </p>
        </div>

        <div className="space-y-8 text-charcoal/90 dark:text-white/80 text-sm leading-relaxed border-t border-charcoal/10 dark:border-white/10 pt-8">
          <section className="space-y-3">
            <h2 className="text-xl font-heading font-bold text-charcoal dark:text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-blue-electric" />
              1. Our Data Protection Principles
            </h2>
            <p>
              MouseToClick treats client data, security feeds, and healthcare records with the utmost confidentiality. We do not sell, rent, or monetize personal or institutional records to third-party brokers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-heading font-bold text-charcoal dark:text-white flex items-center gap-2">
              <Lock className="w-5 h-5 text-blue-electric" />
              2. Healthcare Data &amp; HIPAA Adherence
            </h2>
            <p>
              All medical billing records, patient identifiers, and diagnostic codes processed through our revenue cycle pipelines are stored in compliance with HIPAA Title II security safeguards. All communications are encrypted in transit via TLS 1.3 and at rest with AES-256.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-heading font-bold text-charcoal dark:text-white flex items-center gap-2">
              <MonitorCheck className="w-5 h-5 text-blue-electric" />
              3. Remote Surveillance Stream Privacy
            </h2>
            <p>
              Client CCTV monitoring footage is strictly owned by the commissioning client. Remote monitoring access is isolated to authorized personnel with multi-factor authentication and role-based access control. No footage is stored or shared beyond agreed incident retention windows.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-heading font-bold text-charcoal dark:text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-electric" />
              4. Insurance Assistance Confidentiality
            </h2>
            <p>
              Information gathered during insurance eligibility assessments for families in need is used solely to determine eligibility for subsidized healthcare programs and is never shared for advertising or commercial targeting.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
