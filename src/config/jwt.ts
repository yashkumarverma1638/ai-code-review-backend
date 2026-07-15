import type { Secret, SignOptions } from 'jsonwebtoken';

export const jwtConfig: {
  secret: Secret;
  accessTokenExpiresIn: SignOptions['expiresIn'];
  refreshTokenExpiresIn: SignOptions['expiresIn'];
} = {
  secret: process.env.JWT_SECRET as Secret,
  accessTokenExpiresIn: '15m',
  refreshTokenExpiresIn: '7d',
};
