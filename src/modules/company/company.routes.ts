import { FastifyInstance } from 'fastify';
import { CompanyController } from './company.controller';
const controller = new CompanyController();

export async function companyRoutes(app: FastifyInstance) {
  app.post('/companies', controller.createCompany);

  app.get('/companies', controller.getCompanies);

  app.get('/companies/:id', controller.getCompanyById);

  app.patch('/companies/:id', controller.updateCompany);

  app.delete('/companies/:id', controller.deleteCompany);
}
