import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CreateUserDTO, SignInDTO } from 'dto/user.dto';
import { AuthGuard } from 'guard/auth.guard';
import { CreateUserService } from 'services/create-user.service';
import { SignInUserService } from 'services/sign-in-user.service';

@Controller('/users')
export class UserController {
  constructor(
    private readonly createUserService: CreateUserService,
    private readonly SignInUserService: SignInUserService,
  ) {}

  @Post()
  async create(@Body() data: CreateUserDTO) {
    await this.createUserService.execute(data);
  }

  @Post('/sign-in')
  async signIn(@Body() data: SignInDTO) {
    const token = await this.SignInUserService.execute(data);
    return token;
  }

  @Get('/profile')
  @UseGuards(AuthGuard)
  async profile() {}
}
