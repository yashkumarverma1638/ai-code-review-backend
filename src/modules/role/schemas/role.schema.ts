import { z } from 'zod';

export const createRoleSchema = z.object({
  companyId: z.number().int().positive(),

  name: z.string().min(2),

  description: z.string().optional(),
});

export const updateRoleSchema = createRoleSchema.partial();
