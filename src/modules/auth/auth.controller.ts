import { FastifyReply, FastifyRequest } from 'fastify';
import { AuthService } from './auth.service';

const service = new AuthService();

export class AuthController {
  async register(request: FastifyRequest, reply: FastifyReply) {
    const user = await service.register(request.body as any);

    return reply.code(201).send({
      message: 'User registered successfully',
      user,
    });
  }
}
