'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Mail, Clock, ArrowRight, ShieldCheck, CheckCircle2, AlertCircle, Globe, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Select } from '@/components/ui/Select';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

const serviceOptions = [
  { value: 'healthcare', label: 'Healthcare Solutions' },
  { value: 'security', label: 'Security Solutions (Remote CCTV Monitoring)' },
  { value: 'finance', label: 'Finance & Accounting' },
  { value: 'customer-support', label: 'Customer Support & Call Center' },
  { value: 'it-support', label: 'IT & Technical Support' },
  { value: 'digital-solutions', label: 'Digital Business Solutions' },
  { value: 'general', label: 'General Corporate Partnership / Consultation' },
];

function ContactFormInner() {
  const searchParams = useSearchParams();
  const initialService = searchParams.get('service');

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    country: '',
    service: 'general',
    message: '',
    consent: true,
  });

  useEffect(() => {
    if (initialService) {
      if (initialService.includes('healthcare') || initialService === 'billing') {
        setFormData((prev) => ({ ...prev, service: 'healthcare' }));
      } else if (initialService.includes('security') || initialService === 'cctv') {
        setFormData((prev) => ({ ...prev, service: 'security' }));
      } else if (initialService.includes('finance')) {
        setFormData((prev) => ({ ...prev, service: 'finance' }));
      } else if (initialService.includes('customer')) {
        setFormData((prev) => ({ ...prev, service: 'customer-support' }));
      } else if (initialService.includes('it-technical') || initialService.includes('it')) {
        setFormData((prev) => ({ ...prev, service: 'it-support' }));
      } else if (initialService.includes('digital')) {
        setFormData((prev) => ({ ...prev, service: 'digital-solutions' }));
      }
    }
  }, [initialService]);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          country: formData.country,
          service: formData.service,
          details: formData.message,
          message: formData.message,
          consent: formData.consent,
        }),
      });

      const json = await res.json();

      if (!res.ok) {
        setErrorMessage(json.error || 'Failed to submit inquiry. Please review your entries.');
      } else {
        setFormSubmitted(true);
      }
    } catch (err) {
      setErrorMessage('Network connection error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white dark:bg-charcoal text-charcoal dark:text-white min-h-screen py-16 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="space-y-4 max-w-3xl">
          <Badge variant="blue" withDot>
            Global Business Solutions
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-heading font-extrabold tracking-tight">
            Let&apos;s Build a Smarter Way to Work
          </h1>
          <p className="text-charcoal-muted dark:text-white/80 text-lg leading-relaxed font-body">
            Tell us what your business needs. Our team will connect with you to discuss a suitable
            outsourcing solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Information & Channels */}
          <div className="lg:col-span-5 space-y-8">
            <Card
              variant="tech"
              className="bg-offwhite dark:bg-charcoal-card text-charcoal dark:text-white border-charcoal/10 dark:border-charcoal-border shadow-sm space-y-6"
            >
              <h3 className="text-xl font-heading font-bold text-charcoal dark:text-white">
                Global Engagement
              </h3>
              <div className="space-y-4 text-sm font-body">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-electric dark:text-blue-hover mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-charcoal-muted uppercase text-xs font-semibold">Direct Email</p>
                    <p className="text-charcoal dark:text-white">contact@mousetoclick.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-blue-electric dark:text-blue-hover mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-charcoal-muted uppercase text-xs font-semibold">Primary Markets</p>
                    <p className="text-charcoal dark:text-white">
                      United States &bull; United Kingdom &bull; Canada &bull; Australia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-electric dark:text-blue-hover mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-charcoal-muted uppercase text-xs font-semibold">Response Commitment</p>
                    <p className="text-charcoal dark:text-white">Within 24 business hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-blue-electric dark:text-blue-hover mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-charcoal-muted uppercase text-xs font-semibold">
                      Confidentiality & Professionalism
                    </p>
                    <p className="text-charcoal dark:text-white">
                      Responsible, secure handling of client information and workflows.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="bg-offwhite dark:bg-charcoal-card border border-charcoal/10 dark:border-charcoal-border rounded-xl p-6 space-y-2 shadow-sm">
              <span className="text-xs font-body text-blue-electric dark:text-blue-hover uppercase tracking-wider font-semibold">
                Tailored Consultation
              </span>
              <p className="text-xs text-charcoal-muted dark:text-white/80 leading-relaxed font-body">
                Whether you need dedicated administrative support, remote monitoring, finance assistance,
                or a scalable multi-division model, we are ready to discuss your requirements.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-offwhite dark:bg-charcoal-card border border-charcoal/10 dark:border-charcoal-border rounded-xl p-8 shadow-sm">
              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-blue-electric/20 border border-blue-electric flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-blue-electric dark:text-blue-hover" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-charcoal dark:text-white">
                    Enquiry Sent Successfully
                  </h3>
                  <p className="text-sm font-body text-charcoal-muted dark:text-white/80 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. Our team will review your business requirements and connect with you shortly to discuss a suitable outsourcing solution.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: '',
                        company: '',
                        email: '',
                        country: '',
                        service: 'general',
                        message: '',
                        consent: true,
                      });
                    }}
                    className="mt-4"
                  >
                    Send Another Enquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="border-b border-charcoal/10 dark:border-white/10 pb-4">
                    <h3 className="text-xl font-heading font-bold text-charcoal dark:text-white">
                      Request a Consultation
                    </h3>
                    <p className="text-xs font-body text-charcoal-muted mt-1">
                      Complete the details below and an outsourcing specialist will contact you.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-4 rounded-lg bg-red-500/10 border border-red-500 text-red-700 dark:text-red-400 text-xs font-body flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      name="name"
                      label="Full Name"
                      placeholder="Jane Doe"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <Input
                      name="company"
                      label="Company Name"
                      placeholder="e.g. Apex Enterprises"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      name="email"
                      label="Business Email"
                      type="email"
                      placeholder="jane@company.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <Input
                      name="country"
                      label="Country"
                      placeholder="e.g. United States, UK, Canada..."
                      required
                      value={formData.country}
                      onChange={handleChange}
                    />
                  </div>

                  <Select
                    name="service"
                    label="Service of Interest"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    options={serviceOptions}
                  />

                  <Textarea
                    name="message"
                    label="Message"
                    placeholder="Tell us about your business, operational requirements, or the support you need..."
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />

                  <div className="flex items-start gap-3">
                    <input
                      id="consent"
                      name="consent"
                      type="checkbox"
                      required
                      checked={formData.consent}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 rounded border-charcoal/20 dark:border-charcoal-border bg-white dark:bg-charcoal text-blue-electric focus:ring-blue-electric cursor-pointer"
                    />
                    <label
                      htmlFor="consent"
                      className="text-xs text-charcoal/80 dark:text-white/80 leading-normal cursor-pointer font-body"
                    >
                      I agree to the privacy policy and consent to MouseToClick storing this enquiry and contacting me regarding my requirements.
                    </label>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending Enquiry...' : 'Send Enquiry'}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center py-20">
          <div className="w-8 h-8 border-2 border-blue-electric border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <ContactFormInner />
    </Suspense>
  );
}
