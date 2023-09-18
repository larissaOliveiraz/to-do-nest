import { Injectable } from '@nestjs/common';
import { hash } from 'bcryptjs';
import { CreateUserDTO } from 'dto/user.dto';
import { UserAlreadyExistsError } from 'errors/UserAlreadyExistsError';
import { IUserRepository } from 'repositories/user.repository';

@Injectable()
export class CreateUserService {
  constructor(private userRepository: IUserRepository) {}

  async execute({ name, username, email, password }: CreateUserDTO) {
    const user = await this.userRepository.findUserByUsernameOrEmail(
      username,
      email,
    );
    if (user) {
      throw new UserAlreadyExistsError();
    }

    const passwordHash = await hash(password, 6);

    const newUser = await this.userRepository.create({
      name,
      username,
      email,
      password: passwordHash,
    });

    return { user: newUser };
  }
}
