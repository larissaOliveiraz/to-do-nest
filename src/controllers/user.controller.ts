import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from 'dto/user.dto';
import { CreateUserService } from 'services/create-user.service';

@Controller()
export class UserController {
  constructor(private readonly createUserService: CreateUserService) {}

  @Post('/users')
  async create(@Body() data: CreateUserDTO) {
    await this.createUserService.execute(data);
  }
}
