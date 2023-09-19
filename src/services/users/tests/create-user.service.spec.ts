import { Test } from '@nestjs/testing';
import { CreateUserService } from '../create-user.service';
import { IUserRepository } from '../../../repositories/user.repository';
import { UserMemoryRepository } from '../../../repositories/in-memory/user-memory.repository';
import { UserAlreadyExistsError } from '../../../errors/UserAlreadyExistsError';

describe('Create User Service', () => {
  let service: CreateUserService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        CreateUserService,
        {
          provide: IUserRepository,
          useClass: UserMemoryRepository,
        },
      ],
    }).compile();

    service = moduleRef.get<CreateUserService>(CreateUserService);
  });

  it('should be able to create user', async () => {
    const newUser = {
      name: 'Unit',
      username: 'unit_test',
      email: 'unit@example.com',
      password: 'unit123',
    };

    const { user } = await service.execute(newUser);

    expect(user.id).toEqual(expect.any(String));
  });

  it('should not be able to create user if username or email already exists', async () => {
    const newUser = {
      name: 'Unit',
      username: 'unit_test',
      email: 'unit@example.com',
      password: 'unit123',
    };

    await service.execute(newUser);

    await expect(() => service.execute(newUser)).rejects.toBeInstanceOf(
      UserAlreadyExistsError,
    );
  });
});
