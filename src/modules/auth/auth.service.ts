import bcrypt from 'bcrypt';
import { AuthRepository } from './auth.repository';
import { RegisterDto } from './dto/register.dto';
import jwt from 'jsonwebtoken';
import { LoginDto } from './dto/login.dto';

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
  async login(data: LoginDto) {
    const user = await this.repository.findByEmail(data.email);

    if (!user) {
      throw new Error('Invalid email or password');
    }

    const passwordMatched = await bcrypt.compare(data.password, user.password);

    if (!passwordMatched) {
      throw new Error('Invalid email or password');
    }

    const accessToken = jwt.sign(
      {
        userId: user.id,
        companyId: user.companyId,
        roleId: user.roleId,
      },
      process.env.JWT_SECRET!,
      {
        expiresIn: '15m',
      },
    );

    const refreshToken = jwt.sign(
      {
        userId: user.id,
      },
      process.env.JWT_SECRET!,
      {
        expiresIn: '7d',
      },
    );

    return {
      accessToken,
      refreshToken,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        company: user.company,
        role: user.role,
      },
    };
  }
}
