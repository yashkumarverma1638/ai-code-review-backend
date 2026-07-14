import bcrypt from 'bcrypt';
import { AuthRepository } from './auth.repository';
import { RegisterDto } from './dto/register.dto';

export class AuthService {
  constructor(private repository = new AuthRepository()) {}

  async register(data: RegisterDto) {
    const existingUser = await this.repository.findByEmail(data.email);

    if (existingUser) {
      throw new Error('Email already exists');
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    return this.repository.create({
      ...data,
      password: hashedPassword,
    });
  }
}
