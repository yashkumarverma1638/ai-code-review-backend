export interface UpdateCompanyDto {
  name?: string;
  slug?: string;
  plan?: 'FREE' | 'PRO' | 'ENTERPRISE';
  status?: 'ACTIVE' | 'INACTIVE';
}
