import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs';
import { SignInDTO } from 'dto/user.dto';
import { IUserRepository } from 'repositories/user.repository';
import { InvalidCredentialsError } from 'errors/InvalidCredentialsError';

@Injectable()
export class SignInUserService {
  constructor(
    private jwtService: JwtService,
    private userRepository: IUserRepository,
  ) {}

  async execute({ username, password }: SignInDTO) {
    const user = await this.userRepository.findByUsername(username);
    if (!user) {
      throw new InvalidCredentialsError();
    }

    const passwordIsCorrect = await compare(password, user.password);
    if (!passwordIsCorrect) {
      throw new InvalidCredentialsError();
    }

    const payload = {
      sub: user.id,
      username: user.username,
    };

    const token = await this.jwtService.signAsync(payload);

    return { token };
  }
}
