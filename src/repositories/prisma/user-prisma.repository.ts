import { Prisma } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'database/prisma';
import { IUserRepository } from 'repositories/user.repository';

@Injectable()
export class UserPrismaRepository implements IUserRepository {
  constructor(private prisma: PrismaService) {}

  async findById(id: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    return user ? user : null;
  }

  async findUserByUsernameOrEmail(username: string, email: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        OR: [{ username: username }, { email: email }],
      },
    });

    return user ? user : null;
  }

  async findByUsername(username: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        username,
      },
    });

    return user ? user : null;
  }

  async create(data: Prisma.UserCreateInput) {
    const user = await this.prisma.user.create({
      data,
    });

    return user;
  }
}
