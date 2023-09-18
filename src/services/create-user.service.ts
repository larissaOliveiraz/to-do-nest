import { Injectable } from '@nestjs/common';
import { hash } from 'bcryptjs';
import { CreateUserDTO } from 'src/dto/user.dto';
import { UserAlreadyExistsError } from 'src/errors/UserAlreadyExistsError';
import { IUserRepository } from 'src/repositories/user.repository';

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

    return await this.userRepository.create({
      name,
      username,
      email,
      password: passwordHash,
    });
  }
}
