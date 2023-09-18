import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserController } from 'controllers/user.controller';
import { PrismaService } from 'database/prisma';
import { UserPrismaRepository } from 'repositories/prisma/user-prisma.repository';
import { IUserRepository } from 'repositories/user.repository';
import { CreateUserService } from 'services/create-user.service';
import { SignInUserService } from 'services/sign-in-user.service';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: 'senha',
      signOptions: { expiresIn: '8h' },
    }),
  ],
  controllers: [UserController],
  providers: [
    CreateUserService,
    SignInUserService,
    PrismaService,
    {
      provide: IUserRepository,
      useClass: UserPrismaRepository,
    },
  ],
})
export class UserModule {}
