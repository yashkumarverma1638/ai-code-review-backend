import { prisma } from '../../shared/prisma';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

export class CompanyRepository {
  async create(data: CreateCompanyDto) {
    return prisma.company.create({
      data,
    });
  }

  async findAll() {
    return prisma.company.findMany();
  }

  async findById(id: number) {
    return prisma.company.findUnique({
      where: {
        id,
      },
    });
  }

  async findBySlug(slug: string) {
    return prisma.company.findUnique({
      where: {
        slug,
      },
    });
  }

  async update(id: number, data: UpdateCompanyDto) {
    return prisma.company.update({
      where: {
        id,
      },
      data,
    });
  }

  async delete(id: number) {
    return prisma.company.delete({
      where: {
        id,
      },
    });
  }
}
