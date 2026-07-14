import { FastifyReply, FastifyRequest } from 'fastify';
import { PermissionService } from './permission.service';

const service = new PermissionService();

export class PermissionController {
  async createPermission(request: FastifyRequest, reply: FastifyReply) {
    const permission = await service.createPermission(request.body as any);

    return reply.code(201).send(permission);
  }

  async getPermissions(request: FastifyRequest, reply: FastifyReply) {
    const permissions = await service.getPermissions();

    return reply.send(permissions);
  }

  async getPermissionById(
    request: FastifyRequest<{
      Params: { id: string };
    }>,
    reply: FastifyReply,
  ) {
    const permission = await service.getPermissionById(Number(request.params.id));

    return reply.send(permission);
  }

  async updatePermission(
    request: FastifyRequest<{
      Params: { id: string };
    }>,
    reply: FastifyReply,
  ) {
    const permission = await service.updatePermission(
      Number(request.params.id),
      request.body as any,
    );

    return reply.send(permission);
  }

  async deletePermission(
    request: FastifyRequest<{
      Params: { id: string };
    }>,
    reply: FastifyReply,
  ) {
    await service.deletePermission(Number(request.params.id));

    return reply.code(204).send();
  }
}
