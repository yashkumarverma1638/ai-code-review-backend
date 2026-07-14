import Fastify from 'fastify';
import { companyRoutes } from './modules/company/company.routes';
import { authRoutes } from './modules/auth/auth.routes';
import { roleRoutes } from './modules/role/role.routes';
import { permissionRoutes } from './modules/permission/permission.routes';
export const app = Fastify({
  logger: true,
});

app.register(companyRoutes);
app.register(authRoutes);
app.register(roleRoutes);
app.register(permissionRoutes);
app.get('/health', async () => {
  return {
    status: 'OK',
  };
});
