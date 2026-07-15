import bcrypt from 'bcrypt';
import { AuthRepository } from './auth.repository';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '../../shared/services/jwt.service';
import { RefreshTokenService } from '../../shared/services/refresh-token.service';

export class AuthService {
  private repository = new AuthRepository();
  private jwtService = new JwtService();
  private refreshService = new RefreshTokenService();

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

    const payload = {
      userId: user.id,
      companyId: user.companyId,
      roleId: user.roleId,
    };

    const accessToken = this.jwtService.generateAccessToken(payload);

    const refreshToken = this.jwtService.generateRefreshToken(payload);
    const refreshService = new RefreshTokenService();

    await refreshService.save(user.id, refreshToken);

    return {
      accessToken,
      refreshToken,
      user,
    };
  }
  async refresh(refreshToken: string) {
    // 1. Verify JWT
    const payload = this.jwtService.verifyToken(refreshToken);

    // 2. Check Redis
    const savedToken = await this.refreshService.get(payload.userId);

    if (!savedToken) {
      throw new Error('Refresh token not found');
    }

    // 3. Compare token
    if (savedToken !== refreshToken) {
      throw new Error('Invalid refresh token');
    }

    // 4. Generate new access token
    const accessToken = this.jwtService.generateAccessToken({
      userId: payload.userId,
      companyId: payload.companyId,
      roleId: payload.roleId,
    });

    return {
      accessToken,
    };
  }
}
