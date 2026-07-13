export interface CreateCompanyDto {
  name: string;
  slug: string;
  plan: 'FREE' | 'PRO' | 'ENTERPRISE';
  status?: 'ACTIVE' | 'INACTIVE';
}
