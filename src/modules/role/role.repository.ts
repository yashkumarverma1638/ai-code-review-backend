import { prisma } from '../../shared/prisma';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

export class RoleRepository {
  async create(data: CreateRoleDto) {
    return prisma.role.create({
      data,
    });
  }

  async findAll() {
    return prisma.role.findMany();
  }

  async findById(id: number) {
    return prisma.role.findUnique({
      where: {
        id,
      },
    });
  }

  async findByName(name: string) {
    return prisma.role.findFirst({
      where: {
        name,
      },
    });
  }

  async update(id: number, data: UpdateRoleDto) {
    return prisma.role.update({
      where: {
        id,
      },
      data,
    });
  }

  async delete(id: number) {
    return prisma.role.delete({
      where: {
        id,
      },
    });
  }
}
