import { Module } from '@nestjs/common';
import { UserController } from 'src/controllers/user.controller';
import { PrismaService } from 'src/database/prisma';
import { UserPrismaRepository } from 'src/repositories/prisma/user-prisma.repository';
import { IUserRepository } from 'src/repositories/user.repository';
import { CreateUserService } from 'src/services/create-user.service';

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
