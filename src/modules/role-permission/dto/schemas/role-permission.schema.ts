import { z } from 'zod';

export const assignPermissionSchema = z.object({
  permissionId: z.number().int().positive(),
});
