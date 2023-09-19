import { Test } from '@nestjs/testing';
import { UserController } from '../user.controller';
import { CreateUserService } from '../../services/users/create-user.service';
import { IUserRepository } from '../../repositories/user.repository';
import { UserPrismaRepository } from '../../repositories/prisma/user-prisma.repository';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from '../../database/prisma';
import { SignInUserService } from '../../services/users/sign-in-user.service';
import { ProfileUserService } from '../../services/users/profile-user.service';

describe('User Controller', () => {
  let controller: UserController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [JwtModule],
      controllers: [UserController],
      providers: [
        PrismaService,
        CreateUserService,
        SignInUserService,
        ProfileUserService,
        {
          provide: IUserRepository,
          useClass: UserPrismaRepository,
        },
      ],
    }).compile();

    controller = moduleRef.get<UserController>(UserController);
  });

  it('should be able to create user', async () => {
    const { profile } = await controller.create({
      name: 'E2E',
      username: 'name_test',
      email: 'e2e@test.com',
      password: 'e2e123',
    });

    expect(profile.id).toEqual(expect.any(String));
  });
});
