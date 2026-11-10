import { z } from 'zod';

export const InquirySchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters' })
    .max(100, { message: 'Name cannot exceed 100 characters' }),
  company: z.string().max(120).optional().or(z.literal('')),
  email: z
    .string()
    .email({ message: 'Please provide a valid business email address' })
    .max(120),
  country: z.string().max(100).optional().or(z.literal('')),
  phone: z
    .string()
    .optional()
    .refine((val) => !val || /^[+0-9\s()\-]{7,25}$/.test(val), {
      message: 'Please provide a valid phone number',
    }),
  service: z.enum([
    'healthcare',
    'security',
    'finance',
    'customer-support',
    'it-support',
    'digital-solutions',
    'cctv',
    'billing',
    'insurance',
    'general',
  ], {
    errorMap: () => ({ message: 'Please select a valid service of interest' }),
  }),
  message: z
    .string()
    .max(3000)
    .optional(),
  details: z
    .string()
    .max(3000)
    .optional(),
  consent: z.boolean().optional(),
}).refine((data) => (data.message && data.message.length >= 5) || (data.details && data.details.length >= 5), {
  message: 'Please provide a short description or message (at least 5 characters)',
  path: ['message'],
});

export const InsuranceApplicationSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: 'Full name must be at least 2 characters' })
    .max(100)
    .regex(/^[a-zA-Z\s.'-]+$/, { message: 'Name contains invalid characters' }),
  email: z
    .string()
    .email({ message: 'Please provide a valid email address' })
    .optional()
    .or(z.literal('')),
  phone: z
    .string()
    .min(7, { message: 'Please provide a contact phone number' })
    .regex(/^[+0-9\s()\-]{7,25}$/, { message: 'Please provide a valid phone number' }),
  familySize: z
    .number()
    .int()
    .min(1, { message: 'Household size must be at least 1' })
    .max(20),
  monthlyIncome: z.string().min(1, { message: 'Please select an income range' }),
  existingCoverage: z.string().default('no'),
  notes: z.string().max(1500).optional(),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'You must give consent to be contacted by an advocate' }),
  }),
});

export type InquiryInput = z.infer<typeof InquirySchema>;
export type InsuranceApplicationInput = z.infer<typeof InsuranceApplicationSchema>;
