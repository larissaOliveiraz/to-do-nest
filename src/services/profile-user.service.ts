import { Injectable } from '@nestjs/common';
import { IUserRepository } from 'repositories/user.repository';

@Injectable()
export class ProfileUserService {
  constructor(private userRepository: IUserRepository) {}

  async execute(id: string) {
    const user = await this.userRepository.findById(id);

    return { user };
  }
}
