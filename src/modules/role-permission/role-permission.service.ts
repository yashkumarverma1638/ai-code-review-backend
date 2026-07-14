import { RolePermissionRepository } from './role-permission.repository';

export class RolePermissionService {
  constructor(private repository = new RolePermissionRepository()) {}

  async assignPermission(
    roleId: number,

    permissionId: number,
  ) {
    return this.repository.assign(
      roleId,

      permissionId,
    );
  }

  async getPermissions(roleId: number) {
    return this.repository.getPermissions(roleId);
  }

  async removePermission(
    roleId: number,

    permissionId: number,
  ) {
    return this.repository.remove(
      roleId,

      permissionId,
    );
  }
}
