import { RoleRepository } from './role.repository';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

export class RoleService {
  constructor(private repository = new RoleRepository()) {}

  async createRole(data: CreateRoleDto) {
    const role = await this.repository.findByName(data.name);

    if (role) {
      throw new Error('Role already exists.');
    }

    return this.repository.create(data);
  }

  async getRoles() {
    return this.repository.findAll();
  }

  async getRoleById(id: number) {
    return this.repository.findById(id);
  }

  async updateRole(id: number, data: UpdateRoleDto) {
    return this.repository.update(id, data);
  }

  async deleteRole(id: number) {
    return this.repository.delete(id);
  }
}
