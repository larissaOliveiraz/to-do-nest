import { User, Prisma } from '@prisma/client';

export abstract class IUserRepository {
  abstract findUserByUsernameOrEmail(
    username: string,
    email: string,
  ): Promise<User | null>;
  abstract findByUsername(username: string): Promise<User | null>;
  abstract create(data: Prisma.UserCreateInput): Promise<User>;
}
