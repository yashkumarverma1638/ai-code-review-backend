import { FastifyReply, FastifyRequest } from 'fastify';

import { RolePermissionService } from './role-permission.service';

const service = new RolePermissionService();

export class RolePermissionController {
  async assignPermission(
    request: FastifyRequest<{
      Params: { roleId: string };

      Body: { permissionId: number };
    }>,

    reply: FastifyReply,
  ) {
    const result = await service.assignPermission(
      Number(request.params.roleId),

      request.body.permissionId,
    );

    return reply.code(201).send(result);
  }

  async getPermissions(
    request: FastifyRequest<{
      Params: { roleId: string };
    }>,

    reply: FastifyReply,
  ) {
    const result = await service.getPermissions(Number(request.params.roleId));

    return reply.send(result);
  }

  async removePermission(
    request: FastifyRequest<{
      Params: {
        roleId: string;

        permissionId: string;
      };
    }>,

    reply: FastifyReply,
  ) {
    await service.removePermission(
      Number(request.params.roleId),

      Number(request.params.permissionId),
    );

    return reply.code(204).send();
  }
}
