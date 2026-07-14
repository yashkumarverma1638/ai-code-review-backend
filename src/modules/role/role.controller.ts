import { FastifyReply, FastifyRequest } from 'fastify';
import { RoleService } from './role.service';

const service = new RoleService();

export class RoleController {
  async createRole(request: FastifyRequest, reply: FastifyReply) {
    const role = await service.createRole(request.body as any);

    return reply.code(201).send(role);
  }

  async getRoles(request: FastifyRequest, reply: FastifyReply) {
    const roles = await service.getRoles();

    return reply.send(roles);
  }

  async getRoleById(request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) {
    const role = await service.getRoleById(Number(request.params.id));

    return reply.send(role);
  }

  async updateRole(
    request: FastifyRequest<{
      Params: { id: string };
    }>,
    reply: FastifyReply,
  ) {
    const role = await service.updateRole(Number(request.params.id), request.body as any);

    return reply.send(role);
  }

  async deleteRole(request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) {
    await service.deleteRole(Number(request.params.id));

    return reply.code(204).send();
  }
}
