import { FastifyReply, FastifyRequest } from 'fastify';
import { CompanyService } from './company.service';

const service = new CompanyService();

export class CompanyController {
  async createCompany(request: FastifyRequest, reply: FastifyReply) {
    const company = await service.createCompany(request.body as any);

    return reply.code(201).send(company);
  }

  async getCompanies(request: FastifyRequest, reply: FastifyReply) {
    const companies = await service.getCompanies();

    return reply.send(companies);
  }

  async getCompanyById(request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) {
    const company = await service.getCompanyById(Number(request.params.id));

    return reply.send(company);
  }

  async updateCompany(
    request: FastifyRequest<{
      Params: { id: string };
    }>,
    reply: FastifyReply,
  ) {
    const company = await service.updateCompany(Number(request.params.id), request.body as any);

    return reply.send(company);
  }

  async deleteCompany(
    request: FastifyRequest<{
      Params: { id: string };
    }>,
    reply: FastifyReply,
  ) {
    await service.deleteCompany(Number(request.params.id));

    return reply.code(204).send();
  }
}
