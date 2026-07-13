import Fastify from 'fastify';
import { companyRoutes } from './modules/company/company.routes';

export const app = Fastify({
  logger: true,
});

app.register(companyRoutes);

app.get('/health', async () => {
  return {
    status: 'OK',
  };
});
