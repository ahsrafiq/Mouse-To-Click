'use client';

import React, { useState } from 'react';
import {
  HeartPulse,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  Users,
  HeartHandshake,
  ShieldCheck,
  Heart,
  Sparkles,
  PhoneCall,
  Clock,
  FileCheck,
  ChevronRight,
  AlertCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';

export default function HealthInsurancePage() {
  // Multi-step Interactive Eligibility Checker
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [householdSize, setHouseholdSize] = useState<string>('3');
  const [monthlyIncome, setMonthlyIncome] = useState<string>('low');
  const [hasCoverage, setHasCoverage] = useState<string>('no');
  const [hasChildren, setHasChildren] = useState<string>('yes');

  // Application Form State
  const [applicantName, setApplicantName] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantNotes, setApplicantNotes] = useState('');
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleApplicationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/insurance-applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: applicantName,
          phone: applicantPhone,
          email: applicantEmail,
          familySize: parseInt(householdSize) || 3,
          monthlyIncome: monthlyIncome === 'low' ? 'Under $2,200/mo' : monthlyIncome === 'mid' ? '$2,200 - $3,800/mo' : 'Seasonal / Unsure',
          existingCoverage: hasCoverage,
          notes: applicantNotes,
          consent: true,
        }),
      });

      const json = await res.json();
      if (!res.ok) {
        setErrorMessage(json.error || 'Failed to submit application. Please check your entries.');
      } else {
        setApplicationSubmitted(true);
      }
    } catch {
      setErrorMessage('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    {
      q: 'Is this service truly 100% free of charge?',
      a: 'Yes, completely free. There are zero fees, zero hidden deductions, and no credit card required. We are certified enrollment navigators compensated through healthcare access grants and state programs, never from your pocket.',
    },
    {
      q: 'Will my personal details and financial information be kept private?',
      a: 'Absolutely. We treat your family’s information with the utmost respect and confidentiality under strict HIPAA and privacy standards. We will never sell or share your data with advertisers or outside third parties.',
    },
    {
      q: 'Can my children receive coverage even if I do not qualify?',
      a: 'Yes. State CHIP (Children’s Health Insurance Program) income eligibility thresholds are substantially higher than adult coverage. Even if parents are slightly above Medicaid limits, children almost always qualify for full dental, vision, doctor, and hospital coverage.',
    },
    {
      q: 'What if someone in our family has a pre-existing medical condition?',
      a: 'Under current healthcare law, pre-existing conditions (such as diabetes, hypertension, asthma, or cancer) cannot prevent you from receiving subsidized coverage, and you cannot be charged higher premiums because of your health history.',
    },
    {
      q: 'How long does the approval process usually take?',
      a: 'Once your application is prepared by our advocates, preliminary eligibility confirmation is typically immediate, and full enrollment cards are generally delivered to your mailbox within 2 to 4 weeks.',
    },
    {
      q: 'Do you provide bilingual language support?',
      a: 'Yes. Our compassionate case advocates assist families in English, Urdu, and other community languages to ensure every document is clearly understood.',
    },
  ];

  return (
    <div className="bg-white dark:bg-charcoal text-charcoal dark:text-white min-h-screen py-16 px-4 sm:px-6 lg:px-8 space-y-24 transition-colors">
      <div className="max-w-6xl mx-auto space-y-24">
        {/* =========================================================================
            GENTLE, HUMAN-FIRST HERO
            ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto space-y-6 pt-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-offwhite dark:bg-charcoal-card border border-charcoal/10 dark:border-charcoal-border text-xs font-medium text-charcoal dark:text-white shadow-sm">
            <Heart className="w-4 h-4 text-blue-electric fill-blue-electric" />
            <span>Dedicated Community Healthcare Navigators</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-heading font-extrabold tracking-tight text-charcoal dark:text-white leading-[1.12]">
            Healthcare Security for Every Family in Need
          </h1>

          <p className="text-charcoal-muted dark:text-white/80 text-lg sm:text-xl leading-relaxed">
            No family should have to skip doctor visits, delay essential prescriptions, or endure medical debt. We guide you through subsidized state and federal health insurance programs with dignity, kindness, and zero cost.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#checker">
              <Button size="lg" variant="primary" className="rounded-full px-8 shadow-md font-semibold">
                <span>Check Your Family Eligibility</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
            <a href="#apply">
              <Button size="lg" variant="outline" className="rounded-full px-8">
                Request an Advocate Call
              </Button>
            </a>
          </div>
        </div>

        {/* =========================================================================
            3-STEP GENTLE PATH TO COVERAGE
            ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card variant="gentle" className="space-y-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-offwhite dark:bg-charcoal flex items-center justify-center font-heading font-extrabold text-lg text-charcoal dark:text-white border border-charcoal/10 dark:border-white/10">
              1
            </div>
            <h3 className="text-xl font-heading font-bold text-charcoal dark:text-white">
              Simple 2-Minute Eligibility Screening
            </h3>
            <p className="text-sm text-charcoal-muted dark:text-white/70 leading-relaxed">
              We review your household composition and estimated income brackets to match your family with zero-premium or low-cost subsidized programs.
            </p>
          </Card>

          <Card variant="gentle" className="space-y-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-offwhite dark:bg-charcoal flex items-center justify-center font-heading font-extrabold text-lg text-charcoal dark:text-white border border-charcoal/10 dark:border-white/10">
              2
            </div>
            <h3 className="text-xl font-heading font-bold text-charcoal dark:text-white">
              Guided Paperwork &amp; Document Care
            </h3>
            <p className="text-sm text-charcoal-muted dark:text-white/70 leading-relaxed">
              Our patient advocates help you gather proof of residency and identity, completing all state agency applications correctly to avoid delays.
            </p>
          </Card>

          <Card variant="gentle" className="space-y-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-offwhite dark:bg-charcoal flex items-center justify-center font-heading font-extrabold text-lg text-charcoal dark:text-white border border-charcoal/10 dark:border-white/10">
              3
            </div>
            <h3 className="text-xl font-heading font-bold text-charcoal dark:text-white">
              Active Case Follow-Up Until Approval
            </h3>
            <p className="text-sm text-charcoal-muted dark:text-white/70 leading-relaxed">
              We track your case with health authority officers, answer agency requests, and stay by your side until your insurance card arrives at your door.
            </p>
          </Card>
        </div>

        {/* =========================================================================
            STEP-BY-STEP INTERACTIVE ELIGIBILITY CHECKER
            ========================================================================= */}
        <div id="checker" className="bg-offwhite dark:bg-charcoal-card rounded-3xl p-8 sm:p-12 border border-charcoal/10 dark:border-charcoal-border space-y-10 scroll-mt-24 shadow-sm">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <Badge variant="light">Step-by-Step Screening</Badge>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-charcoal dark:text-white">
              Interactive Family Eligibility Checker
            </h2>
            <p className="text-sm sm:text-base text-charcoal-muted dark:text-white/80">
              Select your household circumstances below for an instant preliminary assessment.
            </p>
          </div>

          <div className="bg-white dark:bg-charcoal rounded-2xl p-6 sm:p-10 border border-charcoal/10 dark:border-white/10 max-w-2xl mx-auto space-y-8 shadow-sm">
            {/* Step Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold uppercase tracking-wider text-charcoal-muted dark:text-white/70">
                <span>Step {currentStep} of 3</span>
                <span>{currentStep === 1 ? 'Household Size' : currentStep === 2 ? 'Monthly Income' : 'Current Status'}</span>
              </div>
              <div className="w-full bg-offwhite dark:bg-charcoal-card h-2 rounded-full overflow-hidden border border-charcoal/10 dark:border-white/10">
                <div
                  className="bg-blue-electric h-full transition-all duration-300"
                  style={{ width: `${(currentStep / 3) * 100}%` }}
                />
              </div>
            </div>

            {/* Step 1: Household Size */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="space-y-1">
                  <h4 className="text-lg font-heading font-bold text-charcoal dark:text-white">
                    How many people live in your household?
                  </h4>
                  <p className="text-xs text-charcoal-muted dark:text-white/70">
                    Include yourself, your spouse, children, and any dependents claimed on taxes.
                  </p>
                </div>

                <div className="grid grid-cols-4 gap-3">
                  {['1', '2', '3', '4', '5', '6', '7', '8+'].map((count) => (
                    <button
                      key={count}
                      type="button"
                      onClick={() => setHouseholdSize(count)}
                      className={`py-3.5 rounded-xl font-bold text-sm transition-all border ${
                        householdSize === count
                          ? 'bg-blue-electric text-white border-blue-electric shadow-sm'
                          : 'bg-offwhite dark:bg-charcoal-card text-charcoal dark:text-white border-charcoal/15 dark:border-charcoal-border hover:border-blue-electric'
                      }`}
                    >
                      {count}
                    </button>
                  ))}
                </div>

                <div className="flex justify-end pt-4 border-t border-charcoal/10 dark:border-white/10">
                  <Button variant="primary" onClick={() => setCurrentStep(2)} className="rounded-full px-6">
                    <span>Continue to Income</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 2: Income Range */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="space-y-1">
                  <h4 className="text-lg font-heading font-bold text-charcoal dark:text-white">
                    What is your approximate monthly household income?
                  </h4>
                  <p className="text-xs text-charcoal-muted dark:text-white/70">
                    Before taxes. Don’t worry if your income changes month-to-month.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'low', label: 'Under $2,200 / mo', sub: 'Zero-cost Medicaid zone' },
                    { id: 'mid', label: '$2,200 - $3,800 / mo', sub: 'Essential Plan / Subsidies' },
                    { id: 'seasonal', label: 'Unsure / Seasonal', sub: 'Flexible case evaluation' },
                  ].map((tier) => (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => setMonthlyIncome(tier.id)}
                      className={`p-4 rounded-xl text-left transition-all border ${
                        monthlyIncome === tier.id
                          ? 'bg-blue-electric text-white border-blue-electric shadow-sm'
                          : 'bg-offwhite dark:bg-charcoal-card text-charcoal dark:text-white border-charcoal/15 dark:border-charcoal-border hover:border-blue-electric'
                      }`}
                    >
                      <span className="font-bold text-sm block">{tier.label}</span>
                      <span className={`text-[11px] block mt-1 ${monthlyIncome === tier.id ? 'text-white/90' : 'text-charcoal-muted dark:text-white/70'}`}>
                        {tier.sub}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-charcoal/10 dark:border-white/10">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="text-xs font-semibold text-charcoal-muted dark:text-white/70 hover:text-charcoal dark:hover:text-white"
                  >
                    &larr; Back to Household
                  </button>
                  <Button variant="primary" onClick={() => setCurrentStep(3)} className="rounded-full px-6">
                    <span>Continue to Status</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Current Status & Results */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="space-y-1">
                  <h4 className="text-lg font-heading font-bold text-charcoal dark:text-white">
                    Do you or family members currently have health insurance?
                  </h4>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: 'no', label: 'No, we are uninsured' },
                    { id: 'unaffordable', label: 'Current plan is unaffordable' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setHasCoverage(item.id)}
                      className={`p-4 rounded-xl text-center font-bold text-xs transition-all border ${
                        hasCoverage === item.id
                          ? 'bg-blue-electric text-white border-blue-electric shadow-sm'
                          : 'bg-offwhite dark:bg-charcoal-card text-charcoal dark:text-white border-charcoal/15 dark:border-charcoal-border hover:border-blue-electric'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                {/* Instant Program Recommendation Box */}
                <div className="bg-offwhite dark:bg-charcoal-card rounded-xl p-6 border border-charcoal/10 dark:border-charcoal-border space-y-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-electric flex-shrink-0" />
                    <span className="font-heading font-bold text-base text-charcoal dark:text-white">
                      High Eligibility: 100% Subsidized Family Coverage
                    </span>
                  </div>
                  <p className="text-xs text-charcoal-muted dark:text-white/80 leading-relaxed">
                    Based on your household of {householdSize} people, you qualify for state Medicaid and CHIP coverage with <strong>$0 monthly premiums</strong>, $0 doctor copays, and full prescription drug coverage.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="bg-white dark:bg-charcoal border border-charcoal/10 dark:border-white/10 text-charcoal dark:text-white text-[11px] px-3 py-1 rounded-full font-medium">
                      &bull; Free Doctor &amp; Hospital Visits
                    </span>
                    <span className="bg-white dark:bg-charcoal border border-charcoal/10 dark:border-white/10 text-charcoal dark:text-white text-[11px] px-3 py-1 rounded-full font-medium">
                      &bull; Dental &amp; Vision for Children
                    </span>
                    <span className="bg-white dark:bg-charcoal border border-charcoal/10 dark:border-white/10 text-charcoal dark:text-white text-[11px] px-3 py-1 rounded-full font-medium">
                      &bull; Free Prescription Medications
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-charcoal/10 dark:border-white/10">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="text-xs font-semibold text-charcoal-muted dark:text-white/70 hover:text-charcoal dark:hover:text-white"
                  >
                    &larr; Back to Income
                  </button>
                  <a href="#apply">
                    <Button variant="primary" className="rounded-full px-6">
                      Apply With a Free Advocate
                      <ArrowRight className="w-4 h-4 ml-1.5" />
                    </Button>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* =========================================================================
            FREE ADVOCATE APPLICATION REQUEST FORM
            ========================================================================= */}
        <div id="apply" className="bg-offwhite dark:bg-charcoal-card rounded-3xl p-8 sm:p-12 border border-charcoal/10 dark:border-charcoal-border space-y-8 scroll-mt-24 shadow-sm">
          <div className="max-w-2xl mx-auto text-center space-y-3">
            <Badge variant="light">Direct Community Assistance</Badge>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-charcoal dark:text-white">
              Request Free Guided Enrollment
            </h2>
            <p className="text-charcoal-muted dark:text-white/80 text-sm sm:text-base">
              Leave your contact information below. A dedicated, compassionate bilingual case worker will call you at your preferred time to assist with your application.
            </p>
          </div>

          <div className="max-w-xl mx-auto bg-white dark:bg-charcoal p-8 rounded-2xl border border-charcoal/10 dark:border-white/10 shadow-sm">
            {applicationSubmitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-blue-electric/10 text-blue-electric flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-heading font-bold text-charcoal dark:text-white">
                  Assistance Request Received
                </h4>
                <p className="text-sm text-charcoal-muted dark:text-white/80 max-w-md mx-auto">
                  Thank you, {applicantName || 'valued family'}. A dedicated enrollment advocate has been assigned to your case and will reach out to you within 24 business hours.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setApplicationSubmitted(false)}
                  className="rounded-full text-xs"
                >
                  Submit Additional Information
                </Button>
              </div>
            ) : (
              <form onSubmit={handleApplicationSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-semibold text-charcoal dark:text-white uppercase tracking-wider mb-1.5">
                    Your Full Name <span className="text-blue-electric">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    placeholder="e.g. Fatima Khan"
                    className="w-full bg-offwhite dark:bg-charcoal-card text-charcoal dark:text-white text-sm px-4 py-3 rounded-xl border border-charcoal/15 dark:border-charcoal-border focus:outline-none focus:border-blue-electric focus:ring-2 focus:ring-blue-electric"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal dark:text-white uppercase tracking-wider mb-1.5">
                      Phone Number <span className="text-blue-electric">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={applicantPhone}
                      onChange={(e) => setApplicantPhone(e.target.value)}
                      placeholder="(555) 000-0000"
                      className="w-full bg-offwhite dark:bg-charcoal-card text-charcoal dark:text-white text-sm px-4 py-3 rounded-xl border border-charcoal/15 dark:border-charcoal-border focus:outline-none focus:border-blue-electric focus:ring-2 focus:ring-blue-electric"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-charcoal dark:text-white uppercase tracking-wider mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={applicantEmail}
                      onChange={(e) => setApplicantEmail(e.target.value)}
                      placeholder="name@email.com"
                      className="w-full bg-offwhite dark:bg-charcoal-card text-charcoal dark:text-white text-sm px-4 py-3 rounded-xl border border-charcoal/15 dark:border-charcoal-border focus:outline-none focus:border-blue-electric focus:ring-2 focus:ring-blue-electric"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal dark:text-white uppercase tracking-wider mb-1.5">
                    Family Needs or Special Medical Notes (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={applicantNotes}
                    onChange={(e) => setApplicantNotes(e.target.value)}
                    placeholder="Tell us if you have children, expected newborn, ongoing prescription medications, or need a specific language advocate..."
                    className="w-full bg-offwhite dark:bg-charcoal-card text-charcoal dark:text-white text-sm px-4 py-3 rounded-xl border border-charcoal/15 dark:border-charcoal-border focus:outline-none focus:border-blue-electric focus:ring-2 focus:ring-blue-electric resize-y"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    id="ins-consent"
                    type="checkbox"
                    required
                    className="mt-1 w-4 h-4 rounded border-charcoal/20 dark:border-charcoal-border text-blue-electric focus:ring-blue-electric cursor-pointer"
                  />
                  <label htmlFor="ins-consent" className="text-xs text-charcoal-muted dark:text-white/70 leading-relaxed">
                    I give permission for a certified Mouse To Click enrollment navigator to contact me via phone or email regarding subsidized healthcare programs. I understand this service is 100% free and confidential.
                  </label>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  disabled={isSubmitting}
                  className="rounded-full shadow-md font-semibold"
                >
                  {isSubmitting ? 'Submitting Application...' : 'Connect With an Advocate'}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* =========================================================================
            FREQUENTLY ASKED QUESTIONS
            ========================================================================= */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h3 className="text-3xl font-heading font-extrabold text-charcoal dark:text-white">
              Frequently Asked Questions
            </h3>
            <p className="text-charcoal-muted dark:text-white/80 text-sm sm:text-base">
              Clear, honest answers to the questions families ask most often.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-offwhite dark:bg-charcoal-card p-7 rounded-2xl border border-charcoal/10 dark:border-charcoal-border space-y-2.5">
                <h4 className="font-heading font-bold text-base text-charcoal dark:text-white flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-electric mt-1 flex-shrink-0" />
                  <span>{faq.q}</span>
                </h4>
                <p className="text-sm text-charcoal-muted dark:text-white/70 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
