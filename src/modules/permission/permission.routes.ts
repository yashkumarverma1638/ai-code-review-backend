import { FastifyInstance } from 'fastify';
import { PermissionController } from './permission.controller';

const controller = new PermissionController();

export async function permissionRoutes(app: FastifyInstance) {
  app.post('/permissions', controller.createPermission);

  app.get('/permissions', controller.getPermissions);

  app.get('/permissions/:id', controller.getPermissionById);

  app.patch('/permissions/:id', controller.updatePermission);

  app.delete('/permissions/:id', controller.deletePermission);
}
