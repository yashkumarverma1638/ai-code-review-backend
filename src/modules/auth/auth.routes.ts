import { FastifyInstance } from 'fastify';
import { AuthController } from './auth.controller';
import { authMiddleware } from '../../middleware/auth.middleware';

const controller = new AuthController();

export async function authRoutes(app: FastifyInstance) {
  app.post('/auth/register', controller.register);
  app.post('/auth/login', controller.login);
  app.post('/auth/refresh', controller.refresh);
  app.post(
    '/auth/logout',
    {
      preHandler: authMiddleware,
    },
    controller.logout,
  );
}
