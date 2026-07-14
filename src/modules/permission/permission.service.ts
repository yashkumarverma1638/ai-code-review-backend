import { PermissionRepository } from './permission.repository';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';

export class PermissionService {
  constructor(private repository = new PermissionRepository()) {}

  async createPermission(data: CreatePermissionDto) {
    const permission = await this.repository.findByName(data.name);

    if (permission) {
      throw new Error('Permission already exists.');
    }

    return this.repository.create(data);
  }

  async getPermissions() {
    return this.repository.findAll();
  }

  async getPermissionById(id: number) {
    return this.repository.findById(id);
  }

  async updatePermission(id: number, data: UpdatePermissionDto) {
    return this.repository.update(id, data);
  }

  async deletePermission(id: number) {
    return this.repository.delete(id);
  }
}
