import { prisma } from '../../shared/prisma';
import { RegisterDto } from './dto/register.dto';

export class AuthRepository {
  async findByEmail(email: string) {
    return prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  async create(data: RegisterDto) {
    return prisma.user.create({
      data,
    });
  }
}
