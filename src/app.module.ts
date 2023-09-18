import { Module } from '@nestjs/common';
import { UserModule } from 'src/modules/user.module';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
