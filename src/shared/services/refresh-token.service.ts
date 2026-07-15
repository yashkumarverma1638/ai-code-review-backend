import { redis } from '../redis';

export class RefreshTokenService {
  async save(userId: number, token: string) {
    await redis.set(`refresh:${userId}`, token, 'EX', 60 * 60 * 24 * 7);
  }

  async get(userId: number) {
    return redis.get(`refresh:${userId}`);
  }

  async delete(userId: number) {
    return redis.del(`refresh:${userId}`);
  }
}
