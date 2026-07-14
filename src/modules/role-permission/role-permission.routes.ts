import { FastifyInstance } from 'fastify';
import { RolePermissionController } from './role-permission.controller';

const controller = new RolePermissionController();

export async function rolePermissionRoutes(app: FastifyInstance) {
  app.post('/roles/:roleId/permissions', controller.assignPermission);

  app.get('/roles/:roleId/permissions', controller.getPermissions);

  app.delete('/roles/:roleId/permissions/:permissionId', controller.removePermission);
}
