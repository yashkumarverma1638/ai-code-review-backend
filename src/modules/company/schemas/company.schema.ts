import { z } from 'zod';
export const createCompanySchema = z.object({
  name: z.string().min(2),
  slug: z.string().min(2),
  plan: z.enum(['FREE', 'PRO', 'ENTERPRISE']),
  status: z.enum(['ACTIVE', 'INACTIVE']).optional(),
});

export const updateCompanySchema = createCompanySchema.partial();
