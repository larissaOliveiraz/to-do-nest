import { Prisma, User } from '@prisma/client';
import { randomUUID } from 'node:crypto';
import { IUserRepository } from '../user.repository';

export class UserMemoryRepository implements IUserRepository {
  users: User[] = [];

  async findById(id: string) {
    const user = this.users.find((item) => item.id === id);

    return user ? user : null;
  }

  async findUserByUsernameOrEmail(username: string, email: string) {
    const user = this.users.find(
      (item) => item.username === username || item.email === email,
    );

    return user ? user : null;
  }

  async findByUsername(username: string) {
    const user = this.users.find((item) => item.username === username);

    return user ? user : null;
  }

  async create(data: Prisma.UserCreateInput) {
    const user: User = {
      id: data.id ? data.id : randomUUID(),
      name: data.name,
      username: data.username,
      email: data.email,
      password: data.password,
      created_at: new Date(),
    };

    this.users.push(user);

    return user;
  }
}
