import Fastify from 'fastify';
import { companyRoutes } from './modules/company/company.routes';
import { authRoutes } from './modules/auth/auth.routes';
import { roleRoutes } from './modules/role/role.routes';

export const app = Fastify({
  logger: true,
});

app.register(companyRoutes);
app.register(authRoutes);
app.register(roleRoutes);
app.get('/health', async () => {
  return {
    status: 'OK',
  };
});
