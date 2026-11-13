import { prisma } from './prisma';

export interface StoredInquiry {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  phone?: string;
  service: 'CCTV' | 'MEDICAL_BILLING' | 'HEALTH_INSURANCE' | 'GENERAL';
  company?: string;
  details: string;
  status: 'NEW' | 'CONTACTED' | 'IN_PROGRESS' | 'RESOLVED' | 'ARCHIVED';
  consent: boolean;
}

export interface StoredInsuranceApplication {
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
  consent: boolean;
}

// In-memory fallback repository for local offline development
const fallbackInquiries: StoredInquiry[] = [
  {
    id: 'demo-inq-1',
    createdAt: new Date(Date.now() - 3600000 * 2).toISOString(),
    name: 'Robert Hastings',
    email: 'rhastings@apexlogistics.com',
    phone: '+1 (555) 234-8901',
    service: 'CCTV',
    company: 'Apex Logistics Corp',
    details: 'Need 24/7 live video monitoring across our 12-acre trucking yard and loading bays.',
    status: 'NEW',
    consent: true,
  },
  {
    id: 'demo-inq-2',
    createdAt: new Date(Date.now() - 3600000 * 8).toISOString(),
    name: 'Dr. Sarah Lin',
    email: 'slin@cardiosurg.org',
    phone: '+1 (555) 789-1123',
    service: 'MEDICAL_BILLING',
    company: 'Metro Cardio Specialists',
    details: 'Looking to audit our current clearinghouse setup. Experiencing 14% denial rate on surgical codes.',
    status: 'IN_PROGRESS',
    consent: true,
  },
];

const fallbackInsuranceApps: StoredInsuranceApplication[] = [
  {
    id: 'demo-ins-1',
    createdAt: new Date(Date.now() - 3600000 * 4).toISOString(),
    fullName: 'Maria Rodriguez',
    email: 'maria.r@gmail.com',
    phone: '+1 (555) 456-7890',
    familySize: 4,
    monthlyIncome: 'Under $2,200',
    existingCoverage: 'no',
    notes: 'Two children need dental checkups and ongoing asthma inhaler prescriptions.',
    status: 'NEW',
    consent: true,
  },
];

export async function saveInquiry(data: {
  name: string;
  email: string;
  phone?: string;
  service: string;
  company?: string;
  details: string;
  consent: boolean;
}): Promise<StoredInquiry> {
  const serviceEnumMap: Record<string, 'CCTV' | 'MEDICAL_BILLING' | 'HEALTH_INSURANCE' | 'GENERAL'> = {
    cctv: 'CCTV',
    billing: 'MEDICAL_BILLING',
    insurance: 'HEALTH_INSURANCE',
    general: 'GENERAL',
  };

  const serviceVal = serviceEnumMap[data.service] || 'GENERAL';

  try {
    const record = await prisma.inquiry.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        service: serviceVal,
        company: data.company,
        details: data.details,
        consent: data.consent,
      },
    });
    return {
      id: record.id,
      createdAt: record.createdAt.toISOString(),
      name: record.name,
      email: record.email,
      phone: record.phone || undefined,
      service: record.service as any,
      company: record.company || undefined,
      details: record.details,
      status: record.status as any,
      consent: record.consent,
    };
  } catch (err) {
    // If Prisma connection fails (e.g. no local PostgreSQL server running), use fallback
    const fallbackItem: StoredInquiry = {
      id: `inq-${Date.now()}`,
      createdAt: new Date().toISOString(),
      name: data.name,
      email: data.email,
      phone: data.phone,
      service: serviceVal,
      company: data.company,
      details: data.details,
      status: 'NEW',
      consent: data.consent,
    };
    fallbackInquiries.unshift(fallbackItem);
    return fallbackItem;
  }
}

export async function getInquiries(): Promise<StoredInquiry[]> {
  try {
    const list = await prisma.inquiry.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return list.map((item: any) => ({
      id: item.id,
      createdAt: item.createdAt.toISOString(),
      name: item.name,
      email: item.email,
      phone: item.phone || undefined,
      service: item.service as any,
      company: item.company || undefined,
      details: item.details,
      status: item.status as any,
      consent: item.consent,
    }));
  } catch (err) {
    return [...fallbackInquiries];
  }
}

export async function saveInsuranceApplication(data: {
  fullName: string;
  email?: string;
  phone: string;
  familySize: number;
  monthlyIncome: string;
  existingCoverage?: string;
  notes?: string;
  consent: boolean;
}): Promise<StoredInsuranceApplication> {
  try {
    const record = await prisma.insuranceApplication.create({
      data: {
        fullName: data.fullName,
        email: data.email || '',
        phone: data.phone,
        familySize: data.familySize,
        monthlyIncome: data.monthlyIncome,
        existingCoverage: data.existingCoverage || 'no',
        notes: data.notes,
        consent: data.consent,
      },
    });
    return {
      id: record.id,
      createdAt: record.createdAt.toISOString(),
      fullName: record.fullName,
      email: record.email || undefined,
      phone: record.phone,
      familySize: record.familySize,
      monthlyIncome: record.monthlyIncome,
      existingCoverage: record.existingCoverage,
      notes: record.notes || undefined,
      status: record.status as any,
      consent: record.consent,
    };
  } catch (err) {
    const fallbackItem: StoredInsuranceApplication = {
      id: `ins-${Date.now()}`,
      createdAt: new Date().toISOString(),
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      familySize: data.familySize,
      monthlyIncome: data.monthlyIncome,
      existingCoverage: data.existingCoverage || 'no',
      notes: data.notes,
      status: 'NEW',
      consent: data.consent,
    };
    fallbackInsuranceApps.unshift(fallbackItem);
    return fallbackItem;
  }
}

export async function getInsuranceApplications(): Promise<StoredInsuranceApplication[]> {
  try {
    const list = await prisma.insuranceApplication.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return list.map((item: any) => ({
      id: item.id,
      createdAt: item.createdAt.toISOString(),
      fullName: item.fullName,
      email: item.email || undefined,
      phone: item.phone,
      familySize: item.familySize,
      monthlyIncome: item.monthlyIncome,
      existingCoverage: item.existingCoverage,
      notes: item.notes || undefined,
      status: item.status as any,
      consent: item.consent,
    }));
  } catch (err) {
    return [...fallbackInsuranceApps];
  }
}

export async function updateStatus(
  type: 'inquiry' | 'insurance',
  id: string,
  newStatus: 'NEW' | 'CONTACTED' | 'IN_PROGRESS' | 'RESOLVED' | 'ARCHIVED'
): Promise<boolean> {
  if (type === 'inquiry') {
    try {
      await prisma.inquiry.update({
        where: { id },
        data: { status: newStatus as any },
      });
      return true;
    } catch {
      const item = fallbackInquiries.find((i) => i.id === id);
      if (item) {
        item.status = newStatus;
        return true;
      }
      return false;
    }
  } else {
    try {
      await prisma.insuranceApplication.update({
        where: { id },
        data: { status: newStatus as any },
      });
      return true;
    } catch {
      const item = fallbackInsuranceApps.find((i) => i.id === id);
      if (item) {
        item.status = newStatus;
        return true;
      }
      return false;
    }
  }
}

