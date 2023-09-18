import { HttpException, HttpStatus } from '@nestjs/common';

export class InvalidCredentialsError extends HttpException {
  constructor() {
    super('Invalid username and/or password.', HttpStatus.BAD_REQUEST);
  }
}
