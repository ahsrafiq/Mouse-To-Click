export type ServiceType = 'cctv' | 'billing' | 'insurance';

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  service: ServiceType;
  details: string;
  consent: boolean;
}

export interface InsuranceEligibilityData {
  fullName: string;
  contactNumber: string;
  email: string;
  familySize: number;
  monthlyIncomeRange: string;
  existingCoverage: 'yes' | 'no' | 'unsure';
  notes?: string;
  consent: boolean;
}

