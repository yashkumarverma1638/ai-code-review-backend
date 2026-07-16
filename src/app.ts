import Fastify from 'fastify';
import { companyRoutes } from './modules/company/company.routes';
import { authRoutes } from './modules/auth/auth.routes';
import { roleRoutes } from './modules/role/role.routes';
import { permissionRoutes } from './modules/permission/permission.routes';
import { rolePermissionRoutes } from './modules/role-permission/role-permission.routes';
import { authMiddleware } from './middleware/auth.middleware';

export const app = Fastify({
  logger: true,
});

app.register(authRoutes);

app.register(async (protectedRoutes) => {
  protectedRoutes.addHook('preHandler', authMiddleware);
  protectedRoutes.register(roleRoutes);

  protectedRoutes.register(companyRoutes);
  protectedRoutes.register(permissionRoutes);
  protectedRoutes.register(rolePermissionRoutes);
});
app.get('/health', async () => {
  return {
    status: 'OK',
  };
});
