import { CompanyRepository } from './company.repository';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

export class CompanyService {
  constructor(private repository = new CompanyRepository()) {}

  async createCompany(data: CreateCompanyDto) {
    const company = await this.repository.findBySlug(data.slug);

    if (company) {
      throw new Error('Company slug already exists.');
    }

    return this.repository.create(data);
  }

  async getCompanies() {
    return this.repository.findAll();
  }

  async getCompanyById(id: number) {
    return this.repository.findById(id);
  }

  async updateCompany(id: number, data: UpdateCompanyDto) {
    return this.repository.update(id, data);
  }

  async deleteCompany(id: number) {
    return this.repository.delete(id);
  }
}
