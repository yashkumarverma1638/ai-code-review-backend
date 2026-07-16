import 'fastify';

declare module 'fastify' {
  interface FastifyRequest {
    user: {
      userId: number;
      companyId: number;
      roleId: number;
    };
  }
}
