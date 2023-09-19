import { ProfileUserService } from '../profile-user.service';
import { UserMemoryRepository } from '../../../repositories/in-memory/user-memory.repository';
import { UserNotFoundError } from '../../../errors/UserNotFoundError';

let service: ProfileUserService;
let repository: UserMemoryRepository;

describe('Profile User Service', () => {
  beforeEach(async () => {
    repository = new UserMemoryRepository();
    service = new ProfileUserService(repository);
  });

  it('should be able to get user profile information', async () => {
    const newuUser = await repository.create({
      id: 'user-01',
      name: 'Unit',
      username: 'unit_test',
      email: 'unit@test.com',
      password: 'unit123',
    });

    const { user } = await service.execute(newuUser.id);

    expect(user.id).toEqual('user-01');
  });

  it('should not be able to get user profile information with nonexistent id', async () => {
    await expect(() =>
      service.execute('nonexistent-id'),
    ).rejects.toBeInstanceOf(UserNotFoundError);
  });
});
