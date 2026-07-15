import { FastifyReply, FastifyRequest } from 'fastify';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

const service = new AuthService();

export class AuthController {
  async register(request: FastifyRequest, reply: FastifyReply) {
    const user = await service.register(request.body as any);

    return reply.code(201).send({
      message: 'User registered successfully',
      user,
    });
  }
  async login(request: FastifyRequest, reply: FastifyReply) {
    const result = await service.login(request.body as LoginDto);

    return reply.send(result);
  }
}
