import { Module } from '@nestjs/common';
import { UserController } from 'controllers/user.controller';
import { PrismaService } from 'database/prisma';
import { UserPrismaRepository } from 'repositories/prisma/user-prisma.repository';
import { IUserRepository } from 'repositories/user.repository';
import { CreateUserService } from 'services/create-user.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    CreateUserService,
    PrismaService,
    {
      provide: IUserRepository,
      useClass: UserPrismaRepository,
    },
  ],
})
export class UserModule {}
