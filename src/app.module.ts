import { Module } from '@nestjs/common';
import { AuthModul } from './auth/auth.modul';
import { UserModule } from './user/user.module';
import { BookmartModule } from './bookmart/bookmart.module';

@Module({
  imports: [AuthModul, UserModule, BookmartModule],
})
export class AppModule {}
