import jwt from 'jsonwebtoken';
import { jwtConfig } from '../../config/jwt';

export interface JwtPayload {
  userId: number;
  companyId: number;
  roleId: number;
}

export class JwtService {
  generateAccessToken(payload: JwtPayload): string {
    return jwt.sign(payload, jwtConfig.secret, {
      expiresIn: jwtConfig.accessTokenExpiresIn,
    });
  }

  generateRefreshToken(payload: JwtPayload): string {
    return jwt.sign(payload, jwtConfig.secret, {
      expiresIn: jwtConfig.refreshTokenExpiresIn,
    });
  }

  verifyToken(token: string): JwtPayload {
    return jwt.verify(token, jwtConfig.secret) as JwtPayload;
  }
}
