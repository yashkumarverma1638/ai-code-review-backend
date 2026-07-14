import { prisma } from '../../shared/prisma';

export class RolePermissionRepository {
  async assign(roleId: number, permissionId: number) {
    return prisma.rolePermission.create({
      data: {
        roleId,

        permissionId,
      },
    });
  }

  async getPermissions(roleId: number) {
    return prisma.rolePermission.findMany({
      where: {
        roleId,
      },

      include: {
        permission: true,
      },
    });
  }

  async remove(roleId: number, permissionId: number) {
    return prisma.rolePermission.delete({
      where: {
        roleId_permissionId: {
          roleId,

          permissionId,
        },
      },
    });
  }
}
