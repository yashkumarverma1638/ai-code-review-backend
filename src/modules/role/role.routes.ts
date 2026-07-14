import { FastifyInstance } from 'fastify';
import { RoleController } from './role.controller';

const controller = new RoleController();

export async function roleRoutes(app: FastifyInstance) {
  app.post('/roles', controller.createRole);

  app.get('/roles', controller.getRoles);

  app.get('/roles/:id', controller.getRoleById);

  app.patch('/roles/:id', controller.updateRole);

  app.delete('/roles/:id', controller.deleteRole);
}
