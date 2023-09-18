import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO, SignInDTO } from 'dto/user.dto';
import { CreateUserService } from 'services/create-user.service';
import { SignInUserService } from 'services/sign-in-user.service';

@Controller()
export class UserController {
  constructor(
    private readonly createUserService: CreateUserService,
    private readonly SignInUserService: SignInUserService,
  ) {}

  @Post('/users')
  async create(@Body() data: CreateUserDTO) {
    await this.createUserService.execute(data);
  }

  @Post('/sign-in')
  async signIn(@Body() data: SignInDTO) {
    const token = await this.SignInUserService.execute(data);
    return token;
  }
}
