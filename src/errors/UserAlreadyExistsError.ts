import { HttpException, HttpStatus } from '@nestjs/common';

export class UserAlreadyExistsError extends HttpException {
  constructor(field?: string) {
    let message: string;
    if (field) {
      message = `User with this ${field} already exists.`;
    } else {
      message = 'User already exists.';
    }
    super(message, HttpStatus.BAD_REQUEST);
  }
}
