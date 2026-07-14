import { z } from 'zod';

export const registerSchema = z.object({
  companyId: z.number().int().positive(),
  roleId: z.number().int().positive(),

  name: z.string().min(2),

  email: z.string().email(),

  password: z.string().min(8),
});
