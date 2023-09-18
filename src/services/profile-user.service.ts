import { UserNotFoundError } from 'errors/UserNotFoundError';
import { IUserRepository } from 'repositories/user.repository';

export class ProfileUserService {
  constructor(private userRepository: IUserRepository) {}

  async execute(id: string) {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new UserNotFoundError();
    }

    return { user };
  }
}
