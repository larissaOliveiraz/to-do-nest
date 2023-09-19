import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserController } from 'controllers/user.controller';
import { PrismaService } from 'database/prisma';
import { UserPrismaRepository } from 'repositories/prisma/user-prisma.repository';
import { IUserRepository } from 'repositories/user.repository';
import { CreateUserService } from 'services/users/create-user.service';
import { ProfileUserService } from 'services/users/profile-user.service';
import { SignInUserService } from 'services/users/sign-in-user.service';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: 'senha',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [UserController],
  providers: [
    CreateUserService,
    SignInUserService,
    ProfileUserService,
    PrismaService,
    {
      provide: IUserRepository,
      useClass: UserPrismaRepository,
    },
  ],
})
export class UserModule {}
