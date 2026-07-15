import { FastifyInstance } from 'fastify';
import { AuthController } from './auth.controller';

const controller = new AuthController();

export async function authRoutes(app: FastifyInstance) {
  app.post('/auth/register', controller.register);
  app.post('/auth/login', controller.login);
}
