import { prisma } from '../../shared/prisma';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';

export class PermissionRepository {
  async create(data: CreatePermissionDto) {
    return prisma.permission.create({
      data,
    });
  }

  async findAll() {
    return prisma.permission.findMany();
  }

  async findById(id: number) {
    return prisma.permission.findUnique({
      where: {
        id,
      },
    });
  }

  async findByName(name: string) {
    return prisma.permission.findUnique({
      where: {
        name,
      },
    });
  }

  async update(id: number, data: UpdatePermissionDto) {
    return prisma.permission.update({
      where: {
        id,
      },
      data,
    });
  }

  async delete(id: number) {
    return prisma.permission.delete({
      where: {
        id,
      },
    });
  }
}
