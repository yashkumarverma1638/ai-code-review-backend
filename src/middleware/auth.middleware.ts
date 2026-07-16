import { FastifyReply, FastifyRequest } from 'fastify';
import { JwtService } from '../shared/services/jwt.service';

const jwtService = new JwtService();

export async function authMiddleware(request: FastifyRequest, reply: FastifyReply) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return reply.status(401).send({
      message: 'Authorization header is missing',
    });
  }

  const [scheme, token] = authHeader.split(' ');

  if (scheme !== 'Bearer' || !token) {
    return reply.status(401).send({
      message: 'Invalid authorization header',
    });
  }

  try {
    const payload = jwtService.verifyToken(token);

    request.user = payload;
  } catch {
    return reply.status(401).send({
      message: 'Invalid or expired token',
    });
  }
}
