'use client';

import React, { useState, useEffect } from 'react';
import {
  Lock,
  Search,
  CheckCircle2,
  AlertCircle,
  LogOut,
  RefreshCw,
  Phone,
  Mail,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ThemeToggle } from '@/components/theme/ThemeToggle';

interface InquiryItem {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  phone?: string;
  service: 'CCTV' | 'MEDICAL_BILLING' | 'HEALTH_INSURANCE' | 'GENERAL';
  company?: string;
  details: string;
  status: 'NEW' | 'CONTACTED' | 'IN_PROGRESS' | 'RESOLVED' | 'ARCHIVED';
}

interface InsuranceItem {
  id: string;
  createdAt: string;
  fullName: string;
  email?: string;
  phone: string;
  familySize: number;
  monthlyIncome: string;
  existingCoverage: string;
  notes?: string;
  status: 'NEW' | 'CONTACTED' | 'IN_PROGRESS' | 'RESOLVED' | 'ARCHIVED';
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  const [loginError, setLoginError] = useState<string>('');
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);

  const [activeTab, setActiveTab] = useState<'inquiries' | 'insurance'>('inquiries');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<string>('ALL');

  const [inquiries, setInquiries] = useState<InquiryItem[]>([]);
  const [insuranceApps, setInsuranceApps] = useState<InsuranceItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setLoginError('');

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();
      if (!res.ok) {
        setLoginError(data.error || 'Authentication failed');
      } else {
        setIsAuthenticated(true);
        fetchData();
      }
    } catch {
      setLoginError('Network error connecting to portal');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/admin/login', { method: 'DELETE' });
    setIsAuthenticated(false);
    setPassword('');
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const [inqRes, insRes] = await Promise.all([
        fetch('/api/inquiries'),
        fetch('/api/insurance-applications'),
      ]);

      if (inqRes.ok) {
        const inqData = await inqRes.json();
        setInquiries(inqData.inquiries || []);
      }
      if (insRes.ok) {
        const insData = await insRes.json();
        setInsuranceApps(insData.applications || []);
      }
    } catch (err) {
      console.error('Failed to load admin data:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleStatusChange = async (
    type: 'inquiry' | 'insurance',
    id: string,
    newStatus: string
  ) => {
    try {
      const res = await fetch('/api/admin/update-status', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, id, status: newStatus }),
      });

      if (res.ok) {
        if (type === 'inquiry') {
          setInquiries((prev) =>
            prev.map((i) => (i.id === id ? { ...i, status: newStatus as any } : i))
          );
        } else {
          setInsuranceApps((prev) =>
            prev.map((a) => (a.id === id ? { ...a, status: newStatus as any } : a))
          );
        }
      }
    } catch (err) {
      console.error('Failed to update record status:', err);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="bg-white dark:bg-charcoal text-charcoal dark:text-white min-h-[85vh] flex items-center justify-center py-16 px-4 transition-colors">
        <div className="max-w-md w-full space-y-8 bg-offwhite dark:bg-charcoal-card border border-charcoal/10 dark:border-charcoal-border rounded-xl p-8 shadow-sm dark:shadow-2xl">
          <div className="text-center space-y-3">
            <div className="w-12 h-12 mx-auto rounded-lg bg-white dark:bg-charcoal border border-blue-electric flex items-center justify-center">
              <Lock className="w-6 h-6 text-blue-electric dark:text-blue-hover" />
            </div>
            <Badge variant="blue">Restricted Administrative Area</Badge>
            <h1 className="text-2xl font-heading font-extrabold text-charcoal dark:text-white">
              MouseToClick Operations Portal
            </h1>
            <p className="text-xs font-mono text-charcoal-muted">
              Enter master administrative key to inspect inquiries &amp; applications.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            {loginError && (
              <div className="p-3.5 rounded bg-white dark:bg-charcoal border border-charcoal/20 dark:border-white text-charcoal dark:text-white text-xs font-mono flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{loginError}</span>
              </div>
            )}

            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase tracking-wider text-charcoal dark:text-white/80 block">
                Administrative Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full bg-white dark:bg-charcoal text-charcoal dark:text-white text-sm px-4 py-3 rounded-md border border-charcoal/20 dark:border-charcoal-border focus:outline-none focus:border-blue-electric focus:ring-2 focus:ring-blue-electric font-mono"
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              fullWidth
              size="lg"
              disabled={isLoggingIn}
            >
              {isLoggingIn ? 'Authenticating...' : 'Access Portal'}
            </Button>
          </form>

          <p className="text-center text-[10px] font-mono text-charcoal-muted pt-2 border-t border-charcoal/10 dark:border-white/10">
            Encrypted Session &bull; Rate-Limited Endpoint &bull; Audit Logged
          </p>
        </div>
      </div>
    );
  }

  const filteredInquiries = inquiries.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.company && item.company.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesStatus = statusFilter === 'ALL' || item.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const filteredInsurance = insuranceApps.filter((item) => {
    const matchesSearch =
      item.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.phone.includes(searchQuery) ||
      (item.email && item.email.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesStatus = statusFilter === 'ALL' || item.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="bg-white dark:bg-charcoal text-charcoal dark:text-white min-h-screen py-10 px-4 sm:px-6 lg:px-8 space-y-10 transition-colors">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-charcoal/10 dark:border-white/10 gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-electric animate-beacon" />
              <span className="text-xs font-mono uppercase tracking-widest text-blue-electric dark:text-blue-hover font-semibold">
                Administrative Operations Dashboard
              </span>
            </div>
            <h1 className="text-3xl font-heading font-extrabold text-charcoal dark:text-white">
              Inquiries &amp; Case Management Hub
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button size="sm" variant="outline" onClick={fetchData} disabled={isLoading} className="border-charcoal/20 dark:border-white/20 text-charcoal dark:text-white">
              <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
              <span className="ml-1.5 font-mono text-xs">Refresh</span>
            </Button>
            <Button size="sm" variant="secondary" onClick={handleLogout}>
              <LogOut className="w-3.5 h-3.5" />
              <span className="ml-1.5 font-mono text-xs">Sign Out</span>
            </Button>
          </div>
        </div>

        {/* High-Level Operations Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-offwhite dark:bg-charcoal-card p-5 rounded-xl border border-charcoal/10 dark:border-charcoal-border shadow-sm">
            <span className="text-[10px] font-mono text-charcoal-muted uppercase block">
              Total Inquiries
            </span>
            <p className="text-3xl font-heading font-extrabold text-charcoal dark:text-white mt-1">
              {inquiries.length}
            </p>
            <span className="text-[10px] font-mono text-blue-electric dark:text-blue-hover mt-1 block font-semibold">
              CCTV &amp; Medical Billing
            </span>
          </div>

          <div className="bg-offwhite dark:bg-charcoal-card p-5 rounded-xl border border-charcoal/10 dark:border-charcoal-border shadow-sm">
            <span className="text-[10px] font-mono text-charcoal-muted uppercase block">
              Insurance Applications
            </span>
            <p className="text-3xl font-heading font-extrabold text-charcoal dark:text-white mt-1">
              {insuranceApps.length}
            </p>
            <span className="text-[10px] font-mono text-blue-electric dark:text-blue-hover mt-1 block font-semibold">
              Families Awaiting Assistance
            </span>
          </div>

          <div className="bg-offwhite dark:bg-charcoal-card p-5 rounded-xl border border-charcoal/10 dark:border-charcoal-border shadow-sm">
            <span className="text-[10px] font-mono text-charcoal-muted uppercase block">
              Pending New Cases
            </span>
            <p className="text-3xl font-heading font-extrabold text-charcoal dark:text-white mt-1">
              {inquiries.filter((i) => i.status === 'NEW').length +
                insuranceApps.filter((a) => a.status === 'NEW').length}
            </p>
            <span className="text-[10px] font-mono text-charcoal-muted mt-1 block">
              Requires Initial Outreach
            </span>
          </div>

          <div className="bg-offwhite dark:bg-charcoal-card p-5 rounded-xl border border-charcoal/10 dark:border-charcoal-border shadow-sm">
            <span className="text-[10px] font-mono text-charcoal-muted uppercase block">
              Resolved Cases
            </span>
            <p className="text-3xl font-heading font-extrabold text-charcoal dark:text-white mt-1">
              {inquiries.filter((i) => i.status === 'RESOLVED').length +
                insuranceApps.filter((a) => a.status === 'RESOLVED').length}
            </p>
            <span className="text-[10px] font-mono text-blue-electric dark:text-blue-hover mt-1 block font-semibold">
              Successfully Closed
            </span>
          </div>
        </div>

        {/* Tab Switcher & Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-offwhite dark:bg-charcoal-card p-4 rounded-xl border border-charcoal/10 dark:border-charcoal-border shadow-sm">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveTab('inquiries')}
              className={`px-4 py-2.5 rounded-lg font-mono text-xs font-semibold transition-all ${activeTab === 'inquiries'
                  ? 'bg-blue-electric text-white shadow-sm'
                  : 'text-charcoal dark:text-white/80 hover:bg-white dark:hover:bg-white/5'
                }`}
            >
              Client Inquiries ({inquiries.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('insurance')}
              className={`px-4 py-2.5 rounded-lg font-mono text-xs font-semibold transition-all ${activeTab === 'insurance'
                  ? 'bg-blue-electric text-white shadow-sm'
                  : 'text-charcoal dark:text-white/80 hover:bg-white dark:hover:bg-white/5'
                }`}
            >
              Insurance Applications ({insuranceApps.length})
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-charcoal-muted absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by name, email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white dark:bg-charcoal text-charcoal dark:text-white text-xs pl-9 pr-4 py-2 rounded-lg border border-charcoal/15 dark:border-charcoal-border focus:outline-none focus:border-blue-electric font-mono placeholder:text-charcoal-muted"
              />
            </div>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full sm:w-auto bg-white dark:bg-charcoal text-charcoal dark:text-white text-xs px-3 py-2 rounded-lg border border-charcoal/15 dark:border-charcoal-border focus:outline-none focus:border-blue-electric font-mono cursor-pointer"
            >
              <option value="ALL">All Statuses</option>
              <option value="NEW">NEW</option>
              <option value="CONTACTED">CONTACTED</option>
              <option value="IN_PROGRESS">IN_PROGRESS</option>
              <option value="RESOLVED">RESOLVED</option>
            </select>
          </div>
        </div>

        {/* Content Feed */}
        {activeTab === 'inquiries' ? (
          <div className="space-y-4">
            {filteredInquiries.length === 0 ? (
              <div className="bg-offwhite dark:bg-charcoal-card p-12 rounded-xl text-center border border-charcoal/10 dark:border-charcoal-border text-charcoal-muted font-mono text-xs">
                No client inquiries found matching current filters.
              </div>
            ) : (
              filteredInquiries.map((inq) => (
                <div
                  key={inq.id}
                  className="bg-white dark:bg-charcoal-card p-6 rounded-xl border border-charcoal/10 dark:border-charcoal-border space-y-4 hover:border-blue-electric/40 transition-colors shadow-sm"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-3 border-b border-charcoal/10 dark:border-white/10 gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-heading font-bold text-lg text-charcoal dark:text-white">
                          {inq.name}
                        </span>
                        {inq.company && (
                          <span className="text-xs font-mono text-charcoal-muted">
                            &bull; {inq.company}
                          </span>
                        )}
                        <Badge
                          variant={inq.service === 'CCTV' ? 'blue' : 'outline'}
                          className="text-[10px]"
                        >
                          {inq.service}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-charcoal/80 dark:text-white/80">
                        <span className="flex items-center gap-1">
                          <Mail className="w-3.5 h-3.5 text-blue-electric" />
                          {inq.email}
                        </span>
                        {inq.phone && (
                          <span className="flex items-center gap-1">
                            <Phone className="w-3.5 h-3.5 text-blue-electric" />
                            {inq.phone}
                          </span>
                        )}
                        <span className="text-charcoal-muted">
                          {new Date(inq.createdAt).toLocaleString()}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono uppercase text-charcoal-muted">
                        Status:
                      </span>
                      <select
                        value={inq.status}
                        onChange={(e) => handleStatusChange('inquiry', inq.id, e.target.value)}
                        className={`text-xs font-mono font-semibold px-3 py-1.5 rounded border focus:outline-none cursor-pointer ${inq.status === 'NEW'
                            ? 'bg-blue-electric text-white border-blue-electric'
                            : inq.status === 'RESOLVED'
                              ? 'bg-offwhite dark:bg-charcoal text-charcoal dark:text-white/90 border-charcoal/20 dark:border-white/20'
                              : 'bg-offwhite dark:bg-charcoal text-blue-electric dark:text-blue-hover border-blue-electric/40'
                          }`}
                      >
                        <option value="NEW">NEW</option>
                        <option value="CONTACTED">CONTACTED</option>
                        <option value="IN_PROGRESS">IN_PROGRESS</option>
                        <option value="RESOLVED">RESOLVED</option>
                        <option value="ARCHIVED">ARCHIVED</option>
                      </select>
                    </div>
                  </div>

                  <p className="text-sm font-mono text-charcoal/90 dark:text-white/90 bg-offwhite dark:bg-charcoal p-4 rounded-lg border border-charcoal/10 dark:border-white/5 leading-relaxed">
                    {inq.details}
                  </p>
                </div>
              ))
            )}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredInsurance.length === 0 ? (
              <div className="bg-offwhite dark:bg-charcoal-card p-12 rounded-xl text-center border border-charcoal/10 dark:border-charcoal-border text-charcoal-muted font-mono text-xs">
                No insurance applications found matching current filters.
              </div>
            ) : (
              filteredInsurance.map((app) => (
                <div
                  key={app.id}
                  className="bg-white dark:bg-charcoal-card p-6 rounded-xl border border-charcoal/10 dark:border-charcoal-border space-y-4 hover:border-blue-electric/40 transition-colors shadow-sm"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-3 border-b border-charcoal/10 dark:border-white/10 gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-heading font-bold text-lg text-charcoal dark:text-white">
                          {app.fullName}
                        </span>
                        <Badge variant="blue" className="text-[10px]">
                          Family Size: {app.familySize}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-charcoal/80 dark:text-white/80">
                        <span className="flex items-center gap-1">
                          <Phone className="w-3.5 h-3.5 text-blue-electric" />
                          {app.phone}
                        </span>
                        {app.email && (
                          <span className="flex items-center gap-1">
                            <Mail className="w-3.5 h-3.5 text-blue-electric" />
                            {app.email}
                          </span>
                        )}
                        <span className="text-charcoal-muted">
                          Income: {app.monthlyIncome}
                        </span>
                        <span className="text-charcoal-muted">
                          {new Date(app.createdAt).toLocaleString()}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono uppercase text-charcoal-muted">
                        Case Status:
                      </span>
                      <select
                        value={app.status}
                        onChange={(e) => handleStatusChange('insurance', app.id, e.target.value)}
                        className={`text-xs font-mono font-semibold px-3 py-1.5 rounded border focus:outline-none cursor-pointer ${app.status === 'NEW'
                            ? 'bg-blue-electric text-white border-blue-electric'
                            : app.status === 'RESOLVED'
                              ? 'bg-offwhite dark:bg-charcoal text-charcoal dark:text-white/90 border-charcoal/20 dark:border-white/20'
                              : 'bg-offwhite dark:bg-charcoal text-blue-electric dark:text-blue-hover border-blue-electric/40'
                          }`}
                      >
                        <option value="NEW">NEW</option>
                        <option value="CONTACTED">CONTACTED</option>
                        <option value="IN_PROGRESS">IN_PROGRESS</option>
                        <option value="RESOLVED">RESOLVED</option>
                        <option value="ARCHIVED">ARCHIVED</option>
                      </select>
                    </div>
                  </div>

                  {app.notes && (
                    <p className="text-sm font-mono text-charcoal/90 dark:text-white/90 bg-offwhite dark:bg-charcoal p-4 rounded-lg border border-charcoal/10 dark:border-white/5 leading-relaxed">
                      Notes: {app.notes}
                    </p>
                  )}
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
