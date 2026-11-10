import React from 'react';
import { Globe, Mail, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-offwhite dark:bg-charcoal border-t border-charcoal/10 dark:border-white/10 text-charcoal dark:text-white pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-charcoal/10 dark:border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-md bg-blue-electric flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-heading font-extrabold text-xl tracking-tight text-charcoal dark:text-white block">
                  MouseToClick
                </span>
                <span className="text-[10px] font-body tracking-wider text-charcoal-muted uppercase">
                  Global Outsourcing & Business Solutions
                </span>
              </div>
            </div>
            <p className="text-sm text-charcoal-muted dark:text-white/80 max-w-sm leading-relaxed font-body">
              Innovating the Way Businesses Work. We provide flexible, reliable, and cost-effective
              outsourcing solutions to businesses across international markets.
            </p>
            <div className="pt-1 flex flex-col space-y-2 text-xs font-body text-charcoal-muted dark:text-white/70">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-electric" />
                <span>contact@mousetoclick.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-blue-electric" />
                <span>Serving: US &bull; UK &bull; Canada &bull; Australia</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="text-sm font-body font-semibold uppercase tracking-wider text-blue-electric">
              Quick Links
            </div>
            <ul className="space-y-2 text-sm text-charcoal/80 dark:text-white/80 font-body">
              <li>
                <a href="/" className="hover:text-blue-electric transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-blue-electric transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-electric transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-blue-electric transition-colors">
                  Industries We Serve
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-electric transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <div className="text-sm font-body font-semibold uppercase tracking-wider text-blue-electric">
              Our Services
            </div>
            <ul className="space-y-2 text-sm text-charcoal/80 dark:text-white/80 font-body">
              <li>
                <a href="/services/healthcare-solutions" className="hover:text-blue-electric transition-colors">
                  Healthcare Solutions
                </a>
              </li>
              <li>
                <a href="/services/security-solutions" className="hover:text-blue-electric transition-colors">
                  Security Solutions
                </a>
              </li>
              <li>
                <a href="/services/finance-accounting" className="hover:text-blue-electric transition-colors">
                  Finance & Accounting
                </a>
              </li>
              <li>
                <a href="/services/customer-support" className="hover:text-blue-electric transition-colors">
                  Customer Support
                </a>
              </li>
              <li>
                <a href="/services/it-technical-support" className="hover:text-blue-electric transition-colors">
                  IT & Technical Support
                </a>
              </li>
              <li>
                <a href="/services/digital-business-solutions" className="hover:text-blue-electric transition-colors">
                  Digital Business Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <div className="text-sm font-body font-semibold uppercase tracking-wider text-blue-electric">
              Legal
            </div>
            <ul className="space-y-2 text-sm text-charcoal/80 dark:text-white/80 font-body">
              <li>
                <a href="/privacy" className="hover:text-blue-electric transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-blue-electric transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="/admin"
                  className="hover:text-blue-electric transition-colors flex items-center gap-1"
                >
                  Operations Portal <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs font-body text-charcoal-muted gap-4">
          <p>
            &copy; {new Date().getFullYear()} MouseToClick. Global Outsourcing & Business Solutions.
            All rights reserved.
          </p>
          <p className="text-charcoal-muted">Innovating the Way Businesses Work.</p>
        </div>
      </div>
    </footer>
  );
};
