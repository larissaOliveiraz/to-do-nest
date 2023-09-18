import { Module } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { UserModule } from 'modules/user.module';
import { ZodValidationPipe } from 'nestjs-zod';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
  ],
})
export class AppModule {}
